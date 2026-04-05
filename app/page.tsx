import Hero from "@/components/Hero";
import IntroBlock from "@/components/IntroBlock";
import SectionCard from "@/components/SectionCard";
import QuoteBlock from "@/components/QuoteBlock";

const sections = [
  {
    href: "/rooted",
    title: "Rooted",
    tagline: "Faith • Heritage • Resilience",
    description:
      "A record of my walk with God, spiritual reflections, and the lessons shaping my life.",
    imageSrc: "/images/rooted-faith.jpg"
  },
  {
    href: "/global-soul",
    title: "Global Soul",
    tagline: "Exploration • Culture • Perspective",
    description:
      "Travel reflections, cultural experiences, and the places that continue to widen my view of the world.",
    imageSrc: "/images/global-soul.png"
  },
  
  {
    href: "/the-evolution",
    title: "The Evolution",
    tagline: "Learning • Discipline • Mastery",
    description:
      "My journey through cybersecurity, school, systems thinking, and the discipline of becoming."
  },
  {
    href: "/legacy",
    title: "Legacy",
    tagline: "Service • Compassion • Community",
    description:
      "Stories, reflections, and lessons from volunteering and showing up in service.",
    imageSrc: "/images/legacy-volunteer.jpg"
  },
  {
    href: "/field-notes",
    title: "Field Notes",
    tagline: "Stillness • Renewal • Reflection",
    description:
      "A quieter space for reflection, inner processing, renewal, and the thoughts between chapters.",
    imageSrc: "/images/field-notes.jpg"
  },
  {
    href: "/health-fitness",
    title: "Health & Fitness",
    tagline: "Strength • Healing • Vitality",
    description:
      "My journey toward wellness, discipline, healing, and honoring the body I live in.",
    imageSrc: "/images/health-fitness.jpg"
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroBlock
        eyebrow="Welcome"
        title="A personal archive of becoming."
        body="Mozue is my personal record of faith, service, exploration, and growth. Through this space, I’m documenting the journey of becoming—spiritually, intellectually, creatively, and purposefully."
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="mb-10">
            <p className="eyebrow mb-3">The journey</p>
            <h2 className="page-title mb-4 text-plum">Six paths, one life.</h2>
            <p className="page-subtitle">
              Each section reflects a core part of my world. Together they tell
              the story of a life rooted in faith and shaped by purpose.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sections.map((section) => (
              <SectionCard key={section.href} {...section} />
            ))}
          </div>
        </div>
      </section>

      <QuoteBlock
        quote="A life rooted in faith. A journey shaped by purpose. A story unfolding through growth, service, and exploration."
        source="Mozue"
      />
    </>
  );
}