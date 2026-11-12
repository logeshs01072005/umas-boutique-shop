import React, { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export function ChristmasNewYearCelebrationModal({ onClose }) {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fadeIn">
      {/* Luxury Light Modal Container */}
      <div className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-gradient-to-b from-white via-[#fffdfa] to-[#faf4eb] border-2 border-amber-400 shadow-2xl p-6 sm:p-8 text-center text-stone-900">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-red-700 font-bold block mb-1">
            Complimentary Invitation
          </span>
          <div className="w-8 h-[2px] bg-amber-400 mx-auto mt-2" />
        </div>

        {/* Headline with High-Contrast Dark Typography */}
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900 leading-snug">
          The Holiday &amp; New Year Gala 2027
        </h2>

        {/* Tamil Blessing */}
        <p className="text-amber-900 text-xs sm:text-sm font-medium italic mt-2">
          இனிய கிறிஸ்துமஸ் &amp; புத்தாண்டு நல்வாழ்த்துகள்
        </p>

        {/* Courtesy Card */}
        <div className="my-6 p-5 rounded-xl bg-amber-50/80 border border-amber-300 text-center shadow-sm">
          <span className="text-xs uppercase font-mono tracking-wider text-red-700 font-extrabold block">
            Storewide Seasonal Courtesy: Flat 25% Off
          </span>
          <p className="text-xs text-stone-700 mt-1.5 font-normal">
            Heirloom Bridal Silks • Handcrafted Lehengas • Contemporary Party Silhouettes
          </p>
          <span className="text-[11px] text-amber-900 font-bold tracking-wider block mt-2">
            Complimentary signature gift box with every holiday order &gt; ₹1,499
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={handleClose}
          className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs tracking-[0.18em] uppercase shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <span>Enter Collection</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
