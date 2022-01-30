import { createStitches } from "@stitches/react";
import * as Stitches from "@stitches/react";

export const { styled, css, globalCss, getCssText, theme, config, keyframes } =
  createStitches({
    media: {
      bp1: "(min-width: 640px)",
      bp2: "(min-width: 768px)",
      bp3: "(min-width: 1024px)",
      bp4: "(min-width: 1280px)",
    },
    theme: {
      colors: {
        black: "#000",
        gray500: "hsl(206,10%,76%)",
        blue500: "hsl(206,100%,50%)",
        purple500: "hsl(252,78%,60%)",
        green500: "hsl(148,60%,60%)",
        red500: "hsl(352,100%,62%)",

        text: "$black",
        background: "gray500",
        primary: "blue500",
        secondary: "green500",
        accent: "purple500",
        highlighted: "red500",
        muted: "gray500",

        focus: "blue500",
      },
      fonts: {
        sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif," Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
        mono: '"IBM Plex Mono", "JetBrains Mono", "Fira Code", "Input Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',

        text: "$sans",
        heading: "$serif",
      },
      fontSizes: {
        body: "1rem",
        0: "0.625rem", // 10px
        1: "0.75rem", // 12px
        2: "0.875rem", // 14px
        3: "1rem", // 16px - body, h5, h4
        4: "1.125rem", // 18px
        5: "1.25rem", // 20px
        6: "1.375rem", // 22px
        7: "1.5625rem", // 25px - h3
        8: "1.75rem", // 28px
        9: "2rem", // 32px - h2
        10: "2.25rem", // 36px
        11: "2.625rem", // 42px - h1
        12: "2.875rem", // 46px
        13: "3.1875rem", // 51px
      },
      fontWeights: {
        thin: "100",
        extraLight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",

        body: "$normal",
        heading: "$bold",
      },
      letterSpacings: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",

        body: "$normal",
        heading: "$wide",
      },
      lineHeights: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",

        body: "$relaxed",
        heading: "$tight",
      },
      space: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        17: "68px",
        18: "72px",
        19: "76px",
        20: "80px",
        21: "84px",
        22: "88px",
        23: "92px",
        24: "96px",
        25: "100px",
        26: "110px",
        27: "120px",
        28: "130px",
        29: "140px",
        30: "150px",
        31: "160px",
        32: "170px",
        33: "180px",
        34: "190px",
        35: "200px",
      },
      sizes: {
        container: "1200px",
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
        11: "44px",
        12: "48px",
        13: "52px",
        14: "56px",
        15: "60px",
        16: "64px",
        17: "68px",
        18: "72px",
        19: "76px",
        20: "80px",
        21: "84px",
        22: "88px",
        23: "92px",
        24: "96px",
        25: "100px",
        26: "110px",
        27: "120px",
        28: "130px",
        29: "140px",
        30: "150px",
        31: "160px",
        32: "170px",
        33: "180px",
        34: "190px",
        35: "200px",
      },
      radii: {
        none: "0",
        sm: "0.125rem",
        default: "0.25rem",
        m: "0.4rem",
        lg: "0.625rem",
        xl: "1rem",
        full: "9999px",
        round: "50%",
        pill: "9999px",
      },
      zIndices: {
        1: "100",
        2: "200",
        3: "300",
        4: "400",
        5: "500",
        6: "600",
        7: "700",
        8: "800",
        9: "900",
        max: "999",
      },
      borderWidths: {
        "0": "0",
        "1": "1px",
        "2": "2px",
      },
      borderStyles: {},
      shadows: {},
      transitions: {},
    },
    utils: {
      m: (value: Stitches.PropertyValue<"margin">) => ({
        margin: value,
      }),
      mt: (value: Stitches.PropertyValue<"margin">) => ({
        marginTop: value,
      }),
      mr: (value: Stitches.PropertyValue<"margin">) => ({
        marginRight: value,
      }),
      mb: (value: Stitches.PropertyValue<"margin">) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<"margin">) => ({
        marginLeft: value,
      }),
      mx: (value: Stitches.PropertyValue<"margin">) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<"margin">) => ({
        marginTop: value,
        marginBottom: value,
      }),

      p: (value: Stitches.PropertyValue<"padding">) => ({
        padding: value,
      }),
      pt: (value: Stitches.PropertyValue<"padding">) => ({
        paddingTop: value,
      }),
      pr: (value: Stitches.PropertyValue<"padding">) => ({
        paddingRight: value,
      }),
      pb: (value: Stitches.PropertyValue<"padding">) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<"padding">) => ({
        paddingLeft: value,
      }),
      px: (value: Stitches.PropertyValue<"padding">) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<"padding">) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      size: (value: Stitches.PropertyValue<"width">) => ({
        width: value,
        height: value,
      }),

      linearGradient: (value: Stitches.PropertyValue<"backgroundImage">) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      br: (value: Stitches.PropertyValue<"borderRadius">) => ({
        borderRadius: value,
      }),

      bc: (value: Stitches.PropertyValue<"backgroundColor">) => ({
        backgroundColor: value,
      }),
    },
  });
