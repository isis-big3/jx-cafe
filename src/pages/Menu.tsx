import { useState } from 'react';

type Category = 'all' | 'drinks' | 'food' | 'specials';

const items = [
  // Drinks
  { id: 1, cat: 'drinks', emoji: '🍵', name: 'Signature Matcha Latte', desc: 'Ceremonial grade matcha, steamed oat milk, honey', price: 7.50, tag: 'best seller' },
  { id: 2, cat: 'drinks', emoji: '🧋', name: 'Iced Hojicha', desc: 'Roasted green tea, brown sugar, oat milk over ice', price: 6.50, tag: '' },
  { id: 3, cat: 'drinks', emoji: '☕', name: 'Honey Lavender Cold Brew', desc: '24-hour cold brew, lavender syrup, wildflower honey', price: 7.00, tag: 'new!' },
  { id: 4, cat: 'drinks', emoji: '🥛', name: 'Dalgona Latte', desc: 'Whipped espresso, steamed milk, a dusting of cocoa', price: 6.00, tag: '' },
  { id: 5, cat: 'drinks', emoji: '🫖', name: 'Oat Milk Chai', desc: 'House-blend masala chai, frothy oat milk, cinnamon', price: 7.50, tag: 'popular' },
  { id: 6, cat: 'drinks', emoji: '🟡', name: 'Yuzu Lemonade Sparkling', desc: 'Fresh yuzu, lemon, sparkling water, mint', price: 6.50, tag: '' },
  { id: 7, cat: 'drinks', emoji: '🍫', name: 'Dark Cacao Mocha', desc: 'Single-origin cacao, espresso, oat milk', price: 7.00, tag: '' },
  { id: 8, cat: 'drinks', emoji: '🌸', name: 'Rose Milk Tea', desc: 'House brewed rose tea, fresh milk, jasmine pearls', price: 7.50, tag: 'specials' },

  // Food
  { id: 9, cat: 'food', emoji: '🥑', name: 'Avocado Toast', desc: 'Smashed avo, poached egg, chilli flakes, seeds on sourdough', price: 12.00, tag: 'best seller' },
  { id: 10, cat: 'food', emoji: '🥞', name: 'Fluffy Japanese Pancakes', desc: 'Soufflé-style, served with maple butter & seasonal berries', price: 14.00, tag: 'fan fave' },
  { id: 11, cat: 'food', emoji: '🍓', name: 'Acai Bowl', desc: 'Organic acai, house granola, fresh tropical fruits, honey', price: 13.00, tag: 'seasonal' },
  { id: 12, cat: 'food', emoji: '🍳', name: 'Eggs Benedict', desc: 'House-cured salmon, poached eggs, hollandaise on brioche', price: 15.00, tag: '' },
  { id: 13, cat: 'food', emoji: '🍌', name: 'Banana Bread', desc: 'Warm slice, house-churned salted butter, drizzle of honey', price: 8.00, tag: '' },
  { id: 14, cat: 'food', emoji: '🧀', name: 'Cheese Toastie', desc: 'Three-cheese blend, caramelised onion, dijon on sourdough', price: 10.00, tag: 'popular' },
  { id: 15, cat: 'food', emoji: '🥗', name: 'Grain Bowl', desc: 'Farro, roasted veg, tahini dressing, soft-boiled egg', price: 14.50, tag: '' },
  { id: 16, cat: 'food', emoji: '🍰', name: 'Matcha Cheesecake Slice', desc: 'House-baked, ceremonial matcha, cream cheese, graham base', price: 9.00, tag: 'new!' },

  // Specials
  { id: 17, cat: 'specials', emoji: '🧊', name: 'Brown Sugar Oat Latte', desc: 'Tiger-stripe brown sugar, espresso, creamy oat milk', price: 8.00, tag: 'crowd fave' },
  { id: 18, cat: 'specials', emoji: '🍦', name: 'Matcha Affogato', desc: 'Vanilla bean ice cream drowned in ceremonial matcha', price: 9.00, tag: 'limited' },
  { id: 19, cat: 'specials', emoji: '🌿', name: 'Green Monster Smoothie', desc: 'Spinach, banana, mango, almond milk, chia seeds', price: 10.00, tag: 'healthy' },
  { id: 20, cat: 'specials', emoji: '🫐', name: 'Blueberry Lemon Tart', desc: 'Buttery pastry, lemon curd, fresh blueberry compote', price: 10.50, tag: 'limited' },
];

const tagColors: Record<string, string> = {
  'best seller': 'bg-[#D4A853] text-[#1B4332]',
  'fan fave': 'bg-[#1B4332] text-[#F5F0E8]',
  'new!': 'bg-[#52B788] text-[#0D2818]',
  'seasonal': 'bg-[#EDE8DC] text-[#1B4332]',
  'popular': 'bg-[#B7E4C7] text-[#1B4332]',
  'crowd fave': 'bg-[#D4A853] text-[#1B4332]',
  'limited': 'bg-[#0D2818] text-[#D4A853]',
  'healthy': 'bg-[#52B788] text-[#0D2818]',
  'specials': 'bg-[#D4A853] text-[#1B4332]',
};

const tabs: { key: Category; label: string; emoji: string }[] = [
  { key: 'all', label: 'All', emoji: '🍽️' },
  { key: 'drinks', label: 'Drinks', emoji: '☕' },
  { key: 'food', label: 'Food', emoji: '🥞' },
  { key: 'specials', label: 'Specials', emoji: '✨' },
];

export default function Menu() {
  const [active, setActive] = useState<Category>('all');

  const displayed = active === 'all' ? items : items.filter(i => i.cat === active);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#1B4332] py-14 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="absolute text-4xl" style={{ left: `${(i * 17) % 100}%`, top: `${(i * 23) % 100}%`, opacity: 0.5 }}>🍃</span>
          ))}
        </div>
        <span className="sticker text-base mb-3 inline-block relative">📋 what we've got</span>
        <h1 className="font-caveat text-6xl md:text-7xl font-bold text-[#F5F0E8] mt-3 mb-2 relative">
          Our Menu
        </h1>
        <p className="text-[#B7E4C7] text-base max-w-md mx-auto relative">
          Everything made fresh, with love, and just a little bit of magic. 🌿
        </p>

        {/* Wavy bottom */}
        <div className="overflow-hidden leading-none absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10 fill-[#F5F0E8]">
            <path d="M0,0 C200,40 400,0 600,25 C800,50 1000,10 1200,30 L1200,40 L0,40 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-10 pb-20">
        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${
                active === tab.key
                  ? 'bg-[#1B4332] text-[#F5F0E8] shadow-md scale-105'
                  : 'bg-white border border-[#EDE8DC] text-[#1B4332] hover:border-[#1B4332]'
              }`}
            >
              <span>{tab.emoji}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayed.map((item, i) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-5 border border-[#EDE8DC] shadow-sm hover:shadow-md transition-all group ${
                i % 2 === 0 ? 'hover:-rotate-0.5' : 'hover:rotate-0.5'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-3 flex-1 min-w-0">
                  <span className="text-3xl shrink-0">{item.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className="font-caveat text-xl font-bold text-[#1B4332]">{item.name}</span>
                      {item.tag && (
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${tagColors[item.tag] || 'bg-[#EDE8DC] text-[#1B4332]'}`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#2D6A4F] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <span className="font-caveat text-2xl font-bold text-[#D4A853] shrink-0">${item.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary note */}
        <div className="mt-10 bg-[#EDE8DC] rounded-2xl p-5 text-center">
          <p className="font-caveat text-xl text-[#1B4332] font-bold mb-1">Dietary needs? We've got you. 💚</p>
          <p className="text-sm text-[#2D6A4F]">
            Most items can be made vegan or gluten-free. Just ask our friendly staff when you order!
          </p>
        </div>
      </div>
    </div>
  );
}
