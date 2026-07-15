export default function Navbar() {
  const links = ["App", "Features", "Pricing", "Reviews", "FAQ"];

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-ink-1">
          clear<span className="text-accent">wave</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-ink-2 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="transition hover:text-ink-1">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a href="#signin" className="hidden text-sm font-medium text-ink-2 hover:text-ink-1 sm:block">
            Sign in
          </a>
          <a href="#trial" className="btn-primary !py-2.5 !px-5 text-sm">
            Start Free Trial
          </a>
        </div>
      </nav>
    </header>
  );
}