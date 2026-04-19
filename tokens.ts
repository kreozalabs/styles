export const tokens = {
  colors: {
    light: {
      foreground: "#020617", // 222.2 84% 4.9%
      background: "#f8fafc", // 210 40% 98%
      primary: "#1e60f2", // 221.2 83.2% 53.3%
      "primary-foreground": "#f8fafc",
      "primary-soft": "#eff4ff", // 221.2 83.2% 95%
      secondary: "#f1f5f9",
      "secondary-foreground": "#0f172a",
      accent: "#f1f5f9",
      "accent-foreground": "#0f172a",
      card: "#ffffff",
      "card-foreground": "#020617",
      popover: "#ffffff",
      "popover-foreground": "#020617",
      muted: "#f1f5f9",
      "muted-foreground": "#64748b",
      destructive: "#ef4444",
      "destructive-foreground": "#f8fafc",
      border: "#e2e8f0",
      input: "#e2e8f0",
      ring: "#1e60f2",
    },
    dark: {
      foreground: "#fafafa",
      background: "#1F1F1F",
      primary: "#3b82f6",
      "primary-foreground": "#ffffff",
      "primary-soft": "#262626",
      secondary: "#262626",
      "secondary-foreground": "#fafafa",
      accent: "#262626",
      "accent-foreground": "#fafafa",
      card: "#262626",
      "card-foreground": "#fafafa",
      popover: "#262626",
      "popover-foreground": "#fafafa",
      muted: "#262626",
      "muted-foreground": "#a1a1aa",
      destructive: "#ef4444",
      "destructive-foreground": "#ffffff",
      border: "#333333",
      input: "#333333",
      ring: "#3b82f6",
    },
  },
  typography: {
    fontFamily: '"PT Sans", sans-serif',
    modularScale: {
      h1: "3.5rem",
      h2: "2.5rem",
      h3: "1.75rem",
      h4: "1.5rem",
      h5: "1.25rem",
      base: "1rem",
      small: "0.875rem",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
  },
  borderRadius: {
    small: "0.375rem",
    medium: "0.5rem",
    large: "0.75rem",
    xl: "1rem",
    xxl: "1.5rem",
  },
  accents: {
    blue: {
      primary: "#1e60f2",
      foreground: "#ffffff",
    },
    indigo: {
      primary: "#6366f1",
      foreground: "#ffffff",
    },
    violet: {
      primary: "#8b5cf6",
      foreground: "#ffffff",
    },
    emerald: {
      primary: "#10b981",
      foreground: "#ffffff",
    },
    rose: {
      primary: "#f43f5e",
      foreground: "#ffffff",
    },
    amber: {
      primary: "#f59e0b",
      foreground: "#ffffff",
    },
    forest: {
      primary: "#2da44e",
      foreground: "#ffffff",
    },
  },
} as const;

export type DesignTokens = typeof tokens;
