import { Link } from 'react-router-dom';

const bestSellers = [
  {
    emoji: '🍵',
    name: 'Signature Matcha Latte',
    desc: 'Ceremonial grade matcha, oat milk, a drizzle of honey. Pure bliss.',
    price: '$7.50',
    tag: 'best seller',
    tilt: 'card-tilt-l',
  },
  {
    emoji: '🧋',
    name: 'Brown Sugar Oat Latte',
    desc: 'Tiger stripes, oat milk, espresso. Instagram-worthy & delicious.',
    price: '$8.00',
    tag: '⭐ fan fave',
    tilt: 'card-tilt-r',
  },
  {
    emoji: '☕',
    name: 'Honey Lavender Cold Brew',
    desc: '24-hour cold brew, lavender syrup, wildflower honey. Dreamy.',
    price: '$7.00',
    tag: 'new!',
    tilt: 'card-tilt-l',
  },
  {
    emoji: '🥑',
    name: 'Avocado Toast',
    desc: 'Smashed avo, poached egg, chilli flakes on sourdough. Timeless.',
    price: '$12.00',
    tag: 'best seller',
    tilt: 'card-tilt-r',
  },
  {
    emoji: '🥞',
    name: 'Fluffy Japanese Pancakes',
    desc: 'Soufflé-style, jiggly, served with maple & berries. Worth the wait.',
    price: '$14.00',
    tag: '⭐ fan fave',
    tilt: 'card-tilt-l',
  },
  {
    emoji: '🍓',
    name: 'Acai Bowl',
    desc: 'Organic acai, granola, fresh fruits, drizzle of honey. Fuel up!',
    price: '$13.00',
    tag: 'seasonal',
    tilt: 'card-tilt-r',
  },
];

const tagColors: Record<string, string> = {
  'best seller': 'sticker',
  '⭐ fan fave': 'sticker-green sticker',
  'new!': 'sticker',
  'seasonal': 'sticker-green sticker',
};

export default function Landing() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative bg-[#1B4332] overflow-hidden">
        {/* Decorative leaf blobs */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,10 Q190,50 190,100 Q190,170 100,190 Q10,170 10,100 Q10,50 100,10 Z" fill="#52B788"/>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M30,100 Q80,10 150,50 Q200,80 170,150 Q140,200 70,190 Q10,170 30,100 Z" fill="#B7E4C7"/>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="sticker inline-block mb-2">est. 2021 ☕</span>
            </div>
            <h1 className="font-caveat text-6xl md:text-8xl font-bold text-[#F5F0E8] leading-tight mb-4">
              Your cozy little
              <span className="text-[#D4A853] underline-wavy block">corner of calm.</span>
            </h1>
            <p className="text-[#B7E4C7] text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
              Jiahome Cafe — where every cup is crafted with love, every bite tells a story, and you're always welcome to stay a while. 🍃
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="bg-[#D4A853] hover:bg-[#c49a44] text-[#1B4332] font-semibold px-8 py-3 rounded-full text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                See Our Menu →
              </Link>
              <Link
                to="/location"
                className="border-2 border-[#52B788] text-[#52B788] hover:bg-[#52B788] hover:text-[#1B4332] font-semibold px-8 py-3 rounded-full text-base transition-all"
              >
                📍 Find Us
              </Link>
            </div>
          </div>
        </div>

        {/* Wavy bottom */}
        <div className="overflow-hidden leading-none">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-14 fill-[#F5F0E8]">
            <path d="M0,0 C200,60 400,0 600,40 C800,80 1000,20 1200,50 L1200,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Tagline strip ─────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-[#1B4332]">
          {['☕ Specialty Coffee', '🌿 Plant-based Options', '🎵 Chill Vibes', '📚 Laptop Friendly', '🍰 House-made Pastries'].map(item => (
            <span key={item} className="font-caveat text-xl font-semibold">{item}</span>
          ))}
        </div>
      </section>

      {/* ── Best Sellers ──────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="sticker-green sticker text-base mb-3 inline-block">✨ the crowd pleasers</span>
            <h2 className="font-caveat text-5xl md:text-6xl font-bold text-[#1B4332] mt-3 mb-2">
              Best Sellers
            </h2>
            <p className="text-[#2D6A4F] text-base max-w-md mx-auto">
              These are the ones our regulars can't live without. Try one — or all six.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((item, i) => (
              <div
                key={item.name}
                className={`${item.tilt} bg-white rounded-2xl p-6 shadow-md border border-[#EDE8DC] cursor-pointer`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-4xl float inline-block">{item.emoji}</span>
                  <span className={tagColors[item.tag] || 'sticker'}>{item.tag}</span>
                </div>
                <h3 className="font-caveat text-2xl font-bold text-[#1B4332] mb-1">{item.name}</h3>
                <p className="text-sm text-[#2D6A4F] leading-relaxed mb-4">{item.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-caveat text-2xl font-bold text-[#D4A853]">{item.price}</span>
                  <Link
                    to="/menu"
                    className="text-xs font-semibold text-[#52B788] hover:text-[#1B4332] transition-colors"
                  >
                    Full menu →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block bg-[#1B4332] hover:bg-[#0D2818] text-[#F5F0E8] font-semibold px-10 py-3.5 rounded-full transition-all shadow-lg hover:-translate-y-0.5"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our story ─────────────────────────────────────────────────── */}
      <section className="bg-[#1B4332] relative overflow-hidden">
        <div className="overflow-hidden leading-none">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-14 fill-[#F5F0E8]">
            <path d="M0,60 C300,0 600,60 900,20 C1050,0 1150,40 1200,20 L1200,0 L0,0 Z" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <span className="sticker text-base mb-4 inline-block">💚 our story</span>
          <h2 className="font-caveat text-5xl md:text-6xl font-bold text-[#F5F0E8] mt-4 mb-6">
            Born from a love of{' '}
            <span className="text-[#D4A853] underline-wavy">good coffee</span> & good company.
          </h2>
          <p className="text-[#B7E4C7] text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Jiahome Cafe started as a dream — a space that felt like home to everyone who walked through the door. We obsess over every bean, every recipe, every detail so you can just sit back, breathe, and enjoy. The name "Jiahome" means "home" in Chinese. That's exactly what we want you to feel. 🏡
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[['500+', 'Happy Regulars'], ['12', 'Specialty Drinks'], ['4.9★', 'Average Rating'], ['3', 'Years of Love']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="font-caveat text-4xl font-bold text-[#D4A853]">{num}</div>
                <div className="text-sm text-[#52B788] mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden leading-none">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-14 fill-[#F5F0E8]">
            <path d="M0,0 C200,60 400,0 600,40 C800,80 1000,20 1200,50 L1200,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* ── Reviews teaser ────────────────────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-caveat text-5xl font-bold text-[#1B4332] mb-10">
            What people are saying 💬
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { quote: '"The matcha latte changed my life. No exaggeration."', name: 'Priya T.', stars: 5 },
              { quote: '"Best hidden gem in the neighbourhood. The vibes are immaculate."', name: 'Marcus L.', stars: 5 },
              { quote: '"Japanese pancakes are worth every minute of the wait. Absolute heaven."', name: 'Sophie K.', stars: 5 },
            ].map((r, i) => (
              <div
                key={i}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-[#EDE8DC] ${i % 2 === 0 ? 'card-tilt-l' : 'card-tilt-r'}`}
              >
                <div className="text-[#D4A853] text-xl mb-3">{'★'.repeat(r.stars)}</div>
                <p className="text-[#1B4332] text-sm leading-relaxed italic mb-4">{r.quote}</p>
                <div className="font-semibold text-sm text-[#2D6A4F]">— {r.name}</div>
              </div>
            ))}
          </div>
          <Link
            to="/reviews"
            className="inline-block mt-8 border-2 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-[#F5F0E8] font-semibold px-8 py-3 rounded-full transition-all"
          >
            Read All Reviews
          </Link>
        </div>
      </section>
    </div>
  );
}
