import { useState } from 'react';

type Mode = 'login' | 'signup';

export default function Login() {
  const [mode, setMode] = useState<Mode>('login');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: string, value: string) => setForm(f => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-sm">
          <div className="text-7xl mb-6 float inline-block">☕</div>
          <h2 className="font-caveat text-5xl font-bold text-[#1B4332] mb-3">
            {mode === 'login' ? 'Welcome back!' : 'Welcome to the family!'}
          </h2>
          <p className="text-[#2D6A4F] mb-6">
            {mode === 'login'
              ? "Great to see you again. Your usual table is waiting. ☕"
              : "You're officially part of the Jiahome family. We can't wait to see you. 🍃"}
          </p>
          <div className="sticker inline-block text-lg">you're in! 🎉</div>
          <div className="mt-6">
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', password: '', confirm: '' }); }}
              className="text-sm text-[#52B788] hover:text-[#1B4332] underline transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left panel - decorative */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1B4332] flex-col items-center justify-center px-12 relative overflow-hidden">
        {/* Background leaves */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {['10%,15%', '70%,10%', '20%,70%', '80%,80%', '50%,40%'].map((pos, i) => (
            <span
              key={i}
              className="absolute text-6xl"
              style={{ left: pos.split(',')[0], top: pos.split(',')[1], transform: `rotate(${i * 30}deg)` }}
            >
              🍃
            </span>
          ))}
        </div>
        <div className="relative text-center">
          <div className="font-caveat text-6xl font-bold text-[#F5F0E8] mb-3">
            Jiahome Cafe
          </div>
          <div className="text-[#B7E4C7] text-3xl mb-8">🍃</div>
          <div className="font-caveat text-2xl text-[#D4A853] leading-relaxed max-w-xs mx-auto">
            "Every cup is a little hug for your soul."
          </div>
          <div className="mt-10 flex flex-col gap-3 text-left max-w-xs">
            {['☕ Early bird deals for members', '🎂 Birthday month surprise', '📱 Skip the queue with app orders', '💚 Loyalty points on every purchase'].map(perk => (
              <div key={perk} className="flex items-center gap-2 bg-[#0D2818]/50 rounded-xl px-4 py-2.5">
                <span className="text-[#52B788] text-sm">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="font-caveat text-4xl font-bold text-[#1B4332]">Jiahome Cafe 🍃</div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-[#EDE8DC] p-8">
            <div className="mb-6">
              <span className={`sticker${mode === 'signup' ? '-green sticker' : ''} inline-block mb-3`}>
                {mode === 'login' ? '👋 welcome back' : '✨ join the family'}
              </span>
              <h1 className="font-caveat text-4xl font-bold text-[#1B4332]">
                {mode === 'login' ? 'Sign in' : 'Create account'}
              </h1>
              <p className="text-sm text-[#2D6A4F] mt-1">
                {mode === 'login'
                  ? 'Good to have you back. Your usual?'
                  : 'Become a Jiahome member today.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jia Lin"
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    className="w-full border border-[#EDE8DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-[#F5F0E8] placeholder-[#B7E4C7]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  className="w-full border border-[#EDE8DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-[#F5F0E8] placeholder-[#B7E4C7]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1B4332] mb-1.5">Password</label>
                <input
                  type="password"
                  required
                  placeholder="at least 8 characters"
                  value={form.password}
                  onChange={e => set('password', e.target.value)}
                  className="w-full border border-[#EDE8DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-[#F5F0E8] placeholder-[#B7E4C7]"
                />
              </div>

              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-[#1B4332] mb-1.5">Confirm Password</label>
                  <input
                    type="password"
                    required
                    placeholder="same again"
                    value={form.confirm}
                    onChange={e => set('confirm', e.target.value)}
                    className="w-full border border-[#EDE8DC] rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1B4332] bg-[#F5F0E8] placeholder-[#B7E4C7]"
                  />
                </div>
              )}

              {mode === 'login' && (
                <div className="text-right">
                  <button type="button" className="text-xs text-[#52B788] hover:text-[#1B4332] transition-colors">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#1B4332] hover:bg-[#0D2818] text-[#F5F0E8] font-semibold py-3 rounded-xl transition-all text-sm mt-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                {mode === 'login' ? 'Sign In →' : 'Create Account →'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-[#EDE8DC]" />
              <span className="text-xs text-[#B7E4C7] font-medium">or continue with</span>
              <div className="flex-1 h-px bg-[#EDE8DC]" />
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {[['G', 'Google', '#EA4335'], ['f', 'Facebook', '#1877F2']].map(([letter, name, color]) => (
                <button
                  key={name}
                  type="button"
                  className="flex-1 flex items-center justify-center gap-2 border border-[#EDE8DC] hover:border-[#1B4332] rounded-xl py-2.5 text-sm font-medium text-[#1B4332] transition-colors"
                >
                  <span className="font-bold" style={{ color }}>{letter}</span>
                  {name}
                </button>
              ))}
            </div>

            {/* Switch mode */}
            <p className="text-center text-sm text-[#2D6A4F] mt-6">
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => setMode(m => m === 'login' ? 'signup' : 'login')}
                className="font-semibold text-[#1B4332] hover:text-[#D4A853] underline transition-colors"
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
