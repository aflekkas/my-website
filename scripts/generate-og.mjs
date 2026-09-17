import sharp from "sharp";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
const portrait = await sharp(fileURLToPath(new URL("src/assets/alexandros-lekkas.webp", root)))
  .resize(128, 128)
  .composite([{
    input: Buffer.from('<svg width="128" height="128"><rect width="128" height="128" rx="16" fill="white"/></svg>'),
    blend: "dest-in",
  }])
  .png()
  .toBuffer();

const cover = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="white"/>
  <g font-family="Inter, Helvetica, Arial, sans-serif">
    <text x="242" y="178" font-size="60" font-weight="500" letter-spacing="-2" fill="#080a0b">Alexandros Lekkas</text>
    <text x="80" y="322" font-size="32" letter-spacing="-0.5" fill="#737373">Computer Science at the University of Chicago.</text>
    <text x="80" y="374" font-size="32" letter-spacing="-0.5" fill="#737373">Building Spawn Partners and software for clients.</text>
    <path d="M80 478H1120" stroke="#e5e5e5"/>
    <text x="80" y="545" font-size="25" fill="#080a0b">aflekkas.com</text>
  </g>
</svg>`);

await sharp(cover)
  .composite([{ input: portrait, left: 80, top: 96 }])
  .png()
  .toFile(fileURLToPath(new URL("public/og.png", root)));

console.log("Generated public/og.png (1200 x 630)");
