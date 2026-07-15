import React from "react";

// 1. Customized Checkmark Component
function Check({ children }) {
  return (
    <li className="flex items-center gap-3 text-sm font-semibold text-[#4a5e5a]">
      <svg
        className="h-4 w-4 shrink-0 text-[#0f6257]"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </li>
  );
}

// 2. Custom Pill/Badge Component
function Pill({ children, tone = "default" }) {
  const tones = {
    default: "bg-[#edf3f1] text-[#738e89]",
    done: "bg-[#edf3f1] text-[#0f6257]",
    active: "bg-[#e2f0ed] text-[#0f6257]",
    queued: "bg-[#edf3f1] text-[#738e89]",
  };
  return (
    <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${tones[tone] || tones.default}`}>
      {children}
    </span>
  );
}

// 3. Card Mockup 1: Dashboard Preview
function DashboardCard() {
  return (
    <div className="rounded-[24px] border border-white bg-[#d8eae5] p-6 shadow-xl shadow-[#0f6257]/5 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-[#f4f9f7] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89]">Monthly Revenue</p>
          <p className="text-xl font-extrabold text-[#0f2d26] mt-1">$84.2k</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-[#edf3f1]">
            <div className="h-1.5 w-3/4 rounded-full bg-[#0f6257]" />
          </div>
        </div>
        <div className="rounded-xl bg-[#f4f9f7] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89]">Active Users</p>
          <p className="text-xl font-extrabold text-[#0f2d26] mt-1">12,481</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-[#edf3f1]">
            <div className="h-1.5 w-1/2 rounded-full bg-[#0f6257]" />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-[#f4f9f7] p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89] mb-1">Recent Activity</p>
        <div className="flex items-center justify-between text-xs font-semibold text-[#4a5e5a]">
          <span>Q3 Report synced</span>
          <Pill tone="done">Done</Pill>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold text-[#4a5e5a]">
          <span>Team review pending</span>
          <Pill tone="active">Active</Pill>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold text-[#4a5e5a]">
          <span>Analytics export</span>
          <Pill tone="queued">Queued</Pill>
        </div>
      </div>
    </div>
  );
}

// 4. Card Mockup 2: Automations Preview
function AutomationCard() {
  return (
    <div className="rounded-[24px] border border-white bg-[#d8eae5] p-6 shadow-xl shadow-[#0f6257]/5 space-y-4">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between rounded-xl bg-[#f4f9f7] px-4 py-3 text-xs font-bold text-[#4a5e5a]">
          <span>Weekly digest → Slack</span>
          <span className="text-[#0f6257]">Running</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-[#f4f9f7] px-4 py-3 text-xs font-bold text-[#4a5e5a]">
          <span>Lead scored → Notify sales</span>
          <span className="text-[#0f6257]">Running</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-[#f4f9f7] px-4 py-3 text-xs font-bold text-[#4a5e5a]">
          <span>Invoice due → Alert CEO</span>
          <span className="text-[#0f6257]">Active</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-[#f4f9f7] px-4 py-3 text-xs font-bold text-[#4a5e5a]">
          <span>Report sync → Drive</span>
          <span className="text-[#738e89]">Paused</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-[#f4f9f7] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89]">Hours Saved This Month</p>
          <p className="text-xl font-extrabold text-[#0f2d26] mt-1">148h</p>
          <div className="mt-2 h-1.5 w-full rounded-full bg-[#edf3f1]">
            <div className="h-1.5 w-4/5 rounded-full bg-[#0f6257]" />
          </div>
        </div>
        <div className="rounded-xl bg-[#f4f9f7] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89]">Flows</p>
          <p className="text-xl font-extrabold text-[#0f2d26] mt-1">24</p>
        </div>
      </div>
    </div>
  );
}

// 5. Card Mockup 3: Collaboration Preview
function CollaborationCard() {
  return (
    <div className="rounded-[24px] border border-white bg-[#d8eae5] p-6 shadow-xl shadow-[#0f6257]/5">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="rounded-xl bg-[#f4f9f7] p-4 flex flex-col justify-between">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89]">Online Now</p>
          <div className="flex -space-x-2 mt-2 overflow-hidden">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0f6257] text-[10px] font-bold text-white ring-2 ring-white">A</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent-mid text-[10px] font-bold text-white ring-2 ring-white">K</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-3 text-[10px] font-bold text-white ring-2 ring-white">M</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#edf3f1] text-[10px] font-bold text-[#738e89] ring-2 ring-white">+5</span>
          </div>
        </div>
        <div className="rounded-xl bg-[#f4f9f7] p-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89]">Open Tasks</p>
          <p className="text-xl font-extrabold text-[#0f2d26] mt-1">37</p>
        </div>
      </div>

      <div className="rounded-xl bg-[#f4f9f7] p-4 space-y-3">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#738e89] mb-1">Recent Comments</p>
        <div className="flex items-center justify-between text-xs font-semibold text-[#4a5e5a]">
          <span>Alex → Q3 chart updated</span>
          <Pill tone="done">Resolved</Pill>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold text-[#4a5e5a]">
          <span>Kim → Review needed</span>
          <Pill tone="active">Open</Pill>
        </div>
        <div className="flex items-center justify-between text-xs font-semibold text-[#4a5e5a]">
          <span>Maya → Approved &amp; shipped</span>
          <Pill tone="done">Done</Pill>
        </div>
      </div>
    </div>
  );
}

// 6. Configured Data Structure
const items = [
  {
    number: "01",
    label: "Unified Dashboard",
    title: "Every metric, one calm surface",
    text: "Pull data from any source into a single, composable view. Share live dashboards with stakeholders — no exports, no screenshots.",
    points: [
      "Drag-and-drop widget builder",
      "Real-time data sync across all sources",
      "Role-based sharing with granular permissions",
    ],
    Card: DashboardCard,
    reverse: false,
  },
  {
    number: "02",
    label: "Automations",
    title: "Routines that run themselves",
    text: "Build automation flows with natural language. Clearwave understands your intent and suggests the next step — no flowchart diagrams needed.",
    points: [
      "Natural language automation builder",
      "500+ pre-built trigger templates",
      "Full audit trail for every action",
    ],
    Card: AutomationCard,
    reverse: true,
  },
  {
    number: "03",
    label: "Team Collaboration",
    title: "Comments, context, and clarity",
    text: "Annotate anything, assign tasks inline, and resolve conversations without switching tabs. The work and the discussion stay together.",
    points: [
      "Inline comments on any data point",
      "Threaded task assignments",
      "Real-time presence and live cursors",
    ],
    Card: CollaborationCard,
    reverse: false,
  },
];

// Main Features Component
export default function Features() {
  return (
    <div className="bg-[#f4f9f7] text-left">
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-xl text-center mb-20">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2.5 rounded-full bg-[#e2f0ed] px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#0f6257]">
              <span className="h-2 w-2 rounded-full bg-[#1f7a6b]"></span>
              Platform Features
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f2d26] sm:text-5xl">
            Built for <span className="font-serif font-normal italic text-[#0f6257]">clarity</span>
            <br />
            at every scale
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] font-medium leading-relaxed text-[#4a5e5a]">
            Every feature is designed to reduce friction and surface what matters. No bloat, no configuration maze.
          </p>
        </div>
        <div className="space-y-24">
          {items.map(({ number, label, title, text, points, Card, reverse }) => (
            <div
              key={number}
              className={`grid items-center gap-12 md:grid-cols-2 ${
                reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0f6257]">
                  {number} — {label.toUpperCase()}
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight text-[#0f2d26]">
                  {title}
                </h3>
                <p className="text-[15px] leading-relaxed font-medium text-[#4a5e5a]">
                  {text}
                </p>
                <ul className="space-y-3.5 text-sm">
                  {points.map((p) => (
                    <Check key={p}>{p}</Check>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <Card />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}