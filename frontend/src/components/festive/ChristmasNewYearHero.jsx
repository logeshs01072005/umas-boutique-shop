import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Gift, Clock, Flame, Send, Check } from "lucide-react";

// Countdown to New Year 2027
const TARGET_NEW_YEAR = new Date("2027-01-01T00:00:00+05:30").getTime();

function calculateRemaining() {
  const diff = TARGET_NEW_YEAR - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isNewYear: true };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds, isNewYear: false };
}

export function ChristmasNewYearHero({ onShopSarees, onShopAll }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateRemaining());
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'xmas' | 'newyear'
  const [revealedGift, setRevealedGift] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#090b14] via-[#0f172a] to-[#07090e] border-b border-amber-400/30 text-stone-100 selection:bg-rose-500 selection:text-white">
      {/* Aurora Borealis & Festive Glow in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-600/25 to-pink-500/10 blur-[120px]" />
        <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-amber-400/20 via-yellow-500/10 to-transparent blur-[130px]" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-600/20 to-teal-500/10 blur-[120px]" />
      </div>

      {/* Realistic Multi-Layer Falling Snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {[
          { left: "5%", delay: "0s", dur: "7s", char: "❄", size: "text-xs opacity-70" },
          { left: "15%", delay: "1.8s", dur: "9.5s", char: "✦", size: "text-[10px] text-amber-300 opacity-80" },
          { left: "25%", delay: "3.2s", dur: "8s", char: "❄", size: "text-sm opacity-60" },
          { left: "38%", delay: "0.5s", dur: "11s", char: "✨", size: "text-xs opacity-75" },
          { left: "52%", delay: "2.4s", dur: "7.2s", char: "❄", size: "text-xs opacity-65" },
          { left: "64%", delay: "4.1s", dur: "10.2s", char: "✦", size: "text-[11px] text-yellow-200 opacity-90" },
          { left: "76%", delay: "1.1s", dur: "8.7s", char: "❄", size: "text-sm opacity-70" },
          { left: "88%", delay: "2.9s", dur: "9.8s", char: "✨", size: "text-xs opacity-80" },
          { left: "96%", delay: "0.2s", dur: "8.1s", char: "❄", size: "text-xs opacity-60" },
        ].map((flake, i) => (
          <span
            key={i}
            className={`absolute top-[-25px] animate-snowfall pointer-events-none ${flake.size}`}
            style={{
              left: flake.left,
              animationDelay: flake.delay,
              animationDuration: flake.dur,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          >
            {flake.char}
          </span>
        ))}
      </div>

      {/* Top Auspicious Festive Marquee Ribbon */}
      <div className="w-full relative z-20 py-2 sm:py-2.5 bg-gradient-to-r from-[#7f1d1d]/90 via-[#0f2e22]/95 to-[#78350f]/90 border-b border-amber-400/30 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 text-xs font-serif tracking-widest text-amber-200 select-none overflow-hidden">
          <span className="hidden lg:inline text-sm">🎄 🎁 ❄️ ✨ 🔔 🍾 🥂</span>
          <span className="mx-auto lg:mx-0 flex items-center justify-center gap-1.5 sm:gap-2.5 font-sans font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.16em] text-yellow-300 text-center">
            <span className="animate-pulse">✨</span>
            <span className="truncate max-w-[290px] sm:max-w-none">
              Merry Christmas &amp; Happy New Year 2027 • இனிய கிறிஸ்துமஸ் &amp; புத்தாண்டு நல்வாழ்த்துகள்
            </span>
            <span className="animate-pulse">✨</span>
          </span>
          <span className="hidden lg:inline text-sm">🥂 🍾 🔔 ✨ ❄️ 🎁 🎄</span>
        </div>
      </div>

      {/* Hero Content Container */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20 text-center z-10">
        
        {/* Festive Dual Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-red-950/90 via-stone-900 to-amber-950/90 border border-amber-400/60 shadow-lg shadow-rose-950/40 mb-4 sm:mb-6">
          <span className="text-base sm:text-lg animate-bounce">🎄</span>
          <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-200">
            Christmas &amp; New Year Festive Carnival 2027
          </span>
          <span className="text-base sm:text-lg animate-bounce">🥂</span>
        </div>

        {/* High-Impact Headline with Gold & Ruby Liquid Shimmer */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.18] sm:leading-[1.15]">
          A Season of Joy, A Year of Grace:{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.4)]">
            Royal Silks &amp; Holiday Glamour
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-stone-200 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed px-2">
          Celebrate Christmas mornings in authentic Kanchipuram wedding silks, and step into New Year 2027 countdown parties in twirling designer velvet lehengas and cocktail couture.
        </p>

        {/* Interactive Dual Festive Curations Selector */}
        <div className="mt-6 sm:mt-8 inline-flex items-center p-1 sm:p-1.5 rounded-full bg-stone-900/90 border border-amber-400/40 shadow-xl backdrop-blur-md">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "all"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 shadow-md font-bold"
                : "text-stone-300 hover:text-amber-200"
            }`}
          >
            ✨ All Holiday Collections
          </button>
          <button
            onClick={() => setActiveTab("xmas")}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "xmas"
                ? "bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-md font-bold"
                : "text-stone-300 hover:text-rose-300"
            }`}
          >
            🎄 Christmas Edit
          </button>
          <button
            onClick={() => setActiveTab("newyear")}
            className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === "newyear"
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md font-bold"
                : "text-stone-300 hover:text-amber-200"
            }`}
          >
            🥂 New Year 2027 Gala
          </button>
        </div>

        {/* Interactive Card: Countdown + Surprise Holiday Hamper Unboxing */}
        <div className="mt-7 sm:mt-9 max-w-3xl mx-auto p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-stone-950/95 via-[#180e1a]/95 to-stone-950/95 border-2 border-amber-400/60 shadow-2xl shadow-rose-950/30 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Offer Details with Interactive Scratch/Reveal Gift Box */}
            <div className="text-center md:text-left w-full md:w-auto">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest">
                <Gift size={16} className="text-rose-400" />
                <span>Holiday Gala • Flat 25% Off Storewide</span>
              </div>
              <div className="text-stone-100 text-xs sm:text-sm font-semibold mt-1.5 flex items-center justify-center md:justify-start gap-1.5">
                <span>🎁 Free Year-End Luxury Gift Box on orders above ₹1,499</span>
              </div>
              
              {/* Interactive Gift Box Button */}
              <div className="mt-2.5">
                {!revealedGift ? (
                  <button
                    onClick={() => setRevealedGift(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 hover:bg-rose-500/30 border border-rose-400/50 text-[11px] font-bold text-rose-300 transition-all transform hover:scale-105 active:scale-95"
                  >
                    <span>🎁 Tap to unwrap your Holiday Surprise</span>
                    <Sparkles size={12} className="animate-spin text-yellow-300" />
                  </button>
                ) : (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-[11px] font-bold text-emerald-300 animate-fadeIn">
                    <Check size={13} className="text-emerald-400" />
                    <span>Unlocked: Extra ₹200 OFF on billing + Free Holiday Sweets!</span>
                  </div>
                )}
              </div>
            </div>

            {/* Live New Year 2027 Countdown Timer */}
            <div className="text-center md:text-right w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-amber-500/20">
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-amber-300 block mb-1.5 flex items-center justify-center md:justify-end gap-1">
                <Clock size={13} className="text-amber-400" />
                <span>Countdown to New Year 2027:</span>
              </span>
              <div className="flex items-center justify-center md:justify-end gap-1.5 sm:gap-2">
                {[
                  { label: "Days", val: timeLeft.days },
                  { label: "Hours", val: timeLeft.hours },
                  { label: "Mins", val: timeLeft.minutes },
                  { label: "Secs", val: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-12 sm:w-14 h-14 sm:h-16 rounded-xl bg-stone-950/90 border border-amber-500/50 shadow-inner"
                  >
                    <span className="font-mono text-amber-300 font-bold text-base sm:text-lg leading-none">
                      {String(item.val).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-stone-400 mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-amber-300/80 mt-1.5 tracking-wider">
                🎅 Christmas Eve &amp; New Year Gala Active!
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fully Optimized for Touch Devices & Mobile */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onShopSarees}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Shop Christmas Sarees 🥻</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onShopAll}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-semibold text-sm sm:text-base tracking-wide border-2 border-amber-400/50 shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>New Year Party Collection ✨</span>
          </button>
        </div>

        {/* Trust Badges - Optimized Grid for Mobile, Tablet, Laptop, and PC */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-amber-500/20 text-left">
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">🎄</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Holiday Certified</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">100% Authentic Silks</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">⚡</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Express Delivery</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">Guaranteed Pre-Xmas</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">🎁</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Free Holiday Box</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">On Orders &gt; ₹1,499</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">💳</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Instant Safe UPI</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">Zero Extra Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Snowfall keyframe style */}
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(680px) rotate(360deg);
            opacity: 0.2;
          }
        }
        .animate-snowfall {
          animation-name: snowfall;
        }
      `}</style>
    </div>
  );
}
