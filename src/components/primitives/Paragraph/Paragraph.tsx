import React from "react";
import * as Primitive from "@components/primitives/Text/Text";
import { paragraphStyles } from "./styles";

type HeadingProps = React.ComponentProps<typeof Primitive.Text>;

const Paragraph = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ css, ...otherProps }, ref) => (
    <Primitive.Text
      css={{
        ...paragraphStyles,
        ...css,
      }}
      {...otherProps}
      ref={ref}
      as={"p"}
    />
  )
);

Paragraph.displayName = "Paragraph";

export { Paragraph };
