# GitHub Copilot Instructions for Hugo Photo Website

## Project Overview
This repository contains a Hugo static website for a photography portfolio with e-commerce capabilities. The site features:
- Responsive photo galleries
- E-commerce integration for selling prints, digital downloads, and licenses
- Contact forms using third-party services
- About page and blog functionality
- Deployment to GitHub Pages

## Technology Stack
- **Static Site Generator**: Hugo
- **Theme**: PaperMod with hugo-easy-gallery for photo galleries
- **Hosting**: GitHub Pages
- **E-commerce**: Stripe Checkout, LemonSqueezy, or Gumroad
- **Forms**: Formspree, Formsubmit, or Netlify Forms
- **CI/CD**: GitHub Actions

## Development Guidelines

### Hugo Site Structure
When working with Hugo files, follow these conventions:
- Use `config.toml` for site configuration
- Store theme images in `static/images/` directory
- Create content in appropriate subdirectories: `content/gallery/`, `content/blog/`, etc.


### E-commerce Integration
- Implement payment links using Stripe Payment Links
- Embed buy buttons directly in photo captions or descriptions
- Support multiple product types: prints, digital downloads, licenses
- Example Stripe integration: `<a href="https://buy.stripe.com/...">Buy Print – $20</a>`

### Contact Forms
- Use static form services (Formspree, Formsubmit, or Netlify Forms)
- Implement proper form validation and user feedback
- Example form structure:
  ```html
  <form action="https://formspree.io/f/your-form-id" method="POST">
    <label>Your email: <input type="email" name="email"></label>
    <label>Message: <textarea name="message"></textarea></label>
    <button type="submit">Send</button>
  </form>
  ```

### Content Management
- Use Markdown for all content creation
- Include proper frontmatter for SEO and organization
- Tag blog posts and gallery collections appropriately
- Maintain consistent date formats (YYYY-MM-DD)

### GitHub Pages Deployment
- Use GitHub Actions workflow for automated deployment
- Target Hugo version 0.125.0 or later
- Ensure proper baseURL configuration for GitHub Pages
- Include submodule support for themes

### Performance and SEO
- Compress and optimize all images before upload
- Use WebP format where possible
- Implement proper meta tags and structured data
- Consider lazy loading for image galleries
- Include alt text for all images

### Code Quality Standards
- Follow Hugo best practices for theme development
- Use semantic HTML structure
- Implement responsive design principles
- Ensure accessibility compliance
- Test across multiple devices and browsers

### File Organization
- Keep themes as Git submodules
- Organize images by category/collection
- Use consistent naming conventions
- Maintain clean directory structure

When implementing new features:
1. Follow Hugo's content organization principles
2. Maintain responsive design across all screen sizes
3. Ensure e-commerce integrations are secure and user-friendly
4. Test all forms and payment flows thoroughly
5. Optimize for fast loading times
6. Include proper error handling and user feedback

For photography-specific features:
- Implement image lightbox functionality (GLightbox or PhotoSwipe)
- Add EXIF data display capabilities
- Include image search and filtering
- Support high-resolution image previews
- Implement watermarking for preview images
