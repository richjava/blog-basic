const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", 
    "./theme/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      ...{
        //Primary and secondary colors
        "primary": "#e5e7eb",
        "secondary": "#f3f4f6",

        // Accent colors (uses hsl values defined in styles/globals.css)
        "accent": "hsl(var(--hue-accent),var(--saturation-accent),var(--lightness-accent))",
        "accent-hover": "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) + 10%))",
        "accent-active": "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) - 10%))",
        "accent-disabled": "hsl(var(--hue-accent),var(--saturation-accent),calc(var(--lightness-accent) + 30%))",

        // Light and dark colors
        "dark-01": "#4b5563",
        "dark-02": "#374151",
        "dark-03": "#1f2937",
        "dark-04": "#111827",
        "light-01": "#9ca3af",
        "light-02": "#d1d5db",
        "light-03": "#d1d5db",
        "light-04": "#f3f4f6",

        // Other colors
        "current": "currentColor",
      },
    },
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        display: ["Arial", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        // Display sizes
        "display-01": "2.25rem", // 36px
        "display-02": "2.75rem", // 44px
        "display-03": "3.25rem", // 52px
        "display-04": "6rem", // 96px
        
        // Heading sizes

        "heading-01": "1.25rem", // 20px
        "heading-02": "1.5rem", // 24px
        "heading-03": "2.375rem", // 38px
        "heading-04": "2rem", // 32px
        "heading-05": "2.25rem", // 36px
        "heading-06": "2.5rem", // 40px

        // Label sizes

        "label-01": "0.75rem", // 12px
        "label-02": "0.875rem", // 14px
        "label-03": "1rem", // 16px
        "label-04": "1.125rem", // 18px

        // Paragraph sizes

        "paragraph-01": "0.75rem", // 12px
        "paragraph-02": "0.875rem", // 14px
        "paragraph-03": "1rem", // 16px
        "paragraph-04": "1.125rem", // 18px
      },
      lineHeight: {
        // Display line heights
        "display-01": "1.2222222", // 44px
        "display-02": "1.1818182", // 52px
        "display-03": "1.2307692", // 64px
        "display-04": "1.1666667", // 112px

        // Heading line heights
        "heading-01": "1.4", // 28px
        "heading-02": "1.3333333", // 32px
        "heading-03": "1.0526316", // 36px
        "heading-04": "1.25", // 40px
        "heading-05": "1.2222222", // 44px
        "heading-06": "1.3", // 52px

        // Label line heights
        "label-01": "1.1428571", // 16px
        "label-02": "1.1428571", // 16px
        "label-03": "1.25", // 20px
        "label-04": "1.3333333", // 24px

        // Paragraph line heights
        "paragraph-01": "1.6666667", // 20px
        "paragraph-02": "1.4285714", // 20px
        "paragraph-03": "1.5", // 24px
        "paragraph-04": "1.5555556", // 28px
      },
      borderRadius: {
        "corner-01": "0.125rem", // 2px
        "corner-02": "0.25rem", // 4px
        "corner-03": "0.5rem", // 8px
        "corner-04": "0.75rem", //12px
        "corner-05": "1rem", // 16px
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
