import React from "react";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-20">
      <div className="flex flex-col items-start gap-6 rounded-2xl bg-dark p-10 text-white md:flex-row md:items-center md:justify-between md:p-14">
        <div>
          <span className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-wider text-accent-light">
            ✦ Get Started Today
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready for a
            <br />
            <span className="font-serif italic text-accent-light">clearer workflow?</span>
          </h2>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Join 50,000+ teams who replaced chaos with clarity. Set up in under 10 minutes.
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-center gap-3">
          <a href="#trial" className="btn-primary w-full text-center">
            Start Free Trial →
          </a>
          <a 
            href="#demo" 
            className="w-full rounded-full border border-white/10 px-6 py-3 text-center text-sm font-medium text-white/60 transition hover:border-white/20 hover:text-white"
          >
            Schedule a demo
          </a>
        </div>
      </div>
    </section>
  );
}