import { Link } from 'react-router-dom';
import { Sparkles, Check } from 'lucide-react';

function FacilitatorsPage() {
  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-silver overflow-hidden relative">
      {/* Animated cosmic background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cosmic-violet rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
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

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-warm-gold via-warm-coral to-warm-purple bg-clip-text text-transparent">
                Bring Your Gifts to Inner Ascend
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed mb-12">
              Are you a facilitator, healer, or teacher? We invite you to share your work on our platform. Offer circles, sessions, workshops, and build your practice in our community.
            </p>
            <Link to="#apply" className="inline-block px-12 py-5 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transition-all">
              Apply to Collaborate →
            </Link>
          </div>
        </section>

        {/* Section 1: An Invitation to Facilitators */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-warm-coral bg-clip-text text-transparent">
                An Invitation to Facilitators
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-300 leading-relaxed mb-16">
              <p>
                Inner Ascend is building a <span className="text-warm-gold font-semibold">marketplace of healing practitioners</span>. We're not gatekeeping. We're inviting.
              </p>

              <p>
                If you hold space for others—whether you're trained in somatic work, shadow work, breathwork, energy healing, or any modality—we want to support you in building your practice.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              {/* What We Offer */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-warm-coral rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                  <h3 className="text-2xl font-bold text-warm-gold mb-6">What We Offer</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">✓</span>
                      <span>Platform to host your circles, sessions, and workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">✓</span>
                      <span>Built-in community of seekers (our members)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">✓</span>
                      <span>Payment processing and booking infrastructure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">✓</span>
                      <span>Your own profile and offerings page</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">✓</span>
                      <span>Service exchange marketplace (gift economy)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">✓</span>
                      <span>Support from our founding team</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* What We Ask */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                  <h3 className="text-2xl font-bold text-warm-purple mb-6">What We Ask</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Trauma-informed approach (consent, boundaries, safety)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Alignment with our values (non-hierarchical, no spiritual bypassing)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Commitment to showing up consistently</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Willingness to be part of a lineage (not just extracting)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: What You Can Offer */}
        <section className="py-32 px-4 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-coral to-warm-purple bg-clip-text text-transparent">
                What You Can Offer
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Hold Healing Circles */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <div className="text-4xl mb-4">🫂</div>
                <h3 className="text-2xl font-bold text-warm-coral mb-4">Hold Healing Circles</h3>
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <li>• Host your own circles on Zoom through our platform</li>
                  <li>• Weekly, bi-weekly, or monthly</li>
                  <li>• Set your own pricing or offer by donation</li>
                  <li>• We handle booking, payments, and tech</li>
                  <li>• Keep majority of revenue</li>
                </ul>
              </div>

              {/* Offer 1-on-1 Sessions */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-2xl font-bold text-warm-purple mb-4">Offer 1-on-1 Sessions</h3>
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <li>• List your 1-on-1 offerings on our marketplace</li>
                  <li>• Deep dive sessions, ongoing mentorship, single sessions</li>
                  <li>• Text support packages (asynchronous support)</li>
                  <li>• Set your own rates</li>
                  <li>• Build your client base in our community</li>
                </ul>
              </div>

              {/* Teach Workshops & Intensives */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-all">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-2xl font-bold text-cosmic-violet mb-4">Teach Workshops & Intensives</h3>
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <li>• Weekend intensives, multi-week courses</li>
                  <li>• Special topic workshops (rage work, grief, intimacy, etc.)</li>
                  <li>• One-time or recurring offerings</li>
                  <li>• Bring your curriculum to our platform</li>
                  <li>• Collaborate with other facilitators</li>
                </ul>
              </div>

              {/* Service Exchange */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-warm-gold mb-4">Service Exchange</h3>
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <li>• Offer your gifts in our barter marketplace</li>
                  <li>• Trade healing for design, writing, coaching, anything</li>
                  <li>• Gift economy alongside monetary income</li>
                  <li>• Build reciprocal relationships with members</li>
                </ul>
              </div>

              {/* Co-Create Content */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-2xl font-bold text-cosmic-integration mb-4">Co-Create Content</h3>
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                  <li>• Contribute to Being Human 101 curriculum</li>
                  <li>• Guest teach in community circles</li>
                  <li>• Create meditations for our 97 practices library</li>
                  <li>• Write articles or guides for members</li>
                </ul>
              </div>

              {/* Guest Facilitator */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-sage/20 hover:border-warm-sage/40 transition-all">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-2xl font-bold text-warm-sage mb-4">Guest Facilitator</h3>
                <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
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
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-warm-purple bg-clip-text text-transparent">
                We're Looking for Real Humans Doing Real Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
              {/* Ideal Collaborators */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-warm-coral mb-6">Ideal Collaborators</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-warm-coral/10 border border-warm-coral/30 rounded-full text-warm-coral text-sm">Trauma-informed practitioners</span>
                  <span className="px-4 py-2 bg-warm-purple/10 border border-warm-purple/30 rounded-full text-warm-purple text-sm">Somatic healers</span>
                  <span className="px-4 py-2 bg-warm-gold/10 border border-warm-gold/30 rounded-full text-warm-gold text-sm">Shadow work facilitators</span>
                  <span className="px-4 py-2 bg-cosmic-violet/10 border border-cosmic-violet/30 rounded-full text-cosmic-violet text-sm">Breathwork guides</span>
                  <span className="px-4 py-2 bg-cosmic-integration/10 border border-cosmic-integration/30 rounded-full text-cosmic-integration text-sm">Energy workers</span>
                  <span className="px-4 py-2 bg-warm-coral/10 border border-warm-coral/30 rounded-full text-warm-coral text-sm">Grief & rage workers</span>
                  <span className="px-4 py-2 bg-warm-purple/10 border border-warm-purple/30 rounded-full text-warm-purple text-sm">Intimacy facilitators</span>
                  <span className="px-4 py-2 bg-warm-gold/10 border border-warm-gold/30 rounded-full text-warm-gold text-sm">Ancestral healers</span>
                  <span className="px-4 py-2 bg-cosmic-violet/10 border border-cosmic-violet/30 rounded-full text-cosmic-violet text-sm">Plant medicine integration coaches</span>
                  <span className="px-4 py-2 bg-cosmic-integration/10 border border-cosmic-integration/30 rounded-full text-cosmic-integration text-sm">Embodiment teachers</span>
                </div>
              </div>

              {/* What We Value */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-warm-gold mb-6">What We Value</h3>
                <ul className="space-y-4 text-gray-300 text-lg leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Real lived experience (you've done your own healing work)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Humility (you're still learning, not a guru)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Cultural humility (aware of appropriation, power dynamics)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Anti-capitalism mindset (gift economy, not extraction)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Non-hierarchical approach (we're peers, not experts)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>No spiritual bypassing (toxic positivity not welcome)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Current Collaborators */}
        <section className="py-32 px-4 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-400 italic mb-8">(More facilitators joining every month. Apply to be featured here.)</p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-purple to-cosmic-violet bg-clip-text text-transparent">
                Meet Our Facilitator Community
              </h2>
              <p className="text-xl text-gray-300">
                These practitioners are already sharing their gifts on Inner Ascend.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Facilitator Card 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center mb-6 border border-warm-coral/20">
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs text-gray-500">Photo</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Sarah Martinez</h3>
                  <p className="text-warm-coral font-semibold text-sm mb-6">Somatic Trauma Practitioner</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Offers:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Weekly somatic healing circles</li>
                      <li>• 1-on-1 trauma release sessions</li>
                      <li>• Rage work workshops</li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-300 italic leading-relaxed">
                      "Inner Ascend gave me the platform I needed to build my practice without building my own website, payment system, and community from scratch. I just show up and hold space."
                    </p>
                  </div>
                </div>
              </div>

              {/* Facilitator Card 2 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                  <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center mb-6 border border-warm-purple/20">
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs text-gray-500">Photo</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Marcus Chen</h3>
                  <p className="text-warm-purple font-semibold text-sm mb-6">Shadow Work Facilitator</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Offers:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Bi-weekly shadow integration circles</li>
                      <li>• 1-on-1 deep dive sessions</li>
                      <li>• Men's shadow work intensives</li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-300 italic leading-relaxed">
                      "I was facilitating independently for years. Joining Inner Ascend connected me with a community who actually values this work. I'm not alone anymore."
                    </p>
                  </div>
                </div>
              </div>

              {/* Facilitator Card 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-warm-sage rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                  <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center mb-6 border border-cosmic-integration/20">
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs text-gray-500">Photo</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">River Thompson</h3>
                  <p className="text-cosmic-integration font-semibold text-sm mb-6">Breathwork & Energy Healing</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Offers:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Monthly breathwork journeys</li>
                      <li>• Energy clearing sessions</li>
                      <li>• Plant medicine integration support</li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-300 italic leading-relaxed">
                      "The gift economy marketplace changed my life. I can barter my healing sessions for design work, writing, tech support. This is the reciprocity I've been craving."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: How It Works */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-cosmic-integration bg-clip-text text-transparent">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {/* Step 1: Apply */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  <div className="text-5xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-warm-coral mb-4">Step 1: Apply</h3>
                  <ul className="space-y-3 text-gray-300 leading-relaxed">
                    <li>• Fill out collaboration application</li>
                    <li>• Tell us about your modalities and experience</li>
                    <li>• Share what you want to offer</li>
                    <li>• No pressure, just exploration</li>
                  </ul>
                </div>
              </div>

              {/* Step 2: Interview */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                  <div className="text-5xl mb-4">💬</div>
                  <h3 className="text-2xl font-bold text-warm-purple mb-4">Step 2: Interview</h3>
                  <ul className="space-y-3 text-gray-300 leading-relaxed">
                    <li>• 30-minute call with founding team</li>
                    <li>• Discuss alignment, offerings, logistics</li>
                    <li>• Answer your questions about platform</li>
                    <li>• See if we're a mutual fit</li>
                  </ul>
                </div>
              </div>

              {/* Step 3: Launch */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-warm-gold mb-4">Step 3: Launch</h3>
                  <ul className="space-y-3 text-gray-300 leading-relaxed">
                    <li>• Create your facilitator profile</li>
                    <li>• List your offerings (circles, sessions, workshops)</li>
                    <li>• Set your pricing or donation model</li>
                    <li>• Start building your practice in our community</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-400 italic">
                Timeline: Most facilitators launch within 2-4 weeks of applying.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Revenue & Economics */}
        <section className="py-32 px-4 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-warm-coral bg-clip-text text-transparent">
                You Keep the Majority of What You Earn
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 mb-16">
              {/* Revenue Split */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-warm-coral rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20">
                  <h3 className="text-2xl font-bold text-warm-gold mb-6">Revenue Split</h3>
                  <ul className="space-y-4 text-lg text-gray-300 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">•</span>
                      <span><span className="font-bold text-white">Your offerings:</span> You keep 70-80% of revenue (depending on offering type)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">•</span>
                      <span><span className="font-bold text-white">Platform fee:</span> 20-30% covers payment processing, tech infrastructure, community support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-warm-gold mt-1">•</span>
                      <span><span className="font-bold text-white">Service exchange:</span> 100% yours (no fee for gift economy)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* No Upfront Costs */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20">
                  <h3 className="text-2xl font-bold text-warm-purple mb-6">No Upfront Costs</h3>
                  <ul className="space-y-4 text-lg text-gray-300 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-purple mt-1 flex-shrink-0" />
                      <span>No listing fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-purple mt-1 flex-shrink-0" />
                      <span>No monthly platform fees</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-purple mt-1 flex-shrink-0" />
                      <span>No hidden charges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-purple mt-1 flex-shrink-0" />
                      <span>You only pay when you earn</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Example Earnings */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-warm-sage rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-cosmic-integration/20">
                  <h3 className="text-2xl font-bold text-cosmic-integration mb-6">Example Earnings</h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="text-cosmic-integration mt-1">•</span>
                      <span>Hold 2 circles/week at €20/person with 8 people = €640/week gross</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cosmic-integration mt-1">•</span>
                      <span>Offer 4 sessions/week at €80/session = €320/week gross</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cosmic-integration mt-1">•</span>
                      <span className="font-bold text-white">Total: ~€960/week = ~€3,840/month potential</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-cosmic-integration mt-1">•</span>
                      <span className="font-bold text-warm-gold">After platform fee (25%): ~€2,880/month take-home</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 italic mt-6 pt-6 border-t border-white/10">
                    Note: These are examples. Your actual earnings depend on your offerings, pricing, and consistency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Why Collaborate with Inner Ascend? */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-purple to-cosmic-violet bg-clip-text text-transparent">
                Why Collaborate with Inner Ascend?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Built-In Community */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-warm-coral mb-4">Built-In Community</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our members are actively seeking facilitators. You don't need to build an audience from scratch.
                </p>
              </div>

              {/* Platform Infrastructure */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-warm-purple mb-4">Platform Infrastructure</h3>
                <p className="text-gray-300 leading-relaxed">
                  We handle payment processing, booking systems, Zoom integration, and tech support.
                </p>
              </div>

              {/* Gift Economy + Money */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold text-warm-gold mb-4">Gift Economy + Money</h3>
                <p className="text-gray-300 leading-relaxed">
                  Offer services for money AND participate in our barter marketplace.
                </p>
              </div>

              {/* Peer Support */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-cosmic-integration mb-4">Peer Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  You're not alone. Co-facilitate with other practitioners, share resources, get support.
                </p>
              </div>

              {/* No Gatekeeping */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-warm-sage/20 hover:border-warm-sage/40 transition-all">
                <div className="text-4xl mb-4">🚪</div>
                <h3 className="text-xl font-bold text-warm-sage mb-4">No Gatekeeping</h3>
                <p className="text-gray-300 leading-relaxed">
                  We don't require expensive certifications. We care about your lived experience and practice.
                </p>
              </div>

              {/* Lineage Building */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-all">
                <div className="text-4xl mb-4">🌳</div>
                <h3 className="text-xl font-bold text-cosmic-violet mb-4">Lineage Building</h3>
                <p className="text-gray-300 leading-relaxed">
                  Join a community building the healing infrastructure for the new paradigm. This is long-term.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Values & Agreements */}
        <section className="py-32 px-4 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-warm-coral bg-clip-text text-transparent">
                What We Ask from Facilitators
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Non-negotiables */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-warm-coral rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20">
                  <h3 className="text-2xl font-bold text-warm-gold mb-6">Non-negotiables</h3>
                  <ul className="space-y-4 text-gray-300 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-gold mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-white">Trauma-informed practices</span>
                        <p className="text-sm text-gray-400">Understand consent, boundaries, and nervous system regulation</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-gold mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-white">Cultural humility</span>
                        <p className="text-sm text-gray-400">Aware of power dynamics, appropriation, and privilege</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-gold mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-white">No bypassing</span>
                        <p className="text-sm text-gray-400">Real shadow work, not toxic positivity or "love and light"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-gold mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-white">Non-hierarchical</span>
                        <p className="text-sm text-gray-400">We're peers in healing, not gurus with followers</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-gold mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-white">Consistent showing up</span>
                        <p className="text-sm text-gray-400">Honor your commitments to the community</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-warm-gold mt-1 flex-shrink-0" />
                      <div>
                        <span className="font-bold text-white">Ongoing healing</span>
                        <p className="text-sm text-gray-400">You're still doing your own work (we all are)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Not Allowed */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20">
                  <h3 className="text-2xl font-bold text-warm-purple mb-6">Not Allowed</h3>
                  <ul className="space-y-4 text-gray-300 leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl mt-1">❌</span>
                      <div>
                        <span className="font-bold text-white">Plant medicine ceremonies on platform</span>
                        <p className="text-sm text-gray-400">(integration support is fine)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl mt-1">❌</span>
                      <div>
                        <span className="font-bold text-white">Medical diagnoses or prescribing</span>
                        <p className="text-sm text-gray-400">(we're not doctors)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl mt-1">❌</span>
                      <div>
                        <span className="font-bold text-white">Financial advice or business coaching</span>
                        <p className="text-sm text-gray-400">(unless that's your modality)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl mt-1">❌</span>
                      <div>
                        <span className="font-bold text-white">MLM or pyramid schemes</span>
                        <p className="text-sm text-gray-400">(no recruiting members into your other businesses)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 text-xl mt-1">❌</span>
                      <div>
                        <span className="font-bold text-white">Spiritual bypassing or victim-blaming</span>
                        <p className="text-sm text-gray-400">(real healing, not toxic positivity)</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: FAQ for Facilitators */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-purple to-cosmic-integration bg-clip-text text-transparent">
                FAQ for Facilitators
              </h2>
            </div>

            <div className="space-y-8">
              {/* FAQ Item 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">Do I need certifications?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Not necessarily. We care more about your lived experience and practice than credentials. If you've done deep healing work and feel called to hold space, apply. We'll assess alignment during the interview.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">Can I offer my work on other platforms too?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes! We're not exclusive. You can teach on other platforms, have your own website, etc. We just ask that you honor your commitments to Inner Ascend circles/sessions.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">What if I'm new to facilitating?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    That's okay! Many of our facilitators are newly trained or self-taught. We offer mentorship and support. You can start by co-facilitating with experienced practitioners.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-warm-sage rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">Can I collaborate short-term?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Yes. You can come as a guest facilitator for one circle or workshop. No long-term commitment required to start.
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-purple rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">How do I get paid?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Through the platform. We handle all payment processing via Stripe. You receive payouts monthly (or bi-weekly once you're established).
                  </p>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-warm-coral rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">What if I want to offer free/donation-based circles?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    That's welcome! You can set your offerings to "donation-based" or "free for members." We support the gift economy model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="apply" className="py-32 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-warm-gold via-warm-coral to-warm-purple bg-clip-text text-transparent">
              Ready to Bring Your Gifts?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              We're building a marketplace of healing practitioners. If you hold space for others and want to build your practice in community, we want to hear from you.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="mailto:facilitators@inner-ascend.com?subject=Facilitator Application"
                className="inline-block px-12 py-5 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transform hover:scale-105 transition-all"
              >
                Apply to Collaborate →
              </a>

              <a
                href="mailto:facilitators@inner-ascend.com?subject=Question about Facilitator Program"
                className="inline-block px-12 py-5 bg-white/5 border-2 border-warm-coral text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all"
              >
                Questions? Email Us
              </a>
            </div>

            <p className="text-gray-400 mb-12">
              Email us at <a href="mailto:facilitators@inner-ascend.com" className="text-warm-coral hover:text-warm-gold transition-colors underline">facilitators@inner-ascend.com</a>
            </p>

            <p className="text-sm text-gray-500 italic">
              Applications reviewed on a rolling basis. We respond within 1 week.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 border-t border-white/5">
          <div className="max-w-6xl mx-auto text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-cosmic-violet" />
              <span className="text-xl font-bold bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
                Inner Ascend
              </span>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm flex-wrap">
              <Link to="/" className="text-gray-400 hover:text-cosmic-violet transition-colors">Home</Link>
              <span className="text-gray-700">•</span>
              <Link to="/journey" className="text-gray-400 hover:text-cosmic-violet transition-colors">The Journey</Link>
              <span className="text-gray-700">•</span>
              <Link to="/community" className="text-gray-400 hover:text-cosmic-violet transition-colors">Community</Link>
              <span className="text-gray-700">•</span>
              <Link to="/membership" className="text-gray-400 hover:text-cosmic-violet transition-colors">Membership</Link>
              <span className="text-gray-700">•</span>
              <Link to="/practice" className="text-gray-400 hover:text-cosmic-violet transition-colors">Practice</Link>
              <span className="text-gray-700">•</span>
              <Link to="/about" className="text-gray-400 hover:text-cosmic-violet transition-colors">About</Link>
              <span className="text-gray-700">•</span>
              <Link to="/support" className="text-gray-400 hover:text-cosmic-violet transition-colors">Support</Link>
              <span className="text-gray-700">•</span>
              <Link to="/privacy" className="text-gray-400 hover:text-cosmic-violet transition-colors">Privacy</Link>
            </div>

            <p className="text-sm text-gray-600">© 2025 Inner Ascend • Being Human 101</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default FacilitatorsPage;
