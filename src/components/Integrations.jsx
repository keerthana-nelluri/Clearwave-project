import React from "react";

const tools = [
  "Slack", "Google Sheets", "Google Drive", "Zapier", "Stripe", "GitHub", "Notion",
  "Mailchimp", "HubSpot", "Airtable", "Intercom", "Salesforce", "Figma", "Linear",
  "Jira", "Webflow",
];

export default function Integrations() {
  return (
    <section className="bg-cream py-24 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-[#e2f0ed] px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest text-[#0f6257]">
            <span className="h-2 w-2 rounded-full bg-[#1f7a6b]"></span>
            Integrations
          </span>
        </div>

        <h2 className="text-4xl font-bold text-ink-1 sm:text-5xl">
          Connects with your
          <br />
          <span className="font-serif italic text-accent">existing stack</span>
        </h2>
        <p className="mt-4 text-sm text-ink-3">No manual setup required</p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-hairline bg-white px-4 py-2 text-sm text-ink-2"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}