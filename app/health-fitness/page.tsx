import SectionHeader from "@/components/SectionHeader";
import SignatureCat from "@/components/SignatureCat";

const reflections = [
  "Listening to what my body needs",
  "Strength through consistency",
  "Healing is not linear"
];

export default function HealthFitnessPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="Health & Fitness"
          title="Wellness"
          tagline="Strength • Healing • Vitality"
          imageSrc="/images/health-fitness.jpg"
        />

        <div className="mx-auto mb-12 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft md:p-10">
          <p className="text-lg leading-9 text-charcoal/85">
            This space is dedicated to the discipline of wellness—healing,
            strengthening, rebuilding, and honoring the body through intention
            and care. It reflects the ongoing work of becoming stronger, more
            aware, and more aligned with what my body needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Journey
            </p>
            <h2 className="mb-3 text-2xl text-plum">My Wellness Journey</h2>
            <p className="leading-8 text-charcoal/80">
              Tracking the habits, milestones, and mindset shifts shaping my
              health and physical well-being.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Strength
            </p>
            <h2 className="mb-3 text-2xl text-plum">Strength & Healing</h2>
            <p className="leading-8 text-charcoal/80">
              Reflecting on the relationship between resilience, rest, recovery,
              and sustainable growth.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Practice
            </p>
            <h2 className="mb-3 text-2xl text-plum">Vital Practices</h2>
            <p className="leading-8 text-charcoal/80">
              The routines, rituals, and intentional choices that support
              long-term wellness and vitality.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft">
          <h2 className="mb-6 text-center text-3xl text-plum">
            Wellness Reflections
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {reflections.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gold/20 bg-parchment/60 p-5"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-gold">
                  Wellness Note
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