import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="eyebrow mb-4">Welcome to Mozue</p>
            <h1 className="mb-6 text-5xl leading-tight text-plum md:text-7xl">
              Reflection.
              <br />
              Purpose.
              <br />
              Evolution.
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-charcoal/80 md:text-xl">
              A life rooted in faith. A journey shaped by purpose. A story
              unfolding through growth, service, and exploration.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-plum px-6 py-3 text-sm text-white hover:bg-plum/90"
              >
                Enter the journey
              </Link>
              <Link
                href="/field-notes"
                className="rounded-full border border-plum/20 px-6 py-3 text-sm text-plum hover:border-gold hover:text-gold"
              >
                Visit Field Notes
              </Link>
            </div>
          </div>

          <div className="card flex items-center justify-center p-6">
            <Image
              src="/images/home-hero.png"
              alt="My World as an Introvert"
              width={420}
              height={420}
              className="h-auto w-full max-w-[380px] rounded-[2rem]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}