import React from "react";
import { ChevronRight, Sparkles, Tag, ShoppingBag } from "lucide-react";

export function DiwaliSpotlightSection({ onSelectCategory, onViewAll }) {
  const festiveCards = [
    {
      title: "Pooja & Muhurat Sarees",
      category: "Sarees",
      tag: "Pure Kanjeevaram & Banarasi",
      badge: "🪔 Diwali Special",
      discount: "Flat 25% OFF",
      gradient: "from-amber-900 via-yellow-950 to-stone-900",
      border: "border-amber-400/40 hover:border-amber-400",
      accent: "text-amber-300",
      description: "Authentic Kanchipuram silk sarees with pure zari pallu, ideal for Lakshmi Pooja & morning festive rituals.",
      emoji: "🥻",
    },
    {
      title: "Royal Diwali Lehengas",
      category: "Lehengas",
      tag: "Heavy Zari & Velvet Embroidery",
      badge: "✨ Royal Edit",
      discount: "Up to 30% OFF",
      gradient: "from-rose-950 via-red-950 to-stone-900",
      border: "border-rose-400/40 hover:border-rose-400",
      accent: "text-rose-300",
      description: "Dazzle every evening party with handcrafted festive lehengas in ruby red, emerald, and royal navy.",
      emoji: "👗",
    },
    {
      title: "Designer Festive Kurtis",
      category: "Kurtis",
      tag: "Chanderi Silk & Anarkalis",
      badge: "🎆 Festive Must-Have",
      discount: "Flat 20% OFF",
      gradient: "from-purple-950 via-violet-950 to-stone-900",
      border: "border-purple-400/40 hover:border-purple-400",
      accent: "text-purple-300",
      description: "Lightweight festive elegance featuring fine gota-patti and mirror embroidery for comfortable family feasts.",
      emoji: "👘",
    },
    {
      title: "Festive Tops & Western",
      category: "Tops",
      tag: "Contemporary Festive Fusion",
      badge: "🌟 Party Ready",
      discount: "Buy 2 Get 10% Extra",
      gradient: "from-orange-950 via-amber-950 to-stone-900",
      border: "border-orange-400/40 hover:border-orange-400",
      accent: "text-orange-300",
      description: "Chic fusion tops and western wear crafted for modern Diwali get-togethers and card parties.",
      emoji: "👚",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
            <Sparkles size={14} />
            <span>Curated Festival Collections</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-stone-100 font-bold">
            Diwali Dhamaka Spotlight
          </h2>
          <p className="text-stone-300 text-xs md:text-sm mt-1 max-w-xl font-light">
            Handpicked festive collections woven with celebratory spirit, pure fabrics, and rich tradition.
          </p>
        </div>

        <button
          onClick={onViewAll}
          className="text-xs tracking-widest uppercase text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold group self-start md:self-auto"
        >
          <span>Explore Full Festival Catalog</span>
          <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid of Festive Spotlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {festiveCards.map((card) => (
          <div
            key={card.title}
            onClick={() => onSelectCategory(card.category)}
            className={`group relative rounded-2xl p-6 bg-gradient-to-br ${card.gradient} border ${card.border} cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/15 flex flex-col justify-between min-h-[260px] text-left transform hover:-translate-y-1`}
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

              <h3 className="font-serif text-xl font-bold text-stone-100 mt-1 group-hover:text-amber-300 transition-colors">
                {card.title}
              </h3>

              <p className="text-stone-300 text-xs mt-2 leading-relaxed font-light line-clamp-3">
                {card.description}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold text-yellow-300 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30">
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
