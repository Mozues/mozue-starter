export default function RootedPage() {
  return (
    <main className="min-h-screen bg-parchment px-6 py-16">
      <div className="mx-auto max-w-5xl">
        
        {/* Page Title */}
        <h1 className="mb-6 text-center text-4xl text-plum">
          Rooted
        </h1>

        {/* Page Intro */}
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-8 text-charcoal/80">
          A space where my relationship with God is deepened through Scripture,
          prayer, reflection, and lived experience.
        </p>

        {/* Intro Card */}
        <div className="mx-auto mb-12 max-w-4xl rounded-[2rem] border border-plum/10 bg-white/70 p-8 shadow-soft md:p-10">
          <p className="text-lg leading-9 text-charcoal/85">
            Rooted is the spiritual foundation of Mozue. Here, I document what I
            am learning through Scripture, how my prayer life is evolving, and
            the quiet ways God is shaping my life. This is not about perfection.
            It is about presence, growth, and walking faithfully.
          </p>
        </div>

        {/* ✨ Featured Easter Post */}
        <div className="mx-auto mb-16 max-w-4xl rounded-[2rem] border border-gold/20 bg-parchment/60 p-8 shadow-soft md:p-10">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-gold">
            April 20, 2025 • Rooted
          </p>

          <h2 className="mb-6 text-3xl text-plum">
            Easter: A Beginning in Hope
          </h2>

          <div className="space-y-5 text-lg leading-9 text-charcoal/85">
            <p>This Easter feels different for me.</p>

            <p>
              I’m beginning a deeper season of faith—a three-year journey of studying
              the Bible more intentionally, more slowly, and with a heart that is open
              to learning, not just knowing.
            </p>

            <p>
              I don’t come into this with all the answers. I come with questions, with
              curiosity, and with a desire to grow closer to God in a real and steady way.
            </p>

            <p>
              Easter reminds me that renewal is not something we force—it’s something
              God does. In His time, in His way.
            </p>

            <p className="italic text-plum">
              “He is not here; He has risen, just as He said.” — Matthew 28:6
            </p>

            <p>
              That truth is simple, but it holds everything—hope, grace, and the promise
              that new life is always possible, even when we don’t yet see it.
            </p>

            <p>
              Today, I’m choosing to begin this journey with faith, humility, and trust.
            </p>

            <p className="pt-4 font-medium text-plum">
              Quietly becoming, rooted in hope.
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          
          <div className="rounded-[2rem] border border-plum/10 bg-white/70 p-6 shadow-soft">
            <div className="mb-4 h-40 rounded-xl bg-sand/40" />
            <h3 className="mb-2 text-xl text-plum">My Walk with God</h3>
            <p className="text-charcoal/75">
              Personal reflections on faith, growth, spiritual lessons, and the quiet
              evolution of my relationship with God.
            </p>
          </div>

          <div className="rounded-[2rem] border border-plum/10 bg-white/70 p-6 shadow-soft">
            <div className="mb-4 h-40 rounded-xl bg-sand/40" />
            <h3 className="mb-2 text-xl text-plum">Prayer & Peace</h3>
            <p className="text-charcoal/75">
              What I am learning through prayer, stillness, surrender, and making
              room for God in the quiet.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}