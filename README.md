# Lens of Uday — 3D Archival Landscape Photography Experience

An interactive 3D photography showcase and fine art archival print store designed for GitHub Pages, created by **Udaykiran Jammula** (`@lensofuday`).

Built from the ground up using **Three.js WebGL**, the **Landing Page Design** system, and modern semantic HTML5.

---

## Key Highlights

* **Hero 3D Optical Lens Simulation**: Interactive Three.js camera optics with physical glass transmission, metallic barrel assembly, reactive iris aperture blades, and damped mouse parallax.
* **3D Spatial Runway Exhibition**: Dual mode viewing that lets visitors fly through a curved 3D gallery runway with momentum drag and zoom, or switch to a structured responsive grid.
* **Tagline Word Reveal (B11)**: Large typography visual philosophy section that activates word by word on scroll on a weighted cubic bezier curve.
* **Collector Lightbox with Camera EXIF**: Full resolution inspection modal displaying focal length, aperture, shutter speed, ISO, and edition numbers in Geist Mono.
* **Print Reservation & Commercial Licensing Desk**: Direct inquiry modal with framing selectors, live dimension options, and form validation.
* **Zero Dependency GitHub Pages Deployment**: Fully static client side architecture with zero build steps or server dependencies required.

---

## Design System Specifications

* **Typography**: Manrope for all interface copy, paired with Geist Mono for camera EXIF metadata. Zero italics, no ultra bold weights.
* **Color Palette**: Strict flat dark mode surfaces (`#000000`, `#181818`, `#1F1F1F`, `#272727`). Zero background gradients.
* **Hero Heading**: Subtle left to right text gradient (`#FFFFFF` to `#9B9B9B`).
* **Motion Physics**: Weighted custom easing `cubic-bezier(0.22, 1, 0.36, 1)` with 500ms duration for layout shifts and 300ms for hover states.
* **Icons**: Phosphor Icons system.
* **Accessibility**: Skip to content link, aria attributes, full keyboard navigation, and reduced motion fallbacks.

---

## Directory Structure

```text
lens_of_uday/
├── index.html         # Main 3D landing page with Three.js viewports & UI
├── photos.json        # Curated index of 45+ photographs with titles & EXIF
├── photos/            # Archival photography directory
│   └── other/         # High resolution captures across Gaddamungu village
├── LICENSE            # MIT License
└── README.md          # Architecture and documentation
```

---

## How to Add New Photographs

1. Place your photograph inside the `photos/other/` directory (or category subfolder) in JPG, WebP, or AVIF format.
2. Add an entry to `photos.json`:

```json
{
  "id": 46,
  "src": "photos/other/new_frame.jpg",
  "title": "Twilight Over Nilgiri",
  "category": "landscape",
  "location": "Nilgiris, Tamil Nadu",
  "exif": "24mm · f/2.8 · 1/250s · ISO 100",
  "year": "2026",
  "edition": "Edition of 25"
}
```

3. Commit and push. GitHub Pages updates automatically.

---

## GitHub Pages Deployment

1. In your repository on GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Set the branch to `main` and folder to `/(root)`.
4. Click **Save**. The site will be live at `https://udaykiranjammula-alpha.github.io/lens_of_uday/`.

---

## License

MIT License © 2026 Udaykiran Jammula
