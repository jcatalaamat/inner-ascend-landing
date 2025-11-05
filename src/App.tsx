import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import SupportPage from './components/SupportPage';
import PrivacyPage from './components/PrivacyPage';
import ScrollToTop from './components/ScrollToTop';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CommunityPage from './pages/CommunityPage';
import JourneyPage from './pages/JourneyPage';
import MembershipPage from './pages/MembershipPage';
import PracticePage from './pages/PracticePage';
import AboutPage from './pages/AboutPage';
import FacilitatorsPage from './pages/FacilitatorsPage';

// Main Landing Page Component
function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navigation currentPage="/" />

      {/* SECTION 1: HERO */}
      <section className="pt-32 pb-24 px-6 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display mb-6 animate-fadeIn">
            Heal Yourself.<br />
            Learn to Teach.<br />
            Build Your Practice.
          </h1>

          <p className="text-body-lg text-brand-muted mb-8 max-w-2xl mx-auto animate-fadeIn" style={{animationDelay: '0.1s'}}>
            A membership community for shadow work and somatic healing. Access our app with curriculum, AI chat, text therapy, session booking, and service exchange—all for one monthly price.
          </p>

          <p className="text-body text-brand-muted/80 mb-12 animate-fadeIn" style={{animationDelay: '0.2s'}}>
            Join as a member. Train as a facilitator. Earn income through the platform.<br />
            From €22/month. Cancel anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <Link to="/membership" className="px-8 py-4 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all shadow-lg">
              Explore Membership
            </Link>
            <Link to="/journey" className="px-8 py-4 bg-brand-surface text-brand-text rounded-full font-semibold hover:bg-brand-border transition-all">
              See What's Inside
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE PATH */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">The Path</h2>
            <p className="text-body-lg text-brand-muted max-w-3xl mx-auto">
              Inner Ascend is more than a healing app. It's a training school. Members can learn to hold space and build their own practice on our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Start as a Member */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-h3 mb-3">Start as a Member</h3>
              <p className="text-body-lg text-accent-gold mb-6">€22-€88/month</p>
              <ul className="space-y-3 text-body text-brand-muted">
                <li>Heal yourself with Being Human 101</li>
                <li>Join healing circles, use AI chat</li>
                <li>Find pair buddies for accountability</li>
                <li>Cancel anytime, no commitment</li>
              </ul>
            </div>

            {/* Card 2: Train as a Facilitator */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-h3 mb-3">Train as a Facilitator</h3>
              <p className="text-body-lg text-accent-secondary mb-6">After 6-12 months</p>
              <ul className="space-y-3 text-body text-brand-muted">
                <li>Learn trauma-informed facilitation</li>
                <li>Co-facilitate circles with mentors</li>
                <li>Get certified when ready</li>
                <li>Build your teaching practice</li>
              </ul>
            </div>

            {/* Card 3: Build Your Practice */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-h3 mb-3">Build Your Practice</h3>
              <p className="text-body-lg text-accent-gold mb-6">Earn income</p>
              <ul className="space-y-3 text-body text-brand-muted">
                <li>Hold your own circles on platform</li>
                <li>Offer 1-on-1s and text support</li>
                <li>Set your own pricing</li>
                <li>Nourish your students</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/membership" className="inline-block px-8 py-4 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all shadow-lg">
              Start Your Journey →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT'S INSIDE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">What's Inside the App?</h2>
            <p className="text-body-lg text-brand-muted max-w-3xl mx-auto mb-4">
              The app supports you at every stage: healing as a member, training as a facilitator, and teaching your students.
            </p>
            <p className="text-body text-brand-muted/70">
              One monthly membership gives you access to everything
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-accent-gold transition-all">
              <div className="text-3xl mb-4">📖</div>
              <h3 className="text-h3 mb-3">Being Human 101</h3>
              <p className="text-body text-brand-muted">
                Full trauma healing curriculum with shadow work, somatic practices, and 97 healing meditations
              </p>
            </div>

            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-accent-primary transition-all">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-h3 mb-3">AI Healing Assistant</h3>
              <p className="text-body text-brand-muted">
                Chat with our AI trained on healing modalities for guidance anytime
              </p>
            </div>

            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-accent-secondary transition-all">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-h3 mb-3">Pair Buddies</h3>
              <p className="text-body text-brand-muted">
                Get matched with accountability partners for your healing journey
              </p>
            </div>

            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-accent-gold transition-all">
              <div className="text-3xl mb-4">🫂</div>
              <h3 className="text-h3 mb-3">Healing Circles</h3>
              <p className="text-body text-brand-muted">
                Join live healing circles twice a month via Zoom
              </p>
            </div>

            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-accent-primary transition-all">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-h3 mb-3">Book Sessions</h3>
              <p className="text-body text-brand-muted">
                Schedule 1-on-1s with facilitators and text therapy support
              </p>
            </div>

            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:border-accent-secondary transition-all">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-h3 mb-3">Service Exchange</h3>
              <p className="text-body text-brand-muted">
                Swap skills with members—healing, coaching, design, anything
              </p>
            </div>
          </div>

          <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-body-lg text-brand-muted mb-6">
              We built an app so you can access everything in one place. Curriculum, community, support, and exchange—all for one simple monthly price.
            </p>
            <p className="text-body text-brand-muted/80 mb-2">
              Community €22/month • Inner Circle €88/month • Founding by application
            </p>
            <p className="text-body text-accent-gold mb-8">
              Facilitators earn income by offering their services on the platform.
            </p>
            <Link to="/membership" className="text-accent-primary hover:text-accent-secondary transition-colors font-semibold">
              See all membership tiers →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY WE EXIST */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h1 mb-12">The Inside is the Reflection of the Outside</h2>

          <div className="space-y-6 text-body-lg text-brand-muted">
            <p>
              We carry wounds we didn't ask for. Patterns passed down through generations. Pain frozen in our bodies. Shadow parts we've hidden even from ourselves.
            </p>

            <p className="text-accent-gold">
              What we carry inside will be reflected back at us—until we turn inward and do the work.
            </p>

            <p>
              This isn't casual self-help. Not 30-day challenges. This is the work of a lifetime—deep, transformative healing work held in sacred community.
            </p>

            <p className="text-body text-brand-muted/70 mt-12 pt-8 border-t border-brand-border">
              You're not broken. You're carrying what wasn't yours to carry.<br />
              This is where you belong.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHO THIS IS FOR */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h1 mb-6">For the New Paradigm</h2>
            <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
              This is for digital nomads, consciousness shifters, and those choosing healing as a way of life
            </p>
          </div>

          <div className="space-y-6 text-body-lg text-brand-muted">
            <p>
              We're building for people who understand that healing isn't a destination—it's how you live. Who want shadow work, not surface-level affirmations. Who crave real community, not likes and followers.
            </p>

            <p className="text-accent-gold">
              The app gives you tools. The community gives you belonging. The monthly price keeps it accessible.
            </p>

            <p>
              Work through Being Human 101 at your own pace. Chat with AI when you need guidance. Book sessions when you're ready. Swap services with members. Join circles when life gets heavy.
            </p>

            <p className="text-body text-brand-muted/70 text-center pt-8 mt-8 border-t border-brand-border">
              Everything you need, one monthly membership. No upsells. No hidden costs.
            </p>

            <div className="pt-6 text-center">
              <Link to="/journey" className="text-accent-primary hover:text-accent-secondary transition-colors font-semibold">
                Explore what's inside →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FOR FACILITATORS */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">For Facilitators</h2>
            <p className="text-body-lg text-brand-muted max-w-3xl mx-auto">
              Already a trained facilitator or becoming one? Inner Ascend is your platform to build your healing practice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="text-3xl mb-4">🫂</div>
              <h3 className="text-h3 mb-6">Hold Circles</h3>
              <ul className="space-y-3 text-body text-brand-muted">
                <li>Host your own healing circles on Zoom</li>
                <li>Set your own pricing</li>
                <li>Platform handles booking and payments</li>
                <li>Keep majority of revenue</li>
              </ul>
            </div>

            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-h3 mb-6">Offer Sessions</h3>
              <ul className="space-y-3 text-body text-brand-muted">
                <li>1-on-1 sessions with your students</li>
                <li>Text support packages (ongoing income)</li>
                <li>Workshops and intensives</li>
                <li>Build long-term relationships</li>
              </ul>
            </div>

            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-h3 mb-6">Service Exchange</h3>
              <ul className="space-y-3 text-body text-brand-muted">
                <li>Barter with members and other facilitators</li>
                <li>Offer healing, receive design, writing, etc.</li>
                <li>Gift economy alongside monetary income</li>
                <li>Community marketplace</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/membership" className="inline-block px-8 py-4 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all shadow-lg">
              Apply for Facilitator Training →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE INVITATION */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h1 mb-8">Are You Ready?</h2>

          <p className="text-body-lg text-brand-muted mb-8 max-w-2xl mx-auto">
            We gather twice monthly for healing circles. We hold space for each other's becoming. We do the deep work together.
          </p>

          <p className="text-body-lg text-accent-gold mb-12 max-w-2xl mx-auto">
            This is healing as a lifestyle AND training as a path. Heal yourself. Learn to teach. Build your practice.
          </p>

          <div className="mb-12">
            <Link
              to="/membership"
              className="inline-block px-12 py-5 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all shadow-xl"
            >
              Join the Community
            </Link>
          </div>

          <p className="text-body-sm text-brand-muted/70">
            Membership starts at €22/month
          </p>
        </div>
      </section>

      {/* SECTION 8: WAITLIST */}
      <section className="py-20 px-6 bg-brand-surface/30">
        <div className="max-w-2xl mx-auto text-center">
          {!submitted ? (
            <div className="space-y-6">
              <h3 className="text-h2">Stay Connected</h3>
              <p className="text-body text-brand-muted">Get updates on community events and new offerings</p>

              <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-6 py-3 bg-brand-surface border border-brand-border rounded-full text-brand-text placeholder-brand-muted focus:outline-none focus:border-accent-primary transition-all"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={!email || loading}
                    className="px-8 py-3 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Joining...' : 'Subscribe'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-h3 text-accent-primary">Thank you</h3>
              <p className="text-body text-brand-muted">We'll be in touch soon</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
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
