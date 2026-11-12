import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Clock, Gift, Star } from "lucide-react";

// Countdown to New Year 2027
const TARGET_NEW_YEAR = new Date("2027-01-01T00:00:00+05:30").getTime();

function calculateRemaining() {
  const diff = TARGET_NEW_YEAR - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export function ChristmasNewYearHero({ onShopSarees, onShopAll }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#141824] via-[#10141e] to-[#0c0f17] text-stone-100 border-b border-amber-400/40 selection:bg-rose-600 selection:text-white">
      {/* Rich Regal Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-rose-900/35 to-pink-900/10 blur-[130px]" />
        <div className="absolute top-1/4 -right-32 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-amber-500/20 via-yellow-600/10 to-transparent blur-[140px]" />
        <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-900/30 to-teal-900/10 blur-[130px]" />
      </div>

      {/* Swaying Christmas Baubles on Desktop & Laptop */}
      <div className="absolute top-8 left-4 sm:left-8 md:left-12 lg:left-16 z-10 pointer-events-none hidden md:block opacity-90 animate-sway-left origin-top">
        <svg width="65" height="145" viewBox="0 0 65 145" fill="none">
          <line x1="32" y1="0" x2="32" y2="40" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="32" cy="72" r="30" fill="url(#ornamentRedDark)" stroke="#FBBF24" strokeWidth="2" />
          <ellipse cx="32" cy="72" rx="20" ry="10" fill="#FDE047" opacity="0.3" />
          <circle cx="32" cy="72" r="8" fill="#FFFBEB" opacity="0.9" />
          <rect x="27" y="38" width="10" height="6" rx="2" fill="#F59E0B" />
          <line x1="20" y1="102" x2="16" y2="140" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="32" y1="102" x2="32" y2="145" stroke="#EF4444" strokeWidth="2" />
          <line x1="44" y1="102" x2="48" y2="140" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <defs>
            <linearGradient id="ornamentRedDark" x1="10" y1="50" x2="55" y2="105" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DC2626" />
              <stop offset="0.7" stopColor="#991B1B" />
              <stop offset="1" stopColor="#450A0A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute top-8 right-4 sm:right-8 md:right-12 lg:right-16 z-10 pointer-events-none hidden md:block opacity-90 animate-sway-right origin-top">
        <svg width="65" height="145" viewBox="0 0 65 145" fill="none">
          <line x1="32" y1="0" x2="32" y2="40" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="32" cy="72" r="30" fill="url(#ornamentGoldDark)" stroke="#FDE047" strokeWidth="2" />
          <polygon points="32,52 35,66 48,72 35,78 32,92 29,78 16,72 29,66" fill="#FFFBEB" />
          <rect x="27" y="38" width="10" height="6" rx="2" fill="#D97706" />
          <line x1="20" y1="102" x2="18" y2="140" stroke="#FBBF24" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="32" y1="102" x2="32" y2="145" stroke="#F59E0B" strokeWidth="2" />
          <line x1="44" y1="102" x2="46" y2="140" stroke="#FBBF24" strokeWidth="2" strokeDasharray="3 3" />
          <defs>
            <linearGradient id="ornamentGoldDark" x1="10" y1="50" x2="55" y2="105" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FEF08A" />
              <stop offset="0.5" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#78350F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Top Auspicious Festive Ribbon */}
      <div className="w-full relative z-20 py-2 sm:py-2.5 bg-gradient-to-r from-[#7f1d1d] via-[#064e3b] to-[#78350f] text-amber-200 border-b border-amber-400/40 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 text-xs font-serif tracking-widest select-none overflow-hidden">
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

      {/* Hero Main Content */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20 text-center z-10">
        
        {/* Festive Dual Badge */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-stone-900/90 border border-amber-400/60 shadow-lg shadow-black/40 mb-4 sm:mb-6">
          <span className="text-base sm:text-lg animate-bounce">🎄</span>
          <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-300">
            Christmas &amp; New Year Festive Carnival 2027
          </span>
          <span className="text-base sm:text-lg animate-bounce">🥂</span>
        </div>

        {/* High-Impact Headline with Radiant Warm Gold Gradient */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.18] sm:leading-[1.15] text-stone-100">
          A Season of Joy, A Year of Grace:{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.35)]">
            Royal Silks &amp; Holiday Glamour
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-stone-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed px-2">
          Celebrate Christmas mornings in authentic Kanchipuram wedding silks, and step into New Year 2027 countdown parties in twirling designer velvet lehengas and cocktail couture.
        </p>

        {/* Live New Year 2027 Countdown & Automatic Markdowns Box */}
        <div className="mt-7 sm:mt-9 max-w-3xl mx-auto p-5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl bg-stone-900/90 border-2 border-amber-400/60 shadow-2xl shadow-black/50 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
            {/* Offer Details */}
            <div className="text-center md:text-left w-full md:w-auto">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest">
                <Gift size={16} className="text-rose-400" />
                <span>Christmas &amp; New Year Gala • Flat 25% Off Storewide</span>
              </div>
              <div className="text-stone-100 text-xs sm:text-sm font-semibold mt-1.5 flex items-center justify-center md:justify-start gap-1.5">
                <span>🎁 Free Year-End Luxury Gift Box on orders above ₹1,499</span>
              </div>
              <div className="text-amber-400/90 text-[11px] sm:text-xs mt-1 font-medium">
                Automatic Festive Discount applied at checkout — no coupons needed!
              </div>
            </div>

            {/* Countdown Display */}
            <div className="text-center md:text-right w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-amber-500/30">
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
                    className="flex flex-col items-center justify-center w-12 sm:w-14 h-14 sm:h-16 rounded-xl bg-stone-950 border border-amber-500/50 shadow-inner"
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
                🎅 Christmas Eve &amp; New Year Deals Active!
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onShopSarees}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-rose-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
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

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-amber-500/20 text-left">
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/70 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">🎄</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Holiday Certified</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">100% Authentic Silks</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/70 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">⚡</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Express Delivery</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">Guaranteed Pre-Xmas</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/70 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">🎁</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Free Holiday Box</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">On Orders &gt; ₹1,499</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/70 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">💳</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Instant Safe UPI</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">Zero Extra Charges</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sway animation keyframes */}
      <style>{`
        @keyframes swayLeft {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes swayRight {
          0%, 100% { transform: rotate(5deg); }
          50% { transform: rotate(-5deg); }
        }
        .animate-sway-left {
          animation: swayLeft 4s ease-in-out infinite;
        }
        .animate-sway-right {
          animation: swayRight 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
