import { Link } from 'react-router-dom';
import { Sparkles, Heart, Users, BookOpen, Sprout, TreePine, Star, ArrowRight, Network } from 'lucide-react';

function CommunityPage() {
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
                <Link to="/community" className="text-white font-semibold">
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
                A Community of Healers, Teachers, and Seekers
              </span>
            </h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              Meet the humans behind Inner Ascend. Some are healing. Some are teaching. All are doing the work.
            </p>
          </div>
        </section>

        {/* Section 1: Founder Story - Why Train Facilitators */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Founder photo placeholder */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold via-warm-coral to-warm-purple rounded-2xl blur opacity-30 group-hover:opacity-40 transition"></div>
                <div className="relative bg-white/5 rounded-2xl aspect-square flex items-center justify-center border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                  <div className="text-center space-y-4 p-8">
                    <div className="text-6xl mb-4">🌅</div>
                    <p className="text-gray-400 text-lg">Founder Photo</p>
                    <p className="text-gray-500 text-sm">
                      (In ceremony, nature, or authentic stillness)
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Founder story */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-warm-gold to-warm-coral bg-clip-text text-transparent">
                  Why I'm Training Facilitators, Not Just Healing People
                </h2>

                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Early on, I realized something crucial: <span className="text-warm-coral font-semibold">I can't hold space for everyone alone</span>.
                  </p>

                  <p>
                    I've done my own deep healing work. I've trained in trauma-informed practices, somatic healing, shadow work. I could offer circles, 1-on-1 sessions, support. But there's a limit to how many humans one person can hold.
                  </p>

                  <p>
                    That's when the vision became clear: <span className="text-warm-gold font-semibold">Train facilitators → they train others → exponential healing</span>.
                  </p>

                  <p>
                    The new paradigm we're building doesn't need one guru at the top. It needs <span className="text-warm-purple font-semibold">hundreds of trained facilitators</span> holding space in their communities, in physical villages, in circles around the world.
                  </p>

                  <p>
                    So I built Inner Ascend as a <span className="text-cosmic-integration font-semibold">training school</span>. Members join to heal themselves. Some discover they want to hold space for others. They enter facilitator training. They learn trauma-informed practices, somatic work, how to create safe containers. They start co-facilitating circles with mentors. Eventually, they hold their own circles, offer 1-on-1 sessions, train the next generation.
                  </p>

                  <p>
                    The monthly membership (starting at €22) makes this training accessible. You don't need to drop €5,000 on a retreat to become a facilitator. You can learn while you heal, in community, over time.
                  </p>

                  <p className="text-warm-gold font-semibold text-xl pt-4 border-l-4 border-warm-gold pl-6 italic">
                    "I didn't build Inner Ascend to be the teacher forever. I built it to train a generation of facilitators who will train the next generation. This is a lineage, not a leader."
                  </p>

                  <p className="pt-4">
                    Physical villages need trained space holders. Online communities need facilitators who've done the work themselves. This is infrastructure for the future we're building.
                  </p>

                  <p className="text-gray-400 italic text-base">
                    — The Founder (name + photo coming soon)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Current Facilitators */}
        <section className="py-32 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-purple to-cosmic-violet bg-clip-text text-transparent">
                Meet Our Facilitators
              </h2>
              <p className="text-xl text-gray-300">
                These are the humans holding space for our circles. They started as members. Now they teach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Facilitator Card 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/30 hover:border-warm-purple/50 transition-all h-full flex flex-col">
                  {/* Photo placeholder */}
                  <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center mb-6 border border-warm-purple/20">
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs text-gray-500">Photo</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Sarah Martinez</h3>
                  <p className="text-warm-purple font-semibold text-sm mb-4">Circle Facilitator & 1-on-1 Practitioner</p>

                  <div className="space-y-3 mb-6 text-sm text-gray-400">
                    <p><span className="text-gray-500">Member since:</span> January 2024</p>
                    <p><span className="text-gray-500">Facilitator since:</span> October 2024</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Offers:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Weekly shadow work circles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>1-on-1 deep dive sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Text support packages</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-1">Focus:</p>
                    <p className="text-sm text-gray-300">Shadow work, somatic healing, ancestral patterns</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-300 italic leading-relaxed">
                      "I joined to heal my own trauma. Now I get to hold space for others doing the same work. This lineage saved my life, and now I'm passing it forward."
                    </p>
                  </div>
                </div>
              </div>

              {/* Facilitator Card 2 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/30 hover:border-warm-purple/50 transition-all h-full flex flex-col">
                  {/* Photo placeholder */}
                  <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center mb-6 border border-warm-purple/20">
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs text-gray-500">Photo</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Marcus Chen</h3>
                  <p className="text-warm-purple font-semibold text-sm mb-4">Somatic Practitioner & Circle Guide</p>

                  <div className="space-y-3 mb-6 text-sm text-gray-400">
                    <p><span className="text-gray-500">Member since:</span> March 2024</p>
                    <p><span className="text-gray-500">Facilitator since:</span> November 2024</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Offers:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Somatic healing circles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Breathwork & body-based sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Nervous system regulation support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-1">Focus:</p>
                    <p className="text-sm text-gray-300">Somatic experiencing, breathwork, nervous system healing</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-300 italic leading-relaxed">
                      "Learning to facilitate while healing myself was the most transformative path. Now I witness others finding their bodies again. It's sacred work."
                    </p>
                  </div>
                </div>
              </div>

              {/* Facilitator Card 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/30 hover:border-warm-purple/50 transition-all h-full flex flex-col">
                  {/* Photo placeholder */}
                  <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center mb-6 border border-warm-purple/20">
                    <div className="text-center">
                      <div className="text-5xl mb-2">👤</div>
                      <p className="text-xs text-gray-500">Photo</p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">River Thompson</h3>
                  <p className="text-warm-purple font-semibold text-sm mb-4">Energy Work & Integration Guide</p>

                  <div className="space-y-3 mb-6 text-sm text-gray-400">
                    <p><span className="text-gray-500">Member since:</span> February 2024</p>
                    <p><span className="text-gray-500">Facilitator since:</span> September 2024</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Offers:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Energy clearing circles</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Integration support sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-warm-purple mt-1">•</span>
                        <span>Plant medicine integration</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-1">Focus:</p>
                    <p className="text-sm text-gray-300">Energy work, plant medicine integration, spiritual emergence</p>
                  </div>

                  <div className="mt-auto pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-300 italic leading-relaxed">
                      "I came here broken from a difficult ceremony. The community held me. Now I hold space for others integrating their own spiritual awakenings."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Facilitators-in-Training */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cosmic-integration to-warm-purple bg-clip-text text-transparent">
                Facilitators-in-Training
              </h2>
              <p className="text-xl text-gray-300">
                These members are learning to hold space. They're co-facilitating circles, receiving mentorship, and preparing to teach.
              </p>
            </div>

            <div className="space-y-8">
              {/* Training Story 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-warm-purple rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl border border-cosmic-integration/30 hover:border-cosmic-integration/50 transition-all">
                  <div className="grid md:grid-cols-5 gap-6 p-8">
                    {/* Photo left */}
                    <div className="md:col-span-1">
                      <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center border border-cosmic-integration/20">
                        <div className="text-center">
                          <div className="text-4xl mb-1">👤</div>
                          <p className="text-xs text-gray-500">Photo</p>
                        </div>
                      </div>
                    </div>

                    {/* Content right */}
                    <div className="md:col-span-4 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Alex Chen</h3>
                        <p className="text-cosmic-integration font-semibold text-sm">Facilitator-in-Training</p>
                      </div>

                      <div className="flex gap-6 text-sm text-gray-400">
                        <p><span className="text-gray-500">Member since:</span> June 2024</p>
                        <p><span className="text-gray-500">Training since:</span> December 2024</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-400 mb-2">Currently:</p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Co-facilitating circles with mentor Sarah</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Learning trauma-informed facilitation practices</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Building my own facilitation voice and style</span>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-300 italic leading-relaxed">
                          "I never thought I could hold space for others. But after healing myself for 6 months, I felt the call to give back. The training is challenging and beautiful. I'm learning that I don't need to be 'healed' to facilitate—I just need to be honest about where I am."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Story 2 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-warm-purple rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl border border-cosmic-integration/30 hover:border-cosmic-integration/50 transition-all">
                  <div className="grid md:grid-cols-5 gap-6 p-8">
                    {/* Photo left */}
                    <div className="md:col-span-1">
                      <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center border border-cosmic-integration/20">
                        <div className="text-center">
                          <div className="text-4xl mb-1">👤</div>
                          <p className="text-xs text-gray-500">Photo</p>
                        </div>
                      </div>
                    </div>

                    {/* Content right */}
                    <div className="md:col-span-4 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Maya Patel</h3>
                        <p className="text-cosmic-integration font-semibold text-sm">Facilitator-in-Training</p>
                      </div>

                      <div className="flex gap-6 text-sm text-gray-400">
                        <p><span className="text-gray-500">Member since:</span> April 2024</p>
                        <p><span className="text-gray-500">Training since:</span> November 2024</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-400 mb-2">Currently:</p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Shadowing Marcus in somatic circles</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Practicing holding space in small group settings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Studying power dynamics and cultural humility</span>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-300 italic leading-relaxed">
                          "As a woman of color, I was nervous about becoming a facilitator. Would I be accepted? Could I hold authority without mimicking white wellness culture? The training has taught me that my lived experience IS my medicine. I don't need to be anyone else."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Training Story 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-warm-purple rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl border border-cosmic-integration/30 hover:border-cosmic-integration/50 transition-all">
                  <div className="grid md:grid-cols-5 gap-6 p-8">
                    {/* Photo left */}
                    <div className="md:col-span-1">
                      <div className="bg-white/5 rounded-xl aspect-square flex items-center justify-center border border-cosmic-integration/20">
                        <div className="text-center">
                          <div className="text-4xl mb-1">👤</div>
                          <p className="text-xs text-gray-500">Photo</p>
                        </div>
                      </div>
                    </div>

                    {/* Content right */}
                    <div className="md:col-span-4 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">Jordan Lee</h3>
                        <p className="text-cosmic-integration font-semibold text-sm">Facilitator-in-Training</p>
                      </div>

                      <div className="flex gap-6 text-sm text-gray-400">
                        <p><span className="text-gray-500">Member since:</span> May 2024</p>
                        <p><span className="text-gray-500">Training since:</span> January 2025</p>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-400 mb-2">Currently:</p>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Beginning co-facilitation training</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Learning to hold boundaries and safe containers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-cosmic-integration mt-1">•</span>
                            <span>Developing my somatic awareness as a facilitator</span>
                          </li>
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-white/10">
                        <p className="text-gray-300 italic leading-relaxed">
                          "I'm only a month into training and already I see how much there is to learn. It's humbling. The mentorship model means I'm never alone—I have River guiding me, checking in, helping me process what comes up when I hold space. This is the lineage in action."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Member Stories */}
        <section className="py-32 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-coral to-warm-gold bg-clip-text text-transparent">
                Members: The Foundation
              </h2>
              <p className="text-xl text-gray-300">
                Most of our community is here to heal, not teach. And that's sacred. These are the members doing the inner work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Member Card 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-6 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  {/* Anonymous initials */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-warm-coral/10 rounded-full flex items-center justify-center border border-warm-coral/30">
                    <span className="text-2xl font-bold text-warm-coral">JR</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 text-center">Jordan</h3>
                  <p className="text-warm-coral text-xs mb-4 text-center font-semibold">They/Them</p>

                  <p className="text-sm text-gray-400 mb-4 text-center">Member since: March 2024</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 text-center">Healing:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="text-center">Childhood trauma</li>
                      <li className="text-center">Codependency patterns</li>
                      <li className="text-center">Learning to feel emotions</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-300 italic leading-relaxed text-center">
                      "I'm not interested in becoming a facilitator. I'm just here to heal myself. The community holds me while I do the messiest work of my life. That's enough."
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Card 2 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-6 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  {/* Photo placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center border border-warm-coral/20">
                    <div className="text-center">
                      <div className="text-2xl">👤</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 text-center">Priya K.</h3>
                  <p className="text-warm-coral text-xs mb-4 text-center font-semibold">She/Her</p>

                  <p className="text-sm text-gray-400 mb-4 text-center">Member since: July 2024</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 text-center">Healing:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="text-center">Intergenerational trauma</li>
                      <li className="text-center">Cultural identity wounds</li>
                      <li className="text-center">Finding my voice</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-300 italic leading-relaxed text-center">
                      "The AI chat helps me process between circles. I can be honest about the hard stuff without performing. It's the daily support I needed."
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Card 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-6 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  {/* Anonymous initials */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-warm-coral/10 rounded-full flex items-center justify-center border border-warm-coral/30">
                    <span className="text-2xl font-bold text-warm-coral">DM</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 text-center">Anonymous</h3>
                  <p className="text-warm-coral text-xs mb-4 text-center font-semibold">He/Him</p>

                  <p className="text-sm text-gray-400 mb-4 text-center">Member since: September 2024</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 text-center">Healing:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="text-center">Addiction recovery</li>
                      <li className="text-center">Shame & self-worth</li>
                      <li className="text-center">Rebuilding trust</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-300 italic leading-relaxed text-center">
                      "I stay anonymous but I show up. The circles give me a place to be real without judgment. That's what I need right now."
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Card 4 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-6 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  {/* Photo placeholder */}
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center border border-warm-coral/20">
                    <div className="text-center">
                      <div className="text-2xl">👤</div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 text-center">Lena W.</h3>
                  <p className="text-warm-coral text-xs mb-4 text-center font-semibold">She/Her</p>

                  <p className="text-sm text-gray-400 mb-4 text-center">Member since: January 2025</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 mb-2 text-center">Healing:</p>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li className="text-center">Burnout & exhaustion</li>
                      <li className="text-center">People-pleasing patterns</li>
                      <li className="text-center">Setting boundaries</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-gray-300 italic leading-relaxed text-center">
                      "I'm new but I already feel held. The buddy matching connected me with someone who gets it. We check in daily. It's exactly what I needed."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-400 italic">
                Most members stay in this stage. Healing yourself IS the work. You don't need to become a facilitator to belong here.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: The Lineage - Ripple Effect */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-cosmic-integration bg-clip-text text-transparent">
                The Lineage: Teaching Begets Teaching
              </h2>
              <p className="text-xl text-gray-300">
                This is how we heal a generation. Members become facilitators. Facilitators train the next generation. The ripple never stops.
              </p>
            </div>

            {/* Visual Diagram */}
            <div className="mb-16 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold via-warm-coral to-warm-purple rounded-2xl blur opacity-20"></div>
              <div className="relative bg-white/5 rounded-2xl p-12 border border-warm-gold/30">
                <div className="space-y-8 text-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-24 h-24 rounded-full bg-warm-gold/20 border-2 border-warm-gold flex items-center justify-center">
                      <Sprout className="w-12 h-12 text-warm-gold" />
                    </div>
                    <p className="text-xl font-bold text-warm-gold">Founder</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-warm-gold transform rotate-90" />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-4 justify-center flex-wrap">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-16 h-16 rounded-full bg-warm-purple/20 border-2 border-warm-purple flex items-center justify-center">
                          <Users className="w-8 h-8 text-warm-purple" />
                        </div>
                      ))}
                    </div>
                    <p className="text-lg font-bold text-warm-purple">Trains 5 Facilitators</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-warm-purple transform rotate-90" />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                      {[...Array(50)].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-warm-coral/20 border border-warm-coral flex items-center justify-center">
                          <Heart className="w-4 h-4 text-warm-coral" />
                        </div>
                      ))}
                    </div>
                    <p className="text-lg font-bold text-warm-coral">Each trains 10 members = 50 members heal</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-warm-coral transform rotate-90" />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-3 justify-center flex-wrap">
                      {[...Array(10)].map((_, i) => (
                        <div key={i} className="w-12 h-12 rounded-full bg-cosmic-integration/20 border border-cosmic-integration flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-cosmic-integration" />
                        </div>
                      ))}
                    </div>
                    <p className="text-lg font-bold text-cosmic-integration">10 members become facilitators</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-8 h-8 text-cosmic-integration transform rotate-90" />
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <Network className="w-24 h-24 text-warm-gold" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-warm-gold via-warm-coral to-warm-purple bg-clip-text text-transparent">
                      Exponential Growth
                    </p>
                    <p className="text-gray-400">100+ members healed, 15 total facilitators, and growing...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Text */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-warm-coral rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  This isn't a guru model. I'm not the healer. <span className="text-warm-gold font-semibold">WE are the healers</span>. Every facilitator trained multiplies the healing capacity of Inner Ascend.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Within 5 years, we'll have <span className="text-warm-purple font-semibold">100+ facilitators</span> holding space globally. Within 10 years, <span className="text-cosmic-integration font-semibold">physical villages</span> held by trained facilitators.
                </p>

                <p className="text-xl text-warm-gold font-semibold leading-relaxed">
                  This is infrastructure, not celebrity. This is lineage, not leadership. This is how we heal a generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Who Joins (Updated) */}
        <section className="py-32 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-coral to-warm-purple bg-clip-text text-transparent">
                Who's in the Community
              </h2>
              <p className="text-xl text-gray-300">
                Three paths. One community. All sacred.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Healers (Members) */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Healers (Members)</h3>
                  <ul className="space-y-3 text-gray-300 leading-relaxed mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-warm-coral mt-1">•</span>
                      <span>Here to heal their own trauma</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-coral mt-1">•</span>
                      <span>Not interested in teaching (for now or ever)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-coral mt-1">•</span>
                      <span>Participating in circles, using app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-coral mt-1">•</span>
                      <span>Doing the inner work</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 italic border-t border-white/10 pt-4">
                    Sacred and valued. Most members stay here. Healing yourself IS the work.
                  </p>
                </div>
              </div>

              {/* Teachers (Facilitators) */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">🌳</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Teachers (Facilitators)</h3>
                  <ul className="space-y-3 text-gray-300 leading-relaxed mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Trained to hold space</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Offering circles, 1-on-1s, text support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Building their practice on platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-warm-purple mt-1">•</span>
                      <span>Earning income, nourishing students</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 italic border-t border-white/10 pt-4">
                    Passing forward what they received. The lineage in action.
                  </p>
                </div>
              </div>

              {/* Seekers (Everyone) */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-all">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">✨</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Seekers (Everyone)</h3>
                  <ul className="space-y-3 text-gray-300 leading-relaxed mb-6">
                    <li className="flex items-start gap-2">
                      <span className="text-cosmic-violet mt-1">•</span>
                      <span>Digital nomads, consciousness shifters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cosmic-violet mt-1">•</span>
                      <span>Empaths, introverts, HSPs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cosmic-violet mt-1">•</span>
                      <span>Recovering people-pleasers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cosmic-violet mt-1">•</span>
                      <span>New paradigm humans</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-400 italic border-t border-white/10 pt-4">
                    Doing real work, not performative wellness. All stages welcome.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: The Vibe (Updated) */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-purple to-cosmic-violet bg-clip-text text-transparent">
                The Vibe
              </h2>
              <p className="text-xl text-gray-300">
                What makes this different from other "healing communities"
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🔥</span>
                  Real Healing, Not Performative Wellness
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We do the messy shadow work. We talk about trauma, triggers, and patterns. No toxic positivity, no spiritual bypassing, no pretending to be "healed" when we're still bleeding. Just real humans doing real work.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">💚</span>
                  Low Barrier, High Commitment
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  €22 to start. Cancel anytime. No one gets locked into expensive packages or pressured to "level up." But if you stay, you show up. You do the work. You're honest. You hold space for others.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎁</span>
                  Gift Economy Mindset
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Service exchange, skill swapping, mutual support. We're building an alternative economy based on reciprocity, not extraction. Your gifts matter here. Community over consumption.
                </p>
              </div>

              <div className="bg-white/5 rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🌱</span>
                  Built by Real Humans, Not Faceless Tech
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  This isn't venture-backed SaaS trying to "scale wellness." This is built by someone who's been through their own healing journey and knows what it's like to need support at 3am in a foreign city. We're building this together, iteratively, based on what the community actually needs.
                </p>
              </div>

              {/* NEW CARD: Lineage, Not Leader */}
              <div className="bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🌳</span>
                  Lineage, Not Leader
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're not following one guru. We're building a lineage of facilitators. The founder trains facilitators. Facilitators train members. Members become facilitators. Power is distributed, not hoarded. This is participatory healing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Testimonials by Stage */}
        <section className="py-32 px-4 bg-cosmic-dark/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-warm-gold to-warm-coral bg-clip-text text-transparent">
                Voices from the Community
              </h2>
              <p className="text-gray-400 italic">(Real testimonials coming as community grows)</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Member Testimonial */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-gold rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Sprout className="w-5 h-5 text-warm-coral" />
                    <span className="text-xs font-bold text-warm-coral uppercase tracking-wide">Member</span>
                  </div>
                  <div className="text-4xl mb-4">💛</div>
                  <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                    "I joined to heal my anxiety. The circles and AI chat support me every day. I'm not sure if I'll become a facilitator, but knowing the path exists feels empowering."
                  </p>
                  <p className="text-sm text-gray-500">— Maya, Community Member</p>
                </div>
              </div>

              {/* Training Testimonial */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-integration to-warm-purple rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-cosmic-integration/20 hover:border-cosmic-integration/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-cosmic-integration" />
                    <span className="text-xs font-bold text-cosmic-integration uppercase tracking-wide">Facilitator-in-Training</span>
                  </div>
                  <div className="text-4xl mb-4">🔥</div>
                  <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                    "I've been a member for 9 months. Last month I applied for facilitator training. Co-facilitating my first circle was terrifying and beautiful. I'm learning that I don't need to be perfect to hold space."
                  </p>
                  <p className="text-sm text-gray-500">— Jordan, Facilitator-in-Training</p>
                </div>
              </div>

              {/* Facilitator Testimonial */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-purple to-cosmic-violet rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-purple/20 hover:border-warm-purple/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <TreePine className="w-5 h-5 text-warm-purple" />
                    <span className="text-xs font-bold text-warm-purple uppercase tracking-wide">Facilitator</span>
                  </div>
                  <div className="text-4xl mb-4">✨</div>
                  <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                    "I started as a broken member in January. By October I was holding my own circles. Now I have 12 regular students and earn enough to sustain my nomadic lifestyle. This lineage changed everything."
                  </p>
                  <p className="text-sm text-gray-500">— Sarah, Circle Facilitator</p>
                </div>
              </div>

              {/* Digital Nomad Testimonial */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-violet to-cosmic-integration rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-cosmic-violet/20 hover:border-cosmic-violet/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-5 h-5 text-cosmic-violet" />
                    <span className="text-xs font-bold text-cosmic-violet uppercase tracking-wide">Seeker</span>
                  </div>
                  <div className="text-4xl mb-4">🌍</div>
                  <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                    "As a nomad, I've felt so isolated in my healing. Finding this community gave me consistent support no matter what timezone I'm in. The app + circles combination is exactly what I needed."
                  </p>
                  <p className="text-sm text-gray-500">— Alex, Digital Nomad in Bali</p>
                </div>
              </div>

              {/* Gift Economy Testimonial */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-gold to-warm-coral rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-gold/20 hover:border-warm-gold/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-warm-gold" />
                    <span className="text-xs font-bold text-warm-gold uppercase tracking-wide">Member</span>
                  </div>
                  <div className="text-4xl mb-4">🎁</div>
                  <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                    "The service exchange marketplace is revolutionary. I traded graphic design for a healing session. We're building reciprocity, not transactions. This is the new paradigm in action."
                  </p>
                  <p className="text-sm text-gray-500">— River, Gift Economy Advocate</p>
                </div>
              </div>

              {/* Accessibility Testimonial */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-warm-coral to-warm-purple rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
                <div className="relative bg-white/5 rounded-2xl p-8 border border-warm-coral/20 hover:border-warm-coral/40 transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <Sprout className="w-5 h-5 text-warm-coral" />
                    <span className="text-xs font-bold text-warm-coral uppercase tracking-wide">Member</span>
                  </div>
                  <div className="text-4xl mb-4">💚</div>
                  <p className="text-lg text-gray-300 italic mb-6 leading-relaxed">
                    "Finally, a healing space that doesn't cost hundreds per month. €22 made this accessible when I was broke and broken. Now I'm healing without financial stress."
                  </p>
                  <p className="text-sm text-gray-500">— Priya, Artist & Consciousness Explorer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-warm-gold via-warm-coral to-warm-purple bg-clip-text text-transparent">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Whether you're here to heal or to teach (or both), you belong here.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link
                to="/membership"
                className="inline-block px-12 py-5 bg-gradient-to-r from-warm-coral to-warm-purple text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-warm-coral/50 transform hover:scale-105 transition-all"
              >
                Start as a Member (€22/month) →
              </Link>

              <Link
                to="/membership"
                className="inline-block px-12 py-5 bg-white/5 border-2 border-warm-purple text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all"
              >
                Learn About Facilitator Training →
              </Link>
            </div>

            <p className="text-gray-400 mt-8">
              No gatekeeping. No upsells. Just real humans doing real work.
            </p>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-gray-400 italic">
                Questions? Check out the <Link to="/membership" className="text-warm-coral hover:text-warm-gold transition-colors underline">membership page</Link> or reach out to <Link to="/support" className="text-warm-coral hover:text-warm-gold transition-colors underline">support</Link>.
              </p>
            </div>
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

export default CommunityPage;
