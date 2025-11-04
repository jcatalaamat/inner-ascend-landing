import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Users, GraduationCap, MapPin, Heart, Shield, Zap, Globe, Home } from 'lucide-react';

function AboutPage() {
  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-silver overflow-hidden relative">
      {/* Animated cosmic background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-warm-gold rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-warm-purple rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
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
                <Link to="/about" className="text-white font-semibold">
                  About
                </Link>
                <Link to="/membership" className="px-6 py-2 bg-gradient-to-r from-warm-gold to-warm-coral rounded-full font-semibold text-cosmic-black hover:shadow-lg hover:shadow-warm-gold/50 transition-all">
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-warm-gold via-warm-purple to-cosmic-integration bg-clip-text text-transparent">
                We're Training the Facilitators for the New Paradigm
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Inner Ascend is a school for healing practitioners. Members heal themselves. Then they learn to hold space for others. Then they train the next generation. <span className="text-warm-gold font-semibold">This is how we heal a planet.</span>
            </p>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-warm-coral to-warm-gold bg-clip-text text-transparent">
              The Problem: Not Enough Space Holders
            </h2>

            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                The world needs healing. But healing requires trained facilitators who can hold space, not just content creators or coaches.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* The Gaps */}
              <div>
                <h3 className="text-2xl font-bold text-warm-coral mb-6">The Gaps:</h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-warm-coral mt-1">×</span>
                    <span>Therapy costs $200/hour (inaccessible)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-coral mt-1">×</span>
                    <span>Facilitator training costs $3,000-$10,000 (gatekept)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-coral mt-1">×</span>
                    <span>Most programs train you and send you away (no ongoing support)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-coral mt-1">×</span>
                    <span>No platform to build your practice (you're on your own)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-coral mt-1">×</span>
                    <span>No lineage or community (isolated practitioners)</span>
                  </li>
                </ul>
              </div>

              {/* What's Needed */}
              <div>
                <h3 className="text-2xl font-bold text-cosmic-integration mb-6">What's Needed:</h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-cosmic-integration mt-1">✓</span>
                    <span>Affordable training (€22-€88/month, not $5,000)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cosmic-integration mt-1">✓</span>
                    <span>Ongoing mentorship (not one-time certification)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cosmic-integration mt-1">✓</span>
                    <span>Platform to build practice (marketplace, students, income)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cosmic-integration mt-1">✓</span>
                    <span>Lineage and community (you're never alone)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cosmic-integration mt-1">✓</span>
                    <span>Training WHILE healing (you don't need to be "healed" first)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white/5 rounded-2xl p-8 border border-warm-gold/20 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-warm-gold font-semibold text-center leading-relaxed">
                "We don't need more gurus. We need 10,000 trained facilitators holding space in their communities. That's the vision."
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Solution - A Training School */}
        <section className="py-32 px-6 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-cosmic-integration to-warm-purple bg-clip-text text-transparent">
              The Solution: A School for Facilitators
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              Inner Ascend is healing + training in one. You heal yourself through Being Human 101. Then you learn to hold space for others. Then you build your practice on our platform.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phase 1: Member */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <div className="text-warm-coral mb-4">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phase 1: Member</h3>
                <p className="text-sm text-gray-500 mb-4">€22-€88/month</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-warm-coral mt-1">•</span>
                    <span>Heal yourself (Being Human 101)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-coral mt-1">•</span>
                    <span>All 6 app features included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-coral mt-1">•</span>
                    <span>Circles, practices, community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-coral mt-1">•</span>
                    <span>No commitment (cancel anytime)</span>
                  </li>
                </ul>
              </div>

              {/* Phase 2: Facilitator Training */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <div className="text-warm-purple mb-4">
                  <GraduationCap className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phase 2: Training</h3>
                <p className="text-sm text-gray-500 mb-4">Months 12-18</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-warm-purple mt-1">•</span>
                    <span>Apply after 6-12 months membership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-purple mt-1">•</span>
                    <span>Learn to hold space (trauma-informed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-purple mt-1">•</span>
                    <span>Co-facilitate with mentors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-purple mt-1">•</span>
                    <span>Certification when ready</span>
                  </li>
                </ul>
              </div>

              {/* Phase 3: Certified Facilitator */}
              <div className="bg-white/5 rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                <div className="text-cosmic-integration mb-4">
                  <Heart className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phase 3: Facilitator</h3>
                <p className="text-sm text-gray-500 mb-4">Ongoing</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-cosmic-integration mt-1">•</span>
                    <span>Hold your own circles on platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cosmic-integration mt-1">•</span>
                    <span>Offer 1-on-1s, text support, workshops</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cosmic-integration mt-1">•</span>
                    <span>Build your student base</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cosmic-integration mt-1">•</span>
                    <span>Earn income through marketplace</span>
                  </li>
                </ul>
              </div>

              {/* Phase 4: Train Others */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-warm-gold mb-4">
                  <Sparkles className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phase 4: Train Others</h3>
                <p className="text-sm text-gray-500 mb-4">Future</p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-warm-gold mt-1">•</span>
                    <span>Senior facilitators train new facilitators</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-gold mt-1">•</span>
                    <span>The lineage perpetuates itself</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-gold mt-1">•</span>
                    <span>Founder steps back</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-warm-gold mt-1">•</span>
                    <span>Distributed leadership</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-400 italic max-w-3xl mx-auto">
                The path from member to teacher. From healing yourself to holding space for others. This is the lineage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Why Monthly Membership? */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-warm-purple to-cosmic-integration bg-clip-text text-transparent">
              Why Monthly Membership Makes Training Accessible
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Card 1: Lower Barrier */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <div className="text-warm-coral mb-4">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Lower Barrier</h3>
                <p className="text-gray-300 leading-relaxed">
                  €22/month is less than one therapy session. Facilitator training costs $5,000+ elsewhere. We make it accessible by spreading cost over time. Heal while you learn.
                </p>
              </div>

              {/* Card 2: Ongoing Support */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <div className="text-warm-purple mb-4">
                  <Users className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Ongoing Support</h3>
                <p className="text-gray-300 leading-relaxed">
                  Most certifications hand you a diploma and say "good luck." We provide ongoing mentorship, platform support, and community forever. You're never alone.
                </p>
              </div>

              {/* Card 3: Freedom to Leave */}
              <div className="bg-white/5 rounded-2xl p-8 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-all">
                <div className="text-cosmic-violet mb-4">
                  <Zap className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Freedom to Leave</h3>
                <p className="text-gray-300 leading-relaxed">
                  Cancel anytime. No long-term commitment. Try it for a month. If it's not for you, leave. If it is, stay and grow.
                </p>
              </div>

              {/* Card 4: Training WHILE Healing */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="text-warm-gold mb-4">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Training WHILE Healing</h3>
                <p className="text-gray-300 leading-relaxed">
                  You don't need to be "fully healed" to train as a facilitator. You heal yourself while learning to hold space for others. The best teachers are wounded healers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: The Vision - Physical Villages */}
        <section className="py-32 px-6 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-warm-gold to-warm-purple bg-clip-text text-transparent">
              The Vision: From Online School to Physical Villages
            </h2>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              We're starting global and online. But the endgame is physical healing villages around the world, held by trained facilitators.
            </p>

            {/* 3-Phase Roadmap */}
            <div className="space-y-8">
              {/* Phase 1: Online Training School */}
              <div className="bg-white/5 rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-cosmic-integration flex-shrink-0">
                    <Globe className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">Phase 1 (Now - 2025)</div>
                    <h3 className="text-3xl font-bold text-white mb-4">Online Training School</h3>
                    <ul className="space-y-3 text-lg text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-cosmic-integration mt-1">•</span>
                        <span>Monthly membership app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cosmic-integration mt-1">•</span>
                        <span>Being Human 101 curriculum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cosmic-integration mt-1">•</span>
                        <span>Zoom healing circles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cosmic-integration mt-1">•</span>
                        <span>Facilitator training program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cosmic-integration mt-1">•</span>
                        <span>Marketplace for facilitators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cosmic-integration mt-1">•</span>
                        <span className="font-semibold text-cosmic-integration">100+ trained facilitators by end of 2025</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 2: First Physical Hub */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-warm-purple flex-shrink-0">
                    <MapPin className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">Phase 2 (2026-2027)</div>
                    <h3 className="text-3xl font-bold text-white mb-4">First Physical Hub</h3>
                    <ul className="space-y-3 text-lg text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Healing village prototype (location TBD)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Members can visit, stay, heal in person</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Held by trained facilitators from online community</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Live-in training program (for serious students)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Blend of online + in-person</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Digital nomads have a landing place</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phase 3: Global Village Network */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <div className="flex items-start gap-6">
                  <div className="text-warm-gold flex-shrink-0">
                    <Home className="w-12 h-12" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-2">Phase 3 (2028+)</div>
                    <h3 className="text-3xl font-bold text-white mb-4">Global Village Network</h3>
                    <ul className="space-y-3 text-lg text-gray-300 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        <span>Healing hubs worldwide (10-20 locations)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        <span>Each held by trained facilitators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        <span>Members move between them (nomadic healing)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        <span>Always home, anywhere in the world</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        <span>Training school in each location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        <span className="font-semibold text-warm-gold">1,000+ facilitators globally</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-gold mt-1">•</span>
                        <span className="font-semibold text-warm-gold">Self-sustaining healing infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-400 italic max-w-3xl mx-auto">
                This is a 20-year vision. A generational project. We're planting seeds for forests we may never see.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Founder Letter */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-warm-coral to-warm-gold bg-clip-text text-transparent">
              A Personal Letter from the Founder
            </h2>

            <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-2xl text-white font-semibold">
                Hi, I'm [Founder Name].
              </p>

              <p>
                I didn't build Inner Ascend to be a guru or to hold space forever. I built it to train a generation of facilitators who will train the next generation.
              </p>

              <div className="my-8 border-l-4 border-warm-gold pl-6">
                <h3 className="text-xl font-bold text-warm-gold mb-4">My Story:</h3>
                <p className="mb-4">
                  [Personal healing journey—the loneliness of doing this work alone, the moment of finding community, the training as a facilitator, the realization that one person can't heal the world.]
                </p>
                <p className="text-gray-400 italic">
                  I spent years healing in isolation. Therapy helped, but it was expensive and finite. Retreats shifted me temporarily, but I always returned home alone. I was carrying the weight of my healing by myself, wondering if anyone else understood.
                </p>
              </div>

              <div className="my-8 border-l-4 border-cosmic-integration pl-6">
                <h3 className="text-xl font-bold text-cosmic-integration mb-4">The Insight:</h3>
                <p className="mb-4">
                  I realized: If I heal 100 people directly, that's 100 people healed. But if I train 10 facilitators, and each of them heals 100 people, that's 1,000 people healed. And if each of those 10 trains 10 more, that's 10,000 people healed.
                </p>
                <p className="text-2xl text-cosmic-integration font-bold">
                  This is exponential healing.
                </p>
              </div>

              <div className="my-8 border-l-4 border-warm-purple pl-6">
                <h3 className="text-xl font-bold text-warm-purple mb-4">Why Monthly Membership:</h3>
                <p>
                  I wanted training to be accessible. Not $5,000 upfront. Not gatekept. €22/month. Anyone can start. Heal yourself first. Then train to hold space for others. No prerequisites. No "you must be healed first." Just show up and do the work.
                </p>
              </div>

              <div className="my-8 border-l-4 border-warm-coral pl-6">
                <h3 className="text-xl font-bold text-warm-coral mb-4">Why a Platform:</h3>
                <p>
                  Facilitators need somewhere to build their practice. I didn't want to train you and send you away. I wanted to give you a marketplace, students, income, community. The platform is yours.
                </p>
              </div>

              <div className="my-8 bg-white/5 rounded-2xl p-8 border border-warm-gold/20">
                <h3 className="text-xl font-bold text-warm-gold mb-4">The Future:</h3>
                <p className="mb-4">
                  I'm 35 now. By the time I'm 45, I want there to be 1,000 trained facilitators holding space globally. By the time I'm 55, I want 20 physical healing villages held by those facilitators. By the time I'm 65, I want to retire and know the lineage doesn't need me anymore.
                </p>
                <p className="text-2xl text-warm-gold font-bold text-center mt-6">
                  This isn't a business. It's infrastructure for the new paradigm.
                </p>
              </div>

              <p className="text-xl">
                If this resonates, join us. If you just want to heal yourself, stay a member forever. If you want to become a facilitator, the path is open. If you want to co-create this vision, apply for Founding membership.
              </p>

              <p className="text-xl text-white">
                You're not broken. You're not too much. You're exactly what the world needs.
              </p>

              <p className="text-2xl text-warm-gold text-center pt-6">
                Welcome home.
              </p>

              <p className="text-gray-500 text-lg text-center pt-4">
                — [Founder Name]
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Infrastructure, Not a Product */}
        <section className="py-32 px-6 bg-cosmic-dark/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-warm-gold to-cosmic-integration bg-clip-text text-transparent">
              Infrastructure for the New Paradigm
            </h2>

            <div className="max-w-4xl mx-auto mb-16">
              <p className="text-2xl text-gray-300 text-center leading-relaxed mb-8">
                Inner Ascend isn't a product you buy. It's infrastructure you participate in.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* What We're Building */}
              <div>
                <h3 className="text-2xl font-bold text-warm-gold mb-6">What We're Building:</h3>
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Training school for facilitators</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Platform for practitioners to earn income</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Marketplace for healing services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Community of healers and teachers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Physical villages (eventually)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-warm-gold mt-1">✓</span>
                    <span>Global healing network</span>
                  </li>
                </ul>
              </div>

              {/* What We're Not */}
              <div>
                <h3 className="text-2xl font-bold text-gray-500 mb-6">What We're Not:</h3>
                <ul className="space-y-4 text-lg text-gray-400">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">×</span>
                    <span>Not a guru-led movement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">×</span>
                    <span>Not a course to complete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">×</span>
                    <span>Not a certification mill</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">×</span>
                    <span>Not a one-time program</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-600 mt-1">×</span>
                    <span>Not a business to extract wealth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-white/5 rounded-2xl p-10 border border-cosmic-integration/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-cosmic-integration mb-6 text-center">What This Is:</h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-cosmic-integration mt-1 text-2xl">→</span>
                  <span><strong className="text-white">A lineage</strong> (teaching begets teaching)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosmic-integration mt-1 text-2xl">→</span>
                  <span><strong className="text-white">A school</strong> (learn while healing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosmic-integration mt-1 text-2xl">→</span>
                  <span><strong className="text-white">A platform</strong> (build your practice)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosmic-integration mt-1 text-2xl">→</span>
                  <span><strong className="text-white">A community</strong> (never alone)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cosmic-integration mt-1 text-2xl">→</span>
                  <span><strong className="text-white">A vision</strong> (physical villages, global network)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-warm-gold via-warm-purple to-cosmic-integration bg-clip-text text-transparent">
              Ready to Join the Lineage?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Start as a member. Heal yourself. Learn to hold space. Build your practice. Train the next generation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/membership"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-warm-gold to-warm-coral text-cosmic-black rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-gold/30 transition-all"
              >
                <span>Start Your Journey (€22/month)</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/journey"
                className="inline-block px-10 py-5 bg-white/10 border border-cosmic-integration/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Learn About Facilitator Training
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              Community €22/month • Inner Circle €88/month • Founding by application • Cancel anytime
            </p>
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

export default AboutPage;
