# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Development server (Vite)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint
npm run typecheck # TypeScript type checking (tsc --noEmit)
```

## Architecture

Single-page React 18 + Vite + TypeScript landing page for the Krowe waitlist.

**Page layout** (`src/App.tsx`): Single-page app with anchored sections (`#home`, `#features`, `#why-krowe`, `#faq`) — Navbar, Hero, Features ("How it works"), Benefits, FAQ, Footer. All sections receive `onJoinWaitlist` to open the modal.

**Waitlist flow**: `onJoinWaitlist` in `App.tsx` sets `waitlistOpen = true`, which opens `WaitlistModal` (Radix UI Dialog). The modal collects email, startup status, and referral source, then inserts into the Supabase `waitlist` table. Duplicate emails are caught via Postgres unique constraint (error code `23505`).

**Supabase** (`src/lib/supabase.ts`): Client initialized from `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. The `waitlist` table has RLS enabled — anonymous inserts allowed, authenticated-only selects.

**Styling**: Tailwind CSS 3 with custom utilities in `src/index.css` (`.glass`, `.glass-panel`, `.blueprint-grid`, `.glow-line`, `.mask-fade`, `.ticker-animate`). UI primitives are in `src/components/ui/` (shadcn/ui pattern using `class-variance-authority` + `tailwind-merge`).

**Animations**: Framer Motion is available but used selectively per component.

## Environment Variables

```
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
```

## Database

Migration at `supabase/migrations/20251114184639_create_waitlist_table.sql`. The `waitlist` table added columns `has_idea` and `heard_from` / `heard_from_other` after initial migration (these are inserted in the modal but not in the original SQL — they must exist in the live DB).
