type QuoteBlockProps = {
  quote: string;
  source: string;
};

export default function QuoteBlock({ quote, source }: QuoteBlockProps) {
  return (
    <section className="section-pad pt-6">
      <div className="container-page">
        <div className="rounded-[2rem] border border-gold/20 bg-plum px-8 py-12 text-center text-white shadow-soft">
          <p className="mx-auto mb-4 max-w-4xl font-serif text-2xl italic leading-10 md:text-3xl">
            “{quote}”
          </p>
          <p className="text-sm uppercase tracking-[0.22em] text-white/70">{source}</p>
        </div>
      </div>
    </section>
  );
}
