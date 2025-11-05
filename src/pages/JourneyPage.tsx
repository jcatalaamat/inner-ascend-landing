import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function JourneyPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navigation currentPage="/journey" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:pt-40 lg:pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-display mb-8 leading-tight">
            The Journey: From Healing to Teaching
          </h1>
          <p className="text-h2 text-brand-muted mb-6 max-w-4xl mx-auto leading-relaxed">
            Inner Ascend is more than healing yourself. It's learning to hold space for others.
          </p>
          <p className="text-body-lg text-brand-muted/80 max-w-3xl mx-auto mb-12">
            This is the path from member to facilitator. From wounded to whole. From student to teacher.
          </p>
          <Link
            to="/membership"
            className="inline-flex items-center gap-3 px-12 py-5 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all shadow-lg"
          >
            Begin Your Journey
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      {/* Phase 1: Heal Yourself */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-accent-primary/10 rounded-3xl flex items-center justify-center">
                <span className="text-7xl">🌱</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-sm uppercase tracking-widest text-accent-primary mb-3 font-semibold">
                Phase 1 • Months 0-6
              </div>
              <h2 className="text-h1 mb-4">
                Heal Yourself
              </h2>
              <p className="text-body-lg text-accent-primary mb-8 font-semibold">
                Foundation: Become Whole
              </p>

              {/* What You Learn */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">What You Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🔥</span>
                    </div>
                    <div>
                      <p className="text-body font-semibold">Shadow work</p>
                      <p className="text-body-sm text-brand-muted">Identify patterns, triggers, wounds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🫂</span>
                    </div>
                    <div>
                      <p className="text-body font-semibold">Somatic healing</p>
                      <p className="text-body-sm text-brand-muted">Body-based trauma release</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">💧</span>
                    </div>
                    <div>
                      <p className="text-body font-semibold">Emotional literacy</p>
                      <p className="text-body-sm text-brand-muted">Feel without bypassing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🌳</span>
                    </div>
                    <div>
                      <p className="text-body font-semibold">Ancestral healing</p>
                      <p className="text-body-sm text-brand-muted">Break generational patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✨</span>
                    </div>
                    <div>
                      <p className="text-body font-semibold">Energy clearing</p>
                      <p className="text-body-sm text-brand-muted">Meditation, breathwork</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools You Use */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">Tools You Use</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Being Human 101 curriculum
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    97 healing practices library
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    AI healing assistant
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Pair buddies
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    2-4 healing circles/month
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Service exchange
                  </span>
                </div>
              </div>

              {/* What You Become */}
              <div className="bg-brand-surface border border-brand-border rounded-3xl p-6">
                <h3 className="text-h3 text-accent-primary mb-3">What You Become</h3>
                <p className="text-body text-brand-muted leading-relaxed">
                  Your own healer. Self-aware and self-regulated. Ready to support others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Deepen Your Practice */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-accent-secondary/10 rounded-3xl flex items-center justify-center">
                <span className="text-7xl">🌿</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 md:text-right">
              <div className="text-sm uppercase tracking-widest text-accent-secondary mb-3 font-semibold">
                Phase 2 • Months 6-12
              </div>
              <h2 className="text-h1 mb-4">
                Deepen Your Practice
              </h2>
              <p className="text-body-lg text-accent-secondary mb-8 font-semibold">
                Integration: Embody the Work
              </p>

              {/* What You Learn */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">What You Learn</h3>
                <div className="space-y-4">
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Daily practice rhythm</p>
                      <p className="text-body-sm text-brand-muted">Morning, practice, evening routines</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Holding your own space</p>
                      <p className="text-body-sm text-brand-muted">Without facilitator guidance</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Supporting peers</p>
                      <p className="text-body-sm text-brand-muted">Informal mentorship and witnessing</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Advanced modalities</p>
                      <p className="text-body-sm text-brand-muted">Deeper shadow work, somatic practices</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Building your healing voice</p>
                      <p className="text-body-sm text-brand-muted">How you teach and share</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools You Use */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">Tools You Use</h3>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    All 97 practices
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Leading pair buddy sessions
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Service exchange
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    1-on-1 sessions
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Text support
                  </span>
                </div>
              </div>

              {/* What You Become */}
              <div className="bg-brand-surface border border-brand-border rounded-3xl p-6">
                <h3 className="text-h3 text-accent-secondary mb-3">What You Become</h3>
                <p className="text-body text-brand-muted leading-relaxed">
                  Advanced practitioner. Confident in your practice. Ready to learn facilitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Learn to Hold Space */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-accent-gold/10 rounded-3xl flex items-center justify-center">
                <span className="text-7xl">🌳</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="text-sm uppercase tracking-widest text-accent-gold mb-3 font-semibold">
                Phase 3 • Months 12-18
              </div>
              <h2 className="text-h1 mb-4">
                Learn to Hold Space
              </h2>
              <p className="text-body-lg text-accent-gold mb-8 font-semibold">
                Facilitator Training: Hold Space for Others
              </p>

              {/* What You Learn */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">What You Learn</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-body font-semibold">Circle facilitation</p>
                      <p className="text-body-sm text-brand-muted">How to hold group space</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-body font-semibold">Trauma-informed practices</p>
                      <p className="text-body-sm text-brand-muted">Safety, consent, boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-body font-semibold">Co-regulation</p>
                      <p className="text-body-sm text-brand-muted">Nervous system attunement</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-body font-semibold">Crisis support</p>
                      <p className="text-body-sm text-brand-muted">When someone is triggered</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-body font-semibold">Building container</p>
                      <p className="text-body-sm text-brand-muted">Creating safe healing space</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div>
                      <p className="text-body font-semibold">Your facilitation style</p>
                      <p className="text-body-sm text-brand-muted">Find your voice</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Format */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">Training Format</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <p className="text-body">Apply for facilitator training program</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <p className="text-body">Shadow experienced facilitators (observe circles)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <p className="text-body">Co-facilitate circles (with mentorship)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <p className="text-body">Practice holding space (supervised)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <p className="text-body">Receive feedback and refinement</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                    <p className="text-body">Certification process (when ready)</p>
                  </div>
                </div>
              </div>

              {/* What You Become */}
              <div className="bg-brand-surface border border-brand-border rounded-3xl p-6">
                <h3 className="text-h3 text-accent-gold mb-3">What You Become</h3>
                <p className="text-body text-brand-muted leading-relaxed">
                  Facilitator-in-training. Able to hold space. Ready to serve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4: Build Your Practice */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-accent-primary/10 rounded-3xl flex items-center justify-center">
                <span className="text-7xl">🌟</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 md:text-right">
              <div className="text-sm uppercase tracking-widest text-accent-primary mb-3 font-semibold">
                Phase 4 • Month 18+
              </div>
              <h2 className="text-h1 mb-4">
                Build Your Practice
              </h2>
              <p className="text-body-lg text-accent-primary mb-8 font-semibold">
                Certified Facilitator: Nourish Your Students
              </p>

              {/* What You Can Offer */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">What You Can Offer</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Hold your own circles</p>
                      <p className="text-body-sm text-brand-muted">Set your pricing</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">1-on-1 sessions</p>
                      <p className="text-body-sm text-brand-muted">Deep mentorship</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Text support packages</p>
                      <p className="text-body-sm text-brand-muted">Ongoing income</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Workshops and intensives</p>
                      <p className="text-body-sm text-brand-muted">Special offerings</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Custom curriculum</p>
                      <p className="text-body-sm text-brand-muted">Your own teachings</p>
                    </div>
                  </div>
                  <div className="flex md:flex-row-reverse items-start gap-3">
                    <div className="flex-1">
                      <p className="text-body font-semibold">Service exchange</p>
                      <p className="text-body-sm text-brand-muted">Barter your skills</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Marketplace */}
              <div className="mb-8">
                <h3 className="text-h3 mb-4">Your Marketplace</h3>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    List services on platform
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Build your student base
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Keep majority of revenue
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Gift economy participation
                  </span>
                  <span className="px-4 py-2 bg-brand-surface border border-brand-border rounded-full text-body-sm">
                    Train next generation
                  </span>
                </div>
              </div>

              {/* What You Become */}
              <div className="bg-brand-surface border border-brand-border rounded-3xl p-6">
                <h3 className="text-h3 text-accent-primary mb-3">What You Become</h3>
                <p className="text-body text-brand-muted leading-relaxed">
                  Certified facilitator. Independent practitioner. Part of the lineage. A teacher.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The App Supports Every Stage */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              The App Supports Every Stage
            </h2>
            <p className="text-body-lg text-brand-muted max-w-3xl mx-auto">
              From your first day as a member to your first circle as a facilitator, the platform grows with you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Members */}
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-primary mb-6">For Members (Healing)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Being Human 101</p>
                    <p className="text-body-sm text-brand-muted">Learn the foundation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">AI Assistant</p>
                    <p className="text-body-sm text-brand-muted">Daily support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👥</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Pair Buddies</p>
                    <p className="text-body-sm text-brand-muted">Practice accountability</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🫂</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Healing Circles</p>
                    <p className="text-body-sm text-brand-muted">Experience held space</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Service Exchange</p>
                    <p className="text-body-sm text-brand-muted">Receive support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Facilitators */}
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 hover:shadow-2xl transition-all">
              <h3 className="text-h2 text-accent-gold mb-6">For Facilitators (Teaching)</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📖</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Being Human 101</p>
                    <p className="text-body-sm text-brand-muted">Teach the curriculum</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Platform Tools</p>
                    <p className="text-body-sm text-brand-muted">Manage your students</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🫂</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Your Circles</p>
                    <p className="text-body-sm text-brand-muted">Hold space for groups</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">1-on-1 Booking</p>
                    <p className="text-body-sm text-brand-muted">Offer sessions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Marketplace</p>
                    <p className="text-body-sm text-brand-muted">Build your practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold mb-1">Service Exchange</p>
                    <p className="text-body-sm text-brand-muted">Offer your gifts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Everyone Becomes a Facilitator */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-h1 mb-6">
              Not Everyone Becomes a Facilitator
            </h2>
            <p className="text-h2 text-brand-muted/80 italic">
              (And That's Okay)
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-body-lg text-brand-muted leading-relaxed text-center">
              Many members stay as members forever, just healing themselves. The facilitator path is available if you want it, but there's zero pressure. Some people are here to heal. Some are here to teach. Both are sacred.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-h2 mb-12">Three Paths</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Healer Path */}
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌱</span>
              </div>
              <h4 className="text-h3 text-accent-primary mb-4">Healer</h4>
              <p className="text-body text-brand-muted mb-4">
                Stay a member, focus on your own healing
              </p>
              <p className="text-body-sm text-brand-muted/70">
                €22 or €88/month
              </p>
            </div>

            {/* Facilitator Path */}
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌟</span>
              </div>
              <h4 className="text-h3 text-accent-gold mb-4">Facilitator</h4>
              <p className="text-body text-brand-muted mb-4">
                Train to hold space, build your practice
              </p>
              <p className="text-body-sm text-brand-muted/70">
                Earn income
              </p>
            </div>

            {/* Founding Path */}
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-8 text-center hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h4 className="text-h3 text-accent-secondary mb-4">Founding</h4>
              <p className="text-body text-brand-muted mb-4">
                Co-create the future, shape the platform
              </p>
              <p className="text-body-sm text-brand-muted/70">
                By application
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h1 mb-6">
            Ready to Begin?
          </h2>
          <p className="text-body-lg text-brand-muted mb-12 leading-relaxed max-w-3xl mx-auto">
            Every facilitator started as a member. Every teacher started as a student. The journey begins with one step: join.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/membership"
              className="inline-flex items-center gap-3 px-12 py-5 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all shadow-lg"
            >
              Start Your Journey (€22/month)
              <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              to="/membership"
              className="inline-flex items-center gap-3 px-12 py-5 bg-brand-surface border border-brand-border text-brand-text rounded-full font-semibold hover:bg-brand-border transition-all"
            >
              See Membership Tiers
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default JourneyPage;
