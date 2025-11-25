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
      heading3: [
        "50px",
        {
          lightHeight: "100%",
          fontWeight: "500",
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
      animation: {
        "star-movement-bottom":
          "star-movement-bottom linear infinite alternate",
        "star-movement-top": "star-movement-top linear infinite alternate",
        shine: "shine 5s linear infinite",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
    },
  },
};
