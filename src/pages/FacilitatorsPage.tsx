import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function FacilitatorsPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navigation currentPage="/facilitators" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display mb-6">
            Bring Your Gifts to Inner Ascend
          </h1>
          <p className="text-body-lg text-brand-muted mb-12 max-w-2xl mx-auto leading-relaxed">
            Are you a facilitator, healer, or teacher? We invite you to share your work on our platform. Offer circles, sessions, workshops, and build your practice in our community.
          </p>
          <Link to="#apply" className="inline-block px-8 py-4 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 hover:shadow-2xl transition-all">
            Apply to Collaborate →
          </Link>
        </div>
      </section>

      {/* Section 1: An Invitation to Facilitators */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              An Invitation to Facilitators
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 text-body-lg text-brand-muted mb-16">
            <p>
              Inner Ascend is building a <span className="text-accent-gold font-semibold">marketplace of healing practitioners</span>. We're not gatekeeping. We're inviting.
            </p>

            <p>
              If you hold space for others—whether you're trained in somatic work, shadow work, breathwork, energy healing, or any modality—we want to support you in building your practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
            {/* What We Offer */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-gold mb-6">What We Offer</h3>
              <ul className="space-y-4 text-body text-brand-muted">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Platform to host your circles, sessions, and workshops</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Built-in community of seekers (our members)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Payment processing and booking infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Your own profile and offerings page</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Service exchange marketplace (gift economy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Support from our founding team</span>
                </li>
              </ul>
            </div>

            {/* What We Ask */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-secondary mb-6">What We Ask</h3>
              <ul className="space-y-4 text-body text-brand-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-0.5">•</span>
                  <span>Trauma-informed approach (consent, boundaries, safety)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-0.5">•</span>
                  <span>Alignment with our values (non-hierarchical, no spiritual bypassing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-0.5">•</span>
                  <span>Commitment to showing up consistently</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-0.5">•</span>
                  <span>Willingness to be part of a lineage (not just extracting)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What You Can Offer */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              What You Can Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hold Healing Circles */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🫂
              </div>
              <h3 className="text-h3 text-accent-primary mb-4">Hold Healing Circles</h3>
              <ul className="space-y-3 text-body-sm text-brand-muted leading-relaxed">
                <li>• Host your own circles on Zoom through our platform</li>
                <li>• Weekly, bi-weekly, or monthly</li>
                <li>• Set your own pricing or offer by donation</li>
                <li>• We handle booking, payments, and tech</li>
                <li>• Keep majority of revenue</li>
              </ul>
            </div>

            {/* Offer 1-on-1 Sessions */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                📅
              </div>
              <h3 className="text-h3 text-accent-secondary mb-4">Offer 1-on-1 Sessions</h3>
              <ul className="space-y-3 text-body-sm text-brand-muted leading-relaxed">
                <li>• List your 1-on-1 offerings on our marketplace</li>
                <li>• Deep dive sessions, ongoing mentorship, single sessions</li>
                <li>• Text support packages (asynchronous support)</li>
                <li>• Set your own rates</li>
                <li>• Build your client base in our community</li>
              </ul>
            </div>

            {/* Teach Workshops & Intensives */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                ✨
              </div>
              <h3 className="text-h3 text-accent-gold mb-4">Teach Workshops & Intensives</h3>
              <ul className="space-y-3 text-body-sm text-brand-muted leading-relaxed">
                <li>• Weekend intensives, multi-week courses</li>
                <li>• Special topic workshops (rage work, grief, intimacy, etc.)</li>
                <li>• One-time or recurring offerings</li>
                <li>• Bring your curriculum to our platform</li>
                <li>• Collaborate with other facilitators</li>
              </ul>
            </div>

            {/* Service Exchange */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-h3 text-accent-primary mb-4">Service Exchange</h3>
              <ul className="space-y-3 text-body-sm text-brand-muted leading-relaxed">
                <li>• Offer your gifts in our barter marketplace</li>
                <li>• Trade healing for design, writing, coaching, anything</li>
                <li>• Gift economy alongside monetary income</li>
                <li>• Build reciprocal relationships with members</li>
              </ul>
            </div>

            {/* Co-Create Content */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                📖
              </div>
              <h3 className="text-h3 text-accent-secondary mb-4">Co-Create Content</h3>
              <ul className="space-y-3 text-body-sm text-brand-muted leading-relaxed">
                <li>• Contribute to Being Human 101 curriculum</li>
                <li>• Guest teach in community circles</li>
                <li>• Create meditations for our 97 practices library</li>
                <li>• Write articles or guides for members</li>
              </ul>
            </div>

            {/* Guest Facilitator */}
            <div className="bg-brand-bg rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🌟
              </div>
              <h3 className="text-h3 text-accent-gold mb-4">Guest Facilitator</h3>
              <ul className="space-y-3 text-body-sm text-brand-muted leading-relaxed">
                <li>• Not ready to commit full-time? Come as a guest</li>
                <li>• Teach a single circle or workshop</li>
                <li>• Test the community, see if it's a fit</li>
                <li>• No long-term commitment required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Who We're Looking For */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              We're Looking for Real Humans Doing Real Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Ideal Collaborators */}
            <div className="space-y-6">
              <h3 className="text-h2 text-accent-primary mb-6">Ideal Collaborators</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-accent-primary text-sm">Trauma-informed practitioners</span>
                <span className="px-4 py-2 bg-accent-secondary/10 border border-accent-secondary/30 rounded-full text-accent-secondary text-sm">Somatic healers</span>
                <span className="px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm">Shadow work facilitators</span>
                <span className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-accent-primary text-sm">Breathwork guides</span>
                <span className="px-4 py-2 bg-accent-secondary/10 border border-accent-secondary/30 rounded-full text-accent-secondary text-sm">Energy workers</span>
                <span className="px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm">Grief & rage workers</span>
                <span className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-accent-primary text-sm">Intimacy facilitators</span>
                <span className="px-4 py-2 bg-accent-secondary/10 border border-accent-secondary/30 rounded-full text-accent-secondary text-sm">Ancestral healers</span>
                <span className="px-4 py-2 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm">Plant medicine integration coaches</span>
                <span className="px-4 py-2 bg-accent-primary/10 border border-accent-primary/30 rounded-full text-accent-primary text-sm">Embodiment teachers</span>
              </div>
            </div>

            {/* What We Value */}
            <div className="space-y-6">
              <h3 className="text-h2 text-accent-gold mb-6">What We Value</h3>
              <ul className="space-y-4 text-body text-brand-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Real lived experience (you've done your own healing work)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Humility (you're still learning, not a guru)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Cultural humility (aware of appropriation, power dynamics)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Anti-capitalism mindset (gift economy, not extraction)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>Non-hierarchical approach (we're peers, not experts)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" />
                  <span>No spiritual bypassing (toxic positivity not welcome)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Current Collaborators */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-body-sm text-brand-muted/70 italic mb-8">(More facilitators joining every month. Apply to be featured here.)</p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              Meet Our Facilitator Community
            </h2>
            <p className="text-body-lg text-brand-muted">
              These practitioners are already sharing their gifts on Inner Ascend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Facilitator Card 1 */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="bg-brand-surface rounded-2xl aspect-square flex items-center justify-center mb-6 border border-brand-border">
                <div className="text-center">
                  <div className="text-5xl mb-2">👤</div>
                  <p className="text-xs text-brand-muted">Photo</p>
                </div>
              </div>

              <h3 className="text-h3 mb-2">Sarah Martinez</h3>
              <p className="text-accent-primary font-semibold text-sm mb-6">Somatic Trauma Practitioner</p>

              <div className="mb-6">
                <p className="text-body-sm font-semibold text-brand-muted mb-2">Offers:</p>
                <ul className="space-y-1 text-body-sm text-brand-muted">
                  <li>• Weekly somatic healing circles</li>
                  <li>• 1-on-1 trauma release sessions</li>
                  <li>• Rage work workshops</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-brand-border">
                <p className="text-body-sm text-brand-muted italic leading-relaxed">
                  "Inner Ascend gave me the platform I needed to build my practice without building my own website, payment system, and community from scratch. I just show up and hold space."
                </p>
              </div>
            </div>

            {/* Facilitator Card 2 */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="bg-brand-surface rounded-2xl aspect-square flex items-center justify-center mb-6 border border-brand-border">
                <div className="text-center">
                  <div className="text-5xl mb-2">👤</div>
                  <p className="text-xs text-brand-muted">Photo</p>
                </div>
              </div>

              <h3 className="text-h3 mb-2">Marcus Chen</h3>
              <p className="text-accent-secondary font-semibold text-sm mb-6">Shadow Work Facilitator</p>

              <div className="mb-6">
                <p className="text-body-sm font-semibold text-brand-muted mb-2">Offers:</p>
                <ul className="space-y-1 text-body-sm text-brand-muted">
                  <li>• Bi-weekly shadow integration circles</li>
                  <li>• 1-on-1 deep dive sessions</li>
                  <li>• Men's shadow work intensives</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-brand-border">
                <p className="text-body-sm text-brand-muted italic leading-relaxed">
                  "I was facilitating independently for years. Joining Inner Ascend connected me with a community who actually values this work. I'm not alone anymore."
                </p>
              </div>
            </div>

            {/* Facilitator Card 3 */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="bg-brand-surface rounded-2xl aspect-square flex items-center justify-center mb-6 border border-brand-border">
                <div className="text-center">
                  <div className="text-5xl mb-2">👤</div>
                  <p className="text-xs text-brand-muted">Photo</p>
                </div>
              </div>

              <h3 className="text-h3 mb-2">River Thompson</h3>
              <p className="text-accent-gold font-semibold text-sm mb-6">Breathwork & Energy Healing</p>

              <div className="mb-6">
                <p className="text-body-sm font-semibold text-brand-muted mb-2">Offers:</p>
                <ul className="space-y-1 text-body-sm text-brand-muted">
                  <li>• Monthly breathwork journeys</li>
                  <li>• Energy clearing sessions</li>
                  <li>• Plant medicine integration support</li>
                </ul>
              </div>

              <div className="pt-6 border-t border-brand-border">
                <p className="text-body-sm text-brand-muted italic leading-relaxed">
                  "The gift economy marketplace changed my life. I can barter my healing sessions for design work, writing, tech support. This is the reciprocity I've been craving."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {/* Step 1: Apply */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                📝
              </div>
              <h3 className="text-h3 text-accent-primary mb-4">Step 1: Apply</h3>
              <ul className="space-y-3 text-body text-brand-muted leading-relaxed">
                <li>• Fill out collaboration application</li>
                <li>• Tell us about your modalities and experience</li>
                <li>• Share what you want to offer</li>
                <li>• No pressure, just exploration</li>
              </ul>
            </div>

            {/* Step 2: Interview */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                💬
              </div>
              <h3 className="text-h3 text-accent-secondary mb-4">Step 2: Interview</h3>
              <ul className="space-y-3 text-body text-brand-muted leading-relaxed">
                <li>• 30-minute call with founding team</li>
                <li>• Discuss alignment, offerings, logistics</li>
                <li>• Answer your questions about platform</li>
                <li>• See if we're a mutual fit</li>
              </ul>
            </div>

            {/* Step 3: Launch */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🚀
              </div>
              <h3 className="text-h3 text-accent-gold mb-4">Step 3: Launch</h3>
              <ul className="space-y-3 text-body text-brand-muted leading-relaxed">
                <li>• Create your facilitator profile</li>
                <li>• List your offerings (circles, sessions, workshops)</li>
                <li>• Set your pricing or donation model</li>
                <li>• Start building your practice in our community</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-body text-brand-muted/70 italic">
              Timeline: Most facilitators launch within 2-4 weeks of applying.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Revenue & Economics */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              You Keep the Majority of What You Earn
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {/* Revenue Split */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-gold mb-6">Revenue Split</h3>
              <ul className="space-y-4 text-body text-brand-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">•</span>
                  <span><span className="font-bold text-brand-text">Your offerings:</span> You keep 70-80% of revenue (depending on offering type)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">•</span>
                  <span><span className="font-bold text-brand-text">Platform fee:</span> 20-30% covers payment processing, tech infrastructure, community support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">•</span>
                  <span><span className="font-bold text-brand-text">Service exchange:</span> 100% yours (no fee for gift economy)</span>
                </li>
              </ul>
            </div>

            {/* No Upfront Costs */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-secondary mb-6">No Upfront Costs</h3>
              <ul className="space-y-4 text-body text-brand-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-secondary mt-1 flex-shrink-0" />
                  <span>No listing fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-secondary mt-1 flex-shrink-0" />
                  <span>No monthly platform fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-secondary mt-1 flex-shrink-0" />
                  <span>No hidden charges</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-secondary mt-1 flex-shrink-0" />
                  <span>You only pay when you earn</span>
                </li>
              </ul>
            </div>

            {/* Example Earnings */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-primary mb-6">Example Earnings</h3>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Hold 2 circles/week at €20/person with 8 people = €640/week gross</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Offer 4 sessions/week at €80/session = €320/week gross</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="font-bold text-brand-text">Total: ~€960/week = ~€3,840/month potential</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="font-bold text-accent-gold">After platform fee (25%): ~€2,880/month take-home</span>
                </div>
              </div>
              <p className="text-body-sm text-brand-muted/70 italic mt-6 pt-6 border-t border-brand-border">
                Note: These are examples. Your actual earnings depend on your offerings, pricing, and consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Why Collaborate with Inner Ascend? */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              Why Collaborate with Inner Ascend?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Built-In Community */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🌍
              </div>
              <h3 className="text-h3 text-accent-primary mb-4">Built-In Community</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Our members are actively seeking facilitators. You don't need to build an audience from scratch.
              </p>
            </div>

            {/* Platform Infrastructure */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                ⚙️
              </div>
              <h3 className="text-h3 text-accent-secondary mb-4">Platform Infrastructure</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                We handle payment processing, booking systems, Zoom integration, and tech support.
              </p>
            </div>

            {/* Gift Economy + Money */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🎁
              </div>
              <h3 className="text-h3 text-accent-gold mb-4">Gift Economy + Money</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Offer services for money AND participate in our barter marketplace.
              </p>
            </div>

            {/* Peer Support */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🤝
              </div>
              <h3 className="text-h3 text-accent-primary mb-4">Peer Support</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                You're not alone. Co-facilitate with other practitioners, share resources, get support.
              </p>
            </div>

            {/* No Gatekeeping */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🚪
              </div>
              <h3 className="text-h3 text-accent-secondary mb-4">No Gatekeeping</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                We don't require expensive certifications. We care about your lived experience and practice.
              </p>
            </div>

            {/* Lineage Building */}
            <div className="bg-brand-surface rounded-2xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center text-2xl mb-4">
                🌳
              </div>
              <h3 className="text-h3 text-accent-gold mb-4">Lineage Building</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Join a community building the healing infrastructure for the new paradigm. This is long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Values & Agreements */}
      <section className="py-24 px-6 bg-brand-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              What We Ask from Facilitators
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Non-negotiables */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-gold mb-6">Non-negotiables</h3>
              <ul className="space-y-4 text-brand-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-text">Trauma-informed practices</span>
                    <p className="text-body-sm text-brand-muted">Understand consent, boundaries, and nervous system regulation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-text">Cultural humility</span>
                    <p className="text-body-sm text-brand-muted">Aware of power dynamics, appropriation, and privilege</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-text">No bypassing</span>
                    <p className="text-body-sm text-brand-muted">Real shadow work, not toxic positivity or "love and light"</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-text">Non-hierarchical</span>
                    <p className="text-body-sm text-brand-muted">We're peers in healing, not gurus with followers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-text">Consistent showing up</span>
                    <p className="text-body-sm text-brand-muted">Honor your commitments to the community</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-gold mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-brand-text">Ongoing healing</span>
                    <p className="text-body-sm text-brand-muted">You're still doing your own work (we all are)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Not Allowed */}
            <div className="bg-brand-bg rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-secondary mb-6">Not Allowed</h3>
              <ul className="space-y-4 text-brand-muted leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl mt-1">❌</span>
                  <div>
                    <span className="font-bold text-brand-text">Plant medicine ceremonies on platform</span>
                    <p className="text-body-sm text-brand-muted">(integration support is fine)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl mt-1">❌</span>
                  <div>
                    <span className="font-bold text-brand-text">Medical diagnoses or prescribing</span>
                    <p className="text-body-sm text-brand-muted">(we're not doctors)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl mt-1">❌</span>
                  <div>
                    <span className="font-bold text-brand-text">Financial advice or business coaching</span>
                    <p className="text-body-sm text-brand-muted">(unless that's your modality)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl mt-1">❌</span>
                  <div>
                    <span className="font-bold text-brand-text">MLM or pyramid schemes</span>
                    <p className="text-body-sm text-brand-muted">(no recruiting members into your other businesses)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 text-xl mt-1">❌</span>
                  <div>
                    <span className="font-bold text-brand-text">Spiritual bypassing or victim-blaming</span>
                    <p className="text-body-sm text-brand-muted">(real healing, not toxic positivity)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ for Facilitators */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              FAQ for Facilitators
            </h2>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h3 mb-4">Do I need certifications?</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Not necessarily. We care more about your lived experience and practice than credentials. If you've done deep healing work and feel called to hold space, apply. We'll assess alignment during the interview.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h3 mb-4">Can I offer my work on other platforms too?</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Yes! We're not exclusive. You can teach on other platforms, have your own website, etc. We just ask that you honor your commitments to Inner Ascend circles/sessions.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h3 mb-4">What if I'm new to facilitating?</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                That's okay! Many of our facilitators are newly trained or self-taught. We offer mentorship and support. You can start by co-facilitating with experienced practitioners.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h3 mb-4">Can I collaborate short-term?</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Yes. You can come as a guest facilitator for one circle or workshop. No long-term commitment required to start.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h3 mb-4">How do I get paid?</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Through the platform. We handle all payment processing via Stripe. You receive payouts monthly (or bi-weekly once you're established).
              </p>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <h3 className="text-h3 mb-4">What if I want to offer free/donation-based circles?</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                That's welcome! You can set your offerings to "donation-based" or "free for members." We support the gift economy model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-24 px-6 bg-brand-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-display mb-8">
            Ready to Bring Your Gifts?
          </h2>
          <p className="text-body-lg text-brand-muted mb-12 leading-relaxed">
            We're building a marketplace of healing practitioners. If you hold space for others and want to build your practice in community, we want to hear from you.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="mailto:facilitators@inner-ascend.com?subject=Facilitator Application"
              className="inline-block px-8 py-4 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 hover:shadow-2xl transition-all"
            >
              Apply to Collaborate →
            </a>

            <a
              href="mailto:facilitators@inner-ascend.com?subject=Question about Facilitator Program"
              className="inline-block px-8 py-4 bg-brand-bg border-2 border-accent-primary text-brand-text rounded-full font-semibold hover:bg-brand-bg/80 transition-all"
            >
              Questions? Email Us
            </a>
          </div>

          <p className="text-body text-brand-muted mb-12">
            Email us at <a href="mailto:facilitators@inner-ascend.com" className="text-accent-primary hover:text-accent-gold transition-colors underline">facilitators@inner-ascend.com</a>
          </p>

          <p className="text-body-sm text-brand-muted/70 italic">
            Applications reviewed on a rolling basis. We respond within 1 week.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FacilitatorsPage;
