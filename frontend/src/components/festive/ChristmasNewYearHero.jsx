import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Clock, Compass, ShieldCheck, Truck, RefreshCw, Star } from "lucide-react";

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
    <div className="relative overflow-hidden bg-[#070709] text-stone-100 border-b border-amber-500/20 selection:bg-amber-400 selection:text-stone-950">
      {/* Subtle Luxury Radial Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/10 via-rose-500/5 to-transparent blur-[140px]" />
      </div>

      {/* Top Editorial Ribbon */}
      <div className="w-full relative z-20 py-2 sm:py-2.5 bg-gradient-to-r from-stone-950 via-[#18151c] to-stone-950 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 text-xs font-serif tracking-widest text-amber-200/90 select-none">
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.25em] text-stone-400">
            Hautes Fêtes • Winter 2026/27
          </span>
          <div className="mx-auto md:mx-0 flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.2em] uppercase font-sans text-amber-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="truncate max-w-[320px] sm:max-w-none">
              Christmas &amp; New Year Gala • Privileged 25% Courtesy Markdowns
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </div>
          <span className="hidden md:inline text-[11px] uppercase tracking-[0.25em] text-stone-400">
            Kanchipuram • Banaras • Couture
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-24 pb-14 sm:pb-18 text-center z-10">
        
        {/* Minimal Luxury Monogram Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 rounded-full bg-stone-900/80 border border-amber-400/40 shadow-inner mb-6 sm:mb-8 backdrop-blur-md">
          <span className="text-amber-400 text-xs font-serif italic">Edition</span>
          <span className="w-1 h-1 rounded-full bg-amber-400/60" />
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] uppercase font-bold text-amber-200">
            Holiday Season &amp; New Year 2027
          </span>
        </div>

        {/* Vogue/High-Fashion Serif Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight max-w-4xl mx-auto leading-[1.12] sm:leading-[1.1] text-stone-100">
          Where Heritage Weaves Meet{" "}
          <span className="italic font-light bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
            Midnight Celebrations
          </span>
        </h1>

        {/* Sophisticated Editorial Subtitle */}
        <p className="mt-5 sm:mt-6 text-stone-300 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          From sacred Christmas morning Eucharists in pure zari silks to high-octane 2027 countdown galas in hand-embroidered velvet lehengas. Draped for distinction.
        </p>

        {/* High-End Countdown Strip - Architectural & Clean */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-stone-900/60 border border-amber-500/30 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-400/90 block">
                Countdown to 2027
              </span>
              <span className="text-xs text-stone-300 font-light mt-0.5 block">
                Complimentary luxury gift box on orders &gt; ₹1,499
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              {[
                { label: "Days", val: timeLeft.days },
                { label: "Hours", val: timeLeft.hours },
                { label: "Mins", val: timeLeft.minutes },
                { label: "Secs", val: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center w-12 sm:w-14 h-13 sm:h-14 rounded-xl bg-stone-950/90 border border-stone-800"
                >
                  <span className="font-mono text-amber-300 font-semibold text-base sm:text-lg leading-none">
                    {String(item.val).padStart(2, "0")}
                  </span>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-wider text-stone-400 mt-1 font-sans">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Luxury CTA Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onShopSarees}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-stone-950 font-bold text-xs sm:text-sm tracking-[0.15em] uppercase shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5"
          >
            <span>Explore Bridal &amp; Silks</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onShopAll}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 rounded-full bg-stone-900/80 hover:bg-stone-800 text-stone-200 hover:text-amber-300 font-medium text-xs sm:text-sm tracking-[0.15em] uppercase border border-stone-700 hover:border-amber-400/50 transition-all flex items-center justify-center gap-2"
          >
            <span>Party &amp; Lehengas</span>
          </button>
        </div>

        {/* Minimalist Trust Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-stone-800/80 text-left">
          <div className="p-3 sm:p-4 rounded-xl bg-stone-900/40 border border-stone-800/80">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-400/90 block">Silk Mark</span>
            <span className="text-xs text-stone-200 font-medium mt-1 block">Certified 100% Pure Zari</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-stone-900/40 border border-stone-800/80">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-400/90 block">Express Dispatch</span>
            <span className="text-xs text-stone-200 font-medium mt-1 block">Guaranteed Pre-Holiday</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-stone-900/40 border border-stone-800/80">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-400/90 block">Atelier Packaging</span>
            <span className="text-xs text-stone-200 font-medium mt-1 block">Signature Gift Box</span>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-stone-900/40 border border-stone-800/80">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-amber-400/90 block">Verified Checkout</span>
            <span className="text-xs text-stone-200 font-medium mt-1 block">Zero Convenience Surcharge</span>
          </div>
        </div>
      </section>
    </div>
  );
}
