import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0D2818] text-[#B7E4C7]">
      {/* Wavy top edge */}
      <div className="overflow-hidden leading-none">
        <svg viewBox="0 0 1200 50" preserveAspectRatio="none" className="w-full h-12 fill-[#F5F0E8]">
          <path d="M0,50 C150,0 350,50 600,25 C850,0 1050,50 1200,25 L1200,50 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="font-caveat text-3xl font-bold text-[#F5F0E8] mb-2">Jiahome Cafe 🍃</div>
            <p className="text-sm text-[#52B788] leading-relaxed">
              A cozy corner where every sip feels like home. Come as you are — stay for the vibes.
            </p>
          </div>

          <div>
            <div className="font-caveat text-xl font-bold text-[#D4A853] mb-3">Quick Links</div>
            <div className="flex flex-col gap-2">
              {[['/', 'Home'], ['/menu', 'Menu'], ['/location', 'Find Us'], ['/reviews', 'Reviews'], ['/login', 'Login']].map(([to, label]) => (
                <Link key={to} to={to} className="text-sm hover:text-[#F5F0E8] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-caveat text-xl font-bold text-[#D4A853] mb-3">Hours</div>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-[#F5F0E8]">8am – 9pm</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-[#F5F0E8]">9am – 10pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-[#F5F0E8]">9am – 8pm</span>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <div>📍 12 Jalan Damai, Singapore</div>
              <div>📞 +65 9123 4567</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1B4332] flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#52B788]">
          <span>© 2025 Jiahome Cafe. Made with ☕ & lots of love.</span>
          <span className="font-caveat text-base text-[#D4A853] wiggle inline-block">good vibes only ✨</span>
        </div>
      </div>
    </footer>
  );
}
