import { cva, type VariantProps } from "class-variance-authority";
import { styled } from "nativewind";
import * as React from "react";
import { Pressable, PressableProps, Text, View } from "react-native";

import Icon, { IconKey } from "@/components/ui/icon";
import { classMerge } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 flex-row gap-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        transparent: "bg-transparent",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-accent text-accent-foreground shadow-sm hover:bg-accent/90",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-8",
      },
      placement: {
        default: "flex-row",
        reverse: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      placement: "default",
    },
  }
);

const btnLabelVariants = cva("text-sm font-medium", {
  variants: {
    variant: {
      default: "text-primary-foreground",
      destructive: "text-destructive-foreground",
      outline: "hover:text-accent-foreground",
      secondary: "text-secondary-foreground",
      ghost: "hover:text-accent-foreground",
      transparent: "",
      link: "text-primary underline-offset-4 hover:underline",
      accent: "text-accent-foreground",
    },
    size: {
      default: "text-sm",
      sm: "text-xs",
      lg: "text-base",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const btnIconVariants = cva("text-sm font-medium", {
  variants: {
    size: {
      default: "h-5 w-5",
      sm: "h-4 w-4",
      lg: "h-7 w-7",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface IconProps {
  icon?: IconKey;
  iconPlacement?: "left" | "right";
}

interface IconRefProps {
  icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps
  extends Omit<PressableProps, "children">,
    VariantProps<typeof buttonVariants>,
    IconProps {
  asChild?: boolean;
  className?: string;
  children?: React.ReactNode;
  label?: string;
}

export type ButtonIconProps = IconProps | IconRefProps;

const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const ButtonComponent = React.forwardRef<View, ButtonProps & ButtonIconProps>(
  ({ className, variant, size, placement, icon, label, ...props }, ref) => {
    return (
      <StyledPressable
        ref={ref}
        className={classMerge(
          buttonVariants({ variant, size, placement, className })
        )}
        {...props}
      >
        {icon && (
          <Icon name={icon} className={classMerge(btnIconVariants({ size }))} />
        )}

        {label && (
          <StyledText
            className={classMerge(btnLabelVariants({ variant, size }))}
          >
            {label}
          </StyledText>
        )}
      </StyledPressable>
    );
  }
);

ButtonComponent.displayName = "Button";

export default ButtonComponent;
