/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "eunry-950": "#362019",
        "eunry-50": "#fbf6f5",
        "azure-radiance-50": "#f0f7fe",
        "azure-radiance-600": "#3478e5",
        "button-primary-regular-text": "#effaf5",
        "azure-radiance-950": "#192a52",
      },
      spacing: {},
      fontFamily: {
        "heading-desktop-h2": "Roboto",
        "label-large": "Causten",
      },
      borderRadius: {
        "13xl": "32px",
      },
    },
    fontSize: {
      lg: "18px",
      "29xl": "48px",
      base: "16px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
