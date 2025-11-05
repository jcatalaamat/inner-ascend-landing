import { Link } from 'react-router-dom';
import { ArrowRight, Users, GraduationCap, MapPin, Heart, Shield, Zap, Globe, Home, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navigation currentPage="/about" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:pt-40">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-display mb-8 leading-tight">
            We're Training the Facilitators for the New Paradigm
          </h1>
          <p className="text-body-lg text-brand-muted leading-relaxed max-w-4xl mx-auto">
            Inner Ascend is a school for healing practitioners. Members heal themselves. Then they learn to hold space for others. Then they train the next generation. <span className="text-accent-gold font-semibold">This is how we heal a planet.</span>
          </p>
        </div>
      </section>

      {/* Section 1: The Problem */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-12 text-center text-accent-primary">
            The Problem: Not Enough Space Holders
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-body-lg text-brand-muted leading-relaxed">
              The world needs healing. But healing requires trained facilitators who can hold space, not just content creators or coaches.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* The Gaps */}
            <div className="bg-brand-surface rounded-3xl p-10">
              <h3 className="text-h3 text-accent-primary mb-6">The Gaps:</h3>
              <ul className="space-y-4 text-body text-brand-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">×</span>
                  <span>Therapy costs $200/hour (inaccessible)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">×</span>
                  <span>Facilitator training costs $3,000-$10,000 (gatekept)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">×</span>
                  <span>Most programs train you and send you away (no ongoing support)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">×</span>
                  <span>No platform to build your practice (you're on your own)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">×</span>
                  <span>No lineage or community (isolated practitioners)</span>
                </li>
              </ul>
            </div>

            {/* What's Needed */}
            <div className="bg-brand-surface rounded-3xl p-10">
              <h3 className="text-h3 text-accent-secondary mb-6">What's Needed:</h3>
              <ul className="space-y-4 text-body text-brand-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-1">✓</span>
                  <span>Affordable training (€22-€88/month, not $5,000)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-1">✓</span>
                  <span>Ongoing mentorship (not one-time certification)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-1">✓</span>
                  <span>Platform to build practice (marketplace, students, income)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-1">✓</span>
                  <span>Lineage and community (you're never alone)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-secondary mt-1">✓</span>
                  <span>Training WHILE healing (you don't need to be "healed" first)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-surface rounded-3xl p-10 border border-accent-gold/20 max-w-4xl mx-auto">
            <p className="text-body-lg text-accent-gold font-semibold text-center leading-relaxed">
              "We don't need more gurus. We need 10,000 trained facilitators holding space in their communities. That's the vision."
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: The Solution - A Training School */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-8 text-center text-accent-secondary">
            The Solution: A School for Facilitators
          </h2>
          <p className="text-body-lg text-brand-muted text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Inner Ascend is healing + training in one. You heal yourself through Being Human 101. Then you learn to hold space for others. Then you build your practice on our platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phase 1: Member */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-2">Phase 1: Member</h3>
              <p className="text-body-sm text-brand-muted/70 mb-6">€22-€88/month</p>
              <ul className="space-y-3 text-body-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Heal yourself (Being Human 101)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>All 6 app features included</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Circles, practices, community</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>No commitment (cancel anytime)</span>
                </li>
              </ul>
            </div>

            {/* Phase 2: Facilitator Training */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <GraduationCap className="w-7 h-7 text-accent-secondary" />
              </div>
              <h3 className="text-h3 mb-2">Phase 2: Training</h3>
              <p className="text-body-sm text-brand-muted/70 mb-6">Months 12-18</p>
              <ul className="space-y-3 text-body-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent-secondary mt-1">•</span>
                  <span>Apply after 6-12 months membership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-secondary mt-1">•</span>
                  <span>Learn to hold space (trauma-informed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-secondary mt-1">•</span>
                  <span>Co-facilitate with mentors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-secondary mt-1">•</span>
                  <span>Certification when ready</span>
                </li>
              </ul>
            </div>

            {/* Phase 3: Certified Facilitator */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-h3 mb-2">Phase 3: Facilitator</h3>
              <p className="text-body-sm text-brand-muted/70 mb-6">Ongoing</p>
              <ul className="space-y-3 text-body-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-1">•</span>
                  <span>Hold your own circles on platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-1">•</span>
                  <span>Offer 1-on-1s, text support, workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-1">•</span>
                  <span>Build your student base</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-gold mt-1">•</span>
                  <span>Earn income through marketplace</span>
                </li>
              </ul>
            </div>

            {/* Phase 4: Train Others */}
            <div className="bg-brand-surface rounded-3xl p-8 border border-brand-border hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-7 h-7 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-2">Phase 4: Train Others</h3>
              <p className="text-body-sm text-brand-muted/70 mb-6">Future</p>
              <ul className="space-y-3 text-body-sm text-brand-muted">
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Senior facilitators train new facilitators</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>The lineage perpetuates itself</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Founder steps back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent-primary mt-1">•</span>
                  <span>Distributed leadership</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-body text-brand-muted/70 italic max-w-3xl mx-auto">
              The path from member to teacher. From healing yourself to holding space for others. This is the lineage.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Why Monthly Membership? */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-16 text-center text-accent-gold">
            Why Monthly Membership Makes Training Accessible
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Lower Barrier */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-4">Lower Barrier</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                €22/month is less than one therapy session. Facilitator training costs $5,000+ elsewhere. We make it accessible by spreading cost over time. Heal while you learn.
              </p>
            </div>

            {/* Card 2: Ongoing Support */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent-secondary" />
              </div>
              <h3 className="text-h3 mb-4">Ongoing Support</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Most certifications hand you a diploma and say "good luck." We provide ongoing mentorship, platform support, and community forever. You're never alone.
              </p>
            </div>

            {/* Card 3: Freedom to Leave */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-accent-gold" />
              </div>
              <h3 className="text-h3 mb-4">Freedom to Leave</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                Cancel anytime. No long-term commitment. Try it for a month. If it's not for you, leave. If it is, stay and grow.
              </p>
            </div>

            {/* Card 4: Training WHILE Healing */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-4">Training WHILE Healing</h3>
              <p className="text-body text-brand-muted leading-relaxed">
                You don't need to be "fully healed" to train as a facilitator. You heal yourself while learning to hold space for others. The best teachers are wounded healers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: The Vision - Physical Villages */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-8 text-center text-accent-secondary">
            The Vision: From Online School to Physical Villages
          </h2>
          <p className="text-body-lg text-brand-muted text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            We're starting global and online. But the endgame is physical healing villages around the world, held by trained facilitators.
          </p>

          {/* 3-Phase Roadmap */}
          <div className="space-y-8">
            {/* Phase 1: Online Training School */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-accent-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-7 h-7 text-accent-secondary" />
                </div>
                <div className="flex-1">
                  <div className="text-body-sm text-brand-muted/70 mb-2">Phase 1 (Now - 2025)</div>
                  <h3 className="text-h2 mb-4">Online Training School</h3>
                  <ul className="space-y-3 text-body text-brand-muted mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1">•</span>
                      <span>Monthly membership app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1">•</span>
                      <span>Being Human 101 curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1">•</span>
                      <span>Zoom healing circles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1">•</span>
                      <span>Facilitator training program</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1">•</span>
                      <span>Marketplace for facilitators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1 font-semibold">•</span>
                      <span className="font-semibold">100+ trained facilitators by end of 2025</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2: First Physical Hub */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-accent-gold" />
                </div>
                <div className="flex-1">
                  <div className="text-body-sm text-brand-muted/70 mb-2">Phase 2 (2026-2027)</div>
                  <h3 className="text-h2 mb-4">First Physical Hub</h3>
                  <ul className="space-y-3 text-body text-brand-muted mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Healing village prototype (location TBD)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Members can visit, stay, heal in person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Held by trained facilitators from online community</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Live-in training program (for serious students)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Blend of online + in-person</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-gold mt-1">•</span>
                      <span>Digital nomads have a landing place</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3: Global Village Network */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-accent-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Home className="w-7 h-7 text-accent-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-body-sm text-brand-muted/70 mb-2">Phase 3 (2028+)</div>
                  <h3 className="text-h2 mb-4">Global Village Network</h3>
                  <ul className="space-y-3 text-body text-brand-muted mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">•</span>
                      <span>Healing hubs worldwide (10-20 locations)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">•</span>
                      <span>Each held by trained facilitators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">•</span>
                      <span>Members move between them (nomadic healing)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">•</span>
                      <span>Always home, anywhere in the world</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1">•</span>
                      <span>Training school in each location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1 font-semibold">•</span>
                      <span className="font-semibold">1,000+ facilitators globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1 font-semibold">•</span>
                      <span className="font-semibold">Self-sustaining healing infrastructure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-body text-brand-muted/70 italic max-w-3xl mx-auto">
              This is a 20-year vision. A generational project. We're planting seeds for forests we may never see.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Founder Letter */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h1 mb-12 text-center text-accent-gold">
            A Personal Letter from the Founder
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-body-lg text-brand-muted leading-relaxed">
            <p className="text-h3 text-brand-text">
              Hi, I'm [Founder Name].
            </p>

            <p>
              I didn't build Inner Ascend to be a guru or to hold space forever. I built it to train a generation of facilitators who will train the next generation.
            </p>

            <div className="my-8 bg-accent-gold/5 rounded-2xl p-8 border-l-4 border-accent-gold">
              <h3 className="text-h3 text-accent-gold mb-4">My Story:</h3>
              <p className="mb-4">
                [Personal healing journey—the loneliness of doing this work alone, the moment of finding community, the training as a facilitator, the realization that one person can't heal the world.]
              </p>
              <p className="text-brand-muted/80 italic">
                I spent years healing in isolation. Therapy helped, but it was expensive and finite. Retreats shifted me temporarily, but I always returned home alone. I was carrying the weight of my healing by myself, wondering if anyone else understood.
              </p>
            </div>

            <div className="my-8 bg-accent-secondary/5 rounded-2xl p-8 border-l-4 border-accent-secondary">
              <h3 className="text-h3 text-accent-secondary mb-4">The Insight:</h3>
              <p className="mb-4">
                I realized: If I heal 100 people directly, that's 100 people healed. But if I train 10 facilitators, and each of them heals 100 people, that's 1,000 people healed. And if each of those 10 trains 10 more, that's 10,000 people healed.
              </p>
              <p className="text-h3 text-accent-secondary">
                This is exponential healing.
              </p>
            </div>

            <div className="my-8 bg-accent-primary/5 rounded-2xl p-8 border-l-4 border-accent-primary">
              <h3 className="text-h3 text-accent-primary mb-4">Why Monthly Membership:</h3>
              <p>
                I wanted training to be accessible. Not $5,000 upfront. Not gatekept. €22/month. Anyone can start. Heal yourself first. Then train to hold space for others. No prerequisites. No "you must be healed first." Just show up and do the work.
              </p>
            </div>

            <div className="my-8 bg-accent-gold/5 rounded-2xl p-8 border-l-4 border-accent-gold">
              <h3 className="text-h3 text-accent-gold mb-4">Why a Platform:</h3>
              <p>
                Facilitators need somewhere to build their practice. I didn't want to train you and send you away. I wanted to give you a marketplace, students, income, community. The platform is yours.
              </p>
            </div>

            <div className="my-8 bg-brand-surface rounded-3xl p-10 border border-accent-gold/20">
              <h3 className="text-h3 text-accent-gold mb-4">The Future:</h3>
              <p className="mb-4">
                I'm 35 now. By the time I'm 45, I want there to be 1,000 trained facilitators holding space globally. By the time I'm 55, I want 20 physical healing villages held by those facilitators. By the time I'm 65, I want to retire and know the lineage doesn't need me anymore.
              </p>
              <p className="text-h3 text-accent-gold text-center mt-6">
                This isn't a business. It's infrastructure for the new paradigm.
              </p>
            </div>

            <p className="text-body-lg">
              If this resonates, join us. If you just want to heal yourself, stay a member forever. If you want to become a facilitator, the path is open. If you want to co-create this vision, apply for Founding membership.
            </p>

            <p className="text-body-lg text-brand-text font-medium">
              You're not broken. You're not too much. You're exactly what the world needs.
            </p>

            <p className="text-h3 text-accent-gold text-center pt-6">
              Welcome home.
            </p>

            <p className="text-brand-muted text-body text-center pt-4">
              — [Founder Name]
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Infrastructure, Not a Product */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-12 text-center text-accent-primary">
            Infrastructure for the New Paradigm
          </h2>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-h3 text-brand-muted text-center leading-relaxed mb-8">
              Inner Ascend isn't a product you buy. It's infrastructure you participate in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* What We're Building */}
            <div className="bg-brand-surface rounded-3xl p-10">
              <h3 className="text-h3 text-accent-gold mb-6">What We're Building:</h3>
              <ul className="space-y-4 text-body text-brand-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">✓</span>
                  <span>Training school for facilitators</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">✓</span>
                  <span>Platform for practitioners to earn income</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">✓</span>
                  <span>Marketplace for healing services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">✓</span>
                  <span>Community of healers and teachers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">✓</span>
                  <span>Physical villages (eventually)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-gold mt-1">✓</span>
                  <span>Global healing network</span>
                </li>
              </ul>
            </div>

            {/* What We're Not */}
            <div className="bg-brand-surface rounded-3xl p-10">
              <h3 className="text-h3 text-brand-muted mb-6">What We're Not:</h3>
              <ul className="space-y-4 text-body text-brand-muted/70">
                <li className="flex items-start gap-3">
                  <span className="text-brand-muted/50 mt-1">×</span>
                  <span>Not a guru-led movement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-muted/50 mt-1">×</span>
                  <span>Not a course to complete</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-muted/50 mt-1">×</span>
                  <span>Not a certification mill</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-muted/50 mt-1">×</span>
                  <span>Not a one-time program</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-muted/50 mt-1">×</span>
                  <span>Not a business to extract wealth</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-surface rounded-3xl p-10 border border-accent-secondary/20 max-w-4xl mx-auto">
            <h3 className="text-h3 text-accent-secondary mb-6 text-center">What This Is:</h3>
            <ul className="space-y-4 text-body text-brand-muted">
              <li className="flex items-start gap-3">
                <span className="text-accent-secondary mt-1 text-xl">→</span>
                <span><strong className="text-brand-text">A lineage</strong> (teaching begets teaching)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-secondary mt-1 text-xl">→</span>
                <span><strong className="text-brand-text">A school</strong> (learn while healing)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-secondary mt-1 text-xl">→</span>
                <span><strong className="text-brand-text">A platform</strong> (build your practice)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-secondary mt-1 text-xl">→</span>
                <span><strong className="text-brand-text">A community</strong> (never alone)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-secondary mt-1 text-xl">→</span>
                <span><strong className="text-brand-text">A vision</strong> (physical villages, global network)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-display mb-8">
            Ready to Join the Lineage?
          </h2>
          <p className="text-body-lg text-brand-muted mb-12 leading-relaxed max-w-3xl mx-auto">
            Start as a member. Heal yourself. Learn to hold space. Build your practice. Train the next generation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              to="/membership"
              className="inline-flex items-center gap-2 px-10 py-5 bg-accent-primary text-white rounded-full font-semibold hover:bg-accent-primary/90 transition-all shadow-lg hover:shadow-2xl"
            >
              <span>Start Your Journey (€22/month)</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/journey"
              className="inline-block px-10 py-5 bg-brand-surface border border-brand-border text-brand-text rounded-full font-semibold hover:bg-brand-surface/50 transition-all"
            >
              Learn About Facilitator Training
            </Link>
          </div>

          <p className="text-body-sm text-brand-muted/70">
            Community €22/month • Inner Circle €88/month • Founding by application • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;
