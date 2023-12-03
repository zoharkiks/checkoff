/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: ['class', '[data-theme="dark"]'],


  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-primary": "var(--bg-100)",
        "surface-secondary": "var(--bg-200)",
        "surface-tertiary": "var(--bg-300)",
        "accent-primary": "var(--accent-100)",
        "accent-secondary": "var(--accent-200)",
        "text-primary": "var(--text-100)",
        "text-secondary": "var(--text-200)",
        "brand-primary": "var(--primary-100)",
        "brand-secondary": "var(--primary-200)",
        "brand-tertiary": "var(--primary-300)",
      },
    },
  },
  // plugins: [
  //   require("@tailwindcss/forms"),
  //   // ...
  // ],
};
