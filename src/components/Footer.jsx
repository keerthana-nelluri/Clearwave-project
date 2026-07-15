import React from "react";

const columns = [
  { title: "Product", links: ["Features", "Mobile App", "Pricing", "Integrations", "Changelog"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press Kit", "Status"] },
  { title: "Support", links: ["Help Center", "Documentation", "Security", "Contact", "Community"] },
];

export default function Footer() {
  return (
    <footer className="bg-[#0c1916] text-[#7d918d] border-t border-[#132622]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xl font-extrabold tracking-tight text-white">
            clear<span className="text-[#4ec3b0]">wave</span>
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[#7d918d]">
            The calm, powerful workspace for teams that want to focus on work — not on managing it.
          </p>
          <div className="pt-2 flex gap-3">
            {["X", "in", "▶", "d"].map((icon) => (
              <span
                key={icon}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#132622] text-[#7d918d] text-xs font-semibold cursor-pointer transition-all duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation Headings and Links */}
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#4b5e5a]">{col.title}</p>
            <ul className="space-y-3 text-sm">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#7d918d] transition-colors duration-200 hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bg-hairline py-8 border-t border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-[#4b5e5a] sm:flex-row">
          <p>© 2026 Clearwave. Design by TemplateMo</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors duration-200 hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors duration-200 hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors duration-200 hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}