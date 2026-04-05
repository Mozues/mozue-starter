export default function Footer() {
  return (
    <footer className="border-t border-plum/10 py-10">
      <div className="container-page flex flex-col gap-4 text-sm text-charcoal/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-serif text-lg italic text-plum">Mozue</p>
          <p>A life rooted in faith, shaped by purpose, and expressed through growth.</p>
        </div>

        <div className="text-left md:text-right">
          <p className="script-mark">🐈 Quietly becoming.</p>
          <p>© 2026 Mozue</p>
        </div>
      </div>
    </footer>
  );
}
