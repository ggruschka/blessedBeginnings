# AI Asset Creation Report for Blessed Beginnings
## Watercolor Illustrations, Textures, Mockups & Landing Page Workflow

**Research Date:** March 27, 2026
**Purpose:** Practical guide for creating all visual assets for a children's/heirloom-aesthetic landing page using AI tools.

---

## TABLE OF CONTENTS

1. [Tool Recommendations & Comparison](#1-tool-recommendations--comparison)
2. [Actionable Prompts for Your Aesthetic](#2-actionable-prompts-for-your-aesthetic)
3. [Maintaining Style Consistency Across All Assets](#3-maintaining-style-consistency-across-all-assets)
4. [Complete Asset Creation Workflow](#4-complete-asset-creation-workflow)
5. [Texture & Background Assets](#5-texture--background-assets)
6. [From AI-Generated to Production-Ready](#6-from-ai-generated-to-production-ready)
7. [File Format & Size Recommendations](#7-file-format--size-recommendations)
8. [Cost Breakdown](#8-cost-breakdown)
9. [Reference: Similar Brands & Sites](#9-reference-similar-brands--sites)
10. [Sources](#10-sources)

---

## 1. TOOL RECOMMENDATIONS & COMPARISON

### Tier 1: Best for This Aesthetic (Watercolor / Storybook / Heirloom)

| Tool | Best For | Cost | Output Format |
|------|----------|------|---------------|
| **Midjourney v7** | Highest-quality watercolor/storybook illustrations; artistic control | $10-30/mo | PNG (up to 2048px) |
| **DALL-E 3 via ChatGPT** | Quick iteration, good watercolor style, integrated workflow | $20/mo (ChatGPT Plus) or $0.04-0.12/image via API | PNG |
| **Recraft AI** | Vector illustrations, icons, brand-consistent sets, SVG export | Free tier + credits | SVG, PNG, JPEG |

### Tier 2: Specialized Use Cases

| Tool | Best For | Cost | Output Format |
|------|----------|------|---------------|
| **ilus.ai** | Brand-consistent illustration sets, flat/doodle style | Pay-per-credit (no subscription) | SVG, PNG |
| **illustration.app** | Cohesive vector illustration packs for websites | Pay-per-credit | SVG |
| **Stable Diffusion (ComfyUI/Forge)** | Free local generation, infinite customization, watercolor LoRAs | Free (requires GPU with 12GB+ VRAM) | PNG |
| **Adobe Firefly** | Integration with Photoshop for refinement | Included with Creative Cloud | PNG, PSD |

### Tier 3: Support Tools

| Tool | Best For | Cost |
|------|----------|------|
| **remove.bg** | Background removal from illustrations | Free tier available |
| **Recraft Vectorizer** | Convert raster AI art to clean SVG | Free |
| **SVGMaker.io** | Text-to-SVG generation, API access | Free tier |
| **TinyPNG / ShortPixel** | Image compression for web | Free tier |

### Recommendation for This Project

**Primary workflow:** Midjourney v7 for hero illustrations and key artwork, combined with Recraft for any vector assets (icons, decorative elements). Use DALL-E 3 via ChatGPT for quick drafting and iteration before committing to Midjourney generations.

---

## 2. ACTIONABLE PROMPTS FOR YOUR AESTHETIC

### Master Prompt Template (Beatrix Potter / Heirloom Children's Style)

Use this as your base template and swap out the [SUBJECT] for each asset:

```
[SUBJECT], soft watercolor textures with uneven washes, delicate ink outlines,
muted earthy color palette with soft greens, warm browns, cream, and gentle pastels,
vintage children's book illustration style, gentle diffused lighting, nostalgic
hand-painted feel, fine brushstrokes with delicate shading, storybook quality
reminiscent of early 20th-century children's literature, white background --ar 3:2
```

### Specific Asset Prompts

**Hero Illustration (Mother and Child):**
```
A gentle mother holding a swaddled baby in a sunlit nursery, surrounded by
soft watercolor flowers and climbing vines, warm cream and sage green tones,
Beatrix Potter-inspired illustration with delicate ink outlines and soft
watercolor washes, vintage children's book style, gentle dappled sunlight,
nostalgic hand-painted aesthetic, white background --ar 16:9 --s 400
```

**Decorative Lamb/Animal Motif:**
```
A small fluffy lamb wearing a tiny blue ribbon, standing in a meadow of
wildflowers, soft watercolor textures with uneven washes, delicate ink
outlines, muted earthy color palette, Beatrix Potter style, storybook
illustration, gentle lighting, hand-painted feel, isolated on white
background --ar 1:1 --s 350
```

**Floral Border/Frame Element:**
```
Decorative watercolor floral border with climbing roses, tiny forget-me-nots,
and delicate ivy, soft pastel colors on cream background, vintage botanical
illustration style, fine detailed brushwork, hand-painted aesthetic,
transparent edges fading into white, seamless repeating pattern --ar 4:1
--tile --s 300
```

**Cross / Religious Motif:**
```
A delicate watercolor illustration of a simple wooden cross adorned with
tiny wildflowers and trailing ivy, soft golden light, cream and sage
palette, vintage devotional illustration style, gentle ink outlines,
hand-painted nostalgic aesthetic, isolated on white background --ar 1:1
--s 350
```

**Nursery/Home Scene:**
```
A cozy nursery interior with a wooden rocking chair, a handmade quilt,
and a small bookshelf with children's books, warm sunlight streaming
through lace curtains, watercolor illustration with soft washes and
delicate ink outlines, Beatrix Potter style, vintage storybook aesthetic,
muted warm tones --ar 16:9 --s 400
```

**Product Display Background:**
```
Soft watercolor wash background in cream and sage green, subtle paper
texture, gentle gradient from warm ivory center to soft edges, vintage
parchment feel, minimalist botanical corner detail with tiny hand-painted
leaves, illustration style background for product photography --ar 3:4
--s 250
```

**Storybook Lettering Background:**
```
Vintage watercolor banner or ribbon scroll, cream colored with soft
golden edges, delicate floral accents at corners, aged parchment
texture, classical children's book title card style, hand-painted
aesthetic, isolated on white background --ar 3:1 --s 300
```

### Prompts for DALL-E 3 (via ChatGPT)

DALL-E 3 responds well to more natural language. Use this format:

```
Create a watercolor illustration in the style of Beatrix Potter children's
books. The scene shows [SUBJECT]. Use soft, uneven watercolor washes with
delicate ink outlines. The color palette should be muted and earthy: soft
greens, warm browns, cream, and gentle pastels. The style should feel
nostalgic and hand-painted, like an early 20th-century children's book
illustration. Include natural elements like tiny wildflowers or trailing
ivy. Avoid harsh lines or digital-looking effects. White background.
```

### Prompts for Stable Diffusion / ComfyUI

```
watercolor illustration, (beatrix potter style:1.3), soft washes,
delicate ink outlines, muted earthy palette, vintage children's book,
hand-painted, nostalgic, fine brushstrokes, storybook quality,
(white background:1.2), masterpiece, best quality
Negative: digital art, 3d render, photograph, harsh lines, neon colors,
modern, cartoon, anime
```

---

## 3. MAINTAINING STYLE CONSISTENCY ACROSS ALL ASSETS

### The Consistency Framework

Maintaining a unified look is the single biggest challenge with AI illustration. Here is the proven approach:

#### Step 1: Create a Style Reference Image
Generate 10-20 test images. Select the ONE that best captures your desired aesthetic. This becomes your master reference.

#### Step 2: Use Midjourney's Style Reference System (--sref)

```
[your prompt] --sref [URL of your master reference image] --sv 4
```

The `--sref` parameter copies the artistic style, color palette, and overall aesthetic without copying the subject. Use `--sv 4` if you need compatibility with older style codes.

#### Step 3: Use Character Reference for Recurring Characters (--cref)

If you have a mascot or recurring character (e.g., a lamb, a specific child):

```
[your prompt] --cref [URL of character reference image]
```

Combine both for full consistency:
```
[your prompt] --sref [style ref URL] --cref [character ref URL]
```

#### Step 4: Lock Down Your Prompt Bank

Create a text file with your finalized prompt templates. Keep these elements FIXED across all generations:

**Fixed elements (never change):**
- `soft watercolor textures with uneven washes`
- `delicate ink outlines`
- `muted earthy color palette with soft greens, warm browns, cream, and gentle pastels`
- `vintage children's book illustration style`
- `nostalgic hand-painted feel`
- `--s 350` (high stylization for illustration)

**Variable elements (change per asset):**
- Subject description
- Aspect ratio (`--ar`)
- Composition details

#### Step 5: Use Seed Numbers for Variations

```
[your prompt] --seed 12345
```

Reuse the same seed number with slightly different prompts to maintain visual consistency while creating variations.

#### Step 6: Color Palette Enforcement

Define your exact hex colors and reference them:
- Primary cream: `#FDF5E6`
- Sage green: `#9CAF88`
- Warm brown: `#8B7355`
- Soft gold: `#DAA520`
- Dusty rose: `#DCAE96`

In Recraft, you can upload custom color palettes directly. In Midjourney, reinforce colors in your prompt text.

---

## 4. COMPLETE ASSET CREATION WORKFLOW

### Phase 1: Define the Visual Language (Day 1)

1. **Create a mood board** on Pinterest with 20-30 images capturing the Beatrix Potter / heirloom children's aesthetic
2. **List all needed assets:**
   - Hero illustration (1-2 options)
   - Decorative illustrations (animals, florals, religious motifs)
   - Background textures (paper, watercolor wash)
   - Decorative borders and dividers
   - Icons (if needed)
   - Product mockup backgrounds
3. **Generate 20 test images** in Midjourney with variations of your master prompt
4. **Select 1-3 reference images** that define the style

### Phase 2: Generate Core Illustrations (Day 2-3)

1. **Set up Midjourney with --sref** using your selected reference image
2. **Generate hero illustrations** first (largest, most visible assets)
3. **Generate supporting illustrations** (animals, florals, motifs)
4. **Generate decorative elements** (borders, dividers, frames)
5. For each, generate 4 variations and select the best

### Phase 3: Post-Processing (Day 3-4)

1. **Upscale** selected images in Midjourney (use the U1-U4 buttons)
2. **Remove backgrounds** using Midjourney Editor or remove.bg
3. **Refine in Photoshop/GIMP** if needed (touch up edges, adjust colors)
4. **Convert to vectors** where appropriate using Recraft's vectorizer
5. **Create texture overlays** for the site background

### Phase 4: Web Optimization (Day 4-5)

1. **Export in appropriate formats** (see Section 7)
2. **Compress all assets** using TinyPNG or ShortPixel
3. **Test on the actual page** at various screen sizes
4. **Create responsive variants** (different crops/sizes for mobile vs desktop)
5. **Implement texture overlays** in CSS

### Phase 5: Refinement (Day 5+)

1. Review all assets in context on the live page
2. Re-generate any that feel inconsistent
3. Fine-tune colors in post-processing to match exactly
4. Optimize loading performance

---

## 5. TEXTURE & BACKGROUND ASSETS

### Free Texture Resources

| Resource | What It Offers | License |
|----------|---------------|---------|
| **Transparent Textures** (transparenttextures.com) | Paper textures with CSS code ready to paste: Beige Paper, Cream Paper, Rice Paper, Textured Paper | Free, CC-BY-3.0 |
| **Subtle Patterns** (toptal.com/designers/subtlepatterns) | Hundreds of tileable subtle patterns | Free for commercial use |
| **Medialoot** | High-res seamless watercolor wash textures | Free |
| **TopTextures on Gumroad** | 3 free seamless watercolor paper textures at 5000x5000px 300dpi | Free |
| **Indieground** | 5 free vintage paper texture JPEGs | Free for personal/commercial |
| **Freepik** | Thousands of watercolor/paper textures | Free with attribution |

### CSS Implementation for Paper Texture Overlay

This technique layers a paper texture over your entire page:

```html
<!-- Add at the end of your <body> tag -->
<div class="paperOverlay"></div>
```

```css
body {
  position: relative;
}

.paperOverlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url('data:image/png;base64,[YOUR_BASE64_TEXTURE]');
  background-repeat: repeat;
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 9999;
}
```

**Key details:**
- `mix-blend-mode: multiply` blends the texture with the page content, as if printed on textured paper
- `pointer-events: none` allows clicking through the overlay to interactive elements below
- Base64-encode the texture image to prevent pop-in on page load
- Use `position: absolute` (not `fixed`) to cover the full scrollable page, not just the viewport

### Quick Start with Transparent Textures

1. Go to transparenttextures.com
2. Pick a color matching your site's cream/warm tone
3. Select "Cream Paper," "Rice Paper," or "Textured Paper"
4. Copy the generated CSS
5. Apply to your page's `body` or a container element

### AI-Generated Custom Textures

Generate your own custom watercolor paper texture with Midjourney:

```
Seamless tileable vintage watercolor paper texture, cream colored,
subtle fiber grain, warm ivory tone, soft subtle texture, high resolution,
seamless pattern --ar 1:1 --tile --s 100
```

The `--tile` flag ensures the result tiles seamlessly when repeated as a CSS background.

---

## 6. FROM AI-GENERATED TO PRODUCTION-READY

### Background Removal

**Midjourney Editor (built-in, as of August 2025):**
1. Open your image in the Midjourney web editor
2. Use the mask/eraser tool to select the background
3. Click "Erase Background" to remove everything outside your mask
4. Download as transparent PNG

**Prompting for easy removal:**
Add these to your prompts for cleaner background separation:
- `isolated on white background`
- `plain white background`
- `no shadows, no reflections`

**External tools:**
- remove.bg for quick one-click removal
- Photoshop's "Remove Background" AI feature for precision work

### Upscaling

- Use Midjourney's built-in upscaler first (up to 2048px)
- For larger sizes, use Topaz Gigapixel AI or Real-ESRGAN
- For web use, 2048px on the longest side is typically sufficient

### Vectorization (for icons, borders, simple illustrations)

**Recraft Vectorizer:**
1. Upload your raster illustration to recraft.ai/ai-image-vectorizer
2. Download as clean SVG with structured paths
3. Edit in Figma, Illustrator, or Inkscape if needed

**When to vectorize:**
- Icons and simple decorative elements: ALWAYS vectorize
- Decorative borders and dividers: vectorize for infinite scaling
- Complex watercolor illustrations: keep as raster (watercolor texture is lost in vectorization)

### Color Correction

After generating all assets, unify colors in batch:
1. Open all assets in Photoshop or GIMP
2. Use Hue/Saturation adjustment to match your defined palette
3. Apply the same color grading preset to all images
4. Check side-by-side at final display sizes

---

## 7. FILE FORMAT & SIZE RECOMMENDATIONS

### Format Selection Guide

| Asset Type | Format | Why |
|-----------|--------|-----|
| Hero illustrations | WebP (with PNG fallback) | 25-34% smaller than JPEG, supports transparency |
| Decorative illustrations with transparency | WebP or PNG | Need alpha channel for transparent backgrounds |
| Icons and simple graphics | SVG | Infinitely scalable, tiny file size, editable |
| Background textures (tileable) | WebP or PNG | Need seamless tiling, small tile size |
| Decorative borders | SVG preferred, WebP fallback | Scalability across screen sizes |

### Size Targets

| Asset | Recommended Dimensions | Max File Size |
|-------|----------------------|---------------|
| Hero image (desktop) | 1920x1080px or 2560x1440px | Under 200KB (WebP) |
| Hero image (mobile) | 768x1024px | Under 100KB (WebP) |
| Decorative illustrations | 800-1200px on longest side | Under 80KB (WebP) |
| Background texture tile | 300-500px square | Under 15KB |
| Icons | 64-128px (or SVG) | Under 5KB |
| Product mockup backgrounds | 1200x1600px | Under 150KB (WebP) |

### Optimization Checklist

- [ ] Convert all raster images to WebP with PNG fallback
- [ ] Use `<picture>` element with `srcset` for responsive images
- [ ] Serve different sizes for mobile vs desktop
- [ ] Lazy-load images below the fold
- [ ] Inline-compress SVGs (remove unnecessary metadata)
- [ ] Base64-encode tiny textures (under 5KB) directly in CSS
- [ ] Use AVIF format where browser support allows (20% smaller than WebP)
- [ ] Set explicit `width` and `height` attributes to prevent layout shift (CLS)

---

## 8. COST BREAKDOWN

### Minimum Viable Budget: ~$30-50 one-time

| Item | Cost | What You Get |
|------|------|-------------|
| Midjourney Basic (1 month) | $10 | ~200 fast images, enough for all core illustrations |
| Recraft AI (free tier) | $0 | Vector generation, SVG export, brand style tools |
| Textures | $0 | Free from Transparent Textures, Subtle Patterns, Medialoot |
| Background removal | $0 | Midjourney Editor built-in, or remove.bg free tier |
| Image compression | $0 | TinyPNG free tier |
| **Total** | **$10** | |

### Comfortable Budget: ~$50-80 one-time

| Item | Cost | What You Get |
|------|------|-------------|
| Midjourney Standard (1 month) | $30 | ~900 fast images + unlimited relax mode for experimentation |
| ChatGPT Plus (1 month) | $20 | DALL-E 3 for quick drafts + ChatGPT for prompt iteration |
| ilus.ai credits | $10-20 | Consistent illustration style, SVG export |
| Textures and post-processing | $0 | Free tools |
| **Total** | **$50-70** | |

### Free Option: Stable Diffusion Locally

If you have a GPU with 12GB+ VRAM (NVIDIA):
- Install Forge or ComfyUI (free, open source)
- Download watercolor-specific LoRA models (free from CivitAI)
- Use the SHMILY Dreamy Watercolor model for consistent style
- Total cost: $0 (but requires technical setup time)

---

## 9. REFERENCE: SIMILAR BRANDS & SITES

### Children's / Heirloom Aesthetic Brands to Study

| Brand | URL | What to Learn From Them |
|-------|-----|------------------------|
| **Strasburg Children** | strasburgchildrens.com | Heirloom children's clothing; clean, elegant layout with heritage feel |
| **The Little Catholic** | thelittlecatholic.com | Handmade heirloom Catholic jewelry; warm, classic aesthetic |
| **Heirloom Art Co** | heirloomartco.com | Children's books and art; storybook visual language |
| **Brick House in the City** | brickhouseinthecity.com | Catholic gifts/apparel; heritage elements in modern ecommerce |
| **Catholic All Year** | catholicallyear.com | Catholic lifestyle brand for young families; liturgical calendar aesthetic |
| **Posh Tots** | shopposhtots.com | Heirloom children's clothing collection; classic design approach |
| **Storybook Looks** | storybooklooks.co | Children's clothier with storybook branding |
| **Feltman Brothers** | feltmanbrothers.com | Heritage baby clothing with rich handmade tradition |

### Design Patterns from These Sites

- **Color palette:** Cream, ivory, soft sage, dusty rose, warm gold
- **Typography:** Serif fonts for headings (classic/heritage feel), clean sans-serif for body
- **Photography style:** Soft, warm, natural light; lifestyle imagery
- **Layout:** Generous white space, centered content, elegant simplicity
- **Texture:** Subtle paper or linen texture overlays
- **Illustrations:** Used sparingly as decorative accents, not as primary content

---

## 10. SOURCES

### AI Illustration Tools & Prompts
- [Best 50+ Watercolor Illustration AI Prompts 2026](https://a1.art/prompts/watercolor-illustration)
- [Beautiful Midjourney Children's Book Prompts with Examples](https://www.aiarty.com/midjourney-prompts/midjourney-childrens-book-prompts.htm)
- [Beatrix Potter Midjourney Style Guide](https://midlibrary.io/styles/beatrix-potter)
- [How to Turn Photos into Beatrix Potter-Style Illustrations Using AI](https://craftgossip.com/how-to-turn-photos-into-beatrix-potter-style-illustrations-using-ai/)
- [Midjourney Watercolor Prompts: Master the Art](https://www.aiarty.com/midjourney-prompts/midjourney-watercolor-prompts.htm)
- [Mastering Watercolor Art in Midjourney](https://promptgenius.net/prompts/midjourney/art-styles/watercolor)
- [25 Midjourney Prompts for Watercolor](https://blog.galaxy.ai/midjourney-prompts-for-watercolor)
- [The Best 25 Midjourney Prompts for Watercolor](https://openart.ai/blog/post/midjourney-prompts-for-watercolor)
- [The Best 25 Midjourney Prompts for Children's Book](https://openart.ai/blog/post/midjourney-prompts-for-childrens-book)

### Consistency & Brand Workflows
- [How I Used AI to Design Brand-Aligned Illustrations (UX Collective)](https://uxdesign.cc/how-i-used-ai-to-design-brand-aligned-illustrations-2ea9479942f9)
- [Consistent Brand Imagery in Midjourney Workflow](https://www.chatprd.ai/how-i-ai/consistent-brand-imagery-in-midjourney)
- [AI Brand Management: Maintaining Consistency with AI Image Generators](https://www.typeface.ai/blog/ai-brand-management-how-to-maintain-brand-consistency-with-ai-image-generators)
- [How to Create Sets of Consistent Images with Recraft](https://www.recraft.ai/blog/how-to-create-image-sets)
- [AI Images with Consistent Style in Midjourney](https://christytuckerlearning.com/ai-images-with-consistent-style-in-midjourney/)
- [How to Generate Brand-Consistent Visuals with AI](https://storylab.ai/how-generate-brand-consistent-visuals-ai/)

### Midjourney Technical Reference
- [Style Reference Documentation (Midjourney)](https://docs.midjourney.com/hc/en-us/articles/32180011136653-Style-Reference)
- [Character Reference Documentation (Midjourney)](https://docs.midjourney.com/hc/en-us/articles/32162917505293-Character-Reference)
- [Omni Reference Documentation (Midjourney)](https://docs.midjourney.com/hc/en-us/articles/36285124473997-Omni-Reference)
- [Art of Prompting (Midjourney)](https://docs.midjourney.com/hc/en-us/articles/32835253061645-Art-of-Prompting)
- [Midjourney v7 Style Reference Updates](https://updates.midjourney.com/style-references-for-v7/)
- [How to Create Consistent Characters in Midjourney 2026](https://medium.com/@impijushsaha/how-to-create-consistent-characters-in-midjourney-the-complete-guide-for-2026-405c3bfbb4e1)
- [Midjourney Prompts Guide 2026 with V6 & V7 Tips](https://printify.com/blog/midjourney-prompts/)
- [Best Midjourney Prompts & How to Use Them 2026](https://www.superside.com/blog/midjourney-prompts)

### AI Tools & Platforms
- [Recraft AI Vector Generator](https://www.recraft.ai/ai-vector-generator)
- [Recraft: How to Create AI Vector Images for Your Website](https://www.recraft.ai/blog/how-to-create-ai-vector-images-for-your-website)
- [ilus.ai - AI Illustration Generator with Consistent Style](https://ilus.ai/)
- [illustration.app - AI Illustration Generator](https://www.illustration.app/)
- [SVGMaker - AI Text to SVG Generator](https://svgmaker.io/)
- [SVGAI - AI SVG Generator](https://www.svgai.org/)
- [Recraft AI Image Vectorizer (free SVG converter)](https://www.recraft.ai/ai-image-vectorizer)
- [Best AI Watercolor Illustration Generator (CrafteAI)](https://www.crafteai.com/blog/best-ai-watercolor-illustration-generator)
- [Best AI Art Apps in 2026](https://zsky.ai/blog/best-ai-art-apps-2026)

### Stable Diffusion & Local Options
- [Watercolor Generation Workflow (ComfyUI)](https://comfyui.org/en/unlock-watercolor-step-by-step-generation)
- [Flux.1 for Hand-Drawn Watercolor Images (ComfyUI)](https://comfyui.org/en/unleash-artistic-potential-with-flux-1)
- [Best Local Stable Diffusion Setup 2026](https://offlinecreator.com/blog/best-local-stable-diffusion-setup-2026)
- [Best 25 Stable Diffusion Prompts for Watercolor](https://openart.ai/blog/post/stable-diffusion-prompts-for-watercolor)

### Textures & CSS Implementation
- [Transparent Textures (free tileable textures)](https://www.transparenttextures.com/)
- [Subtle Patterns by Toptal](https://www.toptal.com/designers/subtlepatterns/)
- [CSS Texture Overlay Technique (Erik Ritter, Medium)](https://medium.com/@erikritter/css-snippets-add-a-texture-overlay-to-an-entire-webpage-b0bfdfd02c45)
- [34 CSS Paper Effects (FreeFrontend)](https://freefrontend.com/css-paper-effects/)
- [10 CSS Paper Effect Examples (Subframe)](https://www.subframe.com/tips/css-paper-effect-examples)
- [Free Vintage Paper Textures (Indieground)](https://indieground.net/product/free-vintage-paper-textures/)
- [14 Free Watercolor Paper Textures (Medialoot)](https://medialoot.com/blog/10-stunning-and-free-watercolor-paper-textures/)
- [3 Free Seamless Watercolor Paper Textures (Gumroad)](https://toptextures.gumroad.com/l/Free-Seamless-Watercolor-Paper-Textures)
- [Free Paper Textures (Medialoot)](https://medialoot.com/blog/18-free-paper-textures-high-quality-no-cost-paper/)

### DALL-E & ChatGPT
- [Creating a Children's Book with DALL-E (Ray Wang, Medium)](https://medium.com/@rwanghacker/creating-and-illustrating-a-childrens-book-with-dall-e-in-less-than-a-week-813ee85f2225)
- [DALL-E vs Midjourney Comparison (Ray Wang, Medium)](https://medium.com/@rwanghacker/creating-and-illustrating-a-childrens-book-with-midjourney-also-a-comparison-of-dall-e-vs-63447205c8fe)
- [DALL-E 3 Pricing 2026](https://zsky.ai/blog/how-much-does-dall-e-cost.html)
- [OpenAI API Pricing](https://openai.com/api/pricing/)

### Web Performance
- [WebP Developer Guide (Strapi)](https://strapi.io/blog/developer-guide-webp)
- [Image Optimisation with WebP and AVIF (Adobe Tech Blog)](https://blog.developer.adobe.com/image-optimisation-with-next-gen-image-formats-webp-and-avif-248c75afacc4)
- [TinyPNG Compression](https://tinypng.com)

### Pricing
- [Midjourney Plans Comparison](https://docs.midjourney.com/hc/en-us/articles/27870484040333-Comparing-Midjourney-Plans)
- [Midjourney Pricing 2026](https://pxlpeak.com/blog/ai-tools/midjourney-pricing-plans)
- [ChatGPT Plus Pricing 2026](https://www.glbgpt.com/hub/how-much-is-chatgpt-plus/)

### Landing Page Design & Workflow
- [AI Graphic Design: Complete Beginner's Guide 2026](https://www.krumzi.com/blog/ai-graphic-design-the-complete-beginner's-guide-2026)
- [AI Workflow for Building Animated Landing Pages (Medium)](https://medium.com/@ai-labs/the-complete-workflow-for-building-animated-landing-pages-with-googles-ai-tools-76390f5ebc44)
- [SaaS Landing Page Trends for 2026](https://www.saasframe.io/blog/10-saas-landing-page-trends-for-2026-with-real-examples)

### Similar Brands & Inspiration
- [Catholic Lifestyle Brand Website Design (99designs contest)](https://99designs.com/web-design/contests/catholic-lifestyle-brand-website-design-whimsy-clear-ecommerce-1163134)
- [Catholic Designs Inspiration (99designs)](https://99designs.com/inspiration/designs/catholic)
- [Baby Shop Website Design Examples (MuffinGroup)](https://muffingroup.com/blog/baby-shop-website-design/)
- [Children's Book Illustration Styles Guide (Kindlepreneur)](https://kindlepreneur.com/childrens-book-illustration-styles/)
- [Illustration Design Examples for Top Brands 2026 (Superside)](https://www.superside.com/blog/illustration-design-examples)
