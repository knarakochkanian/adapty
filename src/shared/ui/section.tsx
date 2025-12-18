"use client";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  /** Override the default max width of the inner container */
  maxWidthClass?: string;
  /** Stretch inner container full width (ignores maxWidthClass) */
  fullWidth?: boolean;
};

export default function Section({ id, children, className, maxWidthClass, fullWidth }: SectionProps) {
  const innerClass = fullWidth ? "w-full" : `mx-auto ${maxWidthClass ?? "max-w-6xl"}`;

  return (
    <section id={id} className={`px-4 py-2  sm:py-4 lg:py-8 sm:px-8 lg:px-16 ${className ?? ""}`}>
      <div className={innerClass}>{children}</div>
    </section>
  );
}
