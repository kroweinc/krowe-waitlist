-- Align existing marketing_applications / frontend_applications with ApplyPage.tsx
-- (older DBs may omit instagram, portfolio, heard_from, etc.)

DO $$
BEGIN
  IF to_regclass('public.marketing_applications') IS NOT NULL THEN
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS linkedin text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS portfolio text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS uses_canva text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS twitter text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS github text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS instagram text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS tiktok text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS heard_from text;
    ALTER TABLE marketing_applications ADD COLUMN IF NOT EXISTS resume_url text;
  END IF;

  IF to_regclass('public.frontend_applications') IS NOT NULL THEN
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS linkedin text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS portfolio text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS uses_canva text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS twitter text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS github text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS instagram text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS tiktok text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS heard_from text;
    ALTER TABLE frontend_applications ADD COLUMN IF NOT EXISTS resume_url text;
  END IF;
END $$;
