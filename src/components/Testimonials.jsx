import React from 'react';

const TestimonialsSection = () => {
  const StarRating = () => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#0f5146]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-[#ebf4f2] min-h-screen font-sans antialiased pb-24">
      {/* Top Header Section */}
      <div className="text-center pt-20 pb-4">
        <h1 className="text-4xl md:text-[44px] font-black text-[#0a211e] tracking-tight mb-4">
          Teams that <span className="font-serif italic font-normal text-[#126b5e]">love</span> Clearwave
        </h1>
        <p className="text-slate-500 text-[13px] font-medium tracking-wide max-w-md mx-auto leading-relaxed">
          Don't take our word for it — here's what real teams say after 90 days.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          
          {/* COLUMN 1: Sarah (Tall card, matches combined height of Col 2) */}
          <div className="h-[492px] bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100/80 flex flex-col justify-between">
            <div>
              <StarRating />
              <p className="text-[#2d3748] text-[14px] leading-relaxed italic font-medium">
                “We replaced three separate tools with Clearwave and actually have fewer meetings now. The automation flows handle the handoffs our team used to spend mornings sorting out. It's the calmest our workflow has ever felt.”
              </p>
            </div>
            <div className="flex items-center space-x-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-[#e2f0ed] flex items-center justify-center text-[#0f5146] font-bold text-[11px] tracking-wider">SL</div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Sarah Lindquist</h4>
                <p className="text-[10px] text-slate-400 font-medium">Head of Operations · Stratum IQ</p>
              </div>
            </div>
          </div>

          {/* COLUMN 2: Marcus & Tom */}
          <div className="flex flex-col gap-6 h-[492px] justify-between">
            {/* Marcus Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100/80 flex flex-col justify-between h-[234px]">
              <div>
                <StarRating />
                <p className="text-[#2d3748] text-[14px] leading-relaxed italic font-medium">
                  “The mobile app alone justified the switch. I can review dashboards and approve tasks between meetings without opening my laptop.”
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#e2f0ed] flex items-center justify-center text-[#0f5146] font-bold text-[11px] tracking-wider">MR</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Marcus Reyes</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Product Director · Meridian</p>
                </div>
              </div>
            </div>

            {/* Tom Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100/80 flex flex-col justify-between h-[234px]">
              <div>
                <StarRating />
                <p className="text-[#2d3748] text-[14px] leading-relaxed italic font-medium">
                  “...ahead of what we had. We can finally show stakeholders live data instead of preparing decks.”
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#e2f0ed] flex items-center justify-center text-[#0f5146] font-bold text-[11px] tracking-wider">TW</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Tom Wainwright</h4>
                  <p className="text-[10px] text-slate-400 font-medium">CFO · Pulsar HQ</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Priya & Aiko (Shifted down layout) */}
          <div className="flex flex-col gap-6 h-[492px] justify-between">
            {/* Marcus Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100/80 flex flex-col justify-between h-[234px]">
              <div>
                <StarRating />
                <p className="text-[#2d3748] text-[14px] leading-relaxed italic font-medium">
                  “Onboarding our 30-person team took one afternoon.The learning curve is genuinely flat.”
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#e2f0ed] flex items-center justify-center text-[#0f5146] font-bold text-[11px] tracking-wider">PK</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Priya Kapoor</h4>
                  <p className="text-[10px] text-slate-400 font-medium">Engineering Lead. Vants Labs</p>
                </div>
              </div>
            </div>

            {/* Tom Card */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100/80 flex flex-col justify-between h-[234px]">
              <div>
                <StarRating />
                <p className="text-[#2d3748] text-[14px] leading-relaxed italic font-medium">
                  “message.Had a custom integrations questions answered in under two hours”
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#e2f0ed] flex items-center justify-center text-[#0f5146] font-bold text-[11px] tracking-wider">AN</div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Aiko Nakamura</h4>
                  <p className="text-[10px] text-slate-400 font-medium">CTO.Nexaflow</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;