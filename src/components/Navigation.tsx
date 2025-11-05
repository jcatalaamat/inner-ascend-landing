import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage?: string;
}

function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/journey', label: 'The Journey' },
    { path: '/community', label: 'Community' },
    { path: '/facilitators', label: 'Facilitators' },
    { path: '/membership', label: 'Membership' },
    { path: '/practice', label: 'Practice' },
    { path: '/about', label: 'About' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-xl border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="w-6 h-6 text-accent-primary" />
            <span className="text-lg font-semibold tracking-tight">Inner Ascend</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.path
                    ? 'text-brand-text'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/membership"
              className="px-5 py-2.5 bg-accent-primary text-white rounded-full font-medium text-sm hover:bg-accent-primary/90 transition-all"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-brand-text"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-brand-border">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block text-sm font-medium transition-colors ${
                  currentPage === item.path
                    ? 'text-brand-text'
                    : 'text-brand-muted hover:text-brand-text'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/membership"
              className="block px-5 py-2.5 bg-accent-primary text-white rounded-full font-medium text-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
