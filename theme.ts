import type { Theme } from "theme-ui";

export const theme: Theme = {
  colors: {
    text: "#1A1A1A",
    background: "#F5F2EB",
    primary: "#228B22",
    secondary: "#A3B18A",
    tertiary: "#60A5FA",
    accent: "#D97706",
  },
  fonts: {
    body: "Inter Variable, sans-serif",
    heading: "Inter Variable, sans-serif",
    monospace: "Menlo, monospace",
  },
  text: {
    heading1: {
      fontFamily: "heading",
      fontWeight: 700,
      fontSize: [6, 8],
      lineHeight: "heading",
    },
    heading2: {
      fontFamily: "heading",
      fontWeight: 600,
      fontSize: [5, 6],
      lineHeight: "heading",
    },
    heading3: {
      fontFamily: "heading",
      fontWeight: 500,
      fontSize: [3, 4],
      lineHeight: "heading",
    },
    body: {
      fontFamily: "body",
      fontWeight: 400,
      fontSize: [1, 2],
      lineHeight: "body",
    },
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64, 80],
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    container: 1440,
  },
  space: [4, 8, 16, 24, 32, 40, 64, 80, 120],
  layout: {
    container: {
      maxWidth: "container",
      mx: "auto",
      px: [3, 6],
    },
  },
  breakpoints: ["768px"],
};
