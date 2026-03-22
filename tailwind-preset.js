module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          flow: "hsl(239, 84%, 67%)", // #6366f1
          space: "hsl(222, 47%, 11%)", // #0f172a / Background
          pulse: "hsl(173, 80%, 40%)", // #2dd4bf / Success/Indicators
          spark: "hsl(351, 95%, 71%)", // #fb7185 / Creativity/Alerts
          graphite: "hsl(215, 25%, 27%)", // #1e293b / Text-neutral
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        'kreoza': '0.75rem',
      },
    },
  },
  plugins: [],
};
