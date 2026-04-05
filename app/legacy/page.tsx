import SectionHeader from "@/components/SectionHeader";
import SignatureCat from "@/components/SignatureCat";

const reflections = [
  "Showing up with compassion",
  "What service is teaching me",
  "The quiet work of being present"
];

export default function LegacyPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Legacy"
          title="Service"
          tagline="Service • Compassion • Community"
          imageSrc="/images/legacy-volunteer.jpg"
        />

        <div className="mx-auto mb-12 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft md:p-10">
          <p className="text-lg leading-9 text-charcoal/85">
            Legacy is where I reflect on the work of showing up for others. It
            holds the lessons, stories, and moments gathered through volunteer
            service, caregiving, advocacy, and compassionate presence. This is
            where service becomes memory, meaning, and impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Present Work
            </p>
            <h2 className="mb-3 text-2xl text-plum">Current Service</h2>
            <p className="leading-8 text-charcoal/80">
              Reflections from St. Mary’s, the Red Cross, Queens Zoo, SAVI, and
              the spaces where I am currently called to serve.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Previous Chapters
            </p>
            <h2 className="mb-3 text-2xl text-plum">Past Service</h2>
            <p className="leading-8 text-charcoal/80">
              Honoring the work, lessons, and perspective gained through CASA,
              VCS, Rikers Island, and other places that shaped my understanding
              of service.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Reflection
            </p>
            <h2 className="mb-3 text-2xl text-plum">Why Service Matters</h2>
            <p className="leading-8 text-charcoal/80">
              A deeper reflection on compassion, community, and what service
              continues to teach me about people, dignity, and presence.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft">
          <h2 className="mb-6 text-center text-3xl text-plum">
            Service Reflections
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {reflections.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gold/20 bg-parchment/60 p-5"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-gold">
                  Legacy Note
                </p>
                <p className="text-xl leading-8 text-plum">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <SignatureCat />
      </div>
    </section>
  );
}