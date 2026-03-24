export const tokens = {
  colors: {
    light: {
      text: "#0c0e13",
      background: "#e8eaed",
      primary: "#5e8cc5",
      "primary-foreground": "#e8eaed",
      secondary: "#2fce03",
      "secondary-foreground": "#0c0e13",
      accent: "#d3763c",
      "accent-foreground": "#e8eaed",
      card: "#e8eaed",
      "card-foreground": "#0c0e13",
      popover: "#e8eaed",
      "popover-foreground": "#0c0e13",
      muted: "#d8d9db", // #d8d9db is approx 210 5% 85%
      "muted-foreground": "#464d59", // #464d59 is approx 225 10% 30%
      destructive: "#ef4444", // #ef4444 is 0 84% 60%
      "destructive-foreground": "#e8eaed",
      border: "#ccd1d9", // #ccd1d9 is 210 10% 80%
      input: "#ccd1d9",
      ring: "#5e8cc5",
    },
    dark: {
      text: "#eceef3",
      background: "#121417",
      primary: "#3a68a1",
      "primary-foreground": "#eceef3",
      secondary: "#5dfc31",
      "secondary-foreground": "#121417",
      accent: "#c3662c",
      "accent-foreground": "#eceef3",
      card: "#121417",
      "card-foreground": "#eceef3",
      popover: "#121417",
      "popover-foreground": "#eceef3",
      muted: "#21252b", // approx 216 10% 15%
      "muted-foreground": "#b0b7c3", // approx 225 10% 70%
      destructive: "#7f1d1d", // approx 0 62.8% 30.6%
      "destructive-foreground": "#eceef3",
      border: "#2d343f", // approx 216 10% 20%
      input: "#2d343f",
      ring: "#3a68a1",
    },
  },
  typography: {
    fontFamily: "'PT Sans', sans-serif",
    modularScale: {
      h1: "5.652rem",
      h2: "3.997rem",
      h3: "2.827rem",
      h4: "1.999rem",
      h5: "1.414rem",
      base: "1rem",
      small: "0.707rem",
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
  },
  borderRadius: {
    small: "0.25rem",
    medium: "0.5rem",
    large: "0.75rem",
    kreoza: "0.75rem",
  },
} as const;

export type DesignTokens = typeof tokens;
