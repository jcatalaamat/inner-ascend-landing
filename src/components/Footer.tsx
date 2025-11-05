import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

function Footer() {
  const footerLinks = [
    { path: '/journey', label: 'The Journey' },
    { path: '/community', label: 'Community' },
    { path: '/facilitators', label: 'Facilitators' },
    { path: '/membership', label: 'Membership' },
    { path: '/practice', label: 'Practice' },
    { path: '/about', label: 'About' },
    { path: '/support', label: 'Support' },
    { path: '/privacy', label: 'Privacy' },
  ];

  return (
    <footer className="px-6 py-16 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent-primary" />
            <span className="text-lg font-semibold">Inner Ascend</span>
          </div>

          <p className="text-body text-brand-muted">
            Daily spiritual practice meets deep shadow work
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 text-body-sm mb-8 flex-wrap">
          {footerLinks.map((link, index) => (
            <>
              {index > 0 && <span key={`sep-${index}`} className="text-brand-border">•</span>}
              <Link
                key={link.path}
                to={link.path}
                className="text-brand-muted hover:text-accent-primary transition-colors"
              >
                {link.label}
              </Link>
            </>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-body-sm text-brand-muted/70">
            © 2025 Inner Ascend • Being Human 101
          </p>
          <p className="text-body-sm text-brand-muted/50">
            Guiding you from wounded to wise, reactive to sovereign, victim to conscious creator.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
