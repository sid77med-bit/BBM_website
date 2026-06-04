type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  inverse = false
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`mb-3 text-xs font-bold uppercase ${
          inverse ? "text-red-200" : "text-[var(--bbm-red)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${
          inverse ? "text-white" : "text-[var(--bbm-black)]"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-4 text-base leading-7 ${inverse ? "text-white/[0.72]" : "text-neutral-600"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
