import fs from 'node:fs';
import path from 'node:path';
import Color from 'color';
import { tokens } from '../tokens.ts';

const OUTPUT_FILE = path.join(process.cwd(), 'tokens.css');

function hexToHslValues(hex: string): string {
  const color = Color(hex);
  const hsl = color.hsl().array();
  // We want: H S% L% (without the hsl() wrapper) for Tailwind opacity support
  return `${Math.round(hsl[0])} ${Math.round(hsl[1])}% ${Math.round(hsl[2])}%`;
}

function generateCSS() {
  let css = '/* Generated file - do not edit manually */\n\n@layer base {\n  :root {\n';

  // Light colors
  Object.entries(tokens.colors.light).forEach(([name, value]) => {
    css += `    --${name}: ${hexToHslValues(value)}; /* ${value} */\n`;
  });

  // Typography & Border Radius
  css += '\n    /* Typography */\n';
  css += `    --font-family-sans: ${tokens.typography.fontFamily};\n`;
  Object.entries(tokens.typography.modularScale).forEach(([name, value]) => {
    css += `    --font-size-${name}: ${value};\n`;
  });
  
  css += '\n    /* Border Radius */\n';
  Object.entries(tokens.borderRadius).forEach(([name, value]) => {
    css += `    --radius-${name}: ${value};\n`;
  });

  css += '  }\n\n  .dark {\n';

  // Dark colors
  Object.entries(tokens.colors.dark).forEach(([name, value]) => {
    css += `    --${name}: ${hexToHslValues(value)}; /* ${value} */\n`;
  });

  // Tailwind CSS v4 Theme Block
  css += '  }\n\n  /* Tailwind CSS v4 Theme */\n';
  css += '  @theme {\n';
  
  // Map colors
  Object.keys(tokens.colors.light).forEach((name) => {
    css += `    --color-${name}: hsl(var(--${name}));\n`;
  });

  // Map Typography
  css += '    --font-sans: var(--font-family-sans);\n';
  Object.keys(tokens.typography.modularScale).forEach((name) => {
    css += `    --text-${name}: var(--font-size-${name});\n`;
  });

  // Map Radius
  Object.keys(tokens.borderRadius).forEach((name) => {
    css += `    --radius-${name}: var(--radius-${name});\n`;
  });

  css += '  }\n}\n';

  fs.writeFileSync(OUTPUT_FILE, css);
  console.log(`Successfully generated ${OUTPUT_FILE}`);
}

generateCSS();
