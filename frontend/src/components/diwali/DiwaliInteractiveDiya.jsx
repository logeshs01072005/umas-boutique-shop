import React, { useState } from "react";
import { Sparkles, Flame, Heart } from "lucide-react";
import { diwaliAudio } from "./DiwaliAudio";

export function DiwaliInteractiveDiya({ onLightUp }) {
  const [isLit, setIsLit] = useState(true);
  const [litCount, setLitCount] = useState(2847);

  const handleToggleLight = () => {
    if (!isLit) {
      setIsLit(true);
      setLitCount((c) => c + 1);
      diwaliAudio.playTempleBell();
      if (onLightUp) onLightUp();
    } else {
      setIsLit(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl p-6 md:p-8 bg-gradient-to-br from-amber-950/80 via-stone-900/90 to-red-950/80 border-2 border-amber-400/50 shadow-2xl shadow-amber-500/20 text-center max-w-4xl mx-auto backdrop-blur-md">
      {/* Background radial glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl transition-opacity duration-700 pointer-events-none ${
          isLit ? "opacity-40 bg-amber-500" : "opacity-10 bg-amber-900"
        }`}
      />

      {/* Decorative Traditional Rangoli Border */}
      <div className="text-amber-400/60 text-sm tracking-[0.4em] mb-3">
        ✦ 🌸 ✦ 🌺 ✦ 🪔 ✦ 🌺 ✦ 🌸 ✦
      </div>

      <span className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-yellow-500/20 text-yellow-300 border border-yellow-400/40 mb-4">
        ✨ Auspicious Deepavali Ceremony ✨
      </span>

      <h3 className="font-serif text-2xl md:text-3xl text-stone-100 font-bold mb-2">
        Light Your Virtual Diya for Good Fortune
      </h3>

      <p className="text-stone-300 text-xs md:text-sm max-w-xl mx-auto leading-relaxed mb-6 font-light">
        Join our boutique celebration! Light a sacred diya to welcome prosperity, joy, and light into your home this festive season.
      </p>

      {/* Big Interactive Diya SVG */}
      <div
        onClick={handleToggleLight}
        className="cursor-pointer inline-flex flex-col items-center justify-center p-6 rounded-3xl hover:bg-amber-500/10 transition-all transform hover:scale-105 active:scale-95 group mb-6"
        title={isLit ? "Click to relight diya" : "Click to light the Diya!"}
      >
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Flame Halo Glow */}
          {isLit && (
            <div className="absolute top-2 w-20 h-20 rounded-full bg-yellow-400/40 blur-xl animate-pulse" />
          )}

          {/* Diya SVG */}
          <svg viewBox="0 0 120 120" className="w-full h-full drop-shadow-xl overflow-visible">
            {/* Flickering Flame */}
            {isLit ? (
              <g className="animate-flame">
                {/* Outer Orange Flame */}
                <path
                  d="M60 12 C60 12 74 38 68 52 C64 60 56 60 52 52 C46 38 60 12 60 12Z"
                  fill="url(#outerFlame)"
                  className="filter drop-shadow-[0_0_12px_#ff9800]"
                >
                  <animate
                    attributeName="d"
                    values="M60 12 C60 12 74 38 68 52 C64 60 56 60 52 52 C46 38 60 12 60 12Z;
                            M60 8  C60 8  76 36 70 52 C65 61 55 61 50 52 C44 36 60 8  60 8Z;
                            M60 14 C60 14 72 40 66 52 C63 59 57 59 54 52 C48 40 60 14 60 14Z;
                            M60 12 C60 12 74 38 68 52 C64 60 56 60 52 52 C46 38 60 12 60 12Z"
                    dur="1.4s"
                    repeatCount="indefinite"
                  />
                </path>
                {/* Core Golden Flame */}
                <path
                  d="M60 22 C60 22 68 39 65 48 C62 53 58 53 55 48 C52 39 60 22 60 22Z"
                  fill="url(#innerFlame)"
                >
                  <animate
                    attributeName="d"
                    values="M60 22 C60 22 68 39 65 48 C62 53 58 53 55 48 C52 39 60 22 60 22Z;
                            M60 18 C60 18 70 38 66 48 C63 54 57 54 54 48 C50 38 60 18 60 18Z;
                            M60 22 C60 22 68 39 65 48 C62 53 58 53 55 48 C52 39 60 22 60 22Z"
                    dur="1.1s"
                    repeatCount="indefinite"
                  />
                </path>
                {/* Flame Base Sparkle */}
                <circle cx="60" cy="50" r="3" fill="#FFF" opacity="0.9" />
              </g>
            ) : (
              /* Unlit wick */
              <line x1="60" y1="52" x2="60" y2="44" stroke="#44403c" strokeWidth="2.5" strokeLinecap="round" />
            )}

            {/* Brass Diya Body */}
            <path
              d="M20 54 Q60 50 100 54 Q108 55 106 64 Q98 90 60 90 Q22 90 14 64 Q12 55 20 54Z"
              fill="url(#brassBody)"
              stroke="#F59E0B"
              strokeWidth="1.5"
            />
            {/* Diya Rim Highlight */}
            <ellipse cx="60" cy="54" rx="42" ry="5" fill="#FBBF24" opacity="0.6" />
            {/* Diya Base Stand */}
            <path
              d="M48 88 L72 88 L78 98 Q60 102 42 98 Z"
              fill="url(#brassStand)"
              stroke="#D97706"
              strokeWidth="1"
            />
            {/* Traditional Engraved Motif Dots */}
            <circle cx="45" cy="68" r="1.5" fill="#FEF3C7" />
            <circle cx="60" cy="72" r="2" fill="#FEF3C7" />
            <circle cx="75" cy="68" r="1.5" fill="#FEF3C7" />

            {/* Gradients */}
            <defs>
              <linearGradient id="outerFlame" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFF9C4" />
                <stop offset="40%" stopColor="#FFB300" />
                <stop offset="100%" stopColor="#FF3D00" />
              </linearGradient>
              <linearGradient id="innerFlame" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#FFF176" />
                <stop offset="100%" stopColor="#FFB300" />
              </linearGradient>
              <linearGradient id="brassBody" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="40%" stopColor="#FBBF24" />
                <stop offset="70%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#78350F" />
              </linearGradient>
              <linearGradient id="brassStand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#B45309" />
                <stop offset="100%" stopColor="#451A03" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <button
          type="button"
          className="mt-3 text-xs tracking-wider uppercase font-bold text-amber-300 group-hover:text-amber-200 flex items-center gap-1.5"
        >
          <Flame size={14} className={isLit ? "text-amber-400" : "text-stone-500"} />
          <span>{isLit ? "✨ Diya is Glowing • Tap to Rekindle" : "🔥 Tap to Light Diya"}</span>
        </button>
      </div>

      {/* Lit Count */}
      <div className="flex items-center justify-center gap-2 text-stone-300 text-xs mb-6 font-medium">
        <Heart size={14} className="text-rose-500 fill-rose-500" />
        <span>
          <strong className="text-amber-300 font-bold">{litCount.toLocaleString()}</strong> devotees & shoppers have lit a Diya today
        </span>
      </div>

      {/* Auspicious Diwali Blessing Card */}
      <div className="p-4 md:p-5 rounded-2xl bg-amber-500/10 border border-amber-400/40 max-w-xl mx-auto text-center">
        <span className="text-[11px] uppercase tracking-widest text-amber-300 font-bold block mb-1">
          🪔 Deepavali Divine Blessings 🪔
        </span>
        <p className="text-stone-200 text-xs sm:text-sm font-light italic leading-relaxed">
          "தீபாவளி திருநாள் நல்வாழ்த்துக்கள்! May Goddess Lakshmi shower your home with everlasting happiness, good health, and prosperity."
        </p>
        <span className="inline-block mt-2 text-[11px] font-semibold text-yellow-400">
          ✨ Special Festive Markdowns Applied Automatically Across All Collections ✨
        </span>
      </div>
    </div>
  );
}
