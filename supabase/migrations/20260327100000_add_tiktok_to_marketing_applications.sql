-- Add tiktok column to marketing_applications
-- Marketing interns now use Instagram + TikTok instead of GitHub
alter table marketing_applications add column if not exists tiktok text;
