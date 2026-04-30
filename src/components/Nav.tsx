import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/location', label: 'Find Us' },
  { to: '/reviews', label: 'Reviews' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#1B4332] shadow-lg">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="text-3xl">🍃</span>
          <div className="leading-tight">
            <div className="font-caveat text-2xl font-bold text-[#F5F0E8] group-hover:text-[#D4A853] transition-colors">
              Jiahome Cafe
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${
                pathname === l.to
                  ? 'text-[#D4A853]'
                  : 'text-[#B7E4C7] hover:text-[#F5F0E8]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="bg-[#D4A853] hover:bg-[#c49a44] text-[#1B4332] text-sm font-semibold px-4 py-2 rounded-full transition-colors shadow-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden text-[#F5F0E8] p-2"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0D2818] border-t border-[#2D6A4F] px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`text-base font-medium py-1 ${
                pathname === l.to ? 'text-[#D4A853]' : 'text-[#B7E4C7]'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="mt-1 text-center bg-[#D4A853] text-[#1B4332] font-semibold py-2 rounded-full text-sm"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
