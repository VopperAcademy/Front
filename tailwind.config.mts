/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3a43a0",
      },
    },
    fontFamily: {
      'montserrat': ['"Montserrat"', 'serif'],
    }
  },
  plugins: [
    function ({ addUtilities }: any) {
      addUtilities({
        ".no-scroll-cursor::-webkit-scrollbar": {
          display: "none",
        },
        "no-scroll-cursor": {
          'scrollbar-width': 'none', // Firefox
          'cursor': 'none', // Quitar el cursor
        },
      });
    },
  ],
};
