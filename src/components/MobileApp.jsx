import { useState } from "react";
import screen01 from "../assets/images/tm-622-screen-02.jpg";
import screen02 from "../assets/images/tm-622-screen-03.jpg";
import screen03 from "../assets/images/tm-622-screen-04.jpg";
import screen04 from "../assets/images/tm-622-screen-05.jpg";
import screen05 from "../assets/images/tm-622-screen-01.jpg";

const screens = [screen01, screen02, screen03, screen04, screen05];

export default function MobileApp() {
  const [active, setActive] = useState(2);

  const goPrev = () => setActive((i) => (i === 0 ? screens.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === screens.length - 1 ? 0 : i + 1));

  return (
    <section id="app" className="mx-auto max-w-6xl px-6 py-20 text-center">
      <div className="mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2.5 rounded-full bg-[#e2f0ed] px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#0f6257]">
          {/* Accent dot matching the design */}
          <span className="h-2 w-2 rounded-full bg-[#1f7a6b]"></span>
          Mobile App
        </span>
      </div>

      <h2 className="text-4xl font-bold leading-tight text-[#0f2d26] sm:text-5xl">
        Your workspace,
        <br />
        <span className="font-serif italic text-[#1f7a6b]">in your pocket</span>
      </h2>
      <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-[#738e89]">
        The Clearwave mobile app brings every dashboard, task, and
        notification to you — beautifully adapted for any screen.
      </p>

      <div className="mt-16 flex items-end justify-center gap-3 sm:gap-4 px-4 overflow-hidden">
        {screens.map((src, i) => {
          const isActive = i === active;
          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="shrink-0 transition-all duration-300 focus:outline-none"
            >
              <img
                src={src}
                alt={`App screen preview ${i + 1}`}
                className={`rounded-[1.25rem] border-[3px] transition-all duration-300 ${
                  isActive
                    ? "w-40 -translate-y-2 border-ink-3 shadow-2xl shadow-[#0f2d26]/25 sm:w-48"
                    : "w-28 border-white/70 opacity-90 shadow-md shadow-[#0f2d26]/10 sm:w-32"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="mt-12 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          aria-label="Previous screen"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6ecea] bg-white text-[#0f2d26] shadow-sm transition-all duration-300 hover:bg-[#edf5f2]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex items-center gap-1.5">
          {screens.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[#1f7a6b]" : "w-1.5 bg-[#e6ecea]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next screen"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6ecea] bg-white text-[#0f2d26] shadow-sm transition-all duration-300 hover:bg-[#edf5f2]"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}