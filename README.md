## Astro Static Export Deployment (Hostinger)

This project is configured for static export:

- `output: "export"`
- `trailingSlash: true`
- `skipTrailingSlashRedirect: true`
- `images.unoptimized: true`

### Build

```bash
npm install
npm run build
```

This generates the `out` folder.

### Upload To Hostinger (Important)

1. Open `out` locally.
2. Upload the **contents inside `out`** to Hostinger `public_html` (not the `out` folder itself).
3. Confirm these items exist in `public_html` after upload:
	- `_next/`
	- `images/`
	- `index.html`
	- `.htaccess`
4. Clear Hostinger cache/CDN (if enabled).

If `_next` or `images` are missing in `public_html`, the site loads as unstyled HTML (exactly the symptom of missing UI/CSS).

### Notes

- `public/.htaccess` is included to support clean route URLs on Apache/Hostinger static hosting.
- Any change requires rebuilding and re-uploading the latest `out` content.
