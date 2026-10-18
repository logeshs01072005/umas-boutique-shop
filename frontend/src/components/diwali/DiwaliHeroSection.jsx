import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Rocket, Gift, ShieldCheck, Truck, Clock } from "lucide-react";

export function DiwaliHeroSection({
  onShopSarees,
  onShopAll,
  onLaunchSkyShot,
}) {
  // Live festive countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-amber-950/80 to-stone-950 border-b border-amber-500/30">
      {/* Traditional Marigold Flower Garland & Mango Leaf Toran */}
      <div className="w-full overflow-hidden flex justify-center items-center py-1 opacity-90 select-none bg-stone-950/60 border-b border-amber-500/20">
        <div className="flex gap-4 md:gap-8 items-center text-xs md:text-sm font-serif tracking-widest text-amber-300">
          <span>🍃 🌼 🍃 🌸 🍃 🌼 🍃 🪔 🍃 🌼 🍃 🌸 🍃 🌼 🍃</span>
          <span className="hidden sm:inline">🪔 🍃 🌼 🍃 🌸 🍃 🌼 🍃 🪔</span>
        </div>
      </div>

      {/* Decorative Rotating Rangoli Mandala in the center background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] md:w-[750px] h-[550px] md:h-[750px] pointer-events-none opacity-15">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="75" fill="none" stroke="#D97706" strokeWidth="1" />
          <circle cx="100" cy="100" r="55" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => {
            const rot = i * 30;
            return (
              <g key={i} transform={`rotate(${rot} 100 100)`}>
                <path d="M100 25 C108 45 108 55 100 70 C92 55 92 45 100 25Z" fill="#F59E0B" opacity="0.4" />
                <circle cx="100" cy="20" r="2.5" fill="#EF4444" />
              </g>
            );
          })}
          {[...Array(8)].map((_, i) => {
            const rot = i * 45;
            return (
              <g key={`inner-${i}`} transform={`rotate(${rot} 100 100)`}>
                <path d="M100 50 C106 65 106 75 100 85 C94 75 94 65 100 50Z" fill="#EF4444" opacity="0.3" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Main Hero Container */}
      <section className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center z-10">
        {/* Auspicious Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950 via-amber-900 to-yellow-950 border border-amber-400/50 shadow-lg shadow-amber-500/20 mb-6">
          <span className="text-sm animate-pulse">🪔</span>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-amber-300">
            शुभ दीपावली • தீபாவளி திருநாள் 2026
          </span>
          <span className="text-sm animate-pulse">✨</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-stone-100 max-w-5xl mx-auto leading-[1.15]">
          Light Up Your Festive Look With{" "}
          <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.35)]">
            Royal Silks &amp; Festive Grace
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Welcome the Festival of Lights in timeless luxury. Handwoven Kanjeevaram silks, royal embroidered lehengas, and shimmering designer sarees curated for Diwali Pooja and grand family gatherings.
        </p>

        {/* Festive Flash Sale Banner with Live Timer */}
        <div className="mt-8 max-w-2xl mx-auto p-4 md:p-5 rounded-2xl bg-gradient-to-r from-red-950/90 via-amber-950/90 to-red-950/90 border border-amber-400/40 shadow-xl shadow-amber-500/15 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-widest">
                <Gift size={15} />
                <span>Diwali Dhamaka Flash Sale</span>
              </div>
              <div className="text-stone-200 text-xs mt-0.5">
                Flat <strong className="text-yellow-400 font-bold">25% OFF</strong> on all ethnic sarees &amp; lehengas
              </div>
            </div>

            {/* Countdown Tiles */}
            <div className="flex items-center gap-2">
              {[
                { label: "D", val: timeLeft.days },
                { label: "H", val: timeLeft.hours },
                { label: "M", val: timeLeft.minutes },
                { label: "S", val: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center w-11 h-12 rounded-lg bg-stone-950 border border-amber-500/40 shadow-inner"
                >
                  <span className="font-mono text-amber-300 font-bold text-base leading-none">
                    {String(item.val).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-stone-400 mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onShopSarees}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-stone-950 font-bold tracking-wide shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Shop Diwali Sarees</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onShopAll}
            className="px-8 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-semibold tracking-wide border border-amber-400/40 shadow-lg transition-all"
          >
            Festive Lehengas &amp; Kurtis
          </button>

          <button
            onClick={onLaunchSkyShot}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold tracking-wide shadow-lg shadow-red-500/30 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
            title="Launch an explosive Sky Shot rocket!"
          >
            <Rocket size={17} className="rotate-45" />
            <span>Launch Sky Shot 🎆</span>
          </button>
        </div>

        {/* Trust & Festive Assurance Badges */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-amber-500/20 text-left">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-900/40 border border-stone-800">
            <span className="text-2xl">🥻</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Silk Mark Certified</div>
              <div className="text-[10px] text-stone-400">100% Pure Festive Silks</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-900/40 border border-stone-800">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Fast Festive Express</div>
              <div className="text-[10px] text-stone-400">Guaranteed Pre-Diwali Delivery</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-900/40 border border-stone-800">
            <span className="text-2xl">🎁</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Free Gift Hamper</div>
              <div className="text-[10px] text-stone-400">On Orders Over ₹1,499</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-900/40 border border-stone-800">
            <span className="text-2xl">💳</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Safe Instant UPI</div>
              <div className="text-[10px] text-stone-400">Zero Convenience Fee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
