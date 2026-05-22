import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  icon?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-10 max-w-3xl",
        align === "center" && "text-center",
        className,
      )}
    >
      <Badge
        variant="cyan"
        className={cn("mb-4", align === "center" && "mx-auto")}
      >
        {icon}
        {eyebrow}
      </Badge>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
