import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: 20,
    desc: "For individuals and small teams getting started with structured workflows.",
    features: ["Up to 5 team members", "10 active dashboards", "Basic automations (50/mo)", "7-day data history", "Email support"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Professional",
    price: 60,
    desc: "For growing teams that need powerful automation and advanced reporting.",
    features: ["Up to 25 team members", "Unlimited dashboards", "Advanced automations (unlimited)", "90-day data history", "Priority chat support", "Mobile app access"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: 150,
    desc: "For large organizations with custom requirements and compliance needs.",
    features: ["Unlimited members", "Custom integrations & API", "SSO & advanced permissions", "Unlimited data history", "Dedicated success manager", "SOC 2 & compliance reports"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24 text-center">
      
      <div className="mb-6 flex justify-center">
        <span className="inline-flex items-center gap-2.5 rounded-full bg-[#e2f0ed] px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#0f6257]">
          {/* Small teal accent dot */}
          <span className="h-2 w-2 rounded-full bg-[#1f7a6b]"></span>
          Pricing
        </span>
      </div>
      
      
      <h2 className="text-4xl font-extrabold tracking-tight text-[#0f2d26] sm:text-5xl">
        Simple, <span className="font-serif font-normal italic text-[#0f6257]">transparent</span> pricing
      </h2>
      <p className="mt-4 text-[#4a5e5a] text-sm">No hidden fees. No surprise overages. Cancel anytime.</p>

    
      <div className="mt-8 flex items-center justify-center gap-4">
        <span className={`text-sm font-semibold ${!annual ? "text-[#0f2d26]" : "text-[#738e89]"}`}>
          Monthly
        </span>

        <button
          onClick={() => setAnnual((a) => !a)}
          type="button"
          className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#0f6257] transition-colors duration-200 ease-in-out focus:outline-none"
          aria-label="Toggle annual pricing"
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              annual ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>

        <span className={`text-sm font-semibold ${annual ? "text-[#0f2d26]" : "text-[#738e89]"}`}>
          Annual
        </span>

        <span className="rounded-full bg-[#e2f0ed] px-2.5 py-1 text-xs font-bold text-[#0f6257]">
          Save 35%
        </span>
      </div>

      
      <div className="mx-auto mt-16 grid max-w-[1100px] gap-8 md:grid-cols-3 items-stretch">
        {plans.map((plan) => {
          const price = annual ? Math.round(plan.price * 0.65) : plan.price;

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-[32px] p-8 text-left transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#0b1d1a] text-white shadow-2xl scale-105 z-10"
                  : "border border-[#e6ecea] bg-white shadow-sm hover:shadow-md"
              }`}
            >
              
              {plan.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#0f6257] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white">
                  Most Popular
                </span>
              )}

            
              <p className={`text-xs font-bold uppercase tracking-widest ${plan.highlight ? "text-[#738e89]" : "text-[#738e89]"}`}>
                {plan.name}
              </p>

             
              <div className="mt-4 flex items-baseline text-[#0f2d26]">
                <span className={`text-2xl font-bold tracking-tight pb-1 mr-0.5 ${plan.highlight ? "text-white" : "text-[#0f2d26]"}`}>
                  $
                </span>
                <span className={`text-[56px] font-extrabold tracking-tight leading-none ${plan.highlight ? "text-white" : "text-[#0f2d26]"}`}>
                  {price}
                </span>
                <span className={`text-sm font-semibold ml-1 ${plan.highlight ? "text-[#738e89]" : "text-[#738e89]"}`}>
                  /mo
                </span>
              </div>

              
              <p className={`mt-5 text-sm leading-relaxed ${plan.highlight ? "text-white/80" : "text-[#4a5e5a]"}`}>
                {plan.desc}
              </p>

              {/* Mid-Card Section Break Line */}
              <div className={`my-6 border-t ${plan.highlight ? "border-white/10" : "border-[#edf3f1]"}`} />

              
              <ul className="flex-1 space-y-3.5">
                {plan.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${plan.highlight ? "text-white/90" : "text-[#1e3a34] font-medium"}`}>
                    <span
                      className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                        plan.highlight ? "bg-white/10 text-[#54c2b0]" : "bg-[#edf3f1] text-[#0f6257]"
                      }`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

             
              <a
                href="#trial"
                className={`mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-bold transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#0f6257] text-white hover:bg-[#0b4a42]"
                    : "border border-[#d8eae5] text-[#0f6257] hover:bg-[#edf3f1]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}