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

// Logo — trim transparent padding, resize, output webp + png fallback
const LOGO_SRC = "src/assets/logo.png";
const LOGO_WIDTH = 600;
await sharp(LOGO_SRC)
  .trim()
  .resize({ width: LOGO_WIDTH })
  .webp({ quality: 92 })
  .toFile(`${OUT}/logo.webp`);
await sharp(LOGO_SRC)
  .trim()
  .resize({ width: LOGO_WIDTH })
  .png({ compressionLevel: 9 })
  .toFile(`${OUT}/logo-opt.png`);
console.log(`generated: logo.webp, logo-opt.png`);
