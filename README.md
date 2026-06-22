# Iowa Hawkeyes Football Database

A searchable database of Iowa Hawkeyes football games and player stats (2001-2005), with 61 games and 72 player career profiles extracted from official box scores.

## Live Demo
Once deployed: `https://YOUR_USERNAME.github.io/iowa-football-db/`

## 🚀 Deploy to GitHub Pages (step by step)

### 1. Create a new GitHub repo
- Go to https://github.com/new
- Name it `iowa-football-db` (or whatever you like — see step 2 if different)
- Keep it public, don't add a README/gitignore (we already have them)

### 2. If you use a different repo name
Edit `vite.config.js` and change the `base` value to match:
```js
base: '/your-repo-name/',
```

### 3. Push this code to your new repo
From inside this folder, run:
```bash
git init
git add .
git commit -m "Initial commit: Iowa football database"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/iowa-football-db.git
git push -u origin main
```

### 4. Enable GitHub Pages
- On GitHub, go to your repo → **Settings** → **Pages**
- Under "Build and deployment", set **Source** to **GitHub Actions**
- That's it — the included workflow (`.github/workflows/deploy.yml`) will build and deploy automatically

### 5. Wait ~1-2 minutes
- Go to the **Actions** tab in your repo to watch it build
- Once green ✅, your site is live at `https://YOUR_USERNAME.github.io/iowa-football-db/`

## Updating the site later
Any time you `git push` to `main`, GitHub Actions rebuilds and redeploys automatically. No manual steps needed.

## Local development
```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
```

## Tech stack
- React 18 + Vite
- lucide-react for icons
- Plain inline styles (no Tailwind/CSS framework needed)
- Static data embedded directly in the component (no backend/database needed)

## Data sources
Game and player stats were extracted from official University of Iowa football box score PDFs (2001-2005 seasons), including scoring summaries, team statistics, and individual player rushing/passing/receiving tables.
