type IntroBlockProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export default function IntroBlock({ eyebrow, title, body }: IntroBlockProps) {
  return (
    <section className="pb-8">
      <div className="container-page">
        <div className="card max-w-4xl">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h2 className="mb-4 font-serif text-3xl text-plum md:text-4xl">{title}</h2>
          <p className="page-subtitle">{body}</p>
        </div>
      </div>
    </section>
  );
}
