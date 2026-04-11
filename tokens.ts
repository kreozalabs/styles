export const tokens = {
  colors: {
    light: {
      foreground: "#020617", // 222.2 84% 4.9%
      background: "#f8fafc", // 210 40% 98%
      primary: "#1e60f2",    // 221.2 83.2% 53.3%
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
      foreground: "#f8fafc",
      background: "#020617",
      primary: "#3b82f6",
      "primary-foreground": "#0f172a",
      "primary-soft": "#1e293b",
      secondary: "#1e293b",
      "secondary-foreground": "#f8fafc",
      accent: "#1e293b",
      "accent-foreground": "#f8fafc",
      card: "#020617",
      "card-foreground": "#f8fafc",
      popover: "#020617",
      "popover-foreground": "#f8fafc",
      muted: "#1e293b",
      "muted-foreground": "#94a3b8",
      destructive: "#7f1d1d",
      "destructive-foreground": "#f8fafc",
      border: "#1e293b",
      input: "#1e293b",
      ring: "#1d4ed8",
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
} as const;

export type DesignTokens = typeof tokens;
