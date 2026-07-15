import { useState } from "react";

const faqs = [
  { q: "Is there a free trial?", a: "Yes — every plan starts with a 14-day free trial, no credit card required." },
  { q: "How does pricing work for larger teams?", a: "Teams over 25 members should look at our Enterprise plan, which includes unlimited members and custom pricing." },
  { q: "Can I migrate data from another tool?", a: "Yes, we support guided imports from most popular project and data tools, plus a CSV importer." },
  { q: "What does the 99.9% uptime SLA mean?", a: "We guarantee Clearwave is available 99.9% of the time each month, monitored and reported publicly on our status page." },
  { q: "Is my data secure?", a: "All data is encrypted in transit and at rest, and we're SOC 2 certified." },
  { q: "Can I cancel anytime?", a: "Yes, you can cancel your subscription at any time from your account settings — no questions asked." },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#d8eae5] py-5">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left text-sm font-bold tracking-tight text-[#0f2d26] transition-colors duration-200 hover:text-[#0f6257] sm:text-base"
      >
        <span className="pr-4">{q}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d8eae5] bg-white text-base font-medium text-[#0f6257] shadow-sm transition-all duration-300 ${
            isOpen ? "rotate-45 bg-[#e2f0ed]" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm font-medium leading-relaxed text-[#4a5e5a]">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleItem = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const isAllOpen = openIndexes.length === faqs.length;

  const handleExpandAll = () => {
    if (isAllOpen) {
      setOpenIndexes([]); 
    } else {
      setOpenIndexes(faqs.map((_, index) => index)); 
    }
  };

  return (
    <section id="faq" className="bg-[#f4f9f7] pt-24 pb-28 text-left border-t border-[#d8eae5]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#d8eae5] bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0f6257]">
            <span className="text-[10px]">●</span> FAQ
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f2d26] sm:text-5xl">
            Questions,
            <br />
            <span className="font-serif font-normal italic text-[#0f6257]">answered</span>
          </h2>
          <p className="max-w-sm text-[15px] font-medium leading-relaxed text-[#4a5e5a]">
            Can&apos;t find what you&apos;re looking for? Reach our team at{" "}
            <a href="mailto:hello@clearwave.io" className="font-bold text-[#0f6257] underline underline-offset-4 decoration-[#d8eae5] hover:decoration-[#0f6257]">
              hello@clearwave.io
            </a>{" "}
            — we reply within 2 hours.
          </p>

          <button
            onClick={handleExpandAll}
            className="pt-4 flex items-center gap-1.5 text-sm font-bold text-[#0f6257] transition hover:opacity-80 focus:outline-none"
          >
            <span className="text-base">{isAllOpen ? "−" : "+"}</span>
            <span>{isAllOpen ? "Collapse all" : "Expand all"}</span>
          </button>
        </div>
        <div className="border-t border-[#d8eae5]">
          {faqs.map((f, index) => (
            <FaqItem
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={openIndexes.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}