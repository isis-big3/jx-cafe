export default function Location() {
  const hours = [
    { day: 'Monday', time: '8:00am – 9:00pm' },
    { day: 'Tuesday', time: '8:00am – 9:00pm' },
    { day: 'Wednesday', time: '8:00am – 9:00pm' },
    { day: 'Thursday', time: '8:00am – 9:00pm' },
    { day: 'Friday', time: '8:00am – 10:00pm' },
    { day: 'Saturday', time: '9:00am – 10:00pm' },
    { day: 'Sunday', time: '9:00am – 8:00pm' },
  ];

  const today = new Date().toLocaleDateString('en-SG', { weekday: 'long' });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-[#1B4332] py-14 px-6 text-center relative overflow-hidden">
        <span className="sticker text-base mb-3 inline-block relative z-10">📍 come find us</span>
        <h1 className="font-caveat text-6xl md:text-7xl font-bold text-[#F5F0E8] mt-3 mb-2 relative z-10">
          We're Right Here!
        </h1>
        <p className="text-[#B7E4C7] text-base max-w-md mx-auto relative z-10">
          Tucked in a cosy street. You'll smell us before you see us. ☕
        </p>
        <div className="overflow-hidden leading-none absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-10 fill-[#F5F0E8]">
            <path d="M0,0 C200,40 400,0 600,25 C800,50 1000,10 1200,30 L1200,40 L0,40 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Map placeholder */}
          <div className="card-tilt-l">
            <div className="bg-[#1B4332] rounded-3xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
              <div className="w-full h-full flex flex-col items-center justify-center gap-4 relative">
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(#52B788 1px, transparent 1px), linear-gradient(90deg, #52B788 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />
                {/* Streets */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="absolute w-full h-2 bg-[#0D2818] opacity-60 top-1/3" />
                  <div className="absolute w-2 h-full bg-[#0D2818] opacity-60 left-1/3" />
                  <div className="absolute w-full h-2 bg-[#0D2818] opacity-40 bottom-1/4" />
                  <div className="absolute w-2 h-full bg-[#0D2818] opacity-40 right-1/4" />
                  {/* Building blocks */}
                  <div className="absolute top-1/4 left-1/2 w-12 h-10 bg-[#2D6A4F] rounded-sm opacity-50" />
                  <div className="absolute top-1/2 right-1/3 w-16 h-8 bg-[#2D6A4F] rounded-sm opacity-40" />
                  <div className="absolute bottom-1/3 left-1/4 w-10 h-14 bg-[#2D6A4F] rounded-sm opacity-40" />
                  {/* Pin */}
                  <div className="relative z-10 flex flex-col items-center float">
                    <div className="bg-[#D4A853] rounded-full w-14 h-14 flex items-center justify-center shadow-2xl border-4 border-[#F5F0E8]">
                      <span className="text-2xl">🍃</span>
                    </div>
                    <div className="w-0 h-0" style={{ borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '14px solid #D4A853' }} />
                    <div className="font-caveat text-[#F5F0E8] font-bold text-lg mt-2 bg-[#0D2818] px-3 py-1 rounded-full shadow">
                      Jiahome Cafe
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-[#2D6A4F] mt-2 italic">
              Search "Jiahome Cafe" on Google Maps for turn-by-turn directions.
            </p>
          </div>

          {/* Info panel */}
          <div className="flex flex-col gap-5">
            {/* Address card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE8DC] shadow-sm card-tilt-r">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-xl shrink-0">📍</div>
                <div className="font-caveat text-2xl font-bold text-[#1B4332]">Address</div>
              </div>
              <p className="text-[#2D6A4F] font-medium text-base leading-relaxed">
                12 Jalan Damai, #01-05<br />
                Damai Shopping Mall<br />
                Singapore 238858
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-[#2D6A4F]">
                <span className="bg-[#EDE8DC] px-3 py-1 rounded-full">🚇 2 min from Orchard MRT</span>
                <span className="bg-[#EDE8DC] px-3 py-1 rounded-full">🚗 Parking available</span>
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-white rounded-2xl p-6 border border-[#EDE8DC] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1B4332] rounded-full flex items-center justify-center text-xl shrink-0">📞</div>
                <div className="font-caveat text-2xl font-bold text-[#1B4332]">Get in Touch</div>
              </div>
              <div className="space-y-2 text-sm text-[#2D6A4F]">
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:+6591234567" className="hover:text-[#1B4332] font-medium transition-colors">+65 9123 4567</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <a href="mailto:hello@jiahomecafe.sg" className="hover:text-[#1B4332] font-medium transition-colors">hello@jiahomecafe.sg</a>
                </div>
                <div className="flex items-center gap-2">
                  <span>📸</span>
                  <a href="#" className="hover:text-[#1B4332] font-medium transition-colors">@jiahomecafe</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="mt-8 bg-[#1B4332] rounded-3xl p-8 text-[#F5F0E8]">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">🕐</span>
            <h2 className="font-caveat text-4xl font-bold">Opening Hours</h2>
            <span className="sticker text-sm ml-auto">we're waiting ☕</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {hours.map(h => (
              <div
                key={h.day}
                className={`flex justify-between items-center px-4 py-3 rounded-xl transition-all ${
                  h.day === today
                    ? 'bg-[#D4A853] text-[#1B4332] font-bold shadow-md'
                    : 'bg-[#0D2818]/60 hover:bg-[#2D6A4F]/30'
                }`}
              >
                <span className="text-sm font-medium flex items-center gap-2">
                  {h.day === today && <span className="w-2 h-2 rounded-full bg-[#1B4332] inline-block" />}
                  {h.day}
                  {h.day === today && <span className="text-[10px] font-bold uppercase tracking-wide">(today)</span>}
                </span>
                <span className="text-sm">{h.time}</span>
              </div>
            ))}
          </div>
          <p className="text-[#52B788] text-xs mt-4 text-center italic">
            Public holidays may affect opening hours. Check our Instagram for updates.
          </p>
        </div>

        {/* Getting here */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🚇', title: 'By MRT', desc: 'Take the North-South Line to Orchard Station. Take Exit D, walk 2 minutes along Jalan Damai.' },
            { icon: '🚌', title: 'By Bus', desc: 'Buses 36, 105, 111 stop right outside Damai Mall. Alight at "Damai Shopping Ctr" stop.' },
            { icon: '🚗', title: 'By Car', desc: 'Basement parking at Damai Mall, first hour free. Enter from Jalan Damai side road.' },
          ].map(d => (
            <div key={d.title} className="bg-white rounded-2xl p-5 border border-[#EDE8DC] text-center">
              <div className="text-3xl mb-2">{d.icon}</div>
              <div className="font-caveat text-xl font-bold text-[#1B4332] mb-1">{d.title}</div>
              <p className="text-xs text-[#2D6A4F] leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
