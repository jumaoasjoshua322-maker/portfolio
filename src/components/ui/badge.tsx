import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        default: "border-white/12 bg-white/6 text-zinc-200",
        success: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
        cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
        amber: "border-amber-300/25 bg-amber-300/10 text-amber-100",
        rose: "border-rose-300/25 bg-rose-300/10 text-rose-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
