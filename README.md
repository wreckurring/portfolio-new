# Mohit Kumar — Portfolio Website

Personal portfolio website built with [Gatsby](https://www.gatsbyjs.org/) and styled-components.

Inspired by [Brittany Chiang's v4](https://github.com/bchiang7/v4) with design tweaks inspired by [Gapur Kassym's portfolio](https://gkassym.netlify.app/).

---

## 🛠 Setup & Installation

### Prerequisites
- Node.js v18+ (use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn

### 1. Install dependencies

```bash
npm install
# or
yarn
```

### 2. Start the development server

```bash
npm start
# or
gatsby develop
```

Open [http://localhost:8000](http://localhost:8000) in your browser.

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run serve
```

---

## Project Structure

```
mohit-portfolio/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.js          ← Landing hero section
│   │   │   ├── about.js         ← About me + skills
│   │   │   ├── experience.js    ← Work/activity tabs
│   │   │   ├── projects.js      ← Project cards grid
│   │   │   ├── achievements.js  ← Stats/achievement cards
│   │   │   └── contact.js       ← Contact CTA
│   │   ├── layout.js            ← Page layout wrapper
│   │   ├── nav.js               ← Fixed navigation bar
│   │   ├── social.js            ← Left sidebar social links + right email
│   │   ├── footer.js            ← Footer
│   │   ├── loader.js            ← Intro animation loader
│   │   └── head.js              ← SEO/Helmet
│   ├── pages/
│   │   ├── index.js             ← Main page
│   │   └── 404.js               ← Not found page
│   └── styles/
│       ├── theme.js             ← Color + font tokens
│       └── GlobalStyle.js       ← Global CSS reset + variables
├── static/
│   └── resume.pdf               ← PUT YOUR RESUME HERE
├── gatsby-config.js
├── gatsby-browser.js
├── gatsby-ssr.js
└── package.json
```

---

## Customization

### Update your info
All personal content is hardcoded in the section components for simplicity. Edit:

- `src/components/sections/hero.js` — Name, tagline, intro paragraph
- `src/components/sections/about.js` — Bio, skills list
- `src/components/sections/experience.js` — Jobs/activities
- `src/components/sections/projects.js` — Project cards
- `src/components/sections/achievements.js` — Stats cards
- `src/components/sections/contact.js` — Contact blurb

### Add your profile photo
Replace the `avatar-placeholder` div in `about.js` with a real `<img>` or Gatsby Image component, and place your photo in `src/images/`.

### Add your resume
Place your `resume.pdf` inside the `static/` folder. It's linked from the Nav "Resume" button.

### Color palette (CSS variables in `GlobalStyle.js`)

| Variable | Color |
|---|---|
| `--navy` | `#0a192f` |
| `--light-navy` | `#112240` |
| `--green` | `#64ffda` |
| `--slate` | `#8892b0` |
| `--lightest-slate` | `#ccd6f6` |

---

## Deployment

### GitHub Pages
```bash
npm run build
# Deploy the /public folder
```

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `gatsby build`
3. Publish directory: `public`

### Vercel
```bash
npm i -g vercel
vercel
```

---

Original template by [Brittany Chiang](https://brittanychiang.com).
