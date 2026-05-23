import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const SRC = "src/assets/hero-tech.png";
const OUT = "public/images";
const WIDTHS = [1920, 640];

await mkdir(OUT, { recursive: true });

for (const w of WIDTHS) {
  const base = `${OUT}/hero-tech-${w}`;
  await sharp(SRC).resize({ width: w }).webp({ quality: 72 }).toFile(`${base}.webp`);
  await sharp(SRC).resize({ width: w }).jpeg({ quality: 78, progressive: true, mozjpeg: true }).toFile(`${base}.jpg`);
  console.log(`generated: hero-tech-${w}.{webp,jpg}`);
}
