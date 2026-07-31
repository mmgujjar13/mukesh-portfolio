# Mukesh Gujjar — Portfolio

Vite + React + Tailwind, built in the same style as the reference site you shared: glassmorphism cards, gradient text, dark/light toggle, cursor glow, typing-animation hero, and a scroll-triggered timeline.

## Before you deploy — personalize these

All content is now filled in from your two resumes (Technical Lead and Developer versions) — real work history, education, awards, phone number and detailed project descriptions. What's still left:

1. **Photo** — replace `public/profile.svg` with a real photo. Easiest: add `public/profile.jpg` and change every `src="/profile.svg"` (in `Hero.jsx`, `About.jsx`, `Navbar.jsx`) to `src="/profile.jpg"`.
2. **Resume PDF** — add one of your uploaded resumes to `public/` as `Mukesh_Gujjar_Resume.pdf` (the Hero "Download CV" button links there). You have two versions (Technical Lead / Developer-focused) — pick whichever matches the roles you're targeting most, or swap the file per application.
3. **Contact form** — the form uses EmailJS. Create a free account at [emailjs.com](https://www.emailjs.com), then in `src/components/Contact.jsx` replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY` with the values from your EmailJS dashboard. Until you do this, the form will show a friendly failure message instead of silently doing nothing.
4. **GitHub link** — the placeholder `https://github.com/` links in `Hero.jsx` and `Footer.jsx` need your real GitHub URL.
5. **WordPress Websites page** (`src/components/WordPressWebsites.jsx`) — has one real entry (MMG Academy Edu) and two placeholders for additional client sites you can share publicly.
6. **Project links** — the `live`/`github` fields in `Projects.jsx` are `"#"` placeholders since most client work is likely under NDA — add real links only where you're able to share them.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Create the empty repo first at github.com/new — don't initialize it with a README, or you'll get a merge conflict on first push.

## 2. Deploy on Netlify

1. Go to [app.netlify.com](https://app.netlify.com) and log in (GitHub login is easiest).
2. **Add new site → Import an existing project → GitHub** → select your repo.
3. Netlify reads `netlify.toml` automatically — build command `npm run build`, publish directory `dist`.
4. Click **Deploy site**.

Every future `git push` to `main` triggers a fresh build and redeploy automatically.
