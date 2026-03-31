-- Careers apply form targets these tables (see ApplyPage.tsx). The original
-- migration only created job_applications; without these, inserts return 400.

create table if not exists frontend_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text not null,
  name text not null,
  email text not null,
  linkedin text,
  portfolio text,
  message text not null,
  uses_canva text,
  twitter text,
  github text,
  instagram text,
  tiktok text,
  heard_from text,
  resume_url text
);

alter table frontend_applications enable row level security;

drop policy if exists "Allow anonymous inserts" on frontend_applications;
create policy "Allow anonymous inserts" on frontend_applications
  for insert to anon with check (true);

create table if not exists marketing_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text not null,
  name text not null,
  email text not null,
  linkedin text,
  portfolio text,
  message text not null,
  uses_canva text,
  twitter text,
  github text,
  instagram text,
  tiktok text,
  heard_from text,
  resume_url text
);

alter table marketing_applications enable row level security;

drop policy if exists "Allow anonymous inserts" on marketing_applications;
create policy "Allow anonymous inserts" on marketing_applications
  for insert to anon with check (true);
