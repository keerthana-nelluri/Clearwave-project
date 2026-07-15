import React from "react";

const logos = [
  {
    name: "Nexaflow",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />
      </svg>
    ),
  },
  {
    name: "Meridian",
    icon: (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    name: "Vanta Labs",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3l10 17H2L12 3z" />
      </svg>
    ),
  },
  {
    name: "Pulsar HQ",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <rect x="6" y="9" width="6" height="6" fill="#e2f0ed" />
      </svg>
    ),
  },
  {
    name: "Arclight",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
  },
  {
    name: "Korova Co.",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
  },
];

export default function LogoCloud() {
  return (
    <section className="relative w-full border-y border-[#e6ecea] bg-[#f4f9f7] py-10 z-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center justify-center text-center">
        <p className="relative block mb-8 w-full text-center text-[11px] font-bold uppercase tracking-widest text-[#0f2d26] opacity-90 z-20">
          Trusted by forward-thinking teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-y-5 text-sm font-bold text-[#5c726e]">
          {logos.map((logo, index) => (
            <React.Fragment key={logo.name}>
              <div className="flex items-center gap-2.5 px-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-[#e2f0ed] text-[#0f6257]">
                  {logo.icon}
                </span>
                <span className="text-[#0f2d26] tracking-tight">{logo.name}</span>
              </div>
              {index < logos.length - 1 && (
                <span className="hidden text-[#b3cec8]/70 font-light sm:block select-none" aria-hidden="true">
                  |
                </span>
              )}
              
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}