# @kreozalabs/styles

Core design system for the Kreoza platform. This package provides synchronized design tokens for TypeScript, CSS, and Tailwind CSS (v3 and v4).

## 🚀 Usage

### 1. Tailwind CSS v4 (Recommended)
Tailwind v4 is CSS-first. Simply import the styles in your main CSS file:
```css
@import "tailwindcss";
@import "@kreozalabs/styles";
```
This automatically registers all theme variables (e.g., `bg-primary`, `text-h1`).

### 2. TypeScript / JavaScript
Programmatic access to all raw hex values and design constants:
```typescript
import { tokens } from '@kreozalabs/styles';

const primaryColor = tokens.colors.light.primary;
```

### 3. Tailwind CSS v3
Add the preset to your `tailwind.config.js`:
```javascript
module.exports = {
  presets: [require('@kreozalabs/styles/tailwind-preset')],
  content: ["./src/**/*.{ts,tsx}"],
}
```

---

## 🛠 Maintenance (Single Source of Truth)

This package uses `tokens.ts` as the **Single Source of Truth**. Do not edit `tokens.css` or `base.css` variables manually.

### How to update existing values
1. Open `tokens.ts`.
2. Update the values (colors, fonts, etc.).
3. Run `pnpm build`. This will regenerate `tokens.css` and the `dist/` files.

### How to add NEW token categories
If you add a new category to `tokens.ts` (e.g., `spacing` or `shadows`):
1. Update `tokens.ts` with the new data.
2. Update `scripts/sync-tokens.ts` to include the logic for mapping these new tokens to CSS variables and the Tailwind `@theme` block.
3. Run `pnpm build`.

---

## 📜 Development Scripts

- `pnpm build`: Cleans, synchronizes tokens, and transpiles.
- `pnpm clean`: Removes all generated files (`dist/`, `tokens.css`).
- `pnpm build:tokens`: Only runs the synchronization script.
- `pnpm pack`: Creates a `.tgz` for local testing.

---

## 🎨 Design Summary

- **Primary Font**: `PT Sans` (legible, professional sans-serif).
- **Modular Scale**: Uses a **1.414 ratio** (Augmented Fourth) to ensure harmonious typography sizing across all headings.
- **Color System**: Tokens are centralized in `tokens.ts` to ensure consistent saturation and contrast across Light and Dark themes.
- **License**: BSD-3-Clause
