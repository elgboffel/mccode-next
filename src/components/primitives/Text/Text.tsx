import { styled } from "@styles/stitches.config";
import { Box } from "@components/primitives/Box/Box";

const Text = styled(Box, {
  variants: {
    variant: {
      caps: {
        textTransform: "uppercase",
        letterSpacing: "0.2em",
      },
    },
  },
});

Text.displayName = "Text";

export { Text };
