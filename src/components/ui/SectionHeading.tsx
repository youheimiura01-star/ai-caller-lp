interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  variant?: "dark" | "light";
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  variant = "dark",
  centered = true,
}: SectionHeadingProps) {
  const titleColor =
    variant === "dark" ? "text-text-primary" : "text-white";
  const subtitleColor =
    variant === "dark" ? "text-text-secondary" : "text-white/80";
  const alignment = centered ? "text-center" : "text-left";

  return (
    <div className={`${alignment} mb-12 md:mb-16`}>
      <h2
        className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl ${subtitleColor} max-w-2xl ${centered ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
