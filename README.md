# Sihan Chen — Personal Website

A single-page personal site built with plain HTML, CSS, and JavaScript — no build step, no dependencies.

Color scheme: UC Berkeley palette — Berkeley Blue (`#003262`) and California Gold (`#FDB515`), used as accents (top bar, section underlines, timeline markers) so the page stays clean and readable rather than overly colorful.

## Files

- `index.html` — page structure and content
- `styles.css` — all styling
- `script.js` — mobile nav, project cards, copy-email button, footer year, hero avatar cycle
- `assets/` — 5 hero avatar sticker frames, background removed (`avatar-*.png`)

Everything needed to deploy is in this folder. No resume PDF and no local-preview helper scripts are included, so Vercel serves these files exactly as they are.

## Hero avatar

The hero section shows a centered, background-free sticker of you that cycles through 5 positive frames (Hi / Okay / Love you / Yum / Yay) every ~2.4 seconds with a soft fade. To change the set, edit the `avatarFrames` array at the top of `script.js` — each entry just needs a `src` (path in `assets/`) and an `alt` (accessibility text). Add a new frame by dropping a transparent PNG into `assets/` and adding it to the array.

## Preview locally

Any static file server works, for example:

```bash
npx serve .
```

or Python:

```bash
python3 -m http.server 8000
```

Then open the printed local URL in your browser. You can also just double-click `index.html` to open it directly.

## Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm i -g vercel
cd "personal website"
vercel
```

Accept the defaults — Vercel will detect this as a static project (no framework, no build command needed).

**Option B — GitHub + Vercel dashboard (step by step, no command line needed)**

**Step 1 — Create a GitHub account**
1. Go to [github.com](https://github.com) and click "Sign up".
2. Follow the prompts to create a free account.

**Step 2 — Create a new repository**
1. Once logged in, click the "+" icon in the top-right corner, then "New repository".
2. Name it something like `personal-website`.
3. Leave it set to "Public" (or "Private" if you prefer).
4. Do **not** check "Add a README file" — you already have one.
5. Click "Create repository".

**Step 3 — Upload your files**
1. On the new repository's page, click the blue "uploading an existing file" link.
2. Drag in every file and folder from this folder: `index.html`, `styles.css`, `script.js`, `README.md`, and the whole `assets` folder.
3. Scroll down and click "Commit changes".

**Step 4 — Create a Vercel account**
1. Go to [vercel.com](https://vercel.com) and click "Sign Up".
2. Choose "Continue with GitHub" so the two accounts are linked.

**Step 5 — Import your project**
1. In the Vercel dashboard, click "Add New..." then "Project".
2. Find the repository you just created and click "Import".

**Step 6 — Deploy**
1. Leave all settings as default — Framework Preset should say "Other", Build Command and Output Directory can stay empty.
2. Click "Deploy" and wait 30–60 seconds.
3. Vercel gives you a live link like `personal-website.vercel.app` — that's your site, live on the internet.

To update the site later: edit the files, then re-upload the changed ones to the same GitHub repo (same drag-and-drop as Step 3) — Vercel redeploys automatically.

## Updating your projects

Open `script.js` and add a new object to the `projects` array at the top of the file:

```js
{
  title: "Project Name",
  role: "Your Role",
  bullets: ["What you did.", "A result or outcome."]
}
```

The Projects section on the page renders automatically from this list.
