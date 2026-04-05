import SectionHeader from "@/components/SectionHeader";

const ventures = [
  {
    name: "Nica Strong Studios",
    description: "Photography rooted in storytelling, presence, and human connection.",
    url: "#"
  },
  {
    name: "Nica’s Luxury Travel",
    description: "Curated travel experiences shaped by care, detail, and meaningful design.",
    url: "#"
  },
  {
    name: "MRJ Enterprises",
    description: "Mission-driven entrepreneurship and a growing ecosystem of vision and purpose.",
    url: "#"
  },
  {
    name: "The Strong Foundation",
    description: "A nonprofit-centered expression of service, care, and impact.",
    url: "#"
  }
];

export default function VenturesPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Ventures"
          title="Connected work"
          tagline="A few of the businesses and mission-driven spaces connected to my broader world."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {ventures.map((venture) => (
            <a
              key={venture.name}
              href={venture.url}
              className="card block hover:border-gold/40 hover:shadow-lg"
            >
              <h3 className="mb-3 font-serif text-2xl text-plum">{venture.name}</h3>
              <p className="leading-8 text-charcoal/80">{venture.description}</p>
              <span className="mt-4 inline-block text-sm text-gold">
                External link →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
