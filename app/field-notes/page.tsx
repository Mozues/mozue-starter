import Image from "next/image";
import SignatureCat from "@/components/SignatureCat";

const reflections = [
  "What I’m learning in the quiet",
  "Between the big moments",
  "Renewal in real time"
];

export default function FieldNotesPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mx-auto mb-6 w-fit rounded-[2rem] border border-plum/10 bg-white/70 p-4 shadow-soft">
            <Image
              src="/images/field-notes.jpg"
              alt="Field Notes image"
              width={240}
              height={240}
              className="h-auto w-[180px] rounded-2xl md:w-[220px]"
            />
          </div>

          <p className="eyebrow mb-3">Field Notes</p>
          <h1 className="page-title mb-6 text-plum">Stillness</h1>
          <p className="mb-4 text-lg italic text-gold/80">
            Stillness • Renewal • Reflection
          </p>
          <p className="mx-auto max-w-3xl text-xl leading-9 text-charcoal/80">
            A quiet space for reflection, renewal, and returning to self.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft md:p-10">
          <p className="text-lg leading-9 text-charcoal/85">
            Field Notes is where I keep the thoughts that live between chapters:
            the pauses, questions, emotions, and insights that shape the inner
            journey. It is a place for noticing, restoring, and listening more
            closely to what is unfolding within.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Reflection
            </p>
            <h2 className="mb-3 text-2xl text-plum">What I’m Learning in the Quiet</h2>
            <p className="leading-8 text-charcoal/80">
              Notes on stillness, inner processing, and what emerges when life
              slows down.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Reflection
            </p>
            <h2 className="mb-3 text-2xl text-plum">Between the Big Moments</h2>
            <p className="leading-8 text-charcoal/80">
              Reflections that do not fit anywhere else, but still belong to the
              journey.
            </p>
          </div>

          <div className="card">
            <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
              Reflection
            </p>
            <h2 className="mb-3 text-2xl text-plum">Renewal in Real Time</h2>
            <p className="leading-8 text-charcoal/80">
              A space for healing, reset, personal observation, and coming back
              to self.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft">
          <h2 className="mb-6 text-center text-3xl text-plum">
            Gentle Prompts
          </h2>

          <div className="grid gap-4 md:grid-cols-3">
            {reflections.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gold/20 bg-parchment/60 p-5"
              >
                <p className="mb-2 text-xs uppercase tracking-[0.24em] text-gold">
                  Field Note
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