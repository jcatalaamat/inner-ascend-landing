import { Link } from 'react-router-dom';
import { Sunrise, Moon, Heart, Zap, Book, Users2, Flame, Wind, Waves, Mountain, Sun, Shield, Phone, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function PracticePage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <Navigation currentPage="/practice" />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:pt-40 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display mb-6">
            Your Daily Spiritual Practice
          </h1>
          <p className="text-body-lg text-brand-muted mb-6 max-w-2xl mx-auto">
            Transformation doesn't happen in theory. It happens in the daily practice of showing up, feeling, and integrating.
          </p>
          <p className="text-body text-brand-muted/80 max-w-2xl mx-auto">
            Here's what members actually DO day-to-day—the practices, tools, and rhythms that turn insight into embodiment.
          </p>
        </div>
      </section>

      {/* Daily Rhythm Section */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-16 text-center">
            Your Daily Rhythm
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Morning */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sunrise className="w-8 h-8 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-3">Morning</h3>
              <p className="text-body-lg text-accent-primary mb-6">5 minutes</p>
              <p className="text-body text-brand-muted">
                Begin your day with cosmic guidance. Receive your daily astrology transit, Human Design activation, or Gene Keys contemplation. Set your intention for the work ahead.
              </p>
            </div>

            {/* Practice */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-accent-secondary" />
              </div>
              <h3 className="text-h3 mb-3">Practice</h3>
              <p className="text-body-lg text-accent-secondary mb-6">15-30 minutes</p>
              <p className="text-body text-brand-muted">
                Dive into your chosen healing modality. Shadow work journaling, somatic releasing, meditation, feeling work, or digging into patterns. This is where the transformation happens.
              </p>
            </div>

            {/* Evening */}
            <div className="bg-brand-surface rounded-3xl p-10 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-6">
                <Moon className="w-8 h-8 text-accent-gold" />
              </div>
              <h3 className="text-h3 mb-3">Evening</h3>
              <p className="text-body-lg text-accent-gold mb-6">2 minutes</p>
              <p className="text-body text-brand-muted">
                Reflect on your day. Track what you noticed, what you felt, what shifted. Integration happens in the witnessing. Share your insights with the community if you choose.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-body-lg text-brand-muted max-w-3xl mx-auto">
              <span className="text-accent-primary font-semibold">22-37 minutes</span> a day is all it takes to rewire decades of conditioning. Consistency creates transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Healing Modalities */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-12 text-center">
            Healing Modalities
          </h2>
          <p className="text-body-lg text-brand-muted text-center mb-16 max-w-3xl mx-auto">
            We don't just teach theory. We practice real, embodied healing work that addresses the root—not the symptom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Shadow Work */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Moon className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-3">Shadow Work</h3>
              <p className="text-body text-brand-muted">
                Befriend your darkness. Explore the rejected, repressed parts of yourself and integrate them with compassion.
              </p>
            </div>

            {/* Somatic Practices */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-accent-secondary" />
              </div>
              <h3 className="text-h3 mb-3">Somatic Practices</h3>
              <p className="text-body text-brand-muted">
                Release trauma stored in the body. Shaking, breathwork, movement, and nervous system regulation.
              </p>
            </div>

            {/* Energy Clearing */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-h3 mb-3">Energy Clearing</h3>
              <p className="text-body text-brand-muted">
                Clear stuck energy, cords, and attachments. Practices for reclaiming your energetic sovereignty.
              </p>
            </div>

            {/* Feeling Work */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-3">Feeling Work</h3>
              <p className="text-body text-brand-muted">
                Feel what you've been avoiding. Move through grief, rage, shame, and fear to find freedom on the other side.
              </p>
            </div>

            {/* Digging Work */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <Mountain className="w-6 h-6 text-accent-secondary" />
              </div>
              <h3 className="text-h3 mb-3">Digging Work</h3>
              <p className="text-body text-brand-muted">
                Excavate your patterns, beliefs, and conditioning. Get to the root cause of your suffering.
              </p>
            </div>

            {/* Meditation & Breathwork */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-4">
                <Wind className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-h3 mb-3">Meditation & Breathwork</h3>
              <p className="text-body text-brand-muted">
                Cultivate presence, stillness, and inner peace. Guided meditations and breath practices for all levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Mobile App */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-12 text-center">
            The Mobile App
          </h2>
          <p className="text-body-lg text-brand-muted text-center mb-16 max-w-3xl mx-auto">
            The Inner Ascend app is your daily companion—a tool within the larger ecosystem to support your healing journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-brand-surface rounded-3xl p-8 order-2 md:order-1">
              <div className="h-96 bg-brand-bg rounded-2xl flex items-center justify-center text-brand-muted">
                [App Screenshots Mockup]
              </div>
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Service Exchange</h3>
                  <p className="text-body text-brand-muted">
                    Offer and receive healing sessions, readings, coaching, and more. Connect with other members for trades and collaboration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-accent-secondary" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Cosmic Guidance</h3>
                  <p className="text-body text-brand-muted">
                    Daily astrology transits, Human Design activations, Gene Keys contemplations—receive personalized guidance based on your chart.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Book className="w-6 h-6 text-accent-gold" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Meditation Library</h3>
                  <p className="text-body text-brand-muted">
                    Access 100+ guided meditations, breathwork sessions, and healing journeys organized by intention and modality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Users2 className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <h3 className="text-h3 mb-2">Community Connection</h3>
                  <p className="text-body text-brand-muted">
                    Stay connected with the community, receive updates on calls and events, and track your practice journey.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-body text-brand-muted/80 italic">
              The app is one piece of the ecosystem—supporting your daily practice while you engage in the deeper work of community calls, service exchange, and collaborative projects.
            </p>
          </div>
        </div>
      </section>

      {/* 97 Practices Preview */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h1 mb-12 text-center">
            The Healing Practices Library
          </h2>
          <p className="text-body-lg text-brand-muted text-center mb-16 max-w-3xl mx-auto">
            97 practices (and growing) across every dimension of healing. These aren't just concepts—they're lived, embodied practices refined through years of deep work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Emotional Healing */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-3">Emotional Healing</h3>
              <p className="text-body text-brand-muted mb-4">
                Practices for processing grief, rage, shame, fear, and wounded emotions.
              </p>
              <p className="text-body-sm text-brand-muted/60">
                12 practices
              </p>
            </div>

            {/* Body & Energy */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <Waves className="w-6 h-6 text-accent-secondary" />
              </div>
              <h3 className="text-h3 mb-3">Body & Energy</h3>
              <p className="text-body text-brand-muted mb-4">
                Somatic practices, breathwork, energy clearing, and nervous system regulation.
              </p>
              <p className="text-body-sm text-brand-muted/60">
                18 practices
              </p>
            </div>

            {/* Relationship Healing */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-h3 mb-3">Relationship Healing</h3>
              <p className="text-body text-brand-muted mb-4">
                Attachment work, boundaries, communication, intimacy, and relational patterns.
              </p>
              <p className="text-body-sm text-brand-muted/60">
                15 practices
              </p>
            </div>

            {/* Shadow & Archetypal */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Moon className="w-6 h-6 text-accent-primary" />
              </div>
              <h3 className="text-h3 mb-3">Shadow & Archetypal</h3>
              <p className="text-body text-brand-muted mb-4">
                Working with shadow aspects, inner child, archetypes, and unconscious patterns.
              </p>
              <p className="text-body-sm text-brand-muted/60">
                14 practices
              </p>
            </div>

            {/* Spiritual Practices */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-accent-secondary" />
              </div>
              <h3 className="text-h3 mb-3">Spiritual Practices</h3>
              <p className="text-body text-brand-muted mb-4">
                Meditation, presence work, surrender practices, and connecting with the divine.
              </p>
              <p className="text-body-sm text-brand-muted/60">
                16 practices
              </p>
            </div>

            {/* Life Design & Integration */}
            <div className="bg-brand-surface rounded-2xl p-8 hover:shadow-2xl transition-all">
              <div className="w-12 h-12 bg-accent-gold/10 rounded-2xl flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-accent-gold" />
              </div>
              <h3 className="text-h3 mb-3">Life Design & Integration</h3>
              <p className="text-body text-brand-muted mb-4">
                Creating aligned life structures, purpose work, and integrating healing into daily life.
              </p>
              <p className="text-body-sm text-brand-muted/60">
                22 practices
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-body-lg text-brand-muted mb-4">
              Each practice includes <span className="text-accent-primary font-semibold">step-by-step guidance, journal prompts, and integration exercises</span>.
            </p>
            <p className="text-body text-brand-muted/80">
              Members can filter by intention, time available, and current need—finding the exact practice for this moment.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Toolkit */}
      <section className="py-24 px-6 bg-brand-surface/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-surface rounded-3xl p-12 border border-accent-primary/20">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-accent-primary" />
              </div>
              <h2 className="text-h1 mb-4">
                Emergency Toolkit
              </h2>
              <p className="text-body-lg text-brand-muted">
                For healing crises, dark nights of the soul, and moments when the work feels overwhelming.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-body text-brand-muted">
                Deep healing work can bring up intense emotions, memories, and experiences. The Emergency Toolkit provides:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="text-body text-brand-muted"><strong className="text-brand-text">Crisis stabilization practices</strong> - Grounding techniques for when you're overwhelmed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="text-body text-brand-muted"><strong className="text-brand-text">Nervous system reset tools</strong> - Immediate somatic practices to regulate</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="text-body text-brand-muted"><strong className="text-brand-text">Community support access</strong> - Connect with members who can hold space</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="text-body text-brand-muted"><strong className="text-brand-text">Professional resources</strong> - When you need trained support beyond the community</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-primary mt-1">•</span>
                  <span className="text-body text-brand-muted"><strong className="text-brand-text">Healing crisis guides</strong> - Understanding what's happening and how to move through it</span>
                </li>
              </ul>

              <div className="bg-accent-primary/10 border border-accent-primary/20 rounded-2xl p-6 mt-8">
                <p className="text-body-sm text-brand-muted">
                  <strong className="text-accent-primary">Important:</strong> Inner Ascend is not a substitute for professional mental health care. If you're in crisis, please contact a crisis helpline or emergency services. The Emergency Toolkit complements—but does not replace—professional support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-h1 mb-6">
            Ready to Begin Your Practice?
          </h2>
          <p className="text-body-lg text-brand-muted mb-8">
            Join Inner Ascend and get immediate access to the full practices library, daily cosmic guidance, meditation library, and community support.
          </p>
          <Link to="/membership" className="inline-block px-10 py-5 bg-accent-primary text-white rounded-full font-semibold text-lg hover:bg-accent-primary/90 hover:shadow-2xl transition-all">
            Explore Membership
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PracticePage;
