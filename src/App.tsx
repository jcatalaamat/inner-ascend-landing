import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Sparkles, Check } from 'lucide-react';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import ScrollToTop from './components/ScrollToTop';
import CommunityPage from './pages/CommunityPage';
import JourneyPage from './pages/JourneyPage';
import MembershipPage from './pages/MembershipPage';
import PracticePage from './pages/PracticePage';
import AboutPage from './pages/AboutPage';
import FacilitatorsPage from './pages/FacilitatorsPage';

// Main Landing Page Component
function LandingPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
                <Link to="/journey" className="text-gray-400 hover:text-white transition-colors">
                  The Journey
                </Link>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
                <Link to="/facilitators" className="text-gray-400 hover:text-white transition-colors">
                  Facilitators
                </Link>
                <Link to="/membership" className="text-gray-400 hover:text-white transition-colors">
                  Membership
                </Link>
                <Link to="/practice" className="text-gray-400 hover:text-white transition-colors">
                  Practice
                </Link>
                <Link to="/membership" className="px-6 py-2 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cosmic-violet/50 transition-all">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* SECTION 1: HERO - Clear what it is */}
        <div className="min-h-screen flex items-center justify-center container mx-auto px-6 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-warm-gold via-cosmic-violet to-warm-purple-light bg-clip-text text-transparent">
                Heal Yourself. Learn to Teach.<br />Build Your Practice.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Join a membership community for shadow work and somatic healing. Get access to our app with curriculum, AI chat, text therapy, session booking, and service exchange—all for one monthly price.
            </p>

            <p className="text-lg text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
              Join as a member. Train as a facilitator. Earn income through the platform.<br />
              From €22/month. Cancel anytime.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/membership" className="px-10 py-4 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transition-all">
                Explore Membership
              </Link>
              <Link to="/journey" className="px-10 py-4 bg-white/5 border border-warm-gold/30 text-warm-gold rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all">
                See What's Inside
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION 2: THE PATH - Member → Facilitator → Teacher */}
        <section id="the-path" className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-cosmic-integration bg-clip-text text-transparent">
                The Path: Member → Facilitator → Teacher
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Inner Ascend is more than a healing app. It's a training school. Members can learn to hold space and build their own practice on our platform.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: Start as a Member */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-warm-coral mb-4">Start as a Member</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  €22-€88/month
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li>• Heal yourself (Being Human 101 + app features)</li>
                  <li>• Join healing circles, use AI chat, find pair buddies</li>
                  <li>• No commitment, cancel anytime</li>
                </ul>
              </div>

              {/* Card 2: Train as a Facilitator */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                <div className="text-4xl mb-4">🌳</div>
                <h3 className="text-2xl font-bold text-cosmic-integration mb-4">Train as a Facilitator</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  After 6-12 months as member
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li>• Learn to hold space (trauma-informed training)</li>
                  <li>• Co-facilitate circles with mentors</li>
                  <li>• Certification when ready</li>
                </ul>
              </div>

              {/* Card 3: Build Your Practice */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-warm-gold mb-4">Build Your Practice</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Hold your own circles on platform
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li>• Offer 1-on-1s, text support, workshops</li>
                  <li>• Earn income through marketplace</li>
                  <li>• Nourish your students</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/membership" className="inline-block px-10 py-4 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transition-all">
                Start Your Journey →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHAT'S IN THE APP - All the features */}
        <section id="whats-inside" className="py-32 px-6 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-200">
                What's Inside the App?
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4">
                The app supports you at every stage: healing as a member, training as a facilitator, and teaching your students.
              </p>
              <p className="text-base text-gray-500 max-w-2xl mx-auto">
                One monthly membership gives you access to everything
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Being Human 101 Curriculum */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-2xl mb-3">📖</div>
                <h3 className="text-lg font-bold text-warm-gold mb-2">Being Human 101</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Full trauma healing curriculum with shadow work, somatic practices, and 97 healing meditations
                </p>
              </div>

              {/* AI Healing Chat */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-all">
                <div className="text-2xl mb-3">🤖</div>
                <h3 className="text-lg font-bold text-cosmic-violet mb-2">AI Healing Assistant</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Chat with our AI trained on healing modalities for guidance anytime
                </p>
              </div>

              {/* Accountability Partners */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <div className="text-2xl mb-3">👥</div>
                <h3 className="text-lg font-bold text-warm-purple-light mb-2">Pair Buddies</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get matched with accountability partners for your healing journey
                </p>
              </div>

              {/* Live Healing Circles */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-2xl mb-3">🫂</div>
                <h3 className="text-lg font-bold text-warm-gold mb-2">Healing Circles</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Join live healing circles twice a month via Zoom
                </p>
              </div>

              {/* Session Booking */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <div className="text-2xl mb-3">📅</div>
                <h3 className="text-lg font-bold text-warm-coral mb-2">Book Sessions</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Schedule 1-on-1s with facilitators and text therapy support
                </p>
              </div>

              {/* Service Exchange */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                <div className="text-2xl mb-3">🤝</div>
                <h3 className="text-lg font-bold text-cosmic-integration mb-2">Service Exchange</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Swap skills with members—healing, coaching, design, anything
                </p>
              </div>
            </div>

            <div className="text-center mt-16 max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We built an app so you can access everything in one place. Curriculum, community, support, and exchange—all for one simple monthly price.
              </p>
              <p className="text-gray-400 text-base mb-2">
                Community €22/month • Inner Circle €88/month • Founding by application
              </p>
              <p className="text-warm-gold text-base mb-8">
                Facilitators earn income by offering their services on the platform.
              </p>
              <Link to="/membership" className="inline-block text-warm-gold hover:text-warm-coral transition-colors font-semibold">
                See all membership tiers →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY WE EXIST - Story */}
        <section id="why-we-exist" className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-8 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-warm-gold to-warm-purple bg-clip-text text-transparent">
                The Inside is the Reflection of the Outside
              </h2>

              <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
                <p>
                  We carry wounds we didn't ask for. Patterns passed down through generations. Pain frozen in our bodies. Shadow parts we've hidden even from ourselves.
                </p>

                <p className="text-warm-gold">
                  What we carry inside will be reflected back at us—until we turn inward and do the work.
                </p>

                <p>
                  This isn't casual self-help. Not 30-day challenges. This is the work of a lifetime—deep, transformative healing work held in sacred community.
                </p>

                <p className="text-gray-400 text-base mt-12 pt-8 border-t border-warm-gold/20">
                  You're not broken. You're carrying what wasn't yours to carry.<br />
                  This is where you belong.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: WHO THIS IS FOR */}
        <section id="who-this-is-for" className="py-32 px-6 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-purple to-cosmic-integration bg-clip-text text-transparent">
                For the New Paradigm
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                This is for digital nomads, consciousness shifters, and those choosing healing as a way of life
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                We're building for people who understand that healing isn't a destination—it's how you live. Who want shadow work, not surface-level affirmations. Who crave real community, not likes and followers.
              </p>

              <p className="text-warm-gold">
                The app gives you tools. The community gives you belonging. The monthly price keeps it accessible.
              </p>

              <p>
                Work through Being Human 101 at your own pace. Chat with AI when you need guidance. Book sessions when you're ready. Swap services with members. Join circles when life gets heavy.
              </p>

              <p className="text-gray-400 text-center pt-8 mt-8 border-t border-warm-gold/20">
                Everything you need, one monthly membership. No upsells. No hidden costs.
              </p>

              <div className="pt-6 text-center">
                <Link to="/journey" className="text-warm-coral hover:text-warm-gold transition-colors font-semibold">
                  Explore what's inside →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FOR FACILITATORS - Build Your Practice */}
        <section id="for-facilitators" className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-purple to-cosmic-integration bg-clip-text text-transparent">
                For Facilitators: Build Your Practice on Our Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Already a trained facilitator or becoming one? Inner Ascend is your platform to build your healing practice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Card 1: Hold Circles */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <div className="text-4xl mb-4">🫂</div>
                <h3 className="text-2xl font-bold text-warm-coral mb-4">Hold Circles</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Host your own healing circles on Zoom</li>
                  <li>• Set your own pricing</li>
                  <li>• Platform handles booking and payments</li>
                  <li>• Keep majority of revenue</li>
                </ul>
              </div>

              {/* Card 2: Offer Sessions */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-warm-purple-light mb-4">Offer Sessions</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• 1-on-1 sessions with your students</li>
                  <li>• Text support packages (ongoing income)</li>
                  <li>• Workshops and intensives</li>
                  <li>• Build long-term relationships</li>
                </ul>
              </div>

              {/* Card 3: Service Exchange */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-warm-gold mb-4">Service Exchange</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• Barter with members and other facilitators</li>
                  <li>• Offer healing, receive design, writing, etc.</li>
                  <li>• Gift economy alongside monetary income</li>
                  <li>• Community marketplace</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/membership" className="inline-block px-10 py-4 bg-gradient-to-r from-warm-purple to-cosmic-integration text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-purple/30 transition-all">
                Apply for Facilitator Training →
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: THE INVITATION - Final warm CTA */}
        <section id="invitation" className="py-32 px-6 bg-gradient-to-b from-cosmic-black via-cosmic-dark/50 to-cosmic-black">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-warm-gold via-warm-purple to-cosmic-integration bg-clip-text text-transparent">
              Are You Ready?
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              We gather twice monthly for healing circles. We hold space for each other's becoming. We do the deep work together.
            </p>

            <p className="text-lg text-warm-gold mb-12 max-w-2xl mx-auto leading-relaxed">
              This is healing as a lifestyle AND training as a path. Heal yourself. Learn to teach. Build your practice.
            </p>

            <div className="mb-12">
              <Link
                to="/membership"
                className="inline-block px-12 py-5 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transition-all"
              >
                Join the Community
              </Link>
            </div>

            <p className="text-gray-400 text-sm">
              Membership starts at €22/month
            </p>
          </div>
        </section>

        {/* SECTION 6: OPTIONAL WAITLIST (kept for functionality) */}
        <section className="py-20 px-6 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-2xl text-center">
            {!submitted ? (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-200">Stay Connected</h3>
                <p className="text-gray-400">Get updates on community events and new offerings</p>

                <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleWaitlistKeyPress}
                      placeholder="Your email"
                      className="flex-1 px-6 py-3 bg-white/5 border border-warm-gold/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-warm-gold/50 transition-all"
                      disabled={loading}
                    />
                    <button
                      type="submit"
                      disabled={!email || loading}
                      className="px-8 py-3 bg-warm-gold/20 border border-warm-gold/30 text-warm-gold rounded-xl font-semibold hover:bg-warm-gold/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Joining...' : 'Subscribe'}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-12 h-12 bg-warm-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 text-warm-gold" />
                </div>
                <h3 className="text-xl font-bold text-warm-gold">Thank you</h3>
                <p className="text-gray-400">We'll be in touch soon</p>
              </div>
            )}
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
              <Link to="/journey" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                The Journey
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/community" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Community
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/facilitators" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Facilitators
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/membership" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Membership
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/practice" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                Practice
              </Link>
              <span className="text-gray-700">•</span>
              <Link to="/about" className="text-gray-400 hover:text-cosmic-violet transition-colors">
                About
              </Link>
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/journey" element={<JourneyPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/facilitators" element={<FacilitatorsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
