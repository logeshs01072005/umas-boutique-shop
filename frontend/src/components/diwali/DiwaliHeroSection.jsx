import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Rocket, Gift, ShieldCheck, Truck, Clock } from "lucide-react";

export function DiwaliHeroSection({
  onShopSarees,
  onShopAll,
  onLaunchSkyShot,
}) {
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
    <div className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-[#260c0c] to-stone-950 border-b border-amber-500/40 text-stone-100">
      {/* Traditional Marigold Flower Garland (Genda Phool) & Mango Leaf Toran */}
      <div className="w-full relative z-20 py-2 bg-gradient-to-r from-red-950/80 via-amber-950/90 to-red-950/80 border-b border-amber-500/30 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 text-xs font-serif tracking-widest text-amber-300 select-none overflow-hidden">
          <span className="hidden sm:inline">🍃 🌼 🍃 🌸 🍃 🌼 🍃 🪔</span>
          <span className="mx-auto sm:mx-0 flex items-center gap-2 font-sans font-bold uppercase text-[11px] tracking-[0.2em] text-yellow-300">
            <span>✨</span>
            <span>शुभ दीपावली • தீபாவளி நல்வாழ்த்துக்கள் • Happy Deepavali 2026</span>
            <span>✨</span>
          </span>
          <span className="hidden sm:inline">🪔 🍃 🌼 🍃 🌸 🍃 🌼 🍃</span>
        </div>
      </div>

      {/* Swaying Akash Kandil (Diwali Lantern) - Left Side */}
      <div className="absolute top-8 left-4 md:left-12 z-10 pointer-events-none hidden sm:block animate-sway-left origin-top">
        <svg width="70" height="150" viewBox="0 0 70 150">
          {/* Hanging Thread */}
          <line x1="35" y1="0" x2="35" y2="35" stroke="#F59E0B" strokeWidth="1.5" />
          {/* Lantern Diamond Body */}
          <polygon points="35,35 60,65 35,95 10,65" fill="#DC2626" stroke="#F59E0B" strokeWidth="2" />
          <polygon points="35,45 52,65 35,85 18,65" fill="#F59E0B" opacity="0.85" />
          <polygon points="35,53 45,65 35,77 25,65" fill="#FEF08A" />
          {/* Glowing Center Core */}
          <circle cx="35" cy="65" r="5" fill="#FFF" className="animate-pulse" />
          {/* Hanging Paper Streamers */}
          <line x1="20" y1="95" x2="16" y2="140" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="27" y1="95" x2="25" y2="148" stroke="#EF4444" strokeWidth="2" />
          <line x1="35" y1="95" x2="35" y2="150" stroke="#EAB308" strokeWidth="2.5" />
          <line x1="43" y1="95" x2="45" y2="148" stroke="#EF4444" strokeWidth="2" />
          <line x1="50" y1="95" x2="54" y2="140" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Swaying Akash Kandil (Diwali Lantern) - Right Side */}
      <div className="absolute top-8 right-4 md:right-12 z-10 pointer-events-none hidden sm:block animate-sway-right origin-top">
        <svg width="70" height="150" viewBox="0 0 70 150">
          {/* Hanging Thread */}
          <line x1="35" y1="0" x2="35" y2="35" stroke="#F59E0B" strokeWidth="1.5" />
          {/* Lantern Diamond Body */}
          <polygon points="35,35 60,65 35,95 10,65" fill="#7C2D12" stroke="#FBBF24" strokeWidth="2" />
          <polygon points="35,45 52,65 35,85 18,65" fill="#EAB308" opacity="0.9" />
          <polygon points="35,53 45,65 35,77 25,65" fill="#FFFBEB" />
          {/* Glowing Center Core */}
          <circle cx="35" cy="65" r="5" fill="#FFF" className="animate-pulse" />
          {/* Hanging Paper Streamers */}
          <line x1="20" y1="95" x2="18" y2="142" stroke="#EAB308" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="27" y1="95" x2="26" y2="148" stroke="#F97316" strokeWidth="2" />
          <line x1="35" y1="95" x2="35" y2="150" stroke="#EF4444" strokeWidth="2.5" />
          <line x1="43" y1="95" x2="44" y2="148" stroke="#F97316" strokeWidth="2" />
          <line x1="50" y1="95" x2="52" y2="142" stroke="#EAB308" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Decorative Rotating Golden Rangoli Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] md:w-[800px] h-[580px] md:h-[800px] pointer-events-none opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full animate-spin-slow">
          <circle cx="100" cy="100" r="92" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="76" fill="none" stroke="#D97706" strokeWidth="1.2" />
          <circle cx="100" cy="100" r="58" fill="none" stroke="#F59E0B" strokeWidth="0.8" />
          {[...Array(16)].map((_, i) => {
            const rot = i * 22.5;
            return (
              <g key={i} transform={`rotate(${rot} 100 100)`}>
                <path d="M100 20 C108 40 108 55 100 70 C92 55 92 40 100 20Z" fill="#F59E0B" opacity="0.5" />
                <circle cx="100" cy="16" r="2.5" fill="#EF4444" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Main Hero Container */}
      <section className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center z-10">
        {/* Ornate Gold Diya Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gradient-to-r from-red-950 via-amber-900 to-yellow-950 border-2 border-amber-400/70 shadow-xl shadow-amber-500/25 mb-6">
          <span className="text-lg animate-bounce">🪔</span>
          <span className="text-xs md:text-sm font-bold tracking-[0.25em] uppercase text-amber-200">
            Exclusive Diwali Festival Collection 2026
          </span>
          <span className="text-lg animate-bounce">🪔</span>
        </div>

        {/* Hero Title with Gold Gradient Shimmer */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.12]">
          Illuminate Your Celebrations With{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(251,191,36,0.45)]">
            Royal Silks &amp; Handcrafted Sarees
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-stone-200 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
          Welcome the Festival of Lights draped in eternal grace. Explore authentic Kanchipuram bridal silks, Banarasi brocades, royal designer lehengas, and festive kurtis woven for auspicious moments.
        </p>

        {/* High-Impact Diwali Dhamaka Offer Box & Live Timer */}
        <div className="mt-8 max-w-3xl mx-auto p-4 md:p-6 rounded-3xl bg-gradient-to-r from-stone-950/90 via-[#330f0f]/90 to-stone-950/90 border-2 border-amber-400/60 shadow-2xl shadow-amber-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            {/* Offer details */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold text-amber-300 uppercase tracking-widest">
                <Gift size={16} />
                <span>Diwali Dhamaka • Flat 25% Off Everything</span>
              </div>
              <div className="text-stone-200 text-sm font-semibold mt-1.5 flex items-center justify-center md:justify-start gap-2">
                <span>🎁 Free Festive Sweets &amp; Gift Hamper on orders above ₹1,499</span>
              </div>
              <div className="text-amber-400/90 text-xs mt-1 font-medium">
                Direct Festive Discount applied automatically across all collections
              </div>
            </div>

            {/* Live Flash Timer */}
            <div className="text-center md:text-right">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
                ⏳ Festive Flash Sale Ends In:
              </span>
              <div className="flex items-center justify-center md:justify-end gap-2">
                {[
                  { label: "Days", val: timeLeft.days },
                  { label: "Hours", val: timeLeft.hours },
                  { label: "Mins", val: timeLeft.minutes },
                  { label: "Secs", val: timeLeft.seconds },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-12 h-14 rounded-xl bg-stone-950 border border-amber-500/50 shadow-inner"
                  >
                    <span className="font-mono text-amber-300 font-bold text-lg leading-none">
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
        </div>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onShopSarees}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-stone-950 font-bold tracking-wide shadow-xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
          >
            <span>Shop Diwali Sarees 🥻</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onShopAll}
            className="px-8 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-semibold tracking-wide border-2 border-amber-400/50 shadow-lg transition-all"
          >
            Explore Royal Lehengas ✨
          </button>

          <button
            onClick={onLaunchSkyShot}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold tracking-wide shadow-xl shadow-red-500/30 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
            title="Launch an explosive Sky Shot rocket!"
          >
            <Rocket size={17} className="rotate-45" />
            <span>Launch Sky Shot 🎆</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-amber-500/20 text-left">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-3xl">🥻</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Silk Mark Certified</div>
              <div className="text-[10px] text-stone-300">100% Pure Festive Silks</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-3xl">⚡</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Fast Express Delivery</div>
              <div className="text-[10px] text-stone-300">Guaranteed Pre-Diwali Arrival</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-3xl">🎁</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Free Gift Hamper</div>
              <div className="text-[10px] text-stone-300">On Orders Over ₹1,499</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-3xl">💳</span>
            <div>
              <div className="text-xs font-bold text-amber-300">Safe Instant UPI</div>
              <div className="text-[10px] text-stone-300">Zero Convenience Fee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
