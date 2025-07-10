import { cva, type VariantProps } from 'class-variance-authority';
import type React from 'react';
import { cloneElement, isValidElement, type ReactElement } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva('flex items-center gap-2 rounded-lg font-medium', {
  variants: {
    variant: {
      default:
        'border border-[#333333] bg-linear-to-tl from-[#262626] to-[#444444] text-shadow-xs text-white shadow-xs shadow-xs hover:bg-linear-to-bl',
      ghost: 'hover:bg-accent',
    },
    size: {
      default: 'h-9 px-4 py-2 text-sm has-[>svg]:px-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = {
  asChild?: boolean;
  children: React.ReactNode;
} & VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  asChild = false,
  children,
  className,
  variant,
  size,
  ...rest
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (asChild && isValidElement(children)) {
    type ElementWithClassName = ReactElement<{ className?: string }>;
    const child = children as ElementWithClassName;

    return cloneElement(child, {
      ...rest,
      className: cn(child.props.className, classes),
    });
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
