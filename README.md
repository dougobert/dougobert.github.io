# Doug Obert Photography Portfolio

This repository contains a Hugo-based static website for a professional photography portfolio, featuring responsive galleries, e-commerce integration, and rich metadata support.

## Features
- **Responsive Photo Galleries**: Organized by category and collection, with high-resolution previews and lazy loading.
- **E-commerce Integration**: Stripe Payment Links for prints, downloads, and licenses. Buy buttons are embedded in photo pages.
- **Contact Forms**: Integrated with Formspree for secure, static form submissions.
- **EXIF Data Display**: Optionally show camera and photo metadata on image detail pages.
- **Breadcrumb Navigation**: Dynamic breadcrumbs for all gallery depths.
- **SEO & Performance**: Optimized images (WebP), meta tags, and fast-loading design.
- **Blog & About Pages**: Markdown-based content for posts and site information.
- **Automated Gallery Organization**: GitHub Actions script organizes photos and generates metadata files.

## Dependencies
- **Hugo** (v0.125.0 or later): Static site generator.
- **PaperMod Theme**: Modern, responsive Hugo theme (as a submodule).
- **hugo-easy-gallery**: Gallery shortcode and layout support.
- **PhotoSwipe**: Lightbox functionality for image previews.
- **Formspree**: Static contact form backend.
- **Stripe**: Payment links for e-commerce.
- **GitHub Actions**: CI/CD for deployment and gallery automation.

## Architecture
- **Content Structure**:
  - `content/gallery/<category>/<photo-folder>/index.md`: Each photo in its own bundle with frontmatter (title, date, tags, buy_link, image, etc.).
  - `static/images/`: Theme and profile images.
  - `layouts/`: Custom templates for galleries, single photo pages, and partials (breadcrumbs, share buttons).
  - `themes/PaperMod/`: Theme as a git submodule.
- **Automation**:
  - `scripts/organize_gallery.py`: Python script to organize photos and generate `index.md` files.
  - `.github/workflows/organize-gallery.yml`: Workflow to run the script and commit changes.
- **Config**:
  - `hugo.yaml`: Site configuration, theme settings, and feature toggles (e.g., ShowExifData).
- **Deployment**:
  - GitHub Pages via GitHub Actions.

## Getting Started
1. Clone the repository and initialize submodules:
   ```sh
   git clone --recurse-submodules https://github.com/dougobert/dougobert.github.io.git
   ```
2. Install [Hugo](https://gohugo.io/getting-started/installing/).
3. Run locally:
   ```sh
   hugo serve -D
   ```
4. Add photos to `content/gallery/<category>/` and push to trigger automation.

## Customization
- Enable/disable EXIF display in `hugo.yaml` (`ShowExifData: true/false`).
- Update theme via submodule.
- Edit layouts and partials for custom gallery or navigation features.

## License
See `themes/PaperMod/LICENSE` for theme license. Site content © Doug Obert.
