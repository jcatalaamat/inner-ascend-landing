import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

function JourneyPage() {
  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-silver overflow-hidden relative">
      {/* Animated cosmic background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-warm-purple rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-warm-gold rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-cosmic-integration rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
      </div>

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
                <Sparkles className="w-8 h-8 text-warm-gold" />
                <span className="text-xl font-bold bg-gradient-to-r from-warm-gold via-warm-purple to-cosmic-integration bg-clip-text text-transparent">
                  INNER ASCEND
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link to="/journey" className="text-white font-semibold">
                  The Journey
                </Link>
                <Link to="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
                <Link to="/membership" className="text-gray-400 hover:text-white transition-colors">
                  Membership
                </Link>
                <Link to="/practice" className="text-gray-400 hover:text-white transition-colors">
                  Practice
                </Link>
                <Link to="/membership" className="px-6 py-2 bg-gradient-to-r from-warm-gold to-warm-coral rounded-full font-semibold text-cosmic-black hover:shadow-lg hover:shadow-warm-gold/50 transition-all">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-warm-gold via-warm-purple to-cosmic-integration bg-clip-text text-transparent">
                The Journey: From Healing to Teaching
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-6 font-light max-w-4xl mx-auto leading-relaxed">
              Inner Ascend is more than healing yourself. It's learning to hold space for others.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              This is the path from member to facilitator. From wounded to whole. From student to teacher.
            </p>
            <Link
              to="/membership"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transition-all"
            >
              Begin Your Journey
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </section>

        {/* Phase 1: Heal Yourself */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="text-9xl">🌱</div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-sm uppercase tracking-widest text-warm-coral mb-3 font-semibold">
                  Phase 1 • Months 0-6
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Heal Yourself
                </h2>
                <p className="text-xl text-warm-coral mb-8 font-semibold">
                  Foundation: Become Whole
                </p>

                {/* What You Learn */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">What You Learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔥</span>
                      <div>
                        <p className="text-gray-300 font-semibold">Shadow work</p>
                        <p className="text-gray-400 text-sm">Identify patterns, triggers, wounds</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🫂</span>
                      <div>
                        <p className="text-gray-300 font-semibold">Somatic healing</p>
                        <p className="text-gray-400 text-sm">Body-based trauma release</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💧</span>
                      <div>
                        <p className="text-gray-300 font-semibold">Emotional literacy</p>
                        <p className="text-gray-400 text-sm">Feel without bypassing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🌳</span>
                      <div>
                        <p className="text-gray-300 font-semibold">Ancestral healing</p>
                        <p className="text-gray-400 text-sm">Break generational patterns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">✨</span>
                      <div>
                        <p className="text-gray-300 font-semibold">Energy clearing</p>
                        <p className="text-gray-400 text-sm">Meditation, breathwork</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools You Use */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">Tools You Use</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white/5 border border-warm-coral/20 rounded-lg text-gray-300 text-sm">
                      Being Human 101 curriculum
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-coral/20 rounded-lg text-gray-300 text-sm">
                      97 healing practices library
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-coral/20 rounded-lg text-gray-300 text-sm">
                      AI healing assistant
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-coral/20 rounded-lg text-gray-300 text-sm">
                      Pair buddies
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-coral/20 rounded-lg text-gray-300 text-sm">
                      2-4 healing circles/month
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-coral/20 rounded-lg text-gray-300 text-sm">
                      Service exchange
                    </span>
                  </div>
                </div>

                {/* What You Become */}
                <div className="bg-white/5 border border-warm-coral/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-warm-coral mb-3">What You Become</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Your own healer. Self-aware and self-regulated. Ready to support others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2: Deepen Your Practice */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-cosmic-dark/30 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="text-9xl">🌿</div>
              </div>

              {/* Content */}
              <div className="flex-1 md:text-right">
                <div className="text-sm uppercase tracking-widest text-warm-purple mb-3 font-semibold">
                  Phase 2 • Months 6-12
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Deepen Your Practice
                </h2>
                <p className="text-xl text-warm-purple mb-8 font-semibold">
                  Integration: Embody the Work
                </p>

                {/* What You Learn */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">What You Learn</h3>
                  <div className="space-y-4">
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Daily practice rhythm</p>
                        <p className="text-gray-400 text-sm">Morning, practice, evening routines</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Holding your own space</p>
                        <p className="text-gray-400 text-sm">Without facilitator guidance</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Supporting peers</p>
                        <p className="text-gray-400 text-sm">Informal mentorship and witnessing</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Advanced modalities</p>
                        <p className="text-gray-400 text-sm">Deeper shadow work, somatic practices</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Building your healing voice</p>
                        <p className="text-gray-400 text-sm">How you teach and share</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools You Use */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">Tools You Use</h3>
                  <div className="flex flex-wrap gap-3 md:justify-end">
                    <span className="px-4 py-2 bg-white/5 border border-warm-purple/20 rounded-lg text-gray-300 text-sm">
                      All 97 practices
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-purple/20 rounded-lg text-gray-300 text-sm">
                      Leading pair buddy sessions
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-purple/20 rounded-lg text-gray-300 text-sm">
                      Service exchange
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-purple/20 rounded-lg text-gray-300 text-sm">
                      1-on-1 sessions
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-purple/20 rounded-lg text-gray-300 text-sm">
                      Text support
                    </span>
                  </div>
                </div>

                {/* What You Become */}
                <div className="bg-white/5 border border-warm-purple/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-warm-purple mb-3">What You Become</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Advanced practitioner. Confident in your practice. Ready to learn facilitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Learn to Hold Space */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="text-9xl">🌳</div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-sm uppercase tracking-widest text-cosmic-integration mb-3 font-semibold">
                  Phase 3 • Months 12-18
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Learn to Hold Space
                </h2>
                <p className="text-xl text-cosmic-integration mb-8 font-semibold">
                  Facilitator Training: Hold Space for Others
                </p>

                {/* What You Learn */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">What You Learn</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-gray-300 font-semibold">Circle facilitation</p>
                        <p className="text-gray-400 text-sm">How to hold group space</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-gray-300 font-semibold">Trauma-informed practices</p>
                        <p className="text-gray-400 text-sm">Safety, consent, boundaries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-gray-300 font-semibold">Co-regulation</p>
                        <p className="text-gray-400 text-sm">Nervous system attunement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-gray-300 font-semibold">Crisis support</p>
                        <p className="text-gray-400 text-sm">When someone is triggered</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-gray-300 font-semibold">Building container</p>
                        <p className="text-gray-400 text-sm">Creating safe healing space</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div>
                        <p className="text-gray-300 font-semibold">Your facilitation style</p>
                        <p className="text-gray-400 text-sm">Find your voice</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Training Format */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">Training Format</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cosmic-integration rounded-full"></div>
                      <p className="text-gray-300">Apply for facilitator training program</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cosmic-integration rounded-full"></div>
                      <p className="text-gray-300">Shadow experienced facilitators (observe circles)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cosmic-integration rounded-full"></div>
                      <p className="text-gray-300">Co-facilitate circles (with mentorship)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cosmic-integration rounded-full"></div>
                      <p className="text-gray-300">Practice holding space (supervised)</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cosmic-integration rounded-full"></div>
                      <p className="text-gray-300">Receive feedback and refinement</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cosmic-integration rounded-full"></div>
                      <p className="text-gray-300">Certification process (when ready)</p>
                    </div>
                  </div>
                </div>

                {/* What You Become */}
                <div className="bg-white/5 border border-cosmic-integration/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-cosmic-integration mb-3">What You Become</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Facilitator-in-training. Able to hold space. Ready to serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 4: Build Your Practice */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-cosmic-dark/30 to-transparent">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="text-9xl">🌟</div>
              </div>

              {/* Content */}
              <div className="flex-1 md:text-right">
                <div className="text-sm uppercase tracking-widest text-warm-gold mb-3 font-semibold">
                  Phase 4 • Month 18+
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Build Your Practice
                </h2>
                <p className="text-xl text-warm-gold mb-8 font-semibold">
                  Certified Facilitator: Nourish Your Students
                </p>

                {/* What You Can Offer */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">What You Can Offer</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Hold your own circles</p>
                        <p className="text-gray-400 text-sm">Set your pricing</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">1-on-1 sessions</p>
                        <p className="text-gray-400 text-sm">Deep mentorship</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Text support packages</p>
                        <p className="text-gray-400 text-sm">Ongoing income</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Workshops and intensives</p>
                        <p className="text-gray-400 text-sm">Special offerings</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Custom curriculum</p>
                        <p className="text-gray-400 text-sm">Your own teachings</p>
                      </div>
                    </div>
                    <div className="flex md:flex-row-reverse items-start gap-3">
                      <div className="flex-1 text-gray-300">
                        <p className="font-semibold">Service exchange</p>
                        <p className="text-gray-400 text-sm">Barter your skills</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Your Marketplace */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-200 mb-4">Your Marketplace</h3>
                  <div className="flex flex-wrap gap-3 md:justify-end">
                    <span className="px-4 py-2 bg-white/5 border border-warm-gold/20 rounded-lg text-gray-300 text-sm">
                      List services on platform
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-gold/20 rounded-lg text-gray-300 text-sm">
                      Build your student base
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-gold/20 rounded-lg text-gray-300 text-sm">
                      Keep majority of revenue
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-gold/20 rounded-lg text-gray-300 text-sm">
                      Gift economy participation
                    </span>
                    <span className="px-4 py-2 bg-white/5 border border-warm-gold/20 rounded-lg text-gray-300 text-sm">
                      Train next generation
                    </span>
                  </div>
                </div>

                {/* What You Become */}
                <div className="bg-white/5 border border-warm-gold/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-warm-gold mb-3">What You Become</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Certified facilitator. Independent practitioner. Part of the lineage. A teacher.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The App Supports Every Stage */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The App Supports Every Stage
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From your first day as a member to your first circle as a facilitator, the platform grows with you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* For Members */}
              <div className="bg-white/5 border border-warm-coral/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-warm-coral mb-6">For Members (Healing)</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📖</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Being Human 101</p>
                      <p className="text-gray-400 text-sm">Learn the foundation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🤖</span>
                    <div>
                      <p className="text-white font-semibold mb-1">AI Assistant</p>
                      <p className="text-gray-400 text-sm">Daily support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">👥</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Pair Buddies</p>
                      <p className="text-gray-400 text-sm">Practice accountability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🫂</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Healing Circles</p>
                      <p className="text-gray-400 text-sm">Experience held space</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🤝</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Service Exchange</p>
                      <p className="text-gray-400 text-sm">Receive support</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Facilitators */}
              <div className="bg-white/5 border border-warm-gold/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-warm-gold mb-6">For Facilitators (Teaching)</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📖</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Being Human 101</p>
                      <p className="text-gray-400 text-sm">Teach the curriculum</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🛠️</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Platform Tools</p>
                      <p className="text-gray-400 text-sm">Manage your students</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🫂</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Your Circles</p>
                      <p className="text-gray-400 text-sm">Hold space for groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">📅</span>
                    <div>
                      <p className="text-white font-semibold mb-1">1-on-1 Booking</p>
                      <p className="text-gray-400 text-sm">Offer sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">💰</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Marketplace</p>
                      <p className="text-gray-400 text-sm">Build your practice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">🤝</span>
                    <div>
                      <p className="text-white font-semibold mb-1">Service Exchange</p>
                      <p className="text-gray-400 text-sm">Offer your gifts</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Not Everyone Becomes a Facilitator */}
        <section className="py-32 px-6 bg-gradient-to-b from-transparent via-cosmic-dark/30 to-transparent">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Not Everyone Becomes a Facilitator
              </h2>
              <p className="text-2xl text-gray-300 italic">
                (And That's Okay)
              </p>
            </div>

            <div className="bg-white/5 border border-cosmic-integration/20 rounded-3xl p-8 md:p-12 mb-12">
              <p className="text-xl text-gray-300 leading-relaxed text-center">
                Many members stay as members forever, just healing themselves. The facilitator path is available if you want it, but there's zero pressure. Some people are here to heal. Some are here to teach. Both are sacred.
              </p>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-200 mb-12">Three Paths</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Healer Path */}
              <div className="bg-white/5 border border-warm-coral/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🌱</div>
                <h4 className="text-2xl font-bold text-warm-coral mb-4">Healer</h4>
                <p className="text-gray-300 mb-4">
                  Stay a member, focus on your own healing
                </p>
                <p className="text-gray-400 text-sm">
                  €22 or €88/month
                </p>
              </div>

              {/* Facilitator Path */}
              <div className="bg-white/5 border border-warm-gold/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">🌟</div>
                <h4 className="text-2xl font-bold text-warm-gold mb-4">Facilitator</h4>
                <p className="text-gray-300 mb-4">
                  Train to hold space, build your practice
                </p>
                <p className="text-gray-400 text-sm">
                  Earn income
                </p>
              </div>

              {/* Founding Path */}
              <div className="bg-white/5 border border-cosmic-integration/20 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✨</div>
                <h4 className="text-2xl font-bold text-cosmic-integration mb-4">Founding</h4>
                <p className="text-gray-300 mb-4">
                  Co-create the future, shape the platform
                </p>
                <p className="text-gray-400 text-sm">
                  By application
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-warm-gold via-warm-purple to-cosmic-integration bg-clip-text text-transparent">
              Ready to Begin?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Every facilitator started as a member. Every teacher started as a student. The journey begins with one step: join.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/membership"
                className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transition-all"
              >
                Start Your Journey (€22/month)
                <ArrowRight className="w-6 h-6" />
              </Link>
              <Link
                to="/membership"
                className="inline-flex items-center gap-3 px-12 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
              >
                See Membership Tiers
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-warm-gold" />
              <span className="text-xl font-bold bg-gradient-to-r from-warm-gold via-warm-purple to-cosmic-integration bg-clip-text text-transparent">
                Inner Ascend
              </span>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
              <Link to="/" className="text-gray-400 hover:text-warm-gold transition-colors">Home</Link>
              <span className="text-gray-700">•</span>
              <Link to="/journey" className="text-gray-400 hover:text-warm-gold transition-colors">The Journey</Link>
              <span className="text-gray-700">•</span>
              <Link to="/community" className="text-gray-400 hover:text-warm-gold transition-colors">Community</Link>
              <span className="text-gray-700">•</span>
              <Link to="/membership" className="text-gray-400 hover:text-warm-gold transition-colors">Membership</Link>
              <span className="text-gray-700">•</span>
              <Link to="/practice" className="text-gray-400 hover:text-warm-gold transition-colors">Practice</Link>
              <span className="text-gray-700">•</span>
              <Link to="/about" className="text-gray-400 hover:text-warm-gold transition-colors">About</Link>
              <span className="text-gray-700">•</span>
              <Link to="/support" className="text-gray-400 hover:text-warm-gold transition-colors">Support</Link>
              <span className="text-gray-700">•</span>
              <Link to="/privacy" className="text-gray-400 hover:text-warm-gold transition-colors">Privacy</Link>
            </div>

            <p className="text-sm text-gray-600">© 2025 Inner Ascend • Being Human 101</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default JourneyPage;
