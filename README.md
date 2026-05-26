# Astra Studio

Astra Studio is a modern, responsive design agency homepage built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

The site includes a polished landing experience with a hero banner, service cards, portfolio section, contact form, and a styled footer.

## 🚀 Features

- Clean hero section with image placeholder
- Services cards with glassmorphism styling
- Portfolio grid layout for featured projects
- Contact section with modern form styling
- Full-page background image support
- Responsive mobile-first design
- Tailwind CSS utility-driven styling

## 🧩 Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint with `eslint-config-next`

## 📁 Project Structure

- `app/` – main layout and page files
- `components/` – reusable UI components
- `public/images/` – site images and background assets
- `styles/globals.css` – global styles and Tailwind imports
- `tailwind.config.ts` – Tailwind configuration
- `package.json` – scripts and dependencies

## ⚡ Setup

```bash
npm install
npm run dev
```

Open the site at `http://localhost:3000`.

## 📦 Scripts

- `npm run dev` — start the Next.js development server
- `npm run build` — build the production app
- `npm run start` — start the production server after build
- `npm run lint` — run ESLint

## 🎨 Customize

- Replace `public/images/background.png` to change the page background image.
- Replace `public/images/body.png` to update the hero placeholder illustration.
- Update `components/Hero.tsx` to adjust hero layout and CTA styling.
- Update `components/Contact.tsx` to modify form fields and layout.

## ✅ Recommended Background Aspect Ratio

Use a **16:9** image for the best full-screen landing effect, such as:

- `1920x1080`
- `2560x1440`

If you want a more cinematic look, a **21:9** image also works well.

## 💡 Notes

- The app is structured for easy customization and theming.
- It uses a fixed background with overlay blending to preserve readability.

---

Built for modern creative agencies and portfolio landing pages.
