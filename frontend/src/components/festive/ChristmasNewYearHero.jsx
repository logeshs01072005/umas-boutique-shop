import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Gift, Clock, Star } from "lucide-react";

// Countdown to New Year's Eve / New Year 2027 Celebration
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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#0a131f] via-[#0d1d2d] to-[#080d14] border-b border-amber-400/30 text-stone-100 selection:bg-rose-500 selection:text-white">
      {/* Ambient Winter Magic Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rose-600/20 blur-3xl" />
        <div className="absolute top-1/4 -right-24 w-96 h-96 rounded-full bg-amber-400/20 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-emerald-600/20 blur-3xl" />
      </div>

      {/* Decorative Falling Snow Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {[
          { left: "8%", delay: "0s", dur: "7s", size: "text-xs" },
          { left: "18%", delay: "1.5s", dur: "9s", size: "text-sm" },
          { left: "28%", delay: "3s", dur: "8s", size: "text-xs" },
          { left: "42%", delay: "0.8s", dur: "11s", size: "text-base" },
          { left: "55%", delay: "2.2s", dur: "7.5s", size: "text-xs" },
          { left: "68%", delay: "4s", dur: "10s", size: "text-sm" },
          { left: "79%", delay: "1.2s", dur: "8.5s", size: "text-xs" },
          { left: "91%", delay: "2.8s", dur: "9.5s", size: "text-sm" },
        ].map((flake, i) => (
          <span
            key={i}
            className={`absolute top-[-20px] text-white/50 animate-snowfall ${flake.size}`}
            style={{
              left: flake.left,
              animationDelay: flake.delay,
              animationDuration: flake.dur,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* Top Auspicious Festive Ribbon */}
      <div className="w-full relative z-20 py-2 sm:py-2.5 bg-gradient-to-r from-red-950 via-emerald-950 to-amber-950 border-b border-amber-400/30 shadow-md">
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

      {/* Swaying Golden Baubles / Hanging Christmas Ornaments - Left Side (Hidden on Mobile) */}
      <div className="absolute top-10 left-3 sm:left-6 md:left-10 lg:left-16 z-10 pointer-events-none hidden md:block animate-sway-left origin-top opacity-90">
        <svg width="60" height="135" viewBox="0 0 60 135" fill="none">
          <line x1="30" y1="0" x2="30" y2="45" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="30" cy="75" r="28" fill="url(#ornamentRed)" stroke="#FBBF24" strokeWidth="1.5" />
          <path d="M12 75 Q30 60 48 75 Q30 90 12 75 Z" fill="#FBBF24" opacity="0.3" />
          <circle cx="30" cy="75" r="7" fill="#FEF08A" opacity="0.8" />
          <rect x="25" y="43" width="10" height="6" rx="2" fill="#F59E0B" />
          <defs>
            <linearGradient id="ornamentRed" x1="10" y1="50" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DC2626" />
              <stop offset="0.6" stopColor="#991B1B" />
              <stop offset="1" stopColor="#450A0A" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Swaying Golden Baubles / Hanging New Year Star - Right Side (Hidden on Mobile) */}
      <div className="absolute top-10 right-3 sm:right-6 md:right-10 lg:right-16 z-10 pointer-events-none hidden md:block animate-sway-right origin-top opacity-90">
        <svg width="60" height="135" viewBox="0 0 60 135" fill="none">
          <line x1="30" y1="0" x2="30" y2="45" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="30" cy="75" r="28" fill="url(#ornamentGold)" stroke="#FDE047" strokeWidth="1.5" />
          {/* Star sparkle */}
          <polygon points="30,55 33,68 46,75 33,82 30,95 27,82 14,75 27,68" fill="#FFFBEB" />
          <rect x="25" y="43" width="10" height="6" rx="2" fill="#CA8A04" />
          <defs>
            <linearGradient id="ornamentGold" x1="10" y1="50" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.5" stopColor="#D97706" />
              <stop offset="1" stopColor="#78350F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Hero Container - Fully Optimized for Mobile, iOS, Tablet, Laptop, and PC */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20 text-center z-10">
        {/* Festive Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-950 via-emerald-950 to-amber-950 border border-amber-400/60 shadow-lg shadow-amber-500/20 mb-4 sm:mb-6">
          <span className="text-base sm:text-lg animate-bounce">🎄</span>
          <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-200">
            Christmas &amp; New Year Festive Carnival 2027
          </span>
          <span className="text-base sm:text-lg animate-bounce">🥂</span>
        </div>

        {/* Hero Title with Shimmering Gold & Ruby Red Gradient */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.18] sm:leading-[1.15]">
          Celebrate The Magic of Christmas &amp;{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.4)]">
            Ring in the New Year in Royal Silks
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-stone-200 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed px-2">
          Step into a grand winter season of joy and celebrations. Wrap yourself in pure Kanchipuram wedding silks, midnight velvet lehengas, glamorous cocktail sarees, and designer winter tops curated for Christmas galas &amp; New Year parties.
        </p>

        {/* Grand Christmas & New Year Countdown Card */}
        <div className="mt-7 sm:mt-9 max-w-3xl mx-auto p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-stone-950/95 via-[#1a0f16]/90 to-stone-950/95 border-2 border-amber-400/60 shadow-2xl shadow-amber-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
            {/* Offer Details */}
            <div className="text-center md:text-left w-full md:w-auto">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest">
                <Gift size={16} className="text-rose-400" />
                <span>Christmas &amp; New Year Gala • Up to 30% OFF</span>
              </div>
              <div className="text-stone-100 text-xs sm:text-sm font-semibold mt-1.5 flex items-center justify-center md:justify-start gap-1.5">
                <span>🎁 Free Year-End Luxury Gift Box on orders above ₹1,499</span>
              </div>
              <div className="text-amber-400/90 text-[11px] sm:text-xs mt-1 font-medium">
                Direct Festive Markdown applied automatically across all collections
              </div>
            </div>

            {/* Live New Year Countdown */}
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
                🎅 Christmas Eve &amp; New Year Special Deals Active!
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fully Responsive Across Mobile & Desktop */}
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

        {/* Trust Badges - Responsive Grid Across Mobile, Tablet, Laptop, and Desktop */}
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
            transform: translateY(650px) rotate(360deg);
            opacity: 0.2;
          }
        }
        .animate-snowfall {
          animation-name: snowfall;
        }
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
