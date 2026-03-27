-- Add resume_url column to both application tables
ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS resume_url text;
ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS resume_url text;

-- Create resumes storage bucket (idempotent via DO block)
DO $$
BEGIN
  INSERT INTO storage.buckets (id, name, public)
  VALUES ('resumes', 'resumes', false)
  ON CONFLICT (id) DO NOTHING;
END $$;

-- Allow anonymous users to upload to the resumes bucket
CREATE POLICY "Allow resume uploads"
ON storage.objects FOR INSERT
TO anon
WITH CHECK (bucket_id = 'resumes');

-- Allow anonymous users to read their own uploads (needed to get URL after upload)
CREATE POLICY "Allow resume reads"
ON storage.objects FOR SELECT
TO anon
USING (bucket_id = 'resumes');
