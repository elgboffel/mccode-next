import { Box } from "@components/primitives/Box/Box";
import { styled } from "@styles/stitches.config";

const Container = styled(Box, {
  mx: "auto",
  px: "$3",
  maxWidth: "$container",
  "@bp2": {
    px: "$4",
  },
});

Container.displayName = "Container";

export { Container };
