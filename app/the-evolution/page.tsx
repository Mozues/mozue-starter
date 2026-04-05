import SectionHeader from "@/components/SectionHeader";
import SignatureCat from "@/components/SignatureCat";

const reflections = [
  "What discipline is teaching me",
  "Lessons from study, struggle, and growth",
  "Building knowledge with patience and purpose"
];

export default function TheEvolutionPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="The Evolution"
          title="Learning"
          tagline="Learning • Discipline • Mastery"
        />

        <div className="mx-auto mb-12 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft md:p-10">
          <p className="text-lg leading-9 text-charcoal/85">
            The Evolution is where I document the disciplined side of becoming.
            It holds my academic and intellectual journey through cybersecurity,
            computer networking, management information systems, and the steady
            work of lifelong learning. This is where structure, persistence, and
            growth meet.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Focus Area
            </p>
            <h2 className="mb-3 text-2xl text-plum">My Cybersecurity Journey</h2>
            <p className="leading-8 text-charcoal/80">
              Documenting the path, the process, and what I am learning as I
              grow in cybersecurity and systems thinking.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Study Notes
            </p>
            <h2 className="mb-3 text-2xl text-plum">Lessons & Breakthroughs</h2>
            <p className="leading-8 text-charcoal/80">
              Reflections on coursework, concepts, obstacles, and the moments
              when understanding starts to deepen.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Discipline
            </p>
            <h2 className="mb-3 text-2xl text-plum">Building Mastery</h2>
            <p className="leading-8 text-charcoal/80">
              How learning is shaping my habits, confidence, resilience, and the
              future I am steadily building.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft">
          <h2 className="mb-6 text-center text-3xl text-plum">
            Current Reflections
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {reflections.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gold/20 bg-parchment/60 p-5"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-gold">
                  Evolution Note
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