import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";

export function ChristmasNewYearSpotlight({ onSelectCategory, onViewAll }) {
  const festiveCards = [
    {
      title: "Christmas Midnight Silks",
      category: "Sarees",
      tag: "Ruby Red & Emerald Kanjeevarams",
      badge: "🎄 Christmas Special",
      discount: "Flat 25% OFF",
      gradient: "from-red-950 via-[#1f0a10] to-stone-900",
      border: "border-red-400/40 hover:border-red-400",
      accent: "text-red-300",
      description: "Magnificent bridal and festive silks woven in rich crimson, wine red, and forest emerald for Christmas Mass & parties.",
      emoji: "🥻",
    },
    {
      title: "New Year Eve Lehengas",
      category: "Lehengas",
      tag: "Shimmer Sequin & Velvet Royalty",
      badge: "✨ NYE Gala Edit",
      discount: "Up to 30% OFF",
      gradient: "from-indigo-950 via-[#10132b] to-stone-900",
      border: "border-indigo-400/40 hover:border-amber-400",
      accent: "text-amber-300",
      description: "Steal the spotlight this New Year's Eve with twirling designer lehengas detailed with zari embroidery and star sequins.",
      emoji: "👗",
    },
    {
      title: "Holiday Designer Kurtis",
      category: "Kurtis",
      tag: "Warm Chanderi & Gota Work",
      badge: "❄️ Winter Cozy",
      discount: "Flat 20% OFF",
      gradient: "from-emerald-950 via-[#0a1f14] to-stone-900",
      border: "border-emerald-400/40 hover:border-emerald-400",
      accent: "text-emerald-300",
      description: "Comfortable and graceful kurtis and anarkalis perfect for holiday family gatherings, feasts, and secret Santa celebrations.",
      emoji: "👘",
    },
    {
      title: "Party Tops & Western Wear",
      category: "Tops",
      tag: "Glamorous Cocktail & Party Fits",
      badge: "🍾 Party Ready",
      discount: "Buy 2 Get 10% Extra",
      gradient: "from-purple-950 via-[#1c0b2b] to-stone-900",
      border: "border-purple-400/40 hover:border-purple-400",
      accent: "text-purple-300",
      description: "Dazzling tops, satin blouses, and contemporary silhouettes tailored for high-energy year-end countdown bashes.",
      emoji: "👚",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
            <Sparkles size={14} />
            <span>Curated Holiday Collections</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-100 font-bold">
            Christmas &amp; New Year Spotlight
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Exquisite festive collections blending timeless Indian craftsmanship with sparkling New Year glam.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="text-xs tracking-widest uppercase text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold group self-start md:self-auto"
        >
          <span>Explore All Holiday Collections</span>
          <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Festive Spotlight Cards - Responsive for Mobile, Tablet, and Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {festiveCards.map((card) => (
          <div
            key={card.title}
            onClick={() => onSelectCategory(card.category)}
            className={`group relative rounded-2xl p-5 sm:p-6 bg-gradient-to-br ${card.gradient} border ${card.border} cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-rose-500/15 flex flex-col justify-between min-h-[240px] sm:min-h-[260px] text-left transform hover:-translate-y-1`}
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl group-hover:bg-amber-400/10 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{card.emoji}</span>
                <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-stone-950/70 border border-amber-400/40 text-amber-300">
                  {card.badge}
                </span>
              </div>

              <span className={`text-[11px] font-semibold tracking-wide ${card.accent} block`}>
                {card.tag}
              </span>

              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100 mt-1 group-hover:text-amber-300 transition-colors">
                {card.title}
              </h3>

              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light line-clamp-3">
                {card.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-yellow-300 bg-black/50 px-2.5 py-1 rounded-md border border-amber-500/30">
                {card.discount}
              </span>

              <div className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300 group-hover:text-amber-200 group-hover:translate-x-1 transition-all">
                <span>Shop</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
