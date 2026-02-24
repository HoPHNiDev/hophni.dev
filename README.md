# 🖥️ IDE & Stitch — Developer Portfolio

A personal portfolio site with an **IDE-like (VS Code)** dark theme, powered by [Astro](https://astro.build/) and packed with interactive **Stitch Easter eggs**.

![Astro](https://img.shields.io/badge/Astro-5.x-orange?logo=astro)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-blue?logo=tailwindcss)
![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-black?logo=github)

> 🛠️ **Template by [HoPHNi](https://github.com/HoPHNiDev)** — fork it, customize it, make it yours.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321/`.

---

## 📁 Project Structure

```
src/
├── content/                  ← All editable content (Markdown)
│   ├── hero/about.md         ← Role, skills, bio for terminal
│   ├── experience/*.md       ← Work experience entries
│   ├── projects/*.md         ← Pet project cards
│   ├── contacts/links.md     ← GitHub, Telegram, etc.
│   ├── terminal/commands.md  ← Hidden terminal commands
│   └── stitch/reviews.md     ← Stitch tech review comments
├── components/               ← Astro components
│   ├── Header.astro          ← IDE tab navigation
│   ├── Hero.astro            ← Terminal-style hero section
│   ├── ExperienceTimeline.astro ← JSON-formatted experience
│   ├── ProjectCards.astro    ← Project card grid
│   ├── Footer.astro          ← Contact + VS Code status bar
│   ├── StitchDebugger.astro  ← 🐛 Corner Stitch Easter egg
│   ├── StitchReviewer.astro  ← 🔍 Tech badge tooltip
│   ├── StitchCopyGuard.astro ← 🔒 Copy guard toast
│   ├── StitchCrash.astro     ← 💥 Idle crash effect
│   └── HiddenTerminal.astro  ← 🖥️ Secret terminal
├── layouts/BaseLayout.astro  ← HTML head, fonts, meta tags
├── pages/
│   ├── index.astro           ← Main page
│   └── 404.astro             ← Custom 404 with Stitch
├── styles/global.css         ← Tailwind v4 theme tokens
public/
├── stitch-debugger.png       ← Stitch with a bug
├── stitch-reviewer.png       ← Stitch with magnifying glass
├── stitch-crash.png          ← Stitch sitting innocently
├── stitch-guard.png          ← Stitch guarding data
├── stitch-404.png            ← Stitch chewing cables
├── favicon.svg               ← Terminal prompt icon
└── CNAME                     ← Custom domain
```

---

## ✏️ How to Customize

All content lives in **Markdown files** inside `src/content/`. No component code changes needed.

### 👤 Hero Section — `src/content/hero/about.md`

```yaml
---
role: "Your Role Title"
username: "yourname"          # Terminal prompt: yourname@portfolio
hostname: "portfolio"          # Terminal prompt + path
templateUrl: "https://github.com/..."  # "Use Template" header button
bio: "Short bio paragraph."
skills:
  backend: ["FastAPI", "Django"]
  database: ["PostgreSQL", "Redis"]
  devops: ["Docker", "CI/CD"]
  tools: ["Celery", "RabbitMQ"]
---
```

### 💼 Experience — `src/content/experience/*.md`

Create one `.md` file per job (e.g., `1-company.md`):

```yaml
---
company: "Company Name"
role: "Your Role"
period: "Jan 2024 — Present"
stack: ["Python", "FastAPI", "PostgreSQL"]
order: 1          # Lower = shown first
current: true     # Optional, marks green dot
description: "Project context"
---

- Built something amazing
- Led a team of 5
```

### 🚀 Projects — `src/content/projects/*.md`

```yaml
---
name: "Project Name"
description: "What the project does."
stack: ["Python", "Selenium"]
icon: "smart_toy"    # Material Symbol name
link: "https://example.com"  # Optional (GitHub, website, etc.)
order: 1
---
```

> Icons: browse [Material Symbols](https://fonts.google.com/icons)

### 📬 Contacts — `src/content/contacts/links.md`

```yaml
---
heading: "Want to collaborate or hire me?"
links:
  # Material Symbol icon (default)
  - label: "hophnidev@gmail.com"
    url: "mailto:hophnidev@gmail.com"
    icon: "mail"
  # Custom SVG icon (e.g. brand logos)
  - label: "github.com/yourname"
    url: "https://github.com/yourname"
    icon: "code"
    iconType: "svg"           # "material" (default) or "svg"
    svgPath: "M12 0c-6.626..." # SVG path data (d attribute)
---
```

> `iconType: "svg"` renders an inline `<svg>` with the provided `svgPath`. Omit it for default Material Symbols.

### 🎨 Theme Colors — `src/styles/global.css`

Edit the `@theme` block to change IDE colors:

```css
@theme {
  --color-bg-dark: #0D1117;       /* Main background */
  --color-ide-gray: #161B22;      /* Panel backgrounds */
  --color-primary: #58A6FF;       /* Accent color */
  --color-accent-green: #3FB950;  /* Terminal green */
}
```

### 🌐 Domain & SEO

- **Domain**: edit `public/CNAME`
- **Site URL**: edit `site` in `astro.config.mjs`
- **Title & Description**: edit `src/layouts/BaseLayout.astro`

---

## 🗂️ IDE Features

### Closable Tabs
Every tab in the header has a **close button (×)** that appears on hover — just like VS Code:
- Click × to **close the tab** and hide its section from the page
- All tabs can be closed
- A **"Restore"** button appears when tabs are closed — click to reopen all
- Press **`Ctrl+Z`** (or `Cmd+Z`) to restore the last closed tab one by one

### Active Tab Tracking
The active tab automatically highlights based on scroll position.

---

## 🥚 Easter Eggs

### 1. 🐛 Stitch Debugger (bottom-right corner)
Stitch peeks from the bottom-right holding a glowing bug.
- **Hover** → Stitch peeks up fully
- **Click** → Console log: *"Burp! Delicious bugs..."*
- **Idle** → Stitch periodically peeks up on his own

### 2. 🖥️ Hidden Terminal
Press **`` ` ``** (backtick), **`~`** (tilde), or **`Cmd+K`** / **`Ctrl+K`** to open an Ubuntu-styled terminal overlay.

**Tab autocomplete** — type a partial command and press `Tab` to complete it.

| Command | Output |
|---------|--------|
| `help` | List of available commands |
| `cat skills.json` | Tech skills (from hero section) |
| `python3 info.py` | Bio in triple quotes |
| `cat contact.sh` | Contact links |
| `neofetch` | Ubuntu-style ASCII + system info |
| `fetch_stack` | ASCII tech stack table |
| `ls` | Virtual file listing |
| `git status` | Fake git status |
| `sudo rm -rf /` | Glitch effect + ASCII art 💀 |

> Customize commands and neofetch info in `src/content/terminal/commands.md`

### 3. 🔍 Stitch Code Reviewer
Hover over any **tech badge** (in Experience or Projects) — Stitch appears with a speech bubble commenting on the technology.

> Customize comments in `src/content/stitch/reviews.md`

### 4. 🔒 Copy Guard
Select text inside the **Experience** section — a toast appears:
> *"🔒 Data locked. Just kidding, copy whatever you want 😜"*

30-second cooldown between triggers.

### 5. 💥 The Crash
Leave the tab **inactive for 5 minutes**, then return:
1. Page scrolls to top
2. ALL sections "fall" into a pile with physics
3. Stitch sits on the wreckage: *"SYSTEM CRASH — docker-compose down // oops"*
4. Move the mouse to **reboot** — elements spring back to their positions

> Change idle duration: edit `IDLE_MS` in `src/components/StitchCrash.astro`

### 6. 🔌 404 Page
Navigate to any invalid URL — Stitch is caught chewing server cables with electric sparks.

---

## 🚢 Deployment

### Step 1: Create GitHub Repository

```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git add .
git commit -m "initial commit"
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to **Settings → Pages** in your GitHub repo
2. Under **Source**, select **GitHub Actions**
3. The workflow (`.github/workflows/deploy.yml`) will auto-deploy on every push to `main`

### Step 3: Verify Deployment

Push to `main` → wait ~1 min → visit `https://YOUR_USERNAME.github.io/YOUR_REPO/`

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

---

### 🌐 Custom Domain Setup (e.g. `hophni.dev`)

#### 3a. Set domain in project

**`public/CNAME`** — set your domain (no `https://`):
```
yourdomain.com
```

**`astro.config.mjs`** — set `site` to your domain:
```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

#### 3b. Configure DNS at your domain registrar

Go to your domain registrar's DNS settings and add these records:

**For root domain (`yourdomain.com`)** — add 4 A records:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**For `www` subdomain** — add CNAME:

| Type | Name | Value |
|------|------|-------|
| CNAME | `www` | `YOUR_USERNAME.github.io` |

> ⏳ DNS changes can take 10 min–48 hours to propagate.

#### 3c. Set domain in GitHub

1. Go to **Settings → Pages**
2. Under **Custom domain**, enter `yourdomain.com`
3. Click **Save**
4. Wait for DNS check to pass (green checkmark)
5. ✅ Check **Enforce HTTPS** (appears after DNS verifies)

#### 3d. Verify everything works

```bash
# Check DNS propagation
dig yourdomain.com +short
# Should show: 185.199.108.153, ...109, ...110, ...111

# Check HTTPS
curl -I https://yourdomain.com
# Should show: HTTP/2 200
```

Visit `https://yourdomain.com` — your portfolio should load with HTTPS 🔒

---

## 🛠️ Tech Stack

| Layer | Tech |
|-------|------|
| SSG | [Astro 5](https://astro.build/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Content | Astro Content Collections (Markdown) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |
| Design | [Google Stitch](https://stitch.withgoogle.com/) (initial prototype) |

---

## 📜 License

MIT — use it, fork it, make it yours.

---

> **Template developed by [HoPHNi](https://github.com/HoPHNiDev)** · Star ⭐ the repo if you like it!
