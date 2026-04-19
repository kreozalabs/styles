import fs from 'node:fs';
import path from 'node:path';
import Color from 'color';
import { tokens } from '../tokens.js';

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
  css += '    --font-heading: var(--font-family-sans);\n';
  css += '    --font-sans: var(--font-family-sans);\n';
  Object.keys(tokens.typography.modularScale).forEach((name) => {
    css += `    --text-${name}: var(--font-size-${name});\n`;
  });

  // Map Radius
  Object.keys(tokens.borderRadius).forEach((name) => {
    css += `    --radius-${name}: var(--radius-${name});\n`;
  });

  css += '  }\n\n';

  // Accent Themes
  // For each accent, we generate a class that overrides the primary variables
  Object.entries(tokens.accents).forEach(([name, accentData]) => {
    // Cast to any to handle the deep nesting easily in the script
    const accent = accentData as any;
    
    css += `  .theme-${name} {\n`;
    css += `    --primary: ${hexToHslValues(accent.primary)};\n`;
    css += `    --primary-foreground: ${hexToHslValues(accent.foreground)};\n`;
    css += `    --ring: ${hexToHslValues(accent.primary)};\n`;

    // Add Base (Light) overrides if any
    if (accent.overrides && accent.overrides.light) {
      Object.entries(accent.overrides.light).forEach(([key, value]) => {
        css += `    --${key}: ${hexToHslValues(value as string)};\n`;
      });
    }

    css += `  }\n\n`;

    // Add Dark overrides if any
    if (accent.overrides && accent.overrides.dark) {
      css += `  .dark .theme-${name} {\n`;
      Object.entries(accent.overrides.dark).forEach(([key, value]) => {
        css += `    --${key}: ${hexToHslValues(value as string)};\n`;
      });
      css += `  }\n\n`;
    }
  });

  css += '}\n';

  fs.writeFileSync(OUTPUT_FILE, css);
  console.log(`Successfully generated ${OUTPUT_FILE}`);
}

generateCSS();
