import { cva, type VariantProps } from "class-variance-authority";
import { styled, StyledProps } from "nativewind";
import * as React from "react";
import { Text, TextProps } from "react-native";

import { classMerge } from "@/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const StyledText = styled(Text);

interface LabelProps extends StyledProps<TextProps>
  , VariantProps<typeof labelVariants> {
}


const Label = React.forwardRef<Text, LabelProps>(
  ({ className, ...props }, ref) => (
    <StyledText
      ref={ref}
      className={classMerge(labelVariants(), className)}
      {...props}
    />
  )
);

Label.displayName = "Label";

export { Label };
