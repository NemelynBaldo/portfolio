# Minimal Artist Portfolio (React + Vite + Tailwind + shadcn-style UI)

Pure black & white minimalist portfolio with smooth theme flipping, elegant motion, and a clean grid. Built with Vite + React + TypeScript, TailwindCSS, Framer Motion, and lightweight shadcn-style components.

## Features
- Monochrome theme with animated light/dark flip (persisted in localStorage)
- Sections: Home, About, Projects, Contact
- Smooth scrolling (Lenis), entrance animations (Framer Motion)
- shadcn-style UI components (Button, Card, Badge, Input, Textarea, Switch, Dialog, Tooltip, Separator)
- Contact form with react-hook-form + zod validation
- Responsive, accessible, minimal

## Getting Started

Prerequisites:
- Node.js 18+ and npm

Install and run (Windows PowerShell):

```powershell
# from the project root
npm install
npm run dev
```

Build and preview:

```powershell
npm run build
npm run preview
```

## Environment Variables (optional Unsplash)
Create a `.env` file in the project root if you want to use Unsplash:

```
VITE_UNSPLASH_ACCESS_KEY=YOUR_ACCESS_KEY
```

If not set, the app will gracefully fallback to local placeholder assets.

## Deploy
You can deploy to Vercel or Netlify without changes. For Vercel, import the repo and use the default Vite preset. For Netlify, set the build command to `npm run build` and publish directory to `dist`.

## License
MIT