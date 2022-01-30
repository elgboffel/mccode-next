import * as Primitive from "@components/primitives/Heading/Heading";
import React from "react";

type HeadingProps = React.ComponentProps<typeof Primitive.Heading> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h2", ...otherProps }, ref) => (
    <Primitive.Heading {...otherProps} ref={ref} as={as} />
  )
);

Heading.displayName = "Heading";

export { Heading };
