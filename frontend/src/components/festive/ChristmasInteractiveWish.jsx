import React, { useState } from "react";
import { Sparkles, Heart, Gift, Send, Check } from "lucide-react";

export function ChristmasInteractiveWish() {
  const [wished, setWished] = useState(false);
  const [wishCount, setWishCount] = useState(3842);
  const [wishCategory, setWishCategory] = useState("prosperity");
  const [customWish, setCustomWish] = useState("");
  const [submittedWish, setSubmittedWish] = useState(false);

  const handleMakeWish = () => {
    if (!wished) {
      setWished(true);
      setWishCount((c) => c + 1);
    }
  };

  const handleSendWish = (e) => {
    e.preventDefault();
    if (!customWish.trim()) return;
    setSubmittedWish(true);
    if (!wished) {
      setWished(true);
      setWishCount((c) => c + 1);
    }
  };

  const wishOptions = [
    { id: "prosperity", label: "💰 Prosperity & Wealth", icon: "✨" },
    { id: "family", label: "❤️ Joy & Family Harmony", icon: "🏡" },
    { id: "glamour", label: "👗 Glamour & New Style", icon: "💎" },
    { id: "health", label: "🌿 Good Health & Peace", icon: "🕊️" },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#180a14]/90 via-[#0a121c]/95 to-[#06170e]/90 border-2 border-amber-400/50 shadow-2xl shadow-rose-950/30 text-center max-w-4xl mx-auto backdrop-blur-md">
      {/* Background radial aurora light */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none ${
          wished ? "opacity-50 bg-rose-500" : "opacity-20 bg-emerald-600"
        }`}
      />

      {/* Decorative Traditional Ribbon Header */}
      <div className="text-amber-300/80 text-sm tracking-[0.3em] mb-3 select-none">
        ✦ ❄️ ✦ 🎄 ✦ 🔔 ✦ 🎁 ✦ 🥂 ✦ ❄️ ✦
      </div>

      <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 mb-3 sm:mb-4">
        ✨ 2027 Holiday Wishing Tree &amp; Blessings ✨
      </span>

      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-100 font-bold mb-2">
        Hang Your New Year 2027 Wish on the Tree
      </h3>

      <p className="text-stone-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6 font-light">
        Choose your special blessing or write your personal wish to welcome 2027 with good fortune and auspicious beginnings!
      </p>

      {/* Interactive Wishing Pill Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 max-w-2xl mx-auto">
        {wishOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => {
              setWishCategory(opt.id);
              handleMakeWish();
            }}
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all border ${
              wishCategory === opt.id
                ? "bg-amber-400/20 border-amber-400 text-amber-200 shadow-md scale-105"
                : "bg-stone-900/60 border-stone-700/60 text-stone-300 hover:border-amber-400/40"
            }`}
          >
            <span>{opt.label}</span>
          </button>
        ))}
      </div>

      {/* Interactive Glowing Christmas Tree */}
      <div
        onClick={handleMakeWish}
        className="cursor-pointer inline-flex flex-col items-center justify-center p-6 rounded-3xl hover:bg-emerald-500/10 transition-all transform hover:scale-105 active:scale-95 group mb-6 select-none"
        title={wished ? "Your wish is sparkling on the tree! Happy 2027!" : "Tap to light the tree and make your wish!"}
      >
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Tree Halo Glow */}
          {wished && (
            <div className="absolute top-2 w-28 h-28 rounded-full bg-yellow-400/35 blur-xl animate-pulse" />
          )}

          {/* SVG Christmas Tree with Star */}
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-xl overflow-visible">
            {/* Tree Layers */}
            <polygon points="60,25 78,50 42,50" fill="url(#treeGreenTop)" stroke="#22C55E" strokeWidth="1" />
            <polygon points="60,42 86,72 34,72" fill="url(#treeGreenMid)" stroke="#16A34A" strokeWidth="1" />
            <polygon points="60,62 96,96 24,96" fill="url(#treeGreenBot)" stroke="#15803D" strokeWidth="1" />

            {/* Tree Trunk */}
            <rect x="53" y="96" width="14" height="18" rx="2" fill="#78350F" stroke="#451A03" />

            {/* Golden Star on Top */}
            <g className={wished ? "animate-pulse" : ""}>
              <polygon
                points="60,10 63,20 73,20 65,26 68,36 60,30 52,36 55,26 47,20 57,20"
                fill="url(#starGold)"
                stroke="#FEF08A"
                strokeWidth="1"
                className="filter drop-shadow-[0_0_8px_#fde047]"
              />
            </g>

            {/* Bauble Ornaments with Glow */}
            <circle cx="50" cy="46" r="3" fill="#EF4444" className={wished ? "animate-ping" : ""} />
            <circle cx="70" cy="46" r="3" fill="#F59E0B" />
            <circle cx="42" cy="68" r="3.5" fill="#3B82F6" />
            <circle cx="62" cy="65" r="3.5" fill="#EF4444" />
            <circle cx="78" cy="68" r="3.5" fill="#FACC15" />
            <circle cx="34" cy="90" r="4" fill="#F59E0B" />
            <circle cx="52" cy="88" r="4" fill="#EC4899" />
            <circle cx="70" cy="89" r="4" fill="#10B981" />
            <circle cx="86" cy="90" r="4" fill="#EF4444" />

            <defs>
              <linearGradient id="treeGreenTop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#15803D" />
              </linearGradient>
              <linearGradient id="treeGreenMid" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#16A34A" />
                <stop offset="100%" stopColor="#166534" />
              </linearGradient>
              <linearGradient id="treeGreenBot" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#15803D" />
                <stop offset="100%" stopColor="#14532D" />
              </linearGradient>
              <linearGradient id="starGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#FACC15" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <button
          type="button"
          className="mt-3 text-xs tracking-wider uppercase font-bold text-amber-300 group-hover:text-amber-200 flex items-center gap-1.5"
        >
          <Sparkles size={14} className={wished ? "text-yellow-400 animate-spin" : "text-stone-400"} />
          <span>{wished ? "✨ Wish Blessed for 2027! Tap to Celebrate" : "🎄 Tap to Light the Tree & Wish"}</span>
        </button>
      </div>

      {/* Optional Custom Wish Input for Customer Engagement */}
      <div className="max-w-md mx-auto mb-6">
        {!submittedWish ? (
          <form onSubmit={handleSendWish} className="flex items-center gap-2">
            <input
              type="text"
              value={customWish}
              onChange={(e) => setCustomWish(e.target.value)}
              placeholder="Write a custom 2027 wish (e.g. Dream Saree)..."
              className="flex-1 bg-stone-900/80 border border-amber-500/30 rounded-full px-4 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-xs flex items-center gap-1 shadow-md transition-all shrink-0"
            >
              <span>Hang Wish</span>
              <Send size={12} />
            </button>
          </form>
        ) : (
          <div className="p-2.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-xs font-semibold text-emerald-300 flex items-center justify-center gap-2 animate-fadeIn">
            <Check size={14} className="text-emerald-400" />
            <span>Your wish is pinned to Uma's 2027 Tree! May it come true ✨</span>
          </div>
        )}
      </div>

      {/* Community Wishes Count */}
      <div className="flex items-center justify-center gap-2 text-stone-300 text-xs mb-6 font-medium">
        <Heart size={14} className="text-rose-500 fill-rose-500" />
        <span>
          <strong className="text-amber-300 font-bold">{wishCount.toLocaleString()}</strong> shoppers have hung their 2027 New Year wish!
        </span>
      </div>

      {/* Holiday Blessing Card */}
      <div className="p-4 md:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/40 max-w-xl mx-auto text-center">
        <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
          🎄 Season's Greetings &amp; New Year Blessings 🥂
        </span>
        <p className="text-stone-200 text-xs sm:text-sm font-light italic leading-relaxed">
          "இனிய கிறிஸ்துமஸ் மற்றும் புத்தாண்டு 2027 நல்வாழ்த்துகள்! May the season bring unending warmth, laughter, and dazzling style to your family."
        </p>
        <span className="inline-block mt-2 text-[11px] font-semibold text-yellow-400">
          ✨ Special Year-End Markdowns Applied Automatically Across All Collections ✨
        </span>
      </div>
    </div>
  );
}
