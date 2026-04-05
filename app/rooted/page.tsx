import Image from "next/image";
import SignatureCat from "@/components/SignatureCat";

const reflections = [
  "What God is teaching me in this season",
  "Learning to trust even when I do not understand",
  "What prayer is changing in me"
];

export default function RootedPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <div className="mx-auto mb-6 w-fit rounded-[2rem] border border-plum/10 bg-white/70 p-4 shadow-soft">
            <Image
              src="/images/rooted-faith.jpg"
              alt="Rooted faith image"
              width={240}
              height={240}
              className="h-auto w-[180px] rounded-2xl md:w-[220px]"
            />
          </div>

          <p className="eyebrow mb-3">Rooted</p>
          <h1 className="page-title mb-4 text-plum">Faith</h1>
          <p className="mb-4 text-xl italic text-gold">
            Faith • Heritage • Resilience
          </p>
          <p className="mx-auto max-w-3xl text-xl leading-9 text-charcoal/80">
            A space where my relationship with God is deepened through Scripture,
            prayer, reflection, and lived experience.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft md:p-10">
          <p className="text-lg leading-9 text-charcoal/85">
            Rooted is the spiritual foundation of Mozue. Here, I document what I
            am learning through Scripture, how my prayer life is evolving, and
            the quiet ways God is shaping my life. This is not about perfection.
            It is about presence, growth, and walking faithfully.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card overflow-hidden">
            <div className="mb-4 flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-parchment">
              <img
                src="/images/rooted-faith-cropped.jpg"
                alt="My Walk with God"
                className="h-32 w-auto object-contain"
              />
            </div>
            <h2 className="mb-2 text-2xl text-plum">My Walk with God</h2>
            <p className="leading-8 text-charcoal/80">
              Personal reflections on faith, growth, spiritual lessons, and the
              quiet evolution of my relationship with God.
            </p>
          </div>

          <div className="card overflow-hidden">
            <div className="mb-4 flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-parchment">
              <img
                src="/images/field-notes-cropped.jpg"
                alt="Prayer and peace"
                className="h-32 w-auto object-contain"
              />
            </div>
            <h2 className="mb-2 text-2xl text-plum">Prayer & Peace</h2>
            <p className="leading-8 text-charcoal/80">
              What I am learning through prayer, stillness, surrender, and making
              room for God in the quiet.
            </p>
          </div>

          <div className="card md:col-span-2">
            <h2 className="mb-2 text-2xl text-plum">In the Word</h2>
            <p className="leading-8 text-charcoal/80">
              Scripture reflections, Bible study notes, and lessons that come
              from sitting with the Word and listening carefully.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft">
          <h2 className="mb-6 text-center text-3xl text-plum">
            Recent Reflections
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