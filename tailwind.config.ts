/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      heading1: [
        "130px",
        {
          lineHeight: "100%",
          fontWeight: "700",
        },
      ],
      heading2: [
        "40px",
        {
          lineHeight: "100%",
          fontWeight: "400",
        },
      ],
      "body-bold": [
        "27px",
        {
          lineHeight: "120%",
          fontWeight: "400",
        },
      ],
      body: [
        "27px",
        {
          lineHeight: "150%",
          fontWeight: "300",
        },
      ],
      "base-bold": [
        "14px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      base: [
        "14px",
        {
          lineHeight: "150%",
          fontWeight: "300",
        },
      ],
      small: [
        "10px",
        {
          lineHeight: "20.4px",
          fontWeight: "300",
        },
      ],
    },
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        heading: "var(--font-zain)",
        body: "var(--font-zain)",
        link: "var(--font-inter)",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
    },
  },
};
