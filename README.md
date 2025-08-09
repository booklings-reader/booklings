# Booklings

Premium reading companion app that helps you track books, take notes, and connect with fellow readers.

## Tech Stack
- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (Auth + Database)
- React Router + TanStack Query

## Local setup
1. Create `.env` from example:
```
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```
2. Install and run:
```
npm install
npm run dev
```
Open http://localhost:8080

## Build & Preview
```
npm run build
npm run preview
```

## Database
Run SQL in `supabase/migrations/` in order to create tables and policies.

## License
All rights reserved.
