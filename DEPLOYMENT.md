# 🚀 GitHub Pages Deployment Guide

## ✅ What's Ready

Your project is now fully configured for GitHub Pages deployment! Here's what has been set up:

### ✅ Configuration Files
- **`next.config.mjs`** - Static export configuration with base path `/pousada`
- **`package.json`** - Build scripts for GitHub Pages
- **`.github/workflows/deploy.yml`** - Automated deployment workflow
- **`.nojekyll`** - Prevents Jekyll processing
- **`_config.yml`** - GitHub Pages configuration

### ✅ Build System
- **Static Export** - Next.js configured for static site generation
- **Base Path** - Configured for `/pousada` repository name
- **Image Optimization** - Disabled for static export compatibility
- **Cross-platform Build** - Uses `cross-env` for Windows compatibility

### ✅ Authentication
- **Simple Auth** - Client-side authentication (no server required)
- **Local Storage** - User sessions stored locally
- **Protected Routes** - Dashboard and admin areas

## 🎯 Next Steps

### 1. Update Repository Settings

**IMPORTANT:** Update the URL in `_config.yml` with your actual GitHub username:

```yaml
url: "https://SEU-USUARIO.github.io"
baseurl: "/pousada"
```

Replace `SEU-USUARIO` with your actual GitHub username.

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. Save the settings

### 3. Push to GitHub

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 4. Monitor Deployment

- Go to **Actions** tab in your repository
- Watch the "Deploy to GitHub Pages" workflow
- Your site will be available at: `https://SEU-USUARIO.github.io/pousada`

## 📁 Generated Files

After build, the `out/` directory contains:

```
out/
├── index.html          # Homepage
├── login/
│   └── index.html     # Login page
├── quartos/
│   └── index.html     # Rooms page
├── reserva/
│   ├── index.html     # Reservation page
│   ├── erro/
│   │   └── index.html # Error page
│   ├── pendente/
│   │   └── index.html # Pending page
│   └── sucesso/
│       └── index.html # Success page
├── contato/
│   └── index.html     # Contact page
├── dashboard/
│   └── index.html     # Dashboard page
├── _next/             # Next.js assets
└── [images]           # Static images
```

## 🔧 Manual Deployment

If you prefer manual deployment:

```bash
# Build for GitHub Pages
npm run build:gh-pages

# The files will be in the `out/` directory
# Upload these files to your GitHub Pages branch
```

## 🐛 Troubleshooting

### Build Errors
- **Suspense Boundaries**: All `useSearchParams()` calls are wrapped in Suspense
- **Static Export**: API routes removed, using client-side auth
- **TypeScript**: All type errors resolved

### Common Issues
1. **404 Errors**: Check that `basePath` is correct in `next.config.mjs`
2. **Images Not Loading**: Ensure images are in `public/` directory
3. **Authentication**: Uses localStorage, no server required

### Local Testing
```bash
# Test the static build locally
npx serve out
# Visit http://localhost:3000
```

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `out/` directory:
   ```
   your-domain.com
   ```

2. Configure DNS settings with your domain provider

3. Update `_config.yml`:
   ```yaml
   url: "https://your-domain.com"
   baseurl: ""
   ```

## 📞 Support

If you encounter issues:

1. Check the **Actions** tab for build errors
2. Verify all configuration files are committed
3. Ensure GitHub Pages is enabled in repository settings
4. Check that the base path matches your repository name

---

**Your site is ready for GitHub Pages! 🎉**
