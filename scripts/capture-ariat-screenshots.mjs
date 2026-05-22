// Capture polished screenshots of the deployed ARIAT-Na site so the portfolio
// can show real product UI instead of a stylized mockup.
//
// Run with: node scripts/capture-ariat-screenshots.mjs
import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

const SITE = "https://ariat-na.onrender.com/";
const OUT_DIR = join(process.cwd(), "public", "projects", "ariat-na");

async function settle(page) {
  // Best-effort: wait for fonts, lazy images, and gentle entrance animations.
  await page.waitForLoadState("networkidle", { timeout: 30_000 }).catch(() => {});
  await page.evaluate(() => document.fonts?.ready).catch(() => {});
  // Trigger any scroll-linked content, then return to the top.
  await page.evaluate(async () => {
    const step = 600;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
}

async function shoot({ name, viewport, deviceScaleFactor = 2, fullPage = false, clip }) {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor,
    colorScheme: "dark",
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  console.log(`→ ${name} (${viewport.width}x${viewport.height})`);
  await page.goto(SITE, { waitUntil: "domcontentloaded", timeout: 60_000 });
  await settle(page);
  const target = join(OUT_DIR, `${name}.png`);
  await page.screenshot({ path: target, fullPage, clip });
  console.log(`   saved ${target}`);
  await browser.close();
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  // 1) Desktop hero — what a recruiter sees first.
  await shoot({
    name: "desktop-hero",
    viewport: { width: 1440, height: 900 },
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });

  // 2) Desktop full page — for a longer, story-style preview.
  await shoot({
    name: "desktop-full",
    viewport: { width: 1440, height: 900 },
    fullPage: true,
  });

  // 3) Mobile shot — proves the responsive UX claim.
  const iphone = devices["iPhone 13 Pro"];
  await shoot({
    name: "mobile",
    viewport: iphone.viewport,
    deviceScaleFactor: iphone.deviceScaleFactor ?? 3,
    fullPage: true,
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
