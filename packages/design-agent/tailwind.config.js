let hostedTypography = null;
try {
  hostedTypography = require('../../../../lib/appearance/typography.cjs');
} catch {
  // Standalone consumers keep the package's native Tailwind scale. The shared
  // Open Generative registry is an optional host integration.
}

const hostedTypographyTheme = hostedTypography
  ? {
      fontSize: hostedTypography.createTailwindFontSize({ includeFallbacks: true }),
      lineHeight: hostedTypography.createTailwindLineHeight({ includeFallbacks: true }),
    }
  : {};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    ...hostedTypographyTheme,
    extend: {
      colors: {
        primary: "var(--primary)",
        divider: "var(--border-subtle)",
        "bg-page": "var(--bg-page)",
        "bg-card": "var(--bg-card)",
        "bg-card-hover": "var(--bg-card-hover)",
        "primary-text": "var(--text-primary)",
        "secondary-text": "var(--text-secondary)",
        "border-main": "var(--border-default)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
