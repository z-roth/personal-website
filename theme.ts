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
      fontWeight: "heading",
      fontSize: 3,
      lineHeight: "heading",
    },
    heading2: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: 2,
      lineHeight: "heading",
    },
    heading3: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: 1,
      lineHeight: "heading",
    },
    body: {
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 0,
      lineHeight: "body",
    },
  },
  fontWeights: {
    body: 400,
    heading: 400,
  },
  fontSizes: [16, 24, 40, 64],
  lineHeights: {
    body: 1.6,
    heading: 1.25,
  },
  sizes: {
    container: 1440,
  },
  space: [0, 4, 8, 16, 32, 64, 80, 120],
  layout: {
    container: {
      maxWidth: "container",
      mx: "auto",
      px: 6,
    },
  },
};
