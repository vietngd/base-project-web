import {
  colors,
  typography,
  radius,
  shadow,
  fontSize,
} from "./src/design-system/tokens";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { ...colors },
      fontFamily: {
        sans: [typography.fontFamily, "sans-serif"],
      },
      fontSize: {
        ...typography.fontSize, // nếu bạn vẫn muốn giữ font-size tĩnh
        ...fontSize, // thêm font-size responsive
      },
      borderRadius: radius,
      boxShadow: shadow,
    },
  },
  plugins: [],
};
