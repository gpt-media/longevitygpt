#!/usr/bin/env node
// gen-report-og.mjs — one-off generator for the report's static Open Graph image.
//
// The site has a per-page OG mechanism (BaseLayout's `image` prop → og:image/twitter:image)
// but no dynamic OG route. This script renders a branded 1200×630 social card for the
// Healthspan Gap report as a committed static PNG under public/reports/, using the site's
// own palette + serif (matching favicon.svg and global.css). Run on demand, not at build:
//
//   node scripts/gen-report-og.mjs
//
// Rasterized with `sharp` (already in the dependency tree). The PNG is the committed artifact;
// this script just makes it reproducible. Numbers/wording mirror the report verbatim.

import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(fileURLToPath(new URL('..', import.meta.url)));
const OUT = resolve(ROOT, 'public/reports/healthspan-gap-2026-og.png');

// Brand tokens, kept in sync with src/styles/global.css + public/favicon.svg.
const PAPER = '#fbf9f6';
const INK = '#181818';
const INK_SOFT = '#4a4a4a';
const ACCENT = '#2c6184';
const LINE = '#e6e0d8';
const SERIF = "Georgia, 'Times New Roman', serif"; // system-safe serif for headless raster

const W = 1200;
const H = 630;

// 1200×630 social card. Layout: kicker + monogram lockup, headline, the two headline stats
// as a numeric callout, source line. SVG text only (sharp rasterizes with its bundled fonts).
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PAPER}"/>
  <rect x="0" y="0" width="${W}" height="12" fill="${ACCENT}"/>

  <!-- brand lockup -->
  <g>
    <rect x="72" y="72" width="48" height="48" rx="11" fill="${ACCENT}"/>
    <text x="96" y="106" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="30" fill="#ffffff">L</text>
    <text x="136" y="105" font-family="${SERIF}" font-weight="700" font-size="28" fill="${INK}">The<tspan fill="${ACCENT}">Longevity</tspan>GPT</text>
  </g>

  <text x="72" y="190" font-family="-apple-system, Helvetica, Arial, sans-serif" font-weight="700" font-size="22" letter-spacing="3" fill="${ACCENT}">ORIGINAL DATA STUDY</text>

  <text x="72" y="262" font-family="${SERIF}" font-weight="700" font-size="62" fill="${INK}">The Healthspan Gap Index 2026</text>

  <!-- headline stats: years lived unwell + widest national gap -->
  <g font-family="${SERIF}">
    <text x="72" y="430" font-weight="700" font-size="130" fill="${ACCENT}">9.7<tspan font-size="40" fill="${INK_SOFT}" font-family="-apple-system, Helvetica, Arial, sans-serif" font-weight="600"> yrs</tspan></text>
    <text x="72" y="478" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="26" fill="${INK}">Average years spent in poor health at the end of life</text>
  </g>

  <line x1="640" y1="320" x2="640" y2="490" stroke="${LINE}" stroke-width="2"/>

  <g font-family="${SERIF}">
    <text x="688" y="430" font-weight="700" font-size="130" fill="${INK}">12.7<tspan font-size="40" fill="${INK_SOFT}" font-family="-apple-system, Helvetica, Arial, sans-serif" font-weight="600"> yrs</tspan></text>
    <text x="688" y="478" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="26" fill="${INK}">United States: the widest gap in the world</text>
  </g>

  <text x="72" y="566" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="22" fill="${INK_SOFT}">Life expectancy minus healthy life expectancy, 185 countries (WHO data)</text>
  <text x="${W - 72}" y="566" text-anchor="end" font-family="-apple-system, Helvetica, Arial, sans-serif" font-size="22" fill="${INK_SOFT}">thelongevitygpt.com</text>
</svg>`;

mkdirSync(dirname(OUT), { recursive: true });
const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(OUT, png);
console.log(`[gen-report-og] wrote ${OUT} (${png.length} bytes, ${W}x${H})`);
