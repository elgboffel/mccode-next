import { createStitches } from "@stitches/react";

export const { styled, getCssText } = createStitches({
  theme: {
    media: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
      bp4: "(min-width: 1280px)",
    },
    colors: {
      hiContrast: "hsl(206,2%,93%)",
      loContrast: "hsl(206,8%,8%)",

      gray100: "hsl(206,8%,12%)",
      gray200: "hsl(206,7%,14%)",
      gray300: "hsl(206,7%,15%)",
      gray400: "hsl(206,7%,24%)",
      gray500: "hsl(206,7%,30%)",
      gray600: "hsl(206,5%,53%)",
    },
    fonts: {
      sans: "Inter, sans-serif",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    sizes: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "32px",
      5: "64px",
      6: "128px",
    },
    radii: {
      1: "2px",
      2: "4px",
      3: "8px",
      round: "9999px",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    borderWidths: {},
    borderStyles: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});
