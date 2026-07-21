/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          oilGreen: {
            DEFAULT: "#80856D",
            50: "#F4F5F1",
            100: "#E6E8E1",
            200: "#CED2C4",
            300: "#B3B9A4",
            400: "#9BA189",
            500: "#80856D",
            600: "#676C55",
            700: "#4F5340",
            800: "#363A2B",
            900: "#1E2117",
          },
          pinkSalt: {
            DEFAULT: "#F7CDC7",
            50: "#FFF6F5",
            100: "#FDEAE7",
            200: "#FCD8D2",
            300: "#F7CDC7",
            400: "#F1A89F",
            500: "#EA7E72",
            600: "#D45244",
            700: "#AD3427",
            800: "#862217",
            900: "#5D120B",
          },
          cream: "#FAF8F5",
          sand: "#F2EDE6",
          charcoal: "#2D312E",
          softBg: "#FFFDFB",
        },
      },
      fontFamily: {
        sans: ['"Quicksand"', '"Nunito"', 'sans-serif'],
      },
      borderRadius: {
        xl: "1.25rem",
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      boxShadow: {
        kawaii: "0 8px 30px rgba(128, 133, 109, 0.08)",
        softHover: "0 12px 35px rgba(247, 205, 199, 0.25)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
  ],
};
