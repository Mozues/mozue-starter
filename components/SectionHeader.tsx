type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  tagline: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  tagline,
  imageSrc,
  imageAlt,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="card flex items-center justify-center bg-white/70 p-6">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="h-auto w-full max-w-[220px] rounded-2xl"
          />
        ) : (
          <div className="text-center">
            <p className="eyebrow mb-4">Section Image</p>
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border border-gold/30 text-center text-plum/70">
              Add section image here
            </div>
          </div>
        )}
      </div>

      <div>
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="page-title mb-4 text-plum">{title}</h1>
        <p className="mb-4 text-xl italic text-gold">{tagline}</p>
        <p className="page-subtitle">
          A dedicated space within Mozue for documenting this part of the journey.
        </p>
      </div>
    </div>
  );
}