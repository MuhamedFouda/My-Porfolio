import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  title: string;
  subtitle?: string;
};

export function Section({
  title,
  subtitle,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      <div className="mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-base text-muted">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
