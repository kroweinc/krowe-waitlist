/**
 * Download all PDF resumes submitted for the Frontend / UI & UX Intern role
 * from Supabase Storage (bucket `resumes`, folder derived from the job title).
 *
 * Usage (from repo root, with .env containing VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY):
 *   node --env-file=.env scripts/export-frontend-resumes.mjs
 *
 * Optional:
 *   OUT_DIR=./exports/frontend-resumes node --env-file=.env scripts/export-frontend-resumes.mjs
 *   PREFIX=Frontend___UI___UX_Intern  (must match ApplyPage: role.replace(/[^a-z0-9]/gi, '_'))
 */

import { createClient } from '@supabase/supabase-js';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const url = process.env.VITE_SUPABASE_URL;
const key = process.env.VITE_SUPABASE_ANON_KEY;
const prefix = process.env.PREFIX ?? 'Frontend___UI___UX_Intern';
const outDir = process.env.OUT_DIR ?? join(root, 'exports', 'frontend-resumes');

if (!url || !key) {
  console.error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY (load via --env-file=.env).');
  process.exit(1);
}

const supabase = createClient(url, key);
const BUCKET = 'resumes';
const PAGE = 500;

async function listAll(prefixPath) {
  const all = [];
  let offset = 0;
  for (;;) {
    const { data, error } = await supabase.storage.from(BUCKET).list(prefixPath, {
      limit: PAGE,
      offset,
      sortBy: { column: 'name', order: 'asc' },
    });
    if (error) throw error;
    if (!data?.length) break;
    for (const obj of data) {
      if (!obj.name) continue;
      // Apply form stores PDFs directly under prefix (no nested folders)
      all.push(`${prefixPath}/${obj.name}`);
    }
    if (data.length < PAGE) break;
    offset += PAGE;
  }
  return all;
}

async function main() {
  const paths = await listAll(prefix);
  const files = paths.filter((p) => p.endsWith('.pdf'));

  if (files.length === 0) {
    console.log(`No PDFs found under "${prefix}/". Check PREFIX or Supabase Storage.`);
    return;
  }

  await mkdir(outDir, { recursive: true });
  console.log(`Downloading ${files.length} file(s) → ${outDir}`);

  let ok = 0;
  for (const path of files) {
    const { data, error } = await supabase.storage.from(BUCKET).download(path);
    if (error) {
      console.error(`FAIL ${path}:`, error.message);
      continue;
    }
    const buf = Buffer.from(await data.arrayBuffer());
    const base = path.split('/').pop();
    const dest = join(outDir, base);
    await writeFile(dest, buf);
    console.log(`OK   ${base}`);
    ok += 1;
  }

  console.log(`Done: ${ok}/${files.length} saved.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
