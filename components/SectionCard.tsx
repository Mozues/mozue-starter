import Link from "next/link";

type SectionCardProps = {
  href: string;
  title: string;
  tagline: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function SectionCard({
  href,
  title,
  tagline,
  description,
  imageSrc,
  imageAlt,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className="card block overflow-hidden transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-lg"
    >
      {imageSrc ? (
        <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-white">
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className="h-32 w-auto object-contain"
          />
        </div>
      ) : null}

      <p className="mb-3 text-sm uppercase tracking-[0.18em] text-gold">
        {tagline}
      </p>
      <h3 className="mb-3 text-2xl text-plum">{title}</h3>
      <p className="leading-8 text-charcoal/80">{description}</p>
      <span className="mt-5 inline-block text-sm text-plum">Explore →</span>
    </Link>
  );
}