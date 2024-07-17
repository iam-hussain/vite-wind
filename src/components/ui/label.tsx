import { cva, type VariantProps } from "class-variance-authority";
import { styled } from "nativewind";
import * as React from "react";
import { Text, TextProps } from "react-native";

import { classMerge } from "@/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

interface LabelProps extends TextProps, VariantProps<typeof labelVariants> {
  className?: string;
}

const StyledText = styled(Text);

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
