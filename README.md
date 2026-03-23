# Kreoza Design System

This package contains the core design tokens, CSS variables, and Tailwind configurations for the Kreoza platform.

## Contents

- `base.css`: Standard CSS variables for Light/Dark themes and base typography.
- `tailwind-preset.js`: A Tailwind CSS preset to synchronize your Tailwind theme with these tokens.
- `tokens.ts`: TypeScript constants for programmatic access to the design system.

---

## Integration Guides

### 1. React (Vite / Next.js)

#### Using CSS Variables
Import `base.css` in your main entry point (e.g., `main.tsx` or `_app.tsx`):
```tsx
import '@kreozalabs/styles/base.css';
```

#### Using Tailwind CSS
Add the preset to your `tailwind.config.js`:
```javascript
module.exports = {
  presets: [require('@kreozalabs/styles/tailwind-preset')],
  content: ["./src/**/*.{ts,tsx}"],
  // ...
}
```

#### Using TypeScript Tokens
```tsx
import { tokens } from '@kreozalabs/styles/tokens';

const Button = () => (
  <button style={{ backgroundColor: tokens.colors.light.primary }}>
    Click Me
  </button>
);
```

### 2. Svelte

Import `base.css` in your `__layout.svelte` or `App.svelte`:
```html
<script>
  import '@kreozalabs/styles/base.css';
</script>
```

### 3. Tauri (Desktop & Android)

Since Tauri uses a webview, the integration is identical to the web framework you are using (React/Svelte/etc.). Just ensure `base.css` is loaded to handle system-level theme changes.

To support dark mode switching in Tauri:
```javascript
// Example: Sync with system theme
import { getCurrentWindow } from '@tauri-apps/api/window';

const updateTheme = async () => {
  const theme = await getCurrentWindow().theme();
  document.documentElement.className = theme === 'dark' ? 'dark' : '';
};
```

---

## Design Tokens Summary

### Colors
| Token | Light | Dark |
|-------|-------|------|
| Primary | `#5e8cc5` | `#3a68a1` |
| Secondary | `#2fce03` | `#5dfc31` |
| Accent | `#d3763c` | `#c3662c` |
| Background | `#e8eaed` | `#121417` |
| Text | `#0c0e13` | `#eceef3` |

### Typography
- **Font Family**: `PT Sans`
- **Heading Scale**: Modular (1.414 ratio)
