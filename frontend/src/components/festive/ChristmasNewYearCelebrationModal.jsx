import React, { useState } from "react";
import { X, Sparkles, Gift } from "lucide-react";

export function ChristmasNewYearCelebrationModal({ onClose }) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fadeIn">
      {/* Background Decorative Winter Box */}
      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden bg-gradient-to-br from-[#1c080e] via-[#0b141e] to-[#06120b] border-2 border-amber-400/60 shadow-2xl shadow-rose-500/25 p-6 sm:p-8 text-center text-stone-100">
        {/* Ambient Glows */}
        <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full bg-rose-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/80 text-stone-400 hover:text-amber-300 hover:bg-stone-800 transition-colors border border-amber-500/30 text-sm"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Auspicious Holiday Garland Header */}
        <div className="text-amber-300/80 text-sm tracking-[0.3em] mb-3 select-none">
          ✦ 🎄 ✦ ❄️ ✦ 🔔 ✦ 🥂 ✦ 🎁 ✦
        </div>

        {/* Badge */}
        <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-rose-500/20 text-rose-300 border border-rose-400/40 mb-3">
          ✨ Holiday Carnival &amp; New Year 2027 ✨
        </span>

        {/* Big Greeting Headline */}
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-amber-200 tracking-tight leading-snug">
          Merry Christmas &amp; Happy New Year!
        </h2>

        {/* Tamil Blessing */}
        <p className="text-amber-300/90 text-xs sm:text-sm font-medium italic mt-2">
          இனிய கிறிஸ்துமஸ் &amp; புத்தாண்டு நல்வாழ்த்துகள்!
        </p>

        {/* Decorative Centerpiece Icon */}
        <div className="my-5 flex justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-amber-400/25 blur-xl animate-pulse" />
            <span className="text-5xl drop-shadow-[0_0_15px_#f59e0b]">🎄</span>
          </div>
        </div>

        {/* Offer Box */}
        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/40 mb-5">
          <div className="text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Gift size={16} className="text-rose-400" />
            <span>Christmas &amp; New Year Gala • Up to 30% OFF</span>
          </div>
          <div className="text-[11px] sm:text-xs text-stone-300 mt-1">
            Pure Silk Sarees • Midnight Velvet Lehengas • Holiday Kurtis
          </div>
          <div className="text-[10px] sm:text-[11px] text-yellow-300 font-semibold mt-1">
            Free Year-End Luxury Gift Box on orders above ₹1,499
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={handleClose}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-sm tracking-wider uppercase shadow-xl shadow-rose-600/30 transition-all transform hover:scale-105 active:scale-95"
        >
          🛍️ Explore Holiday Collection
        </button>
      </div>
    </div>
  );
}
