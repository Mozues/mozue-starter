import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          eyebrow="About"
          title="Why Mozue exists"
          tagline="A life rooted in faith, shaped by purpose, and expressed through growth, service, and exploration."
        />

        <div className="card max-w-4xl">
          <p className="mb-5 leading-8 text-charcoal/85">
            Mozue is my personal chronicle of becoming. It is where I document
            my walk with God, my journey through service, the growth that comes
            through education, and the perspective I gain through travel and
            reflection.
          </p>
          <p className="mb-5 leading-8 text-charcoal/85">
            This site is not a portfolio or a business hub. It is a thoughtful
            record of a life in progress—one shaped by faith, learning,
            compassion, discipline, and quiet introspection.
          </p>
          <p className="leading-8 text-charcoal/85">
            Through Mozue, I want to create a lasting space that reflects the
            values guiding my life and the lessons I gather along the way.
          </p>
        </div>
      </div>
    </section>
  );
}
