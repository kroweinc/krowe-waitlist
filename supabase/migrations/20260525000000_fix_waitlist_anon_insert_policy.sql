/*
  # Fix waitlist anon insert policy

  The live database is rejecting anonymous inserts with RLS error 42501,
  which means the "Anyone can join waitlist" policy from the original
  create_waitlist_table migrations is not present on the project.

  This migration is idempotent: it ensures RLS is enabled and (re)creates
  the INSERT policy for the anon role. Safe to run multiple times.
*/

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can join waitlist" ON waitlist;

CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);
