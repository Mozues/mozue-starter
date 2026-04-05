type Item = {
  title: string;
  description: string;
};

type SimpleEntryGridProps = {
  items: Item[];
};

export default function SimpleEntryGrid({ items }: SimpleEntryGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="card">
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-gold">
            Coming soon
          </p>
          <h2 className="mb-3 font-serif text-2xl text-plum">{item.title}</h2>
          <p className="leading-8 text-charcoal/80">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
