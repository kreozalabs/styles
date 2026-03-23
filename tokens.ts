/**
 * Kreoza Design Tokens
 * These constants can be used in React, Svelte, or any TypeScript project.
 */

export const tokens = {
  colors: {
    light: {
      text: "#0c0e13",
      background: "#e8eaed",
      primary: "#5e8cc5",
      secondary: "#2fce03",
      accent: "#d3763c",
    },
    dark: {
      text: "#eceef3",
      background: "#121417",
      primary: "#3a68a1",
      secondary: "#5dfc31",
      accent: "#c3662c",
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
