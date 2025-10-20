import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Calendar, Moon, BookOpen, Pencil, TrendingUp, Library, ChevronDown, Check, Mail, Loader2 } from 'lucide-react';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';

// Main Landing Page Component
function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Waitlist form state
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 123, 247, 0.15), transparent 40%)`
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const screenshots = [
    { title: "Today", description: "Your daily cosmic weather + shadow work focus" },
    { title: "Journey", description: "Navigate your 90-day transformation path" },
    { title: "Module", description: "Deep dive into each teaching" },
    { title: "Meditation", description: "Guided shadow work practices" },
    { title: "Journal", description: "Powerful prompts for integration" },
    { title: "Progress", description: "Track your transformation journey" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [screenshots.length]);

  // Waitlist form submission
  const handleWaitlistSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!email || !email.includes('@')) return;

    setLoading(true);

    try {
      const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY || 'WL4dvqOgWKNB2eq6RLOflQ';
      const formId = import.meta.env.VITE_CONVERTKIT_FORM_ID || '8630317';

      const response = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: email,
          tags: ['inner-ascend-waitlist']
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  // Handle Enter key for waitlist form
  const handleWaitlistKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleWaitlistSubmit();
    }
  };

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

      {/* Stars overlay */}
      <div className="fixed inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(2px 2px at 20% 30%, white, transparent), radial-gradient(2px 2px at 60% 70%, white, transparent), radial-gradient(1px 1px at 50% 50%, white, transparent), radial-gradient(1px 1px at 80% 10%, white, transparent), radial-gradient(2px 2px at 90% 60%, white, transparent)',
        backgroundSize: '200px 200px'
      }}></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-cosmic-black/30 border-b border-cosmic-silver/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Sparkles className="w-8 h-8 text-cosmic-violet" />
                <span className="text-xl font-bold bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
                  INNER ASCEND
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => scrollToSection('journey')} className="text-gray-400 hover:text-white transition-colors">
                  Journey
                </button>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('cta-final')} className="px-6 py-2 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cosmic-violet/50 transition-all">
                  Download
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* SECTION 1: HERO */}
        <div className="min-h-screen flex items-center justify-center container mx-auto px-4 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-7xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="inline-block animate-fadeIn bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
                INNER ASCEND
              </span>
            </h1>

            <p className="text-3xl md:text-4xl text-cosmic-silver mb-6 leading-relaxed">
              Daily Spiritual Practice Meets Deep Shadow Work
            </p>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Your 90-day journey from wounded to wise, guided by cosmic rhythms and shadow integration.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="group px-8 py-4 bg-gradient-to-r from-cosmic-violet to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cosmic-violet/50 transform hover:scale-105 transition-all flex items-center gap-3">
                <span>Download on App Store</span>
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cosmic-integration text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
                Get it on Google Play
              </button>
            </div>

            <button onClick={() => scrollToSection('gap')} className="text-gray-400 hover:text-cosmic-violet transition-colors animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto" />
            </button>
          </div>
        </div>

        {/* SECTION 2: THE GAP */}
        <section id="gap" className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              What's Missing in Spiritual Apps?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-3">CO-STAR</h3>
                <p className="text-gray-400 mb-4">Daily astrology</p>
                <div className="space-y-2 text-red-400">
                  <p>❌ No depth work</p>
                  <p>❌ No integration</p>
                </div>
              </div>

              <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-3">INSIGHT TIMER</h3>
                <p className="text-gray-400 mb-4">100K meditations</p>
                <div className="space-y-2 text-red-400">
                  <p>❌ No structure</p>
                  <p>❌ No shadow focus</p>
                </div>
              </div>

              <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold text-white mb-3">MINDVALLEY</h3>
                <p className="text-gray-400 mb-4">50+ teachers</p>
                <div className="space-y-2 text-red-400">
                  <p>❌ $499/year</p>
                  <p>❌ Overwhelming</p>
                </div>
              </div>
            </div>

            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-cosmic-violet/30 p-8">
                <h3 className="text-2xl font-bold text-cosmic-violet mb-6">INNER ASCEND</h3>
                <p className="text-lg text-gray-300 mb-6">The only app combining:</p>
                <div className="space-y-3 mb-6">
                  <p className="text-cosmic-integration">✅ Daily cosmic guidance (like Co-Star)</p>
                  <p className="text-cosmic-integration">✅ Structured 90-day curriculum (like Mindvalley)</p>
                  <p className="text-cosmic-integration">✅ Guided meditations (like Insight Timer)</p>
                  <p className="text-cosmic-integration">✅ Shadow work focus (like nothing else)</p>
                </div>
                <p className="text-2xl font-bold text-cosmic-violet">$17/month • Start free</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DAILY PRACTICE */}
        <section id="daily-practice" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Your Daily Practice
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center">
                  <div className="text-4xl mb-4">🌅</div>
                  <h3 className="text-xl font-bold text-white mb-4">MORNING (5 min)</h3>
                  <div className="h-48 bg-zinc-800/50 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                    [Today screen mockup]
                  </div>
                  <ul className="text-left text-gray-400 space-y-2">
                    <li>• Cosmic weather</li>
                    <li>• Today's focus</li>
                    <li>• Emotional check-in</li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center">
                  <div className="text-4xl mb-4">🧘</div>
                  <h3 className="text-xl font-bold text-white mb-4">PRACTICE (15 min)</h3>
                  <div className="h-48 bg-zinc-800/50 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                    [Meditation mockup]
                  </div>
                  <ul className="text-left text-gray-400 space-y-2">
                    <li>• Shadow work meditation</li>
                    <li>OR Journaling prompts</li>
                    <li>OR Integration exercise</li>
                  </ul>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center">
                  <div className="text-4xl mb-4">🌙</div>
                  <h3 className="text-xl font-bold text-white mb-4">EVENING (2 min)</h3>
                  <div className="h-48 bg-zinc-800/50 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                    [Progress mockup]
                  </div>
                  <ul className="text-left text-gray-400 space-y-2">
                    <li>• Mark day complete</li>
                    <li>• Track streak</li>
                    <li>• Celebrate progress</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-center text-xl text-gray-400">22 minutes a day • Life-changing results</p>
          </div>
        </section>

        {/* SECTION 4: THE JOURNEY (90-Day Timeline) */}
        <section id="journey" className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Your 90-Day Transformation Journey
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">16 modules • 90-120 days • Complete roadmap from wounded to wise</p>

            <div className="space-y-16">
              {/* WEEKS 1-4: FOUNDATION */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 flex-1 bg-gradient-to-r from-cosmic-violet to-purple-500"></div>
                  <h3 className="text-2xl font-bold text-cosmic-violet">WEEKS 1-4: FOUNDATION</h3>
                  <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-cosmic-violet"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">Module 01 • Awakening</h4>
                        <span className="text-sm text-gray-500">7 days</span>
                      </div>
                      <p className="text-gray-400">Stop living on autopilot. See the patterns running your life.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">Module 02 • Core Wounds</h4>
                        <span className="text-sm text-gray-500">7 days</span>
                      </div>
                      <p className="text-gray-400">Identify the wound beneath every behavior.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">Module 03 • Shadow Work</h4>
                        <span className="text-sm text-gray-500">14 days</span>
                      </div>
                      <p className="text-gray-400">Reclaim the parts you've been hiding, denying, projecting.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">Module 04 • Inner Child Healing</h4>
                        <span className="text-sm text-gray-500">14 days</span>
                      </div>
                      <p className="text-gray-400">Meet the younger versions of you frozen in pain—set them free.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WEEKS 5-10: DEEP WORK */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-cosmic-integration"></div>
                  <h3 className="text-2xl font-bold text-purple-400">WEEKS 5-10: DEEP WORK</h3>
                  <div className="h-1 flex-1 bg-gradient-to-r from-cosmic-integration to-purple-500"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 05 • Somatic Release</h4>
                      <p className="text-gray-400">Release trauma stored in your body.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 06 • Boundaries & Authenticity</h4>
                      <p className="text-gray-400">Learn to say no and express your truth.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 07 • Attachment & Relationships</h4>
                      <p className="text-gray-400">Transform your relationship patterns.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 08 • Parts Work & IFS</h4>
                      <p className="text-gray-400">Integrate conflicting parts of yourself.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WEEKS 11-16: MASTERY */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 flex-1 bg-gradient-to-r from-cosmic-integration to-blue-500"></div>
                  <h3 className="text-2xl font-bold text-cosmic-integration">WEEKS 11-16: MASTERY</h3>
                  <div className="h-1 flex-1 bg-gradient-to-r from-blue-500 to-cosmic-integration"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 09 • Shame & Vulnerability</h4>
                      <p className="text-gray-400">Transform your deepest shame into power.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 10 • Self-Sabotage Patterns</h4>
                      <p className="text-gray-400">Break free from unconscious self-destruction.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 11 • Ancestral Healing</h4>
                      <p className="text-gray-400">Clear inherited trauma and family patterns.</p>
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                    <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                      <h4 className="text-lg font-bold text-white mb-3">Module 12 • Embodiment & Integration</h4>
                      <p className="text-gray-400">Live as your transformed self.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-cosmic-violet font-semibold">+ 4 Advanced Modules</p>
                <p className="text-gray-400 mt-2">Conscious Creation • Timeline Shifting • Quantum Awareness • Reality Design</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FEATURES GRID */}
        <section id="features" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              What's Inside the App
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <Calendar className="w-12 h-12 text-cosmic-violet mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">DAILY COSMIC GUIDANCE</h3>
                  <p className="text-gray-400">Moon phases, transits, and shadow work focus personalized to you</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <Moon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">GUIDED MEDITATIONS</h3>
                  <p className="text-gray-400">7 practices for shadow work, healing, and integration (12-18 min each)</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <BookOpen className="w-12 h-12 text-cosmic-integration mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">BEING HUMAN 101</h3>
                  <p className="text-gray-400">16 modules, 90-120 days. Complete roadmap from wounded to wise</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <Pencil className="w-12 h-12 text-cosmic-violet mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">JOURNALING + PROMPTS</h3>
                  <p className="text-gray-400">100+ shadow work prompts integrated into daily practice</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">PROGRESS TRACKING</h3>
                  <p className="text-gray-400">Streaks, milestones, achievement badges. Watch transformation unfold</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <Library className="w-12 h-12 text-cosmic-integration mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">PRACTICES LIBRARY</h3>
                  <p className="text-gray-400">Access any meditation, exercise, or prompt anytime you need</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: SCREENSHOTS CAROUSEL */}
        <section id="screenshots" className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              See Inner Ascend in Action
            </h2>

            <div className="relative">
              <div className="h-96 bg-zinc-900/60 rounded-2xl border border-white/10 flex items-center justify-center mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white mb-2">{screenshots[activeScreenshot].title}</p>
                  <p className="text-gray-400">{screenshots[activeScreenshot].description}</p>
                </div>
              </div>

              <div className="flex justify-center gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveScreenshot(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeScreenshot ? 'bg-cosmic-violet w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: TRANSFORMATION (4 columns) */}
        <section id="transformation" className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Your Transformation
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cosmic-violet mb-4">INNER FOUNDATION</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Core Wound Healing</li>
                  <li>• Emotional Integration</li>
                  <li>• Somatic Awareness</li>
                  <li>• Nervous System Care</li>
                  <li>• Authentic Expression</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">SHADOW WORK</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Projection Recognition</li>
                  <li>• Parts Integration</li>
                  <li>• Self-Sabotage Patterns</li>
                  <li>• Unconscious Drives</li>
                  <li>• Self-Acceptance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-cosmic-integration mb-4">ANCESTRAL HEALING</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Lineage Patterns</li>
                  <li>• Inherited Trauma</li>
                  <li>• Family Dynamics</li>
                  <li>• Generational Liberation</li>
                  <li>• Legacy Transformation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-400 mb-4">CONSCIOUS CREATION</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Reality Architecture</li>
                  <li>• Timeline Shifting</li>
                  <li>• Manifestation Mastery</li>
                  <li>• Quantum Awareness</li>
                  <li>• Deliberate Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: MEMBERSHIP TIMELINE */}
        <section id="membership-timeline" className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              What Premium Members Experience
            </h2>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-violet via-purple-500 to-cosmic-integration"></div>

              <div className="space-y-8">
                <div className="relative pl-20">
                  <div className="absolute left-6 top-2 w-5 h-5 bg-cosmic-violet rounded-full border-4 border-cosmic-black"></div>
                  <h3 className="text-xl font-bold text-white mb-2">DAY 1</h3>
                  <div className="bg-zinc-900/60 rounded-xl border border-white/10 p-4">
                    <p className="text-gray-300 mb-2">Unlock Module 1: Awakening</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Welcome teaching</li>
                      <li>• First meditation</li>
                      <li>• Journal: "What patterns am I ready to see?"</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-2 w-5 h-5 bg-purple-500 rounded-full border-4 border-cosmic-black"></div>
                  <h3 className="text-xl font-bold text-white mb-2">WEEK 1</h3>
                  <div className="bg-zinc-900/60 rounded-xl border border-white/10 p-4">
                    <p className="text-gray-300 mb-2">Complete Foundation</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Daily cosmic guidance personalized to your chart</li>
                      <li>• Morning practice (7 min)</li>
                      <li>• Evening reflection + streak tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-2 w-5 h-5 bg-purple-400 rounded-full border-4 border-cosmic-black"></div>
                  <h3 className="text-xl font-bold text-white mb-2">WEEK 2-3</h3>
                  <div className="bg-zinc-900/60 rounded-xl border border-white/10 p-4">
                    <p className="text-gray-300 mb-2">Shadow Work Deep Dive</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• 14 days of shadow integration</li>
                      <li>• Projection tracker unlocked</li>
                      <li>• Parts dialogue practice</li>
                      <li>🏆 Badge Earned: "Shadow Seeker"</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-2 w-5 h-5 bg-cosmic-integration rounded-full border-4 border-cosmic-black"></div>
                  <h3 className="text-xl font-bold text-white mb-2">WEEK 4-8</h3>
                  <div className="bg-zinc-900/60 rounded-xl border border-white/10 p-4">
                    <p className="text-gray-300 mb-2">Inner Child + Somatic Healing</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Module 4: Inner Child Healing (14 days)</li>
                      <li>• Module 5: Somatic Release (10 days)</li>
                      <li>• Reparenting practices</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-2 w-5 h-5 bg-blue-400 rounded-full border-4 border-cosmic-black"></div>
                  <h3 className="text-xl font-bold text-white mb-2">WEEK 9-12</h3>
                  <div className="bg-zinc-900/60 rounded-xl border border-white/10 p-4">
                    <p className="text-gray-300 mb-2">Boundaries + Relationships</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Real-world integration</li>
                      <li>🏆 Badge Earned: "Boundary Architect"</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-2 w-5 h-5 bg-blue-500 rounded-full border-4 border-cosmic-black"></div>
                  <h3 className="text-xl font-bold text-white mb-2">WEEK 13-16</h3>
                  <div className="bg-zinc-900/60 rounded-xl border border-white/10 p-4">
                    <p className="text-gray-300 mb-2">Mastery & Integration</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Advanced ancestral healing</li>
                      <li>• Reality creation teachings</li>
                      <li>🏆 Badge Earned: "Shadow Master"</li>
                    </ul>
                  </div>
                </div>

                <div className="relative pl-20">
                  <div className="absolute left-6 top-2 w-5 h-5 bg-yellow-400 rounded-full border-4 border-cosmic-black"></div>
                  <h3 className="text-xl font-bold text-white mb-2">ONGOING</h3>
                  <div className="bg-zinc-900/60 rounded-xl border border-white/10 p-4">
                    <p className="text-gray-300 mb-2">Lifetime Access</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Return to any module anytime</li>
                      <li>• Re-practice meditations</li>
                      <li>• Deepen your journey</li>
                      <li>• Community (coming soon)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: PRICING */}
        <section id="pricing" className="py-24 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Choose Your Path
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <div className="bg-zinc-900/60 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">FREE</h3>
                  <p className="text-xl text-gray-400 mb-6">Try Inner Ascend</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">Module 1: Awakening</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">Daily cosmic weather</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">2 meditations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">Basic tracking</span>
                    </li>
                  </ul>
                  <button className="w-full px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all">
                    Download Free
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-2xl border border-cosmic-violet/30 p-8">
                  <div className="inline-block px-3 py-1 bg-cosmic-violet/20 text-cosmic-violet rounded-full text-sm font-semibold mb-4">
                    RECOMMENDED
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">PREMIUM</h3>
                  <p className="text-3xl font-bold text-cosmic-violet mb-2">$17/month</p>
                  <p className="text-gray-400 mb-6">or $147/year (save 30%)</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cosmic-integration flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">All 16 modules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cosmic-integration flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">All 7 meditations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cosmic-integration flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">100+ journal prompts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cosmic-integration flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Full progress tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cosmic-integration flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Achievement badges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cosmic-integration flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Personalized guidance</span>
                    </li>
                  </ul>
                  <button className="w-full px-8 py-4 bg-gradient-to-r from-cosmic-violet to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cosmic-violet/50 transform hover:scale-105 transition-all">
                    Start 7-Day Free Trial
                  </button>
                  <p className="text-center text-sm text-gray-400 mt-4">Then $17/mo</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
              <span>💳 Cancel anytime</span>
              <span>•</span>
              <span>🔒 Secure</span>
              <span>•</span>
              <span>📱 iOS & Android</span>
            </div>
          </div>
        </section>

        {/* SECTION 10: WHY NOW */}
        <section id="why-now" className="py-24 px-4 bg-cosmic-dark/80">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Why This Work Matters Now
            </h2>

            <div className="space-y-6 text-xl text-gray-300 leading-relaxed">
              <p>We are at an evolutionary threshold.</p>

              <p>The old ways of being—unconscious, reactive, driven by fear—are no longer sustainable.</p>

              <p className="text-cosmic-violet font-semibold">
                We need a critical mass of humans operating from healed, integrated consciousness.
              </p>

              <p>Inner work is the most essential contribution you can make to humanity's future.</p>

              <p>Every person who transforms their wounds into wisdom becomes a beacon of possibility for others.</p>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-lg text-gray-400">
                Heal Core Wounds → Integrate Shadow → Clear Patterns → Create Consciously
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 11: WAITLIST */}
        <section id="waitlist" className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-4xl">
            {!submitted ? (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet via-purple-500 to-cosmic-integration rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-cosmic-violet/30 p-12 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Mail className="w-12 h-12 text-cosmic-violet" />
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
                    Waitlist
                  </h2>

                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Get early access and exclusive launch updates.
                  </p>

                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-2 text-cosmic-integration">
                      <div className="flex items-center gap-1">
                        <span className="text-3xl font-bold">247</span>
                        <span className="text-xl">+</span>
                      </div>
                      <span className="text-gray-400">people waiting</span>
                    </div>
                  </div>

                  <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyPress={handleWaitlistKeyPress}
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-violet/50 focus:bg-white/10 transition-all"
                        disabled={loading}
                      />
                      <button
                        type="submit"
                        onClick={handleWaitlistSubmit}
                        disabled={!email || loading}
                        className="px-8 py-4 bg-gradient-to-r from-cosmic-violet to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cosmic-violet/50 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Joining...</span>
                          </>
                        ) : (
                          <span>Join Waitlist</span>
                        )}
                      </button>
                    </div>
                  </form>

                  <p className="text-sm text-gray-500 mt-6">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-green-500 rounded-3xl blur opacity-40 animate-pulse"></div>
                <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-cosmic-integration/30 p-12 text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-cosmic-integration/20 rounded-full flex items-center justify-center">
                      <Check className="w-10 h-10 text-cosmic-integration" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-cosmic-integration mb-4">
                    You're on the list!
                  </h3>

                  <p className="text-xl text-gray-300 mb-2">
                    Thanks for joining the Inner Ascend waitlist.
                  </p>

                  <p className="text-gray-400">
                    Check your email for confirmation and early access updates.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 12: FAQ */}
        <section id="faq" className="py-24 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Questions?
            </h2>

            <div className="space-y-4">
              {[
                {
                  q: "Is this an app or a course?",
                  a: "Mobile app (iOS + Android) with 90-day curriculum built in. Daily spiritual practice guide, not passive content."
                },
                {
                  q: "Do I need astrology knowledge?",
                  a: "No! Enter your birth info once, we explain everything in plain language."
                },
                {
                  q: "How much time per day?",
                  a: "15-30 minutes. Morning check-in (5 min), practice (10-20 min), evening (2 min)."
                },
                {
                  q: "Is this therapy?",
                  a: "No. Self-guided spiritual practice. Complements therapy, doesn't replace it."
                },
                {
                  q: "Can I go at my own pace?",
                  a: "Yes! Self-paced. Some modules 7 days, others 14. Go as fast or slow as needed."
                },
                {
                  q: "What if I miss a day?",
                  a: "Life happens. Progress saved. Pick up where you left off. Streaks motivate, don't punish."
                },
                {
                  q: "Is there a community?",
                  a: "Not yet! V1 is your personal journey. Community features coming 2026."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-zinc-900/60 rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="font-semibold text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-cosmic-violet transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4 text-gray-400">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 13: FINAL CTA */}
        <section id="cta-final" className="py-32 px-4 bg-gradient-to-b from-cosmic-black via-cosmic-dark to-cosmic-black">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
              Ready to Begin Your Journey?
            </h2>

            <p className="text-2xl text-gray-300 mb-4">
              Download Inner Ascend today.
            </p>
            <p className="text-xl text-gray-400 mb-8">
              Start with Module 1 for free.
            </p>
            <p className="text-gray-500 mb-12">
              No credit card required.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button className="group px-10 py-5 bg-gradient-to-r from-cosmic-violet to-purple-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cosmic-violet/50 transform hover:scale-105 transition-all flex items-center gap-3">
                <span>Download on App Store</span>
              </button>
              <button className="px-10 py-5 bg-gradient-to-r from-purple-500 to-cosmic-integration text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all">
                Get it on Google Play
              </button>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-400 mb-4">Or start your Premium trial:</p>
              <p className="text-lg text-gray-300 mb-6">7 days free, then $17/month</p>
              <button className="px-10 py-4 bg-white/10 border border-cosmic-violet/30 text-cosmic-violet rounded-xl font-semibold hover:bg-cosmic-violet/10 transition-all flex items-center gap-2 mx-auto group">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-6 mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-cosmic-violet" />
                <span className="text-xl font-bold bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
                  Inner Ascend
                </span>
              </div>

              <p className="text-gray-500 text-lg">
                Daily spiritual practice meets deep shadow work
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm mb-8 flex-wrap">
              <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Features
              </button>
              <span className="text-gray-700">•</span>
              <button onClick={() => scrollToSection('journey')} className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Curriculum
              </button>
              <span className="text-gray-700">•</span>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Pricing
              </button>
              <span className="text-gray-700">•</span>
              <Link to="/support" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Support
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/privacy" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Privacy
              </Link>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                © 2025 Inner Ascend • Being Human 101
              </p>
              <p className="text-xs text-gray-700">
                Guiding you from wounded to wise, reactive to sovereign, victim to conscious creator.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Main App with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
