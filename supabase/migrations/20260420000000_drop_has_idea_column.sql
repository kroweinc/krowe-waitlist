/*
  # Drop has_idea column from waitlist

  The "Do you have a startup?" question was removed from the signup modal.
  This drops the now-unused column.
*/

ALTER TABLE waitlist
  DROP COLUMN IF EXISTS has_idea;
