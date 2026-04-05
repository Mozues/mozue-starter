import SectionHeader from "@/components/SectionHeader";
import SimpleEntryGrid from "@/components/SimpleEntryGrid";

export default function GlobalSoulPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Global Soul"
          title="Travel"
          tagline="Exploration • Culture • Perspective"
          imageSrc="/images/global-soul.png"
        />

        <div className="card mb-8 max-w-4xl bg-parchment/70">
          <p className="leading-8 text-charcoal/85">
            Global Soul is where I explore the world beyond what is familiar—
            through places, people, and moments that stretch my perspective.
            Each journey is more than movement; it is a quiet unfolding of
            understanding, beauty, and connection.
          </p>
        </div>

        <SimpleEntryGrid
          items={[
            {
              title: "Places That Shifted Me",
              description:
                "Journeys that expanded my perspective and left something lasting within me."
            },
            {
              title: "Cultural Encounters",
              description:
                "Moments of connection, tradition, and perspective gathered across places and people."
            },
            {
              title: "The Inner Journey",
              description:
                "How movement through the world deepens reflection, clarity, and self-understanding."
            }
          ]}
        />
      </div>
    </section>
  );
}