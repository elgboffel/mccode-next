import { styled } from "@styles/stitches.config";
import { Box } from "@components/primitives/Box/Box";

const Heading = styled(Box, {
  fontFamily: "$heading",
  lineHeight: "$heading",
  fontWeight: "$heading",
  mb: "$4",
  color: "$text",

  variants: {
    size: {
      h1: {
        fontSize: "$11",
      },
      h2: {
        fontSize: "$9",
      },
      h3: {
        fontSize: "$7",
      },
      h4: {
        fontSize: "$5",
      },
      h5: {
        fontSize: "$3",
      },
      h6: {
        fontSize: "$3",
      },
    },
  },
  defaultVariants: {
    size: "h2",
  },
});

Heading.displayName = "HeadingPrimitive";

export { Heading };
