# Asset Manifest — Blessed Beginnings

Every placeholder that needs real artwork. Use the Midjourney master prompt template from `AI-ASSET-CREATION-REPORT.md` and append `--sref [your style reference URL]` for consistency.

---

## Master Style Prompt (append to all)

```
soft watercolor textures with uneven washes, delicate ink outlines,
muted earthy color palette with soft greens, warm browns, cream, and gentle pastels,
vintage children's book illustration style, gentle diffused lighting, nostalgic
hand-painted feel, fine brushstrokes with delicate shading, storybook quality
reminiscent of early 20th-century children's literature
```

---

## 1. Brand Assets

| Asset | Location | File Type | Dimensions | Description for Prompt |
|-------|----------|-----------|------------|----------------------|
| **Logo — Shield** | Navbar, Footer | SVG | 48x48 | Warm illustrated shield with a simple cross and two children (boy and girl), soft gold and cream tones, delicate ink outlines, heirloom badge style |
| **Favicon** | Browser tab | SVG/ICO | 32x32 | Simplified version of the shield logo, works at small sizes |

## 2. Hero Section

| Asset | Location | File Type | Dimensions | Description for Prompt |
|-------|----------|-----------|------------|----------------------|
| **Hero Illustration (Desktop)** | Hero background | WebP | 1920x1080 | Children playing in a sunlit meadow with storybooks and wooden toys, a gentle church steeple in the background, wildflowers, warm golden light, Beatrix Potter style watercolor, white/cream background fading at edges `--ar 16:9 --s 400` |
| **Hero Illustration (Mobile)** | Hero background (mobile) | WebP | 768x1024 | Same scene as desktop but cropped vertically — children centered with toys, less landscape, more intimate framing `--ar 3:4 --s 400` |

## 3. Our Story Section

| Asset | Location | File Type | Dimensions | Description for Prompt |
|-------|----------|-----------|------------|----------------------|
| **Reading Nook Scene** | Our Story background | WebP | 1920x900 | Cozy family reading nook with a wooden rocking chair, quilted blanket, small bookshelf with children's books, warm sunlight through lace curtains, watercolor with soft washes `--ar 21:9 --s 400` |

## 4. Products Showcase

| Asset | Location | File Type | Dimensions | Description for Prompt |
|-------|----------|-----------|------------|----------------------|
| **Storybook Mockup** | Products row 1, right side | WebP | 1200x900 | Open watercolor storybook showing an illustrated page with a brave child and a lamb, visible hand-painted lettering, soft cream pages, the book sitting on an old wooden table with dried flowers `--ar 4:3 --s 350` |
| **Wooden Toys Mockup** | Products row 2, left side | WebP | 1200x900 | Collection of handcrafted wooden toys — blocks, a small ark with animals, carved figurines of saints, on a cream linen cloth, warm natural light, Beatrix Potter aesthetic `--ar 4:3 --s 350` |

## 5. Value Grid Icons

| Asset | Location | File Type | Dimensions | Description for Prompt |
|-------|----------|-----------|------------|----------------------|
| **Book Icon** | Value card 1 | SVG | 64x64 | Simple watercolor book with a cross on the cover, open pages, soft gold and cream tones, delicate ink outline, isolated on white `--ar 1:1 --s 250` |
| **Toy Icon** | Value card 2 | SVG | 64x64 | Small wooden toy horse or block set, watercolor with warm brown and cream tones, delicate ink outline, isolated on white `--ar 1:1 --s 250` |
| **Workbook Icon** | Value card 3 | SVG | 64x64 | Open notebook with a pencil and small flower doodle, watercolor in sage and cream, delicate ink outline, isolated on white `--ar 1:1 --s 250` |
| **Clothing Icon** | Value card 4 | SVG | 64x64 | Small vintage child's dress or shirt on a wooden hanger, watercolor in blush pink and cream, delicate ink outline, isolated on white `--ar 1:1 --s 250` |

## 6. CTA Section

| Asset | Location | File Type | Dimensions | Description for Prompt |
|-------|----------|-----------|------------|----------------------|
| **Children Praying** | CTA background | WebP | 1920x900 | Two small children kneeling in prayer in a garden of wildflowers, gentle golden light, a small wooden cross nearby, Beatrix Potter watercolor style, soft washes fading to white at edges `--ar 21:9 --s 400` |

## 7. Textures & Decorative

| Asset | Location | File Type | Dimensions | Description for Prompt |
|-------|----------|-----------|------------|----------------------|
| **Paper Texture Tile** | Full page overlay | PNG | 500x500 | Seamless tileable vintage watercolor paper texture, cream colored, subtle fiber grain, warm ivory tone `--ar 1:1 --tile --s 100` |
| **Watercolor Divider** | Between sections (optional) | SVG | 1200x40 | Thin watercolor floral divider with tiny wildflowers and trailing ivy, soft pastels on transparent background, horizontal `--ar 30:1 --s 300` |
| **Floral Corner** | Decorative accent (optional) | SVG | 200x200 | Corner flourish with watercolor roses and ivy, soft gold and sage, transparent background `--ar 1:1 --s 300` |

---

## Production Checklist

- [ ] Generate master style reference image first (10-20 tests, pick one)
- [ ] Use `--sref [reference URL]` on ALL subsequent generations
- [ ] Export hero/background images as WebP, target under 200KB each
- [ ] Export icons as SVG via Recraft vectorizer
- [ ] Provide mobile crops for hero (768x1024)
- [ ] Color-correct all assets to match palette: cream #FDF5E6, sage #9CAF88, gold #DAA520, brown #8B7355
- [ ] Test all assets at actual display sizes on the page
- [ ] Add `loading="lazy"` and `width`/`height` attributes to all `<img>` tags

## Asset Placement

When replacing placeholders, find the `PlaceholderImage` component in each section and replace with an `<img>` tag:

```tsx
// Before
<PlaceholderImage label="Hero watercolor" className="..." />

// After
<img
  src="/assets/hero-desktop.webp"
  alt="Children playing with storybooks and toys"
  width={1920}
  height={1080}
  loading="lazy"
  className="..."
/>
```
