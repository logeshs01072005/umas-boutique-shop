import React, { useState, useEffect, useMemo } from "react";
import { ArrowRight, Gift } from "lucide-react";

// Calculate remaining time against a real target timestamp
function getFlashSaleTarget() {
  const STORAGE_KEY = "umas:diwali_flash_sale_end";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = parseInt(stored, 10);
      // If valid future timestamp, keep it so it persists across reloads & page navigations
      if (!isNaN(parsed) && parsed > Date.now()) {
        return parsed;
      }
    }
  } catch (e) {
    // ignore
  }

  // Default to 15 days timeline from first visit, synchronized with actual real clock
  const newTarget = Date.now() + 15 * 24 * 60 * 60 * 1000;
  try {
    localStorage.setItem(STORAGE_KEY, String(newTarget));
  } catch (e) {
    // ignore
  }
  return newTarget;
}

function calculateRemaining(targetTimestamp) {
  const diff = Math.max(0, targetTimestamp - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

export function DiwaliHeroSection({
  onShopSarees,
  onShopAll,
  saleEndDate,
}) {
  const targetTime = useMemo(() => {
    if (saleEndDate) {
      const parsed = new Date(saleEndDate).getTime();
      if (!isNaN(parsed) && parsed > Date.now()) return parsed;
    }
    return getFlashSaleTarget();
  }, [saleEndDate]);

  const [timeLeft, setTimeLeft] = useState(() => calculateRemaining(targetTime));

  useEffect(() => {
    setTimeLeft(calculateRemaining(targetTime));
    const timer = setInterval(() => {
      setTimeLeft(calculateRemaining(targetTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#1a0505] via-[#2a0b0b] to-stone-950 border-b border-amber-500/40 text-stone-100 selection:bg-amber-500 selection:text-stone-950">
      {/* Background Decorative Diwali Pattern & Bokeh Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-red-600/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-yellow-500/15 blur-3xl" />
      </div>

      {/* Traditional Marigold Flower Garland (Genda Phool) & Mango Leaf Toran */}
      <div className="w-full relative z-20 py-2 sm:py-2.5 bg-gradient-to-r from-red-950/90 via-amber-950/95 to-red-950/90 border-b border-amber-500/30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-3 sm:px-6 text-xs font-serif tracking-widest text-amber-300 select-none overflow-hidden">
          <span className="hidden lg:inline text-sm">🍃 🌼 🍃 🌸 🍃 🌼 🍃 🪔</span>
          <span className="mx-auto lg:mx-0 flex items-center justify-center gap-1.5 sm:gap-2.5 font-sans font-bold uppercase text-[10px] sm:text-xs md:text-sm tracking-[0.18em] text-yellow-300 text-center">
            <span className="animate-pulse">✨</span>
            <span className="truncate max-w-[280px] sm:max-w-none">शुभ दीपावली • தீபாவளி நல்வாழ்த்துக்கள் • Happy Deepavali 2026</span>
            <span className="animate-pulse">✨</span>
          </span>
          <span className="hidden lg:inline text-sm">🪔 🍃 🌼 🍃 🌸 🍃 🌼 🍃</span>
        </div>
      </div>

      {/* Swaying Akash Kandil (Diwali Lantern) - Left Side (Optimized for Tablet & PC) */}
      <div className="absolute top-10 left-2 sm:left-6 md:left-10 lg:left-16 z-10 pointer-events-none hidden md:block animate-sway-left origin-top opacity-90">
        <svg width="65" height="145" viewBox="0 0 70 150">
          <line x1="35" y1="0" x2="35" y2="35" stroke="#F59E0B" strokeWidth="1.5" />
          <polygon points="35,35 60,65 35,95 10,65" fill="#B91C1C" stroke="#F59E0B" strokeWidth="2" />
          <polygon points="35,45 52,65 35,85 18,65" fill="#F59E0B" opacity="0.85" />
          <polygon points="35,53 45,65 35,77 25,65" fill="#FEF08A" />
          <circle cx="35" cy="65" r="5" fill="#FFF" className="animate-pulse" />
          <line x1="20" y1="95" x2="16" y2="140" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="27" y1="95" x2="25" y2="148" stroke="#EF4444" strokeWidth="2" />
          <line x1="35" y1="95" x2="35" y2="150" stroke="#EAB308" strokeWidth="2.5" />
          <line x1="43" y1="95" x2="45" y2="148" stroke="#EF4444" strokeWidth="2" />
          <line x1="50" y1="95" x2="54" y2="140" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Swaying Akash Kandil (Diwali Lantern) - Right Side (Optimized for Tablet & PC) */}
      <div className="absolute top-10 right-2 sm:right-6 md:right-10 lg:right-16 z-10 pointer-events-none hidden md:block animate-sway-right origin-top opacity-90">
        <svg width="65" height="145" viewBox="0 0 70 150">
          <line x1="35" y1="0" x2="35" y2="35" stroke="#F59E0B" strokeWidth="1.5" />
          <polygon points="35,35 60,65 35,95 10,65" fill="#7C2D12" stroke="#FBBF24" strokeWidth="2" />
          <polygon points="35,45 52,65 35,85 18,65" fill="#EAB308" opacity="0.9" />
          <polygon points="35,53 45,65 35,77 25,65" fill="#FFFBEB" />
          <circle cx="35" cy="65" r="5" fill="#FFF" className="animate-pulse" />
          <line x1="20" y1="95" x2="18" y2="142" stroke="#EAB308" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="27" y1="95" x2="26" y2="148" stroke="#F97316" strokeWidth="2" />
          <line x1="35" y1="95" x2="35" y2="150" stroke="#EF4444" strokeWidth="2.5" />
          <line x1="43" y1="95" x2="44" y2="148" stroke="#F97316" strokeWidth="2" />
          <line x1="50" y1="95" x2="52" y2="142" stroke="#EAB308" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      </div>

      {/* Decorative Rotating Golden Rangoli Centerpiece Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[520px] md:w-[700px] lg:w-[850px] h-[340px] sm:h-[520px] md:h-[700px] lg:h-[850px] pointer-events-none opacity-15">
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

      {/* Left Bottom Glowing Brass Diya Illustration (Desktop & Laptop) */}
      <div className="absolute -bottom-6 left-6 z-10 pointer-events-none hidden lg:block opacity-85">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="40" r="22" fill="#F59E0B" opacity="0.3" className="animate-pulse" />
          <path d="M60 18 C60 18 72 38 67 48 C63 54 57 54 53 48 C48 38 60 18 60 18Z" fill="#FFA000" />
          <path d="M60 25 C60 25 66 38 64 45 C62 48 58 48 56 45 C54 38 60 25 60 25Z" fill="#FFF59D" />
          <path d="M25 50 Q60 46 95 50 Q100 52 98 60 Q90 82 60 82 Q30 82 22 60 Q20 52 25 50Z" fill="#D97706" stroke="#FBBF24" strokeWidth="1.5" />
          <ellipse cx="60" cy="50" rx="35" ry="4" fill="#F59E0B" />
          <path d="M48 80 L72 80 L76 90 Q60 94 44 90 Z" fill="#92400E" />
        </svg>
      </div>

      {/* Right Bottom Glowing Brass Diya Illustration (Desktop & Laptop) */}
      <div className="absolute -bottom-6 right-6 z-10 pointer-events-none hidden lg:block opacity-85">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="40" r="22" fill="#F59E0B" opacity="0.3" className="animate-pulse" />
          <path d="M60 18 C60 18 72 38 67 48 C63 54 57 54 53 48 C48 38 60 18 60 18Z" fill="#FFA000" />
          <path d="M60 25 C60 25 66 38 64 45 C62 48 58 48 56 45 C54 38 60 25 60 25Z" fill="#FFF59D" />
          <path d="M25 50 Q60 46 95 50 Q100 52 98 60 Q90 82 60 82 Q30 82 22 60 Q20 52 25 50Z" fill="#D97706" stroke="#FBBF24" strokeWidth="1.5" />
          <ellipse cx="60" cy="50" rx="35" ry="4" fill="#F59E0B" />
          <path d="M48 80 L72 80 L76 90 Q60 94 44 90 Z" fill="#92400E" />
        </svg>
      </div>

      {/* Main Hero Container - Responsive for mobile, tablet, laptop & desktop */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-14 md:py-20 text-center z-10">
        {/* Top Auspicious Diya Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-950 via-amber-900 to-yellow-950 border border-amber-400/60 shadow-lg shadow-amber-500/20 mb-4 sm:mb-6">
          <span className="text-base sm:text-lg animate-bounce">🪔</span>
          <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-amber-200">
            Exclusive Diwali Festival Collection 2026
          </span>
          <span className="text-base sm:text-lg animate-bounce">🪔</span>
        </div>

        {/* Hero Headline with Shimmering Gold Gradient */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.18] sm:leading-[1.15]">
          Illuminate Your Celebrations With{" "}
          <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(251,191,36,0.4)]">
            Royal Silks &amp; Handcrafted Sarees
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-stone-200 text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto font-light leading-relaxed px-2">
          Welcome the Festival of Lights draped in eternal grace. Explore authentic Kanchipuram bridal silks, Banarasi brocades, royal designer lehengas, and festive kurtis woven for auspicious celebrations.
        </p>

        {/* 15 Days Festive Flash Sale Timer & Offer Card */}
        <div className="mt-7 sm:mt-9 max-w-3xl mx-auto p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-stone-950/95 via-[#2b0c0c]/90 to-stone-950/95 border-2 border-amber-400/60 shadow-2xl shadow-amber-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
            {/* Offer Details */}
            <div className="text-center md:text-left w-full md:w-auto">
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest">
                <Gift size={16} className="text-amber-400" />
                <span>Diwali Dhamaka • Flat 25% Off Everything</span>
              </div>
              <div className="text-stone-100 text-xs sm:text-sm font-semibold mt-1.5 flex items-center justify-center md:justify-start gap-1.5">
                <span>🎁 Free Festive Sweets &amp; Gift Box on orders above ₹1,499</span>
              </div>
              <div className="text-amber-400/90 text-[11px] sm:text-xs mt-1 font-medium">
                Direct Festive Markdown applied automatically across all collections
              </div>
            </div>

            {/* 15 Days Live Flash Countdown */}
            <div className="text-center md:text-right w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-amber-500/20">
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-amber-300 block mb-1.5">
                ⏳ Festive Flash Sale Ends In:
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
            </div>
          </div>
        </div>

        {/* Action Buttons - Fully Responsive */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full max-w-md sm:max-w-none mx-auto">
          <button
            onClick={onShopSarees}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 text-stone-950 font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
          >
            <span>Shop Diwali Sarees 🥻</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={onShopAll}
            className="w-full sm:w-auto px-7 sm:px-9 py-3.5 rounded-full bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-semibold text-sm sm:text-base tracking-wide border-2 border-amber-400/50 shadow-lg transition-all"
          >
            Explore Royal Lehengas ✨
          </button>
        </div>

        {/* Trust Badges - Responsive Grid across mobile, tablet and desktop */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-4xl mx-auto pt-6 sm:pt-8 border-t border-amber-500/20 text-left">
          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">🥻</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Silk Mark Certified</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">100% Pure Silks</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">⚡</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Express Delivery</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">Pre-Diwali Arrival</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">🎁</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Free Gift Box</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">On Orders &gt; ₹1,499</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-stone-900/60 border border-amber-500/30 shadow-md">
            <span className="text-2xl sm:text-3xl shrink-0">💳</span>
            <div className="min-w-0">
              <div className="text-xs sm:text-sm font-bold text-amber-300 truncate">Instant Safe UPI</div>
              <div className="text-[10px] sm:text-xs text-stone-300 truncate">Zero Extra Fee</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
