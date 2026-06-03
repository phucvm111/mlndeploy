tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0F172A" /* Deep Navy */,
        secondary: "#D4A017" /* Warm Gold */,
        accent: "#8B6F47" /* Muted Brown */,
        "bg-ivory": "#FAF8F3" /* Soft Ivory */,
        "background-light": "#FAF8F3",
        "background-dark": "#0A0F1D",
        "surface-dark": "#121826",
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        lg: "1.25rem",
        xl: "2rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(139, 111, 71, 0.1)",
        card: "0 10px 40px -10px rgba(15, 23, 42, 0.05)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
};
