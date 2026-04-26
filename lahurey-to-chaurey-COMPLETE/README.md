# लाहुरेदेखि चौरेसम्म | Lahurey to Chaurey

> नेपाल सानो होला, तर सम्भावना असीमित छ।

A Nepali-first, mobile-first storytelling site about Nepal's potential.

**Built with:** Astro · Tailwind CSS · Decap CMS · Netlify

---

## 🚀 Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`

---

## 📝 Publishing Content (No Code Needed)

1. Go to `https://your-site.netlify.app/admin`
2. Log in with GitHub
3. Click **"New Stories"** or **"New Pulse Posts"**
4. Fill in the form and click **Publish**
5. Site auto-rebuilds on Netlify ✅

---

## 🛠 Setup Checklist

### 1. GitHub
- [ ] Create a GitHub account at github.com
- [ ] Create a new repo named `lahurey-to-chaurey`
- [ ] Push this project to that repo

### 2. Netlify
- [ ] Go to netlify.com → New site from Git
- [ ] Connect your GitHub repo
- [ ] Build command: `npm run build`
- [ ] Publish directory: `dist`
- [ ] Deploy!

### 3. Decap CMS Auth
- [ ] In Netlify: Site settings → Identity → Enable
- [ ] Enable Git Gateway under Identity settings
- [ ] Invite yourself as a user
- [ ] Update `public/admin/config.yml`:
  - Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username

### 4. Giscus Comments
- [ ] Go to giscus.app
- [ ] Enter your repo name
- [ ] Copy the generated script attributes
- [ ] Replace in `src/pages/stories/[slug].astro`

### 5. Analytics
- [ ] Replace `GA_MEASUREMENT_ID` in `src/components/BaseHead.astro`
- [ ] Replace `CLARITY_PROJECT_ID` in `src/components/BaseHead.astro`

### 6. WhatsApp Channel
- [ ] Replace all `https://whatsapp.com/channel/your-channel` with your real channel link

### 7. Logo
- [ ] Add logo PNG (transparent background) to `public/images/logo-nav.png`
- [ ] Add favicon PNG to `public/images/logo-favicon.png`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── BaseHead.astro      # SEO, fonts, analytics
│   ├── Navigation.astro    # Top nav + mobile menu
│   └── Footer.astro        # Footer + social links
├── layouts/
│   └── Layout.astro        # Main page wrapper
├── pages/
│   ├── index.astro         # Homepage
│   ├── stories/
│   │   ├── index.astro     # All stories
│   │   └── [slug].astro    # Individual story template
│   ├── pulse/
│   │   └── index.astro     # Nepal Nadi posts
│   ├── about.astro
│   └── work-with-me.astro
├── content/
│   ├── config.ts           # Content schemas
│   ├── stories/            # Story markdown files
│   └── pulse/              # Pulse post markdown files
└── styles/
    └── global.css
public/
├── admin/
│   ├── index.html          # Decap CMS
│   └── config.yml          # CMS configuration
└── images/                 # Logo, uploads
```

---

## 🎨 Brand Colors

| Role | Color | Hex |
|---|---|---|
| Background | Cream | `#FDF8F0` |
| Primary CTA | Crimson | `#DC143C` |
| Nav / Links | Navy | `#003893` |
| Accent | Gold | `#E8A020` |
| Body text | Charcoal | `#1A1A2E` |

---

Made with ❤️ by Mahesh Gurung · Tokyo
