create table if not exists job_applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  role text not null,
  name text not null,
  email text not null,
  linkedin_or_portfolio text,
  message text not null,
  uses_canva text,
  twitter text,
  instagram text,
  github text
);

-- RLS
alter table job_applications enable row level security;

-- Allow anonymous inserts (same pattern as waitlist)
create policy "Allow anonymous inserts" on job_applications
  for insert to anon with check (true);
