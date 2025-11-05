import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function MembershipPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navigation currentPage="/membership" />

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-display font-bold mb-6 leading-tight text-brand-text">
              Join as a Member. Train as a Facilitator. Build Your Practice.
            </h1>
            <p className="text-body-lg text-brand-text mb-4 max-w-2xl mx-auto leading-relaxed">
              Inner Ascend is a training school for new paradigm healers. Start with €22/month. Heal yourself. Learn to hold space. Build your own healing practice on our platform.
            </p>
            <p className="text-body text-brand-muted max-w-2xl mx-auto">
              This isn't just a subscription. It's a lineage. A path from healing to facilitating to teaching.
            </p>
          </div>
        </section>

        {/* Membership Tiers - Entry Points to the Path */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-h1 font-bold mb-4 text-brand-text">
              Choose Your Starting Point
            </h2>
            <p className="text-body-lg text-brand-muted max-w-2xl mx-auto">
              All tiers include the same 6 app features. The difference is live support and your path to facilitator training.
            </p>
          </div>

          <div className="container mx-auto max-w-3xl space-y-8">

            {/* COMMUNITY TIER - €22 */}
            <div className="bg-brand-surface rounded-3xl p-10 border border-brand-border hover:shadow-2xl transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-h2 font-bold text-brand-text">Community</h2>
                </div>
                <p className="text-body-lg text-accent-primary font-semibold mb-4">Begin Your Healing Journey</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-h2 font-bold text-accent-primary">€22/month</span>
                  <span className="text-brand-muted">• Cancel anytime</span>
                </div>
              </div>

              <p className="text-body text-brand-text leading-relaxed mb-8">
                Start your healing journey with all 6 app features and monthly community support. The foundation of your practice begins here.
              </p>

              <div className="mb-8">
                <p className="text-body-sm font-semibold text-accent-primary mb-4">What's included:</p>
                <div className="space-y-3 text-brand-text">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">📖</span>
                    <p>Being Human 101 curriculum</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">🤖</span>
                    <p>AI healing assistant</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">👥</span>
                    <p>Pair buddies (accountability partners)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">🤝</span>
                    <p>Service exchange marketplace</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">📅</span>
                    <p>Session booking</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">📱</span>
                    <p>Mobile + web access</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">🫂</span>
                    <p>2 healing circles/month (community Zoom)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">🧘</span>
                    <p>Access to 97 healing practices</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-primary/10 flex items-center justify-center">🌱</span>
                    <p><strong>Path to facilitator training</strong> (after 6-12 months)</p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block w-full px-8 py-4 bg-accent-primary text-white rounded-full font-semibold text-center hover:shadow-2xl transition-all"
              >
                Start Your Journey →
              </a>
            </div>

            {/* INNER CIRCLE TIER - €88 */}
            <div className="bg-brand-surface rounded-3xl p-10 border border-accent-secondary hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-secondary text-white rounded-full text-xs font-bold">
                MOST POPULAR
              </div>

              <div className="mb-6 mt-2">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-h2 font-bold text-brand-text">Inner Circle</h2>
                </div>
                <p className="text-body-lg text-accent-secondary font-semibold mb-4">Deepen Your Practice</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-h2 font-bold text-accent-secondary">€88/month</span>
                  <span className="text-brand-muted">• Cancel anytime</span>
                </div>
              </div>

              <p className="text-body text-brand-text leading-relaxed mb-8">
                All app features plus intimate pod support and deeper mentorship. The accelerated path to facilitator training.
              </p>

              <div className="mb-8">
                <p className="text-body-sm font-semibold text-accent-secondary mb-4">Everything in Community, plus:</p>
                <div className="space-y-3 text-brand-text">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-secondary/10 flex items-center justify-center">🫂</span>
                    <p><strong>Private healing pod</strong> (6-8 people, intimate group)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-secondary/10 flex items-center justify-center">💬</span>
                    <p><strong>Direct text support</strong> with facilitators</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-secondary/10 flex items-center justify-center">🔄</span>
                    <p><strong>4 circles/month</strong> (2 community + 2 private pod)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-secondary/10 flex items-center justify-center">📅</span>
                    <p><strong>Priority 1-on-1 booking</strong></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-secondary/10 flex items-center justify-center">🌳</span>
                    <p><strong>Faster path to facilitator training</strong> (more mentorship)</p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block w-full px-8 py-4 bg-accent-secondary text-white rounded-full font-semibold text-center hover:shadow-2xl transition-all"
              >
                Join Inner Circle →
              </a>
            </div>

            {/* FOUNDING TIER - By Application */}
            <div className="bg-brand-surface rounded-3xl p-10 border border-accent-gold hover:shadow-2xl transition-all duration-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-gold text-white rounded-full text-xs font-bold">
                LIMITED
              </div>

              <div className="mb-6 mt-2">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-h2 font-bold text-brand-text">Founding</h2>
                </div>
                <p className="text-body-lg text-accent-gold font-semibold mb-4">Co-Create the Future</p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-h2 font-bold text-accent-gold">By Application</span>
                  <span className="text-brand-muted">• Cancel anytime</span>
                </div>
              </div>

              <p className="text-body text-brand-text leading-relaxed mb-8">
                For early supporters who want to help shape the future of Inner Ascend. Be part of the founding lineage.
              </p>

              <div className="mb-8">
                <p className="text-body-sm font-semibold text-accent-gold mb-4">Everything in Inner Circle, plus:</p>
                <div className="space-y-3 text-brand-text">
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-gold/10 flex items-center justify-center">✨</span>
                    <p>Shape the future of Inner Ascend</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-gold/10 flex items-center justify-center">💡</span>
                    <p>Direct input on features</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-gold/10 flex items-center justify-center">🌟</span>
                    <p>Founding member benefits</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-gold/10 flex items-center justify-center">💬</span>
                    <p>Private founding channel</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-2xl bg-accent-gold/10 flex items-center justify-center">🌟</span>
                    <p><strong>Priority facilitator training</strong> when eligible</p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-block w-full px-8 py-4 bg-accent-gold text-white rounded-full font-semibold text-center hover:shadow-2xl transition-all"
              >
                Apply for Founding Membership →
              </a>
            </div>
          </div>
        </section>

        {/* The Path: Member → Facilitator → Teacher */}
        <section className="py-24 px-6 bg-brand-surface">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-h1 font-bold mb-6 text-brand-text">
                The Path: Member → Facilitator → Teacher
              </h2>
              <p className="text-body-lg text-brand-muted max-w-3xl mx-auto leading-relaxed">
                Inner Ascend is not just a healing app. It's a training school and lineage for new paradigm facilitators. Here's how members grow into teachers.
              </p>
            </div>

            {/* Path Timeline */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Stage 1: Member */}
              <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-3xl flex-shrink-0">🌱</span>
                  <div>
                    <h3 className="text-h3 font-bold text-brand-text">Member</h3>
                    <p className="text-body-sm text-brand-muted">Months 0-6</p>
                  </div>
                </div>
                <div className="space-y-3 text-brand-text">
                  <p>• Join at €22 or €88/month</p>
                  <p>• Heal yourself (Being Human 101, circles, practices)</p>
                  <p>• Build your foundation (shadow work, somatic healing)</p>
                  <p>• Connect with community (buddies, service exchange)</p>
                </div>
              </div>

              {/* Stage 2: Advanced Practitioner */}
              <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-accent-secondary/10 flex items-center justify-center text-3xl flex-shrink-0">🌿</span>
                  <div>
                    <h3 className="text-h3 font-bold text-brand-text">Advanced Practitioner</h3>
                    <p className="text-body-sm text-brand-muted">Months 6-12</p>
                  </div>
                </div>
                <div className="space-y-3 text-brand-text">
                  <p>• Complete Being Human 101 curriculum</p>
                  <p>• Deepen your practice (97 meditations, daily rituals)</p>
                  <p>• Support others informally (pair buddies, service exchange)</p>
                  <p>• Express interest in facilitator training</p>
                </div>
              </div>

              {/* Stage 3: Facilitator-in-Training */}
              <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-3xl flex-shrink-0">🌳</span>
                  <div>
                    <h3 className="text-h3 font-bold text-brand-text">Facilitator-in-Training</h3>
                    <p className="text-body-sm text-brand-muted">Months 12-18</p>
                  </div>
                </div>
                <div className="space-y-3 text-brand-text">
                  <p>• Apply for facilitator training program</p>
                  <p>• Learn to hold space (circle facilitation, trauma-informed)</p>
                  <p>• Co-facilitate circles with experienced facilitators</p>
                  <p>• Build your teaching voice</p>
                </div>
              </div>

              {/* Stage 4: Certified Facilitator */}
              <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-14 h-14 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-3xl flex-shrink-0">🌟</span>
                  <div>
                    <h3 className="text-h3 font-bold text-brand-text">Certified Facilitator</h3>
                    <p className="text-body-sm text-brand-muted">Month 18+</p>
                  </div>
                </div>
                <div className="space-y-3 text-brand-text">
                  <p>• Hold your own circles on the platform</p>
                  <p>• Build your practice (1-on-1s, text support, workshops)</p>
                  <p>• Earn income through Inner Ascend marketplace</p>
                  <p>• Nourish your own students</p>
                  <p>• Become part of the teaching lineage</p>
                </div>
              </div>

            </div>

            <div className="mt-12 text-center">
              <p className="text-body-lg text-brand-muted italic">
                The path is available if you want it. There's no pressure. Many members stay as members forever, just healing themselves. But if you feel the call to serve, the door is open.
              </p>
            </div>
          </div>
        </section>

        {/* Build Your Healing Practice */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-h1 font-bold mb-6 text-brand-text">
                Build Your Healing Practice
              </h2>
              <p className="text-body-lg text-brand-muted max-w-3xl mx-auto leading-relaxed">
                When you become a facilitator, you can earn income through the platform. Here's how facilitators build sustainable healing practices.
              </p>
            </div>

            {/* Income Streams */}
            <div className="grid md:grid-cols-3 gap-8">

              {/* Marketplace */}
              <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
                <div className="text-center mb-6">
                  <span className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center text-4xl mx-auto mb-4">💰</span>
                  <h3 className="text-h3 font-bold text-accent-gold">Your Own Marketplace</h3>
                </div>
                <div className="space-y-3 text-brand-text text-center">
                  <p>List your services on Inner Ascend platform</p>
                  <p>Hold private circles (set your own pricing)</p>
                  <p>Offer 1-on-1 sessions (keep majority of revenue)</p>
                  <p>Text support packages (ongoing income)</p>
                  <p>Workshops and intensives (one-time offerings)</p>
                </div>
              </div>

              {/* Service Exchange */}
              <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
                <div className="text-center mb-6">
                  <span className="w-16 h-16 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-4xl mx-auto mb-4">🤝</span>
                  <h3 className="text-h3 font-bold text-accent-primary">Service Exchange Economy</h3>
                </div>
                <div className="space-y-3 text-brand-text text-center">
                  <p>Barter with other facilitators and members</p>
                  <p>Trade healing, coaching, design, writing, anything</p>
                  <p>Gift economy alongside monetary income</p>
                  <p>Build reciprocal relationships</p>
                </div>
              </div>

              {/* Nourish Students */}
              <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
                <div className="text-center mb-6">
                  <span className="w-16 h-16 rounded-2xl bg-accent-secondary/10 flex items-center justify-center text-4xl mx-auto mb-4">🌱</span>
                  <h3 className="text-h3 font-bold text-accent-secondary">Nourish Your Students</h3>
                </div>
                <div className="space-y-3 text-brand-text text-center">
                  <p>Build your own student base on the platform</p>
                  <p>Members can choose their primary facilitator</p>
                  <p>Long-term mentorship relationships</p>
                  <p>Create your own curriculum and offerings</p>
                </div>
              </div>

            </div>

            <div className="mt-12 text-center">
              <p className="text-body-lg text-brand-muted">
                Facilitators earn through a blend of monetary income and service exchange. You keep the majority of what you earn. We provide the platform, community, and infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Section - Lineage */}
        <section className="py-24 px-6 bg-brand-surface">
          <div className="container mx-auto max-w-3xl text-center">
            <p className="text-h2 text-brand-text leading-relaxed mb-6">
              This isn't just a membership. It's a lineage.
            </p>
            <p className="text-body-lg text-brand-muted leading-relaxed">
              Members become facilitators. Facilitators train the next generation. Together, we're building the healing infrastructure for the new paradigm. Join at €22/month. Heal. Learn. Serve.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-h1 font-bold mb-12 text-center text-brand-text">
              Common Questions
            </h2>

            <div className="space-y-6 text-brand-text">
              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">How do I become a facilitator?</h3>
                <p className="text-brand-muted">
                  Complete the Being Human 101 curriculum, participate in circles for 6-12 months, demonstrate your practice, and apply for facilitator training. Inner Circle members get priority and more mentorship.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">Can I earn income as a facilitator?</h3>
                <p className="text-brand-muted">
                  Yes. Facilitators can hold their own circles, offer 1-on-1 sessions, provide text support, run workshops, and list services on our marketplace. You keep the majority of revenue and can also participate in our service exchange economy.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">What's the difference between Community and Inner Circle?</h3>
                <p className="text-brand-muted">
                  Both include all app features. Inner Circle adds private pod support (6-8 people), text support with facilitators, more circles (4/month vs 2/month), and faster facilitator training path through deeper mentorship.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">Do I have to become a facilitator?</h3>
                <p className="text-brand-muted">
                  No. Many members stay as members forever, just healing themselves. The path is available if you want it, but there's no pressure. Join to heal. Stay if you feel called to serve.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">Can I really cancel anytime?</h3>
                <p className="text-brand-muted">
                  Yes. This is a monthly subscription with no commitment. Cancel through the app whenever you need. No questions asked.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">Can I switch tiers?</h3>
                <p className="text-brand-muted">
                  Absolutely. Upgrade or downgrade anytime through your account settings. Your journey isn't linear—neither is your membership.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">What are the 6 app features?</h3>
                <p className="text-brand-muted">
                  Being Human 101 curriculum, AI healing assistant, pair buddies (accountability partners), healing circles, service exchange marketplace, and session booking. All tiers get all 6 features—the difference is live support frequency and facilitator training path.
                </p>
              </div>

              <div>
                <h3 className="text-h3 font-semibold text-brand-text mb-2">Is this therapy?</h3>
                <p className="text-brand-muted">
                  No. Inner Ascend is a trauma-informed healing app and spiritual community. It complements therapy but doesn't replace it. If you're in crisis, please seek professional support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-brand-surface">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-h1 font-bold mb-6 text-brand-text">
              Ready to Begin?
            </h2>
            <p className="text-body-lg text-brand-text mb-4 leading-relaxed max-w-2xl mx-auto">
              Join as a member. Heal yourself. Train as a facilitator. Build your practice. Become part of the lineage.
            </p>
            <p className="text-body text-brand-muted mb-10 leading-relaxed max-w-2xl mx-auto">
              €22 to start. No commitment. The path unfolds as you walk it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="px-12 py-4 bg-accent-primary text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all"
              >
                Choose Your Starting Point
              </a>
              <Link
                to="/community"
                className="px-12 py-4 bg-brand-bg border border-brand-border text-brand-text rounded-full font-semibold text-lg hover:shadow-lg transition-all"
              >
                Meet the Community
              </Link>
            </div>
          </div>
        </section>

        <Footer />
    </div>
  );
}

export default MembershipPage;
