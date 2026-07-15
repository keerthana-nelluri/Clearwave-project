import React from "react";

export default function Hero() {
  const bars = [
    { h: 30, on: false },
    { h: 48, on: false },
    { h: 36, on: false },
    { h: 72, on: true },
    { h: 48, on: false },
    { h: 80, on: true },
    { h: 60, on: false },
    { h: 84, on: true },
  ];

  return (
    <section className="relative overflow-hidden bg-transparent">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(80% 60% at 90% 10%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 70%), radial-gradient(60% 60% at 15% 85%, rgba(15,98,87,0.03) 0%, rgba(255,255,255,0) 50%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="text-left">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white p-1 pr-4 text-xs font-medium text-[#5c726e] shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-[8px] bg-[#0f6257]">
                <svg 
                  className="h-3.5 w-3.5 text-white" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 2C12 2 13 10 14 11C15 12 22 12 22 12C22 12 15 12 14 13C13 14 12 22 12 22C12 22 11 14 10 13C9 12 2 12 2 12C2 12 9 12 10 11C11 10 12 2 12 2Z" />
                </svg>
              </span>
              <span>
                Rated <span className="font-bold text-[#0f6257]">#1 Productivity SaaS</span> of 2024
              </span>
            </span>
            <h1 className="text-5xl font-extrabold leading-[1.15] text-[#0f2d26] sm:text-6xl tracking-tight">
              Your workflow,{" "}
              <span className="font-serif font-normal italic text-[#0f6257] whitespace-nowrap">
                finally clear.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed font-medium text-[#4a5e5a]">
              Clearwave unifies your team's projects, data, and communication
              into one calm, focused surface. Less noise, more done.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#trial" 
                className="rounded-full bg-[#0f6257] px-7 py-3.5 text-sm font-bold text-white transition duration-200 hover:bg-[#0b4a42]"
              >
                Start Free — No Card <span aria-hidden="true" className="ml-1">→</span>
              </a>
              <a 
                href="#demo" 
                className="inline-flex items-center gap-2 rounded-full border border-[#d8eae5] bg-[#f4f9f7]/30 px-5 py-2.5 text-sm font-bold text-[#0f6257] transition duration-200 hover:bg-[#edf5f2]"
              >
                <svg 
                  className="h-3 w-3 fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="text-[#0f6257] font-semibold">See it in action</span>
              </a>
            </div>
            <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-bold text-[#5c726e]">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#0f6257]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                SOC 2 Certified
              </span>
              <span className="h-3.5 w-px bg-[#d8eae5]" />
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#0f6257]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                99.9% Uptime SLA
              </span>
              <span className="h-3.5 w-px bg-[#d8eae5]" />
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-[#0f6257]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
                50k+ Teams
              </span>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-[480px] lg:max-w-none">
              <div className="overflow-hidden rounded-[24px] border border-[#d8eae5] bg-white shadow-2xl shadow-[#0f6257]/5">
                <div className="bg-[#edf3f1] px-6 py-3.5 flex gap-2 border-b border-[#d8eae5]/60">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="p-6">
                  <p className="mb-6 text-left text-sm font-bold text-[#0f2d26]">
                    Team Performance
                  </p>
                  <div className="mb-6 flex h-32 items-end gap-1.5 sm:gap-2">
                    {bars.map((bar, i) => (
                      <div
                        key={i}
                        className={`flex-1 transition-all duration-300 rounded-[4px] ${
                          bar.on 
                            ? "bg-[#1f7a6b]" 
                            : "bg-[#f4f9f7] border border-[#e2ecea]"
                        }`}
                        style={{ height: `${bar.h}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-left">
                    <div className="rounded-[16px] bg-[#f4f9f7] border border-[#e2ecea]/40 p-4">
                      <p className="text-xl font-extrabold text-[#0f2d26]">94<span className="text-xs font-bold text-[#1f7a6b] ml-0.5">%</span></p>
                      <p className="text-[10px] font-medium text-[#738e89] mt-0.5">Task Rate</p>
                      <p className="text-[10px] font-bold text-[#1f7a6b] mt-1">+ 12%</p>
                    </div>
                    <div className="rounded-[16px] bg-[#f4f9f7] border border-[#e2ecea]/40 p-4">
                      <p className="text-xl font-extrabold text-[#0f2d26]">2.4<span className="text-xs font-bold text-[#1f7a6b] ml-0.5">k</span></p>
                      <p className="text-[10px] font-medium text-[#738e89] mt-0.5">Active Users</p>
                      <p className="text-[10px] font-bold text-[#1f7a6b] mt-1">+ 8%</p>
                    </div>
                    <div className="rounded-[16px] bg-[#f4f9f7] border border-[#e2ecea]/40 p-4">
                      <p className="text-xl font-extrabold text-[#0f2d26]">18<span className="text-xs font-bold text-[#1f7a6b] ml-0.5">h</span></p>
                      <p className="text-[10px] font-medium text-[#738e89] mt-0.5">Saved / week</p>
                      <p className="text-[10px] font-bold text-[#1f7a6b] mt-1">+ 24%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-7 -right-4 sm:-right-5 rounded-[18px] bg-[#1f7a6b] px-5 py-3 text-center shadow-lg whitespace-nowrap z-20">
                <p className="text-sm font-black text-white flex items-center justify-center gap-1">↑ 34%</p>
                <p className="text-[9px] font-bold uppercase tracking-wider text-white/80 mt-0.5">Output this week</p>
              </div>
              <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-[20px] border border-[#d8eae5] bg-white px-5 py-4 shadow-lg min-w-[240px] z-20">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#1f7a6b] text-sm text-white font-bold shadow-inner">
                  ✦
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#0f2d26]">New integration</p>
                  <p className="text-[10px] font-medium text-[#738e89] mt-0.5">Slack connected · just now</p>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}