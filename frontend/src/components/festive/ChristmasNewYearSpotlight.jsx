import React from "react";
import { ChevronRight, ArrowUpRight } from "lucide-react";

export function ChristmasNewYearSpotlight({ onSelectCategory, onViewAll }) {
  const festiveCards = [
    {
      title: "Crimson & Midnight Silks",
      category: "Sarees",
      subtitle: "Kanchipuram & Banarasi Brocade",
      discount: "Flat 25% Off",
      tag: "Christmas Edit",
      gradient: "from-[#220d15] via-[#160c13] to-[#0f121a]",
      border: "border-red-900/50 hover:border-amber-400",
      accent: "text-amber-300",
      description: "Heirloom bridal and feast silks woven in royal burgundy, ruby crimson, and emerald jade for festive masses and auspicious moments.",
      emoji: "🥻",
    },
    {
      title: "Midnight Velvet Lehengas",
      category: "Lehengas",
      subtitle: "Hand-worked Zari & Fine Sequins",
      discount: "Up to 30% Off",
      tag: "NYE 2027 Gala",
      gradient: "from-[#111628] via-[#0d121f] to-[#0f121a]",
      border: "border-indigo-900/50 hover:border-amber-400",
      accent: "text-amber-300",
      description: "Designed for grand entrances. Midnight navy, deep wine, and royal velvet lehengas crafted for high-fashion year-end celebrations.",
      emoji: "👗",
    },
    {
      title: "Winter Chanderi Kurtis",
      category: "Kurtis",
      subtitle: "Fine Gota-Patti & Mirror Detail",
      discount: "Flat 20% Off",
      tag: "Holiday Brunch",
      gradient: "from-[#0c2017] via-[#091711] to-[#0f121a]",
      border: "border-emerald-900/50 hover:border-amber-400",
      accent: "text-amber-300",
      description: "Breezy comfort meeting bespoke craftsmanship. Ideal for intimate family feasts, holiday tea gatherings, and winter brunches.",
      emoji: "👘",
    },
    {
      title: "Couture Party Fits & Tops",
      category: "Tops",
      subtitle: "Satin Blouses & Evening Silhouettes",
      discount: "Buy 2 Save 10%",
      tag: "Cocktail Edit",
      gradient: "from-[#1d1222] via-[#140c18] to-[#0f121a]",
      border: "border-purple-900/50 hover:border-amber-400",
      accent: "text-amber-300",
      description: "Contemporary designer tops and sleek silhouettes crafted to transition smoothly from holiday dinners to 2027 countdown parties.",
      emoji: "👚",
    },
  ];

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 pb-6 border-b border-stone-800">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400 block mb-1">
            Curated Seasonal Edits
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-100 font-bold tracking-tight">
            The Holiday &amp; New Year Spotlight
          </h2>
          <p className="text-stone-400 text-xs sm:text-sm mt-1 max-w-xl font-light">
            Distinctive attire woven with uncompromising attention to fabric, weave, and celebratory grace.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="text-xs tracking-[0.18em] uppercase text-amber-300 hover:text-amber-200 flex items-center gap-1.5 font-bold group self-start md:self-auto"
        >
          <span>View Complete Catalog</span>
          <ArrowUpRight size={15} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {festiveCards.map((card) => (
          <div
            key={card.title}
            onClick={() => onSelectCategory(card.category)}
            className={`group relative rounded-2xl p-6 bg-gradient-to-br ${card.gradient} border ${card.border} cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/15 flex flex-col justify-between min-h-[260px] sm:min-h-[280px] text-left transform hover:-translate-y-1`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{card.emoji}</span>
                <span className="text-xs font-bold text-amber-300 font-mono bg-stone-950/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  {card.discount}
                </span>
              </div>

              <span className="text-[11px] font-bold uppercase tracking-wider block mt-1 text-stone-400">
                {card.subtitle}
              </span>

              <h3 className="font-serif text-xl font-bold text-stone-100 mt-1 group-hover:text-amber-300 transition-colors">
                {card.title}
              </h3>

              <p className="text-stone-300 text-xs mt-2.5 leading-relaxed font-light line-clamp-3">
                {card.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-800 flex items-center justify-between">
              <span className="text-xs text-stone-300 group-hover:text-amber-300 transition-colors font-semibold">
                Explore Collection
              </span>
              <div className="w-7 h-7 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center text-stone-300 group-hover:text-amber-300 group-hover:border-amber-400 transition-all">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
