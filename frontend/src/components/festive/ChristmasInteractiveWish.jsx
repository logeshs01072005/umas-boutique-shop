import React, { useState } from "react";
import { Sparkles, Heart, Gift, Star, Flame, Check } from "lucide-react";

export function ChristmasInteractiveWish() {
  const [litStar, setLitStar] = useState(true);
  const [unwrappedGift, setUnwrappedGift] = useState(false);
  const [wishesCount, setWishesCount] = useState(4529);

  const handleLightStar = () => {
    setLitStar((prev) => !prev);
    if (!litStar) setWishesCount((c) => c + 1);
  };

  const handleUnwrap = () => {
    if (!unwrappedGift) {
      setUnwrappedGift(true);
      setWishesCount((c) => c + 1);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#1b0811] via-[#0d161d] to-[#08120d] border-2 border-amber-400/50 shadow-2xl shadow-rose-950/40 text-stone-100 max-w-5xl mx-auto backdrop-blur-md">
      {/* Background festive ambient glow */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-rose-600/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />

      {/* Garland Header */}
      <div className="text-amber-300/80 text-sm tracking-[0.3em] mb-3 select-none text-center">
        ✦ 🎄 ✦ ❄️ ✦ 🔔 ✦ 🥂 ✦ 🎁 ✦ ❄️ ✦ 🎄 ✦
      </div>

      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="inline-block px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 mb-3">
          ✨ Auspicious Christmas &amp; New Year 2027 Ceremony ✨
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-100">
          Light the Holiday Tree &amp; Ring in 2027
        </h3>
        <p className="text-stone-300 text-xs sm:text-sm mt-2 font-light leading-relaxed">
          Welcome eternal joy and prosperity into your home this festive season. No coupon codes needed — all festival discounts are applied automatically at checkout!
        </p>
      </div>

      {/* Main Interactive Centerpiece: Glowing Christmas Tree + Sparkling New Year Star */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center max-w-4xl mx-auto mb-8">
        
        {/* Left: Interactive Christmas Tree with Glowing Star */}
        <div
          onClick={handleLightStar}
          className="cursor-pointer flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-stone-900/70 border border-amber-400/40 hover:border-amber-400 transition-all transform hover:scale-[1.02] active:scale-[0.98] group"
          title="Tap to light the Star & Tree!"
        >
          <div className="relative w-40 h-44 flex items-center justify-center">
            {/* Halo Glow */}
            {litStar && (
              <div className="absolute top-2 w-32 h-32 rounded-full bg-yellow-400/35 blur-xl animate-pulse" />
            )}

            {/* Christmas Tree SVG */}
            <svg viewBox="0 0 120 130" className="w-full h-full drop-shadow-xl overflow-visible">
              {/* Top Tier */}
              <polygon points="60,30 82,58 38,58" fill="url(#treeGreen1)" stroke="#22C55E" strokeWidth="1" />
              {/* Mid Tier */}
              <polygon points="60,48 92,80 28,80" fill="url(#treeGreen2)" stroke="#16A34A" strokeWidth="1" />
              {/* Base Tier */}
              <polygon points="60,70 104,106 16,106" fill="url(#treeGreen3)" stroke="#15803D" strokeWidth="1" />

              {/* Trunk */}
              <rect x="52" y="106" width="16" height="18" rx="2" fill="#78350F" stroke="#451A03" />

              {/* Golden Star with Shimmer */}
              <g className={litStar ? "animate-pulse" : "opacity-60"}>
                <polygon
                  points="60,12 64,24 76,24 67,31 70,43 60,36 50,43 53,31 44,24 56,24"
                  fill="url(#goldStar)"
                  stroke="#FEF08A"
                  strokeWidth="1.2"
                  className="filter drop-shadow-[0_0_10px_#facc15]"
                />
              </g>

              {/* Colorful Glow Ornaments */}
              <circle cx="50" cy="52" r="3" fill="#EF4444" className={litStar ? "animate-ping" : ""} />
              <circle cx="70" cy="52" r="3" fill="#F59E0B" />
              <circle cx="44" cy="74" r="3.5" fill="#38BDF8" />
              <circle cx="60" cy="72" r="3.5" fill="#EC4899" />
              <circle cx="76" cy="74" r="3.5" fill="#FACC15" />
              <circle cx="32" cy="98" r="4" fill="#F59E0B" />
              <circle cx="50" cy="96" r="4" fill="#EF4444" />
              <circle cx="70" cy="96" r="4" fill="#10B981" />
              <circle cx="88" cy="98" r="4" fill="#A855F7" />

              <defs>
                <linearGradient id="treeGreen1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22C55E" />
                  <stop offset="100%" stopColor="#15803D" />
                </linearGradient>
                <linearGradient id="treeGreen2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#16A34A" />
                  <stop offset="100%" stopColor="#166534" />
                </linearGradient>
                <linearGradient id="treeGreen3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#15803D" />
                  <stop offset="100%" stopColor="#14532D" />
                </linearGradient>
                <linearGradient id="goldStar" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFFBEB" />
                  <stop offset="50%" stopColor="#FACC15" />
                  <stop offset="100%" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <button
            type="button"
            className="mt-3 text-xs tracking-wider uppercase font-bold text-amber-300 group-hover:text-amber-200 flex items-center gap-1.5"
          >
            <Sparkles size={14} className={litStar ? "text-yellow-400 animate-spin" : "text-stone-400"} />
            <span>{litStar ? "✨ Tree & Star Glowing • Tap to Rekindle" : "🎄 Tap to Light the Tree"}</span>
          </button>
        </div>

        {/* Right: Holiday Hamper & New Year 2027 Blessing Card */}
        <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-stone-900/70 border border-amber-400/40 text-left h-full">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">🥂</span>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                Automatic Storewide Discount
              </span>
            </div>

            <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-100 mb-2">
              Holiday Blessing &amp; Festive Gift Box
            </h4>

            <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed mb-4">
              Celebrate without worrying about coupon codes. A direct <strong className="text-amber-300">Flat 25% Off</strong> is automatically applied at billing across all pure Kanchipuram silks, designer lehengas, and holiday kurtis.
            </p>

            {/* Tap to open surprise box */}
            <div className="mb-4">
              {!unwrappedGift ? (
                <button
                  type="button"
                  onClick={handleUnwrap}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Gift size={15} />
                  <span>Tap to Unwrap Free Holiday Hamper</span>
                </button>
              ) : (
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <Check size={16} className="text-emerald-400 shrink-0" />
                  <span>🎁 Free Luxury Sweet Hamper &amp; Free Shipping Included on Orders &gt; ₹1,499!</span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
            <span className="flex items-center gap-1.5">
              <Heart size={14} className="text-rose-500 fill-rose-500" />
              <span><strong className="text-amber-300">{wishesCount.toLocaleString()}</strong> holiday shoppers celebrated</span>
            </span>
            <span className="font-mono text-amber-300 font-bold">2027 GALA</span>
          </div>
        </div>

      </div>

      {/* Editorial Tamil & English Blessing Note */}
      <div className="pt-6 border-t border-amber-500/30 text-center max-w-2xl mx-auto">
        <p className="text-xs sm:text-sm text-stone-200 font-light italic leading-relaxed">
          "இனிய கிறிஸ்துமஸ் மற்றும் புத்தாண்டு 2027 நல்வாழ்த்துகள்! May your home be blessed with joy, laughter, and everlasting elegance this festive season."
        </p>
        <span className="text-[11px] text-amber-300 uppercase tracking-widest font-mono block mt-2 font-semibold">
          ✨ Special Festive Markdowns Applied Automatically Across All Collections ✨
        </span>
      </div>
    </div>
  );
}
