#!/usr/bin/env node
/**
 * Claude Design Image & Asset Helper
 * 
 * CLI utility for Claude Design workflows:
 * - Generate branded SVG placeholders
 * - Inspect and validate local image assets
 * - Build responsive image manifests
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

const command = process.argv[2] || 'help';

function printHelp() {
  console.log(`
Claude Design Image Helper CLI
-------------------------------
Usage:
  node scripts/design/image-asset-helper.js <command>

Commands:
  audit-assets     Inspect all assets in src/assets and report formats, sizes & presence
  generate-svg     Generate branded vector SVG placeholder cards into public/placeholders/
  help             Show this guidance message
`);
}

function auditAssets() {
  const assetsDir = path.join(rootDir, 'src/assets');
  if (!fs.existsSync(assetsDir)) {
    console.error(`Assets directory not found at: ${assetsDir}`);
    return;
  }

  const files = fs.readdirSync(assetsDir);
  console.log(`\n🔍 Found ${files.length} assets in src/assets:`);
  console.log('----------------------------------------------------');
  
  let totalSize = 0;
  for (const file of files) {
    const filePath = path.join(assetsDir, file);
    const stats = fs.statSync(filePath);
    const kb = (stats.size / 1024).toFixed(1);
    totalSize += stats.size;
    const isWebP = file.endsWith('.webp');
    const isSvg = file.endsWith('.svg');
    const status = (isWebP || isSvg) ? '✅ Modern' : '⚠️ Non-WebP';
    console.log(` • ${file.padEnd(25)} [${kb.padStart(7)} KB] ${status}`);
  }

  console.log('----------------------------------------------------');
  console.log(`Total Asset Payload: ${(totalSize / 1024).toFixed(1)} KB\n`);
}

function generateSvgPlaceholders() {
  const outDir = path.join(rootDir, 'public/placeholders');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const specs = [
    { name: 'product-embiotin.svg', label: 'Embiotin Product Shot (3D Bottle)', color1: '#42104F', color2: '#263D99' },
    { name: 'product-emprotino.svg', label: 'Emprotino Nutritional Supplement', color1: '#42104F', color2: '#D51B70' },
    { name: 'hero-lab-research.svg', label: 'Clinical Laboratory & Formulation Facility', color1: '#263D99', color2: '#1599D0' },
    { name: 'about-scientific-team.svg', label: 'Scientific Advisory & Pharmaceutical Team', color1: '#1F0B26', color2: '#42104F' }
  ];

  for (const spec of specs) {
    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${spec.color1}" />
      <stop offset="100%" stop-color="${spec.color2}" />
    </linearGradient>
    <radialGradient id="halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.12)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0)" />
    </radialGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)" />
  <circle cx="400" cy="300" r="240" fill="url(#halo)" />
  <g transform="translate(400, 260)">
    <rect x="-40" y="-40" width="80" height="80" rx="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.25)" stroke-width="2" />
    <circle cx="0" cy="0" r="14" fill="none" stroke="rgba(255,255,255,0.8)" stroke-width="2.5" />
    <path d="M-6 0 L6 0 M0 -6 L0 6" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round" />
  </g>
  <text x="400" y="340" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="600" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">${spec.label}</text>
  <text x="400" y="370" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" font-weight="400" fill="rgba(255,255,255,0.6)" text-anchor="middle">Claude Design System 2.0 • 800 x 600</text>
</svg>`;

    const dest = path.join(outDir, spec.name);
    fs.writeFileSync(dest, svgContent, 'utf-8');
    console.log(`✅ Generated placeholder: ${spec.name}`);
  }
}

switch (command) {
  case 'audit-assets':
    auditAssets();
    break;
  case 'generate-svg':
    generateSvgPlaceholders();
    break;
  default:
    printHelp();
    break;
}
