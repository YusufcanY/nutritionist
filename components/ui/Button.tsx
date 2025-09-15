import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'bg-green-70 text-grey-15 hover:bg-green-75',
        outline:
          'border border-green-85 bg-green-95 text-grey-15 hover:bg-green-90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-xs',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default:
          'h-[45px] rounded-md px-4 py-3 text-sm has-[>svg]:px-3 desktop:h-[55px] desktop:rounded-lg desktop:px-6 desktop:py-4 desktop:text-lg',
        sm: 'h-[45px] gap-1.5 px-4 py-3 has-[>svg]:px-2.5',
        lg: 'h-[65px] rounded-md px-6 text-xl has-[>svg]:px-4',
        icon: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
