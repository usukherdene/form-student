# Astra

## Install

```sh
npm install react-hook-form @hookform/resolvers zod lucide-react @vercel/blob server-only class-variance-authority clsx tailwind-merge @radix-ui/react-slot @radix-ui/react-label @radix-ui/react-popover react-day-picker date-fns sonner
npx shadcn@latest add form input button label card progress popover calendar sonner skeleton
```

The included UI components are customized. Keep them when the CLI asks to overwrite.

## Run

1. `cp .env.example .env.local` and fill in BLOB_READ_WRITE_TOKEN from a private Vercel Blob store.
2. `npm run dev`
3. Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

Submission stores the image under `profile-images/<id>` and a private JSON record under `registrations/<id>.json`. The record contains profile details and the image route. Anyone with the image route can view that image. Password fields stay in the browser.
