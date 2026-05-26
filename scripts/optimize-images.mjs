import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const OUT = "public/images";
await mkdir(OUT, { recursive: true });

// Hero
const HERO_SRC = "src/assets/hero-tech.png";
const HERO_WIDTHS = [1920, 640];
for (const w of HERO_WIDTHS) {
  const base = `${OUT}/hero-tech-${w}`;
  await sharp(HERO_SRC).resize({ width: w }).webp({ quality: 72 }).toFile(`${base}.webp`);
  await sharp(HERO_SRC).resize({ width: w }).jpeg({ quality: 78, progressive: true, mozjpeg: true }).toFile(`${base}.jpg`);
  console.log(`generated: hero-tech-${w}.{webp,jpg}`);
}

// Logo — convert near-black background to transparent so it blends with any page bg.
// Soft threshold preserves the green glow around the icon: pure black → fully transparent,
// near-black (anti-aliased edges and faint glow tails) → proportional alpha.
const LOGO_SRC = "src/assets/logo.png";
const LOGO_WIDTH = 600;

const { data: rawPixels, info: rawInfo } = await sharp(LOGO_SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const pixels = Buffer.from(rawPixels);
const HARD_CUT = 40;  // luma below this = fully transparent (catches dark anti-aliased bg)
const SOFT_END = 75;  // luma above this = keep original alpha (preserves the green glow)
for (let i = 0; i < pixels.length; i += 4) {
  const luma = Math.max(pixels[i], pixels[i + 1], pixels[i + 2]);
  if (luma <= HARD_CUT) {
    pixels[i + 3] = 0;
  } else if (luma < SOFT_END) {
    pixels[i + 3] = Math.round(((luma - HARD_CUT) / (SOFT_END - HARD_CUT)) * 255);
  }
}

await sharp(pixels, { raw: rawInfo })
  .trim()
  .resize({ width: LOGO_WIDTH })
  .webp({ quality: 92 })
  .toFile(`${OUT}/logo.webp`);
await sharp(pixels, { raw: rawInfo })
  .trim()
  .resize({ width: LOGO_WIDTH })
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/logo-opt.png`);
console.log(`generated: logo.webp, logo-opt.png (black bg made transparent)`);

// Favicon variants — use SolSuite loader.png (224x229, transparent bg, pure icon-only)
const FAVICON_SRC = "../SolSuite10/src/SolSuite.Web/wwwroot/images/loader.png";
for (const size of [16, 32, 180, 192, 512]) {
  await sharp(FAVICON_SRC)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(`public/favicon-${size}.png`);
}
console.log("generated: favicon-{16,32,180,192,512}.png");

// SolSuite screenshots — process 8 sources (4 modules × 2 languages) for the product showcase page
const SOLSUITE_SRC = "src/assets/solsuite";
const SOLSUITE_OUT = `${OUT}/solsuite`;
await mkdir(SOLSUITE_OUT, { recursive: true });

// central-* is the hero image (wider display), modules are smaller cards
const solsuiteAssets = [
  { name: "central", width: 1600 },
  { name: "solpass", width: 1000 },
  { name: "solassets", width: 1000 },
  { name: "solit", width: 1000 },
];

for (const { name, width } of solsuiteAssets) {
  for (const lang of ["EL", "EN"]) {
    const src = `${SOLSUITE_SRC}/${name}-${lang}.png`;
    const outBase = `${SOLSUITE_OUT}/${name}-${lang.toLowerCase()}`;
    await sharp(src).resize({ width }).webp({ quality: 85 }).toFile(`${outBase}.webp`);
    await sharp(src).resize({ width }).png({ compressionLevel: 9 }).toFile(`${outBase}.png`);
  }
}
console.log(`generated: solsuite screenshots (4 modules × 2 languages × 2 formats = 16 files)`);

// OG image — 1200x630 with SolSystems dark logo centered on black background
const OG_LOGO = "src/assets/logo.png"; // dark bg variant blends seamlessly with black canvas
const ogLogoBuf = await sharp(OG_LOGO).resize({ width: 760 }).toBuffer();
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 1 } },
})
  .composite([{ input: ogLogoBuf, gravity: "centre" }])
  .png({ compressionLevel: 9 })
  .toFile("public/og-image.png");
console.log("generated: og-image.png (1200x630)");
