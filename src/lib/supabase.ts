import { createClient } from '@supabase/supabase-js';
import type { SearchOptions } from '@supabase/storage-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** Default page size for `storage.from(...).list()` (SDK default is 100). */
export const STORAGE_LIST_LIMIT = 500;

/** List objects in a bucket folder with a 500-item page size unless you override `limit`. */
export function listStorageObjects(
  bucket: string,
  path = '',
  options?: SearchOptions
) {
  return supabase.storage.from(bucket).list(path, {
    limit: STORAGE_LIST_LIMIT,
    ...options,
  });
}
