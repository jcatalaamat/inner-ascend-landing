import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, HelpCircle, Book } from 'lucide-react';

export default function SupportPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 123, 247, 0.15), transparent 40%)`
  };

  const faqItems = [
    {
      q: "How do I join Inner Ascend?",
      a: "Visit our Membership page to explore our three tiers: Community Member (€22-€88/month), Academy Member ($197-$397/month), or apply to become a Founding Member. Each tier offers different levels of access to our curriculum, community calls, and healing resources."
    },
    {
      q: "What's included in membership?",
      a: "All memberships include access to monthly community calls and our service exchange marketplace. Academy members get the full Being Human 101 curriculum (16 modules), 97 healing practices library, and personalized spiritual guidance tools."
    },
    {
      q: "What is Being Human 101?",
      a: "Being Human 101 is our comprehensive 16-week trauma healing curriculum. It combines trauma-informed therapy, energy healing, and somatic practices to guide you through shadow work, ancestral healing, and personal transformation."
    },
    {
      q: "Can I cancel my membership?",
      a: "Yes! You can cancel anytime. If you cancel, you'll have access until the end of your billing period."
    },
    {
      q: "Do I need astrology knowledge?",
      a: "Not at all! Just enter your birth information once, and we'll explain everything in plain language. The cosmic guidance is designed to be accessible to everyone."
    },
    {
      q: "Is this a replacement for therapy?",
      a: "No. Inner Ascend is a self-guided spiritual practice and community platform. It complements therapy and professional mental health support but doesn't replace it."
    },
    {
      q: "How do the community calls work?",
      a: "Members gather twice a month for live community calls including teaching sessions, integration circles, and shadow work practices. These are active healing containers, not passive webinars."
    },
    {
      q: "What is the service exchange marketplace?",
      a: "The marketplace allows members to offer and receive services, goods, and skills through bartering and energy exchange—creating an alternative economy based on contribution rather than traditional money."
    },
    {
      q: "What devices does Inner Ascend support?",
      a: "The mobile app is available on both iOS (iPhone/iPad) and Android devices. The web platform can be accessed from any browser."
    },
    {
      q: "How do I contact support?",
      a: "Email us at hello@inner-ascend.com and we'll get back to you within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-silver overflow-hidden relative">
      {/* Animated cosmic background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cosmic-violet rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
      </div>

      {/* Mouse spotlight effect */}
      <div className="fixed inset-0 pointer-events-none" style={spotlightStyle}></div>

      <div className="relative z-10">
        {/* Back Button */}
        <div className="fixed top-4 left-4 z-50">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
              How can we help?
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              Get support for Inner Ascend
            </p>
          </div>
        </div>

        {/* Support Options */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Email Support */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cosmic-violet to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Email Support</h3>
                      <p className="text-gray-400 mb-4">Send us an email and we'll get back to you within 24 hours</p>
                      <a
                        href="mailto:hello@inner-ascend.com"
                        className="inline-flex items-center gap-2 text-cosmic-violet hover:text-purple-400 transition-colors font-semibold"
                      >
                        hello@inner-ascend.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-3xl blur opacity-20 group-hover:opacity-40 transition"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cosmic-integration rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Getting Started</h3>
                      <p className="text-gray-400 mb-4">Learn how to make the most of your Inner Ascend journey</p>
                      <button className="inline-flex items-center gap-2 text-cosmic-integration hover:text-purple-400 transition-colors font-semibold">
                        View Guide
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <HelpCircle className="w-8 h-8 text-cosmic-violet" />
                <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
              </div>

              <div className="space-y-4">
                {faqItems.map((item: { q: string; a: string }, index: number) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition"></div>
                    <div className="relative bg-zinc-900/60 rounded-2xl border border-white/10 overflow-hidden">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="font-semibold text-white pr-4">{item.q}</span>
                        <MessageCircle className={`w-5 h-5 text-cosmic-violet transition-transform flex-shrink-0 ${openFAQ === index ? 'rotate-180' : ''}`} />
                      </button>
                      {openFAQ === index && (
                        <div className="px-6 pb-4 text-gray-400">
                          {item.a}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-violet via-purple-500 to-cosmic-integration rounded-3xl blur opacity-30 group-hover:opacity-50 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-gray-400 mb-6">We're here to help. Reach out to us anytime.</p>
                <a
                  href="mailto:hello@inner-ascend.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cosmic-violet to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cosmic-violet/50 transform hover:scale-105 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500">
              © 2025 Inner Ascend • Being Human 101
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
