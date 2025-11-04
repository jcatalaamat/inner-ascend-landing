import { Link } from 'react-router-dom';
import { Sparkles, Sunrise, Moon, Heart, Zap, Book, Users2, Flame, Wind, Waves, Mountain, Sun, Shield, Phone } from 'lucide-react';

function PracticePage() {
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
                <Link to="/practice" className="text-white font-semibold">
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
        <section className="pt-32 pb-24 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
                Your Daily Spiritual Practice
              </span>
            </h1>
            <p className="text-2xl text-gray-300 mb-6">
              Transformation doesn't happen in theory. It happens in the daily practice of showing up, feeling, and integrating.
            </p>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here's what members actually DO day-to-day—the practices, tools, and rhythms that turn insight into embodiment.
            </p>
          </div>
        </section>

        {/* Daily Rhythm Section */}
        <section className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Your Daily Rhythm
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Morning */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                  <Sunrise className="w-12 h-12 text-cosmic-violet mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Morning</h3>
                  <p className="text-sm text-cosmic-violet font-semibold mb-4">5 minutes</p>
                  <p className="text-gray-400 leading-relaxed">
                    Begin your day with cosmic guidance. Receive your daily astrology transit, Human Design activation, or Gene Keys contemplation. Set your intention for the work ahead.
                  </p>
                </div>
              </div>

              {/* Practice */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                  <Sun className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Practice</h3>
                  <p className="text-sm text-purple-400 font-semibold mb-4">15-30 minutes</p>
                  <p className="text-gray-400 leading-relaxed">
                    Dive into your chosen healing modality. Shadow work journaling, somatic releasing, meditation, feeling work, or digging into patterns. This is where the transformation happens.
                  </p>
                </div>
              </div>

              {/* Evening */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8 h-full">
                  <Moon className="w-12 h-12 text-cosmic-integration mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Evening</h3>
                  <p className="text-sm text-cosmic-integration font-semibold mb-4">2 minutes</p>
                  <p className="text-gray-400 leading-relaxed">
                    Reflect on your day. Track what you noticed, what you felt, what shifted. Integration happens in the witnessing. Share your insights with the community if you choose.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                <span className="text-cosmic-violet font-semibold">22-37 minutes</span> a day is all it takes to rewire decades of conditioning. Consistency creates transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Healing Modalities */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Healing Modalities
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              We don't just teach theory. We practice real, embodied healing work that addresses the root—not the symptom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Shadow Work */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Moon className="w-10 h-10 text-cosmic-violet mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Shadow Work</h3>
                  <p className="text-gray-400 text-sm">
                    Befriend your darkness. Explore the rejected, repressed parts of yourself and integrate them with compassion.
                  </p>
                </div>
              </div>

              {/* Somatic Practices */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Waves className="w-10 h-10 text-purple-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Somatic Practices</h3>
                  <p className="text-gray-400 text-sm">
                    Release trauma stored in the body. Shaking, breathwork, movement, and nervous system regulation.
                  </p>
                </div>
              </div>

              {/* Energy Clearing */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Zap className="w-10 h-10 text-cosmic-integration mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Energy Clearing</h3>
                  <p className="text-gray-400 text-sm">
                    Clear stuck energy, cords, and attachments. Practices for reclaiming your energetic sovereignty.
                  </p>
                </div>
              </div>

              {/* Feeling Work */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Heart className="w-10 h-10 text-pink-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Feeling Work</h3>
                  <p className="text-gray-400 text-sm">
                    Feel what you've been avoiding. Move through grief, rage, shame, and fear to find freedom on the other side.
                  </p>
                </div>
              </div>

              {/* Digging Work */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Mountain className="w-10 h-10 text-orange-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Digging Work</h3>
                  <p className="text-gray-400 text-sm">
                    Excavate your patterns, beliefs, and conditioning. Get to the root cause of your suffering.
                  </p>
                </div>
              </div>

              {/* Meditation & Breathwork */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Wind className="w-10 h-10 text-green-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Meditation & Breathwork</h3>
                  <p className="text-gray-400 text-sm">
                    Cultivate presence, stillness, and inner peace. Guided meditations and breath practices for all levels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mobile App */}
        <section className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              The Mobile App
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              The Inner Ascend app is your daily companion—a tool within the larger ecosystem to support your healing journey.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative group order-2 md:order-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-purple-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="h-96 bg-zinc-800/50 rounded-xl flex items-center justify-center text-gray-500">
                    [App Screenshots Mockup]
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <div className="flex items-start gap-4">
                  <Phone className="w-8 h-8 text-cosmic-violet mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Service Exchange</h3>
                    <p className="text-gray-400">
                      Offer and receive healing sessions, readings, coaching, and more. Connect with other members for trades and collaboration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Sparkles className="w-8 h-8 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Cosmic Guidance</h3>
                    <p className="text-gray-400">
                      Daily astrology transits, Human Design activations, Gene Keys contemplations—receive personalized guidance based on your chart.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Book className="w-8 h-8 text-cosmic-integration mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Meditation Library</h3>
                    <p className="text-gray-400">
                      Access 100+ guided meditations, breathwork sessions, and healing journeys organized by intention and modality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users2 className="w-8 h-8 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Community Connection</h3>
                    <p className="text-gray-400">
                      Stay connected with the community, receive updates on calls and events, and track your practice journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 italic">
                The app is one piece of the ecosystem—supporting your daily practice while you engage in the deeper work of community calls, service exchange, and collaborative projects.
              </p>
            </div>
          </div>
        </section>

        {/* 97 Practices Preview */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              The Healing Practices Library
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              97 practices (and growing) across every dimension of healing. These aren't just concepts—they're lived, embodied practices refined through years of deep work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {/* Emotional Healing */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Heart className="w-10 h-10 text-pink-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Emotional Healing</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Practices for processing grief, rage, shame, fear, and wounded emotions.
                  </p>
                  <p className="text-xs text-gray-500">
                    12 practices
                  </p>
                </div>
              </div>

              {/* Body & Energy */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Waves className="w-10 h-10 text-green-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Body & Energy</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Somatic practices, breathwork, energy clearing, and nervous system regulation.
                  </p>
                  <p className="text-xs text-gray-500">
                    18 practices
                  </p>
                </div>
              </div>

              {/* Relationship Healing */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Users2 className="w-10 h-10 text-purple-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Relationship Healing</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Attachment work, boundaries, communication, intimacy, and relational patterns.
                  </p>
                  <p className="text-xs text-gray-500">
                    15 practices
                  </p>
                </div>
              </div>

              {/* Shadow & Archetypal */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Moon className="w-10 h-10 text-cosmic-violet mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Shadow & Archetypal</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Working with shadow aspects, inner child, archetypes, and unconscious patterns.
                  </p>
                  <p className="text-xs text-gray-500">
                    14 practices
                  </p>
                </div>
              </div>

              {/* Spiritual Practices */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Sparkles className="w-10 h-10 text-cosmic-integration mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Spiritual Practices</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Meditation, presence work, surrender practices, and connecting with the divine.
                  </p>
                  <p className="text-xs text-gray-500">
                    16 practices
                  </p>
                </div>
              </div>

              {/* Life Design & Integration */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-xl border border-white/10 p-6">
                  <Flame className="w-10 h-10 text-orange-400 mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Life Design & Integration</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    Creating aligned life structures, purpose work, and integrating healing into daily life.
                  </p>
                  <p className="text-xs text-gray-500">
                    22 practices
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-300 mb-4">
                Each practice includes <span className="text-cosmic-violet font-semibold">step-by-step guidance, journal prompts, and integration exercises</span>.
              </p>
              <p className="text-gray-400">
                Members can filter by intention, time available, and current need—finding the exact practice for this moment.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Toolkit */}
        <section className="py-24 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-4xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-red-500/20 p-12">
                <div className="text-center mb-8">
                  <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
                  <h2 className="text-4xl font-bold mb-4 text-white">
                    Emergency Toolkit
                  </h2>
                  <p className="text-xl text-gray-300">
                    For healing crises, dark nights of the soul, and moments when the work feels overwhelming.
                  </p>
                </div>

                <div className="space-y-6 text-gray-300">
                  <p className="leading-relaxed">
                    Deep healing work can bring up intense emotions, memories, and experiences. The Emergency Toolkit provides:
                  </p>

                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-white">Crisis stabilization practices</strong> - Grounding techniques for when you're overwhelmed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-white">Nervous system reset tools</strong> - Immediate somatic practices to regulate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-white">Community support access</strong> - Connect with members who can hold space</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-white">Professional resources</strong> - When you need trained support beyond the community</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-white">Healing crisis guides</strong> - Understanding what's happening and how to move through it</span>
                    </li>
                  </ul>

                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mt-8">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      <strong className="text-red-400">Important:</strong> Inner Ascend is not a substitute for professional mental health care. If you're in crisis, please contact a crisis helpline or emergency services. The Emergency Toolkit complements—but does not replace—professional support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-violet to-purple-400 bg-clip-text text-transparent">
              Ready to Begin Your Practice?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join Inner Ascend and get immediate access to the full practices library, daily cosmic guidance, meditation library, and community support.
            </p>
            <Link to="/membership" className="inline-block px-10 py-5 bg-gradient-to-r from-cosmic-violet to-purple-500 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-cosmic-violet/50 transform hover:scale-105 transition-all">
              Explore Membership
            </Link>
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

export default PracticePage;
