import { useState } from 'react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  tag: string;
}

const initialReviews: Review[] = [
  { id: 1, name: 'Priya T.', avatar: '🧡', rating: 5, date: 'Apr 2025', text: 'The matcha latte changed my life. I\'ve tried matcha in Tokyo and this honestly rivals it. The oat milk ratio is *chef\'s kiss*. I come here every single morning now. My wallet hates me but my soul is happy.', tag: 'matcha lover' },
  { id: 2, name: 'Marcus L.', avatar: '💚', rating: 5, date: 'Apr 2025', text: 'Best hidden gem in the neighbourhood. The vibes are immaculate — low lighting, great playlist, staff actually remember your name. The brown sugar oat latte is elite. Don\'t sleep on the avocado toast either.', tag: 'regular' },
  { id: 3, name: 'Sophie K.', avatar: '💛', rating: 5, date: 'Mar 2025', text: 'Japanese pancakes are worth every minute of the wait. Absolute heaven. Jiggly, fluffy, served with the most perfect maple butter. I dream about them at night. Already planning my next visit.', tag: 'foodie' },
  { id: 4, name: 'Daniel R.', avatar: '🩵', rating: 4, date: 'Mar 2025', text: 'Lovely cafe, very cosy atmosphere. Got the cold brew and grain bowl for lunch — both were excellent. Deducting one star only because it got a bit noisy on a Saturday afternoon. Still a solid 4/5 and I\'ll be back!', tag: 'lunch regular' },
  { id: 5, name: 'Mei Lin C.', avatar: '❤️', rating: 5, date: 'Feb 2025', text: 'Jiahome feels exactly like its name — like home. The staff are genuinely warm, the space is beautiful (lots of natural light and plants), and the acai bowl is the best I\'ve had in Singapore. This place deserves all the hype.', tag: 'new favourite' },
  { id: 6, name: 'Arun P.', avatar: '🩶', rating: 5, date: 'Feb 2025', text: 'Came here with my laptop for a 3-hour work session. Left after 5 hours because I kept ordering more food. The oat milk chai is dangerously good. WiFi was fast, no one rushed me out. 10/10 would work-from-cafe here again.', tag: 'wfh crew' },
];

function Stars({ n, size = 'sm' }: { n: number; size?: 'sm' | 'lg' }) {
  return (
    <div className={`flex gap-0.5 ${size === 'lg' ? 'text-2xl' : 'text-base'}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? 'text-[#D4A853]' : 'text-[#EDE8DC]'}>★</span>
      ))}
    </div>
  );
}

function StarInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onChange(i + 1)}
          onMouseEnter={() => setHover(i + 1)}
          onMouseLeave={() => setHover(0)}
          className="text-2xl transition-transform hover:scale-110"
        >
          <span className={(hover || value) > i ? 'text-[#D4A853]' : 'text-[#EDE8DC]'}>★</span>
        </button>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: '', rating: 0, text: '', tag: '' });
  const [submitted, setSubmitted] = useState(false);

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  const dist = [5, 4, 3, 2, 1].map(n => ({ n, count: reviews.filter(r => r.rating === n).length }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.rating === 0 || !form.text.trim()) return;
    const newReview: Review = {
      id: Date.now(),
      name: form.name.trim(),
      avatar: ['🧡','💚','💛','🩵','❤️','🩶'][Math.floor(Math.random() * 6)],
      rating: form.rating,
      date: new Date().toLocaleDateString('en-SG', { month: 'short', year: 'numeric' }),
      text: form.text.trim(),
      tag: form.tag.trim() || 'guest',
    };
    setReviews(prev => [newReview, ...prev]);
    setForm({ name: '', rating: 0, text: '', tag: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#1B4332] py-14 px-6 text-center relative overflow-hidden">
        <span className="sticker text-base mb-3 inline-block relative z-10">💬 real talk</span>
        <h1 className="font-caveat text-6xl md:text-7xl font-bold text-[#F5F0E8] mt-3 mb-2 relative z-10">
          Reviews
        </h1>
        <p className="text-[#B7E4C7] text-base max-w-md mx-auto relative z-10">
          Honest words from our favourite people — you. 🍃
        </p>
        <div className="overflow-hidden leading-none absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10 fill-[#F5F0E8]">
            <path d="M0,0 C200,40 400,0 600,25 C800,50 1000,10 1200,30 L1200,40 L0,40 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Summary bar */}
        <div className="bg-[#1B4332] rounded-3xl p-8 mb-10 text-[#F5F0E8]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="font-caveat text-8xl font-bold text-[#D4A853]">{avgRating}</div>
              <Stars n={Math.round(Number(avgRating))} size="lg" />
              <div className="text-[#B7E4C7] text-sm mt-2">Based on {reviews.length} reviews</div>
            </div>
            <div className="space-y-2">
              {dist.map(({ n, count }) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="text-xs text-[#B7E4C7] w-6 text-right">{n}★</span>
                  <div className="flex-1 h-2.5 bg-[#0D2818] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D4A853] rounded-full transition-all"
                      style={{ width: `${(count / reviews.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-[#52B788] w-4">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {reviews.map((r, i) => (
            <div
              key={r.id}
              className={`bg-white rounded-2xl p-6 border border-[#EDE8DC] shadow-sm ${
                i % 2 === 0 ? 'card-tilt-l' : 'card-tilt-r'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EDE8DC] flex items-center justify-center text-xl">
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1B4332]">{r.name}</div>
                    <div className="text-xs text-[#52B788]">{r.date}</div>
                  </div>
                </div>
                <span className="sticker-green sticker text-[10px]">{r.tag}</span>
              </div>
              <Stars n={r.rating} />
              <p className="mt-3 text-sm text-[#2D6A4F] leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>

        {/* Leave a review */}
        <div className="bg-[#EDE8DC] rounded-3xl p-8">
          <div className="mb-6">
            <span className="sticker inline-block mb-3">✏️ your turn!</span>
            <h2 className="font-caveat text-4xl font-bold text-[#1B4332] mt-2">Leave a Review</h2>
            <p className="text-sm text-[#2D6A4F] mt-1">Visited recently? We'd love to hear from you.</p>
          </div>

          {submitted && (
            <div className="bg-[#1B4332] text-[#F5F0E8] rounded-xl px-5 py-3 mb-5 text-sm font-medium flex items-center gap-2">
              <span>🎉</span> Thanks for your review! You're the best.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B4332] mb-1.5">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jia Lin"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-[#C8C2B6] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-white placeholder-[#B7E4C7]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1B4332] mb-1.5">Tag (optional)</label>
                <input
                  type="text"
                  placeholder="e.g. matcha lover, regular..."
                  value={form.tag}
                  onChange={e => setForm(f => ({ ...f, tag: e.target.value }))}
                  className="w-full border border-[#C8C2B6] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-white placeholder-[#B7E4C7]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1B4332] mb-2">Your Rating *</label>
              <StarInput value={form.rating} onChange={n => setForm(f => ({ ...f, rating: n }))} />
              {form.rating > 0 && (
                <p className="text-xs text-[#52B788] mt-1">
                  {['', 'Poor', 'Fair', 'Good', 'Great', 'Amazing! ✨'][form.rating]}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1B4332] mb-1.5">Your Review *</label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your experience — the coffee, the food, the vibes..."
                value={form.text}
                onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                className="w-full border border-[#C8C2B6] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-white placeholder-[#B7E4C7] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!form.name.trim() || form.rating === 0 || !form.text.trim()}
              className="bg-[#1B4332] hover:bg-[#0D2818] disabled:bg-[#52B788]/40 text-[#F5F0E8] font-semibold px-8 py-3 rounded-xl text-sm transition-all shadow-md hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              Submit Review →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
