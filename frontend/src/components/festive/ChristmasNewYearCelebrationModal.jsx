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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      {/* Luxury Editorial Modal Container */}
      <div className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-gradient-to-b from-[#15131b] via-[#0d0c11] to-[#070709] border border-amber-500/40 shadow-2xl p-6 sm:p-8 text-center text-stone-100">
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-amber-300 hover:bg-stone-900 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Monogram / Header */}
        <div className="mb-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 block mb-1">
            Complimentary Invitation
          </span>
          <div className="w-8 h-[1px] bg-amber-400/40 mx-auto mt-2" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-stone-100 leading-snug">
          The Holiday &amp; New Year Gala 2027
        </h2>

        {/* Tamil Blessing */}
        <p className="text-amber-200/90 text-xs sm:text-sm font-light italic mt-2">
          இனிய கிறிஸ்துமஸ் &amp; புத்தாண்டு நல்வாழ்த்துகள்
        </p>

        {/* Courtesy Card */}
        <div className="my-6 p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-center">
          <span className="text-xs uppercase font-mono tracking-wider text-amber-300 font-semibold block">
            Storewide Seasonal Courtesy: Flat 25% Off
          </span>
          <p className="text-[11px] text-stone-400 mt-1 font-light">
            Heirloom Bridal Silks • Handcrafted Lehengas • Contemporary Party Silhouettes
          </p>
          <span className="text-[10px] text-amber-400/80 font-mono tracking-wider block mt-2">
            Complimentary signature gift box with every holiday order &gt; ₹1,499
          </span>
        </div>

        {/* CTA */}
        <button
          onClick={handleClose}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-bold text-xs tracking-[0.18em] uppercase shadow-lg shadow-amber-500/10 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <span>Enter Collection</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
