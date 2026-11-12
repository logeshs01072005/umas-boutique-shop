import React, { useState } from "react";
import { Sparkles, Heart, ArrowRight, ShieldCheck, Gift } from "lucide-react";

export function ChristmasInteractiveWish() {
  const [selectedPrivilege, setSelectedPrivilege] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const privileges = [
    {
      id: "gift",
      title: "Complimentary Hamper",
      desc: "Deluxe holiday sweets box & heirloom packaging included with orders above ₹1,499",
      code: "FESTIVEBOX",
      badge: "Gift Courtesy",
    },
    {
      id: "express",
      title: "Priority Express Dispatch",
      desc: "Expedited boutique dispatch guaranteed to arrive before your celebrations",
      code: "XMASEXPRESS",
      badge: "Fast Dispatch",
    },
    {
      id: "vip",
      title: "Boutique Concierge Credit",
      desc: "Extra ₹250 courtesy credit applied directly at checkout on bridal silks",
      code: "ROYAL2027",
      badge: "VIP Benefit",
    },
  ];

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#121118] via-[#0d0c11] to-[#070709] border border-amber-500/30 shadow-2xl text-stone-100 max-w-5xl mx-auto backdrop-blur-md">
      {/* Subtle Ambient Backlight */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block mb-2">
          The Holiday Boutique Concierge
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-stone-100">
          Seasonal Privileges &amp; Celebratory Courtesies
        </h3>
        <p className="text-stone-400 text-xs sm:text-sm mt-2 font-light leading-relaxed">
          Select a holiday courtesy to unlock exclusive perks on your Christmas and New Year order.
        </p>
      </div>

      {/* 3 Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
        {privileges.map((item) => {
          const isSelected = selectedPrivilege === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setSelectedPrivilege(item.id)}
              className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                isSelected
                  ? "bg-amber-500/10 border-amber-400/80 shadow-lg shadow-amber-500/10 scale-[1.02]"
                  : "bg-stone-900/40 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 px-2 py-0.5 rounded bg-stone-900 border border-stone-800">
                    {item.badge}
                  </span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-amber-400 bg-amber-400" : "border-stone-600"}`}>
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-stone-950" />}
                  </div>
                </div>

                <h4 className="font-serif text-lg font-medium text-stone-100 mb-2">
                  {item.title}
                </h4>

                <p className="text-stone-400 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800/80 flex items-center justify-between">
                <span className="font-mono text-xs text-amber-300 font-semibold tracking-wider">
                  {item.code}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(item.code);
                  }}
                  className="text-[11px] text-stone-400 hover:text-amber-300 underline transition-colors"
                >
                  {copiedCode === item.code ? "Copied ✓" : "Copy Code"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Editorial Blessing Banner */}
      <div className="pt-6 border-t border-stone-800/80 text-center max-w-xl mx-auto">
        <p className="text-xs sm:text-sm text-stone-300 font-light italic leading-relaxed">
          "இனிய கிறிஸ்துமஸ் &amp; புத்தாண்டு 2027 நல்வாழ்த்துகள் — Wishing you and your loved ones an enchanting season of elegance, good health, and joyful reunions."
        </p>
        <span className="text-[11px] text-amber-400/80 uppercase tracking-widest font-mono block mt-2">
          Uma's Fashion &amp; Boutique Atelier
        </span>
      </div>
    </div>
  );
}
