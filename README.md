# Mahotsava Grandeur | Luxury Celebration Destination

An elite luxury celebration destination and palace venue with authentic Indian architectural grandeur, bespoke wedding experiences, and timeless hospitality.

## Features
- **Cinematic Experience**: Immersive video opening sequence and rich aesthetic transitions
- **Venue Space Explorer**: Multi-space explorer with interactive setups (Mandap, Banquet, Royal Gala)
- **Celebrations Showcase**: Curated packages for imperial weddings, sangeet galas, and royal receptions
- **Signature Atmosphere & Gallery**: Curated luxury event photography and architectural highlights
- **Interactive Enquiry Booking**: Comprehensive enquiry dossier submission with instant reference tracking

---

## Quick Start (Run Locally)

### Prerequisites
- Node.js (v18+ recommended)
- npm

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview production build locally
```bash
npm run preview
```

---

## Hosting & Deployment Guide

This application is ready to host on any modern static hosting platform or CDN.

### 1. Vercel (Zero-Config)
The repository includes a ready-to-use [`vercel.json`](vercel.json):
1. Go to [Vercel](https://vercel.com) and click **Add New Project**.
2. Import the Git repository (`https://github.com/Maheshg568/event`).
3. Vercel will automatically detect the settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### 2. Netlify
The repository includes [`netlify.toml`](netlify.toml) and [`public/_redirects`](public/_redirects) for seamless SPA routing:
1. Connect the repository on [Netlify](https://www.netlify.com).
2. Settings are auto-configured from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
3. Click **Deploy Site**.

### 3. Cloudflare Pages
1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Configure build settings:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Click **Save and Deploy**.

### 4. GitHub Pages
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment**, select **GitHub Actions**.
3. Choose the standard **Static HTML** or **Vite** starter workflow.

### 5. Docker / Self-Hosted Nginx
To serve via Nginx, copy the contents of the `dist/` directory to `/usr/share/nginx/html` with `try_files $uri $uri/ /index.html =404;`.
