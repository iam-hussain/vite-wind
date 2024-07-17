import { styled } from "nativewind";
import * as React from "react";
import { TextInput, TextInputProps } from "react-native";

import { classMerge } from "@/utils";

export interface InputProps extends TextInputProps {}

const StyledTextInput = styled(TextInput);

const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <StyledTextInput
        ref={ref}
        className={classMerge(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
