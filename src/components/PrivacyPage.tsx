import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, Database, Users, Bell } from 'lucide-react';

const iconMap: Record<string, typeof Shield> = {
  shield: Shield,
  lock: Lock,
  eye: Eye,
  database: Database,
  users: Users,
  bell: Bell
};

export default function PrivacyPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 123, 247, 0.15), transparent 40%)`
  };

  const sections = [
    {
      icon: "shield",
      title: "Our Commitment",
      content: [
        "At Inner Ascend, we believe your privacy is fundamental. We're committed to being transparent about what data we collect and how we use it.",
        "This policy explains our practices regarding your personal information when you use our app and participate in our program."
      ]
    },
    {
      icon: "database",
      title: "Information We Collect",
      content: [
        "Email Address: When you create an account, we collect your email address to communicate with you about Inner Ascend.",
        "Usage Data: We collect anonymous usage data to improve the app and your experience.",
        "Program Progress: We track your journey through the modules to provide personalized guidance. This data is confidential and never shared."
      ]
    },
    {
      icon: "lock",
      title: "How We Use Your Information",
      content: [
        "To provide and improve our services",
        "To send you updates (you can unsubscribe anytime)",
        "To personalize your spiritual practice experience",
        "To ensure the security of our platform",
        "We never sell your personal data to third parties"
      ]
    },
    {
      icon: "eye",
      title: "Data Sharing",
      content: [
        "We do not sell, rent, or share your personal information with third parties for marketing purposes.",
        "We use trusted service providers (like email services) who are bound by confidentiality agreements.",
        "We may share anonymized, aggregated data for research and improvement purposes only."
      ]
    },
    {
      icon: "users",
      title: "Your Rights",
      content: [
        "Access: You can request a copy of your personal data anytime",
        "Correction: You can update or correct your information through the app",
        "Deletion: You can request deletion of your account and data",
        "Unsubscribe: You can opt out of marketing emails anytime",
        "Contact us at hello@inner-ascend.com to exercise these rights"
      ]
    },
    {
      icon: "bell",
      title: "Cookies and Tracking",
      content: [
        "We use essential cookies to make the app function properly.",
        "We use analytics to understand how people use Inner Ascend so we can improve it.",
        "You can disable cookies in your browser settings, though some features may not work properly."
      ]
    },
    {
      icon: "shield",
      title: "Security",
      content: [
        "We use industry-standard security measures to protect your data.",
        "Your data is encrypted in transit and at rest.",
        "We regularly review and update our security practices.",
        "However, no internet transmission method is 100% secure, and we cannot guarantee absolute security."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cosmic-black text-cosmic-silver overflow-hidden relative">
      {/* Animated cosmic background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-cosmic-violet rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '7s'}}></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '9s', animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDuration: '11s', animationDelay: '4s'}}></div>
      </div>

      {/* Mouse spotlight effect */}
      <div className="fixed inset-0 pointer-events-none" style={spotlightStyle}></div>

      <div className="relative z-10">
        {/* Back Button */}
        <div className="fixed top-4 left-4 z-50">
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cosmic-violet via-purple-400 to-cosmic-integration bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 mb-4">
              How we protect and handle your data
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: October 2025
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => {
              const IconComponent = iconMap[section.icon] || Shield;
              const gradients = [
                'from-cosmic-violet to-purple-500',
                'from-purple-500 to-cosmic-integration',
                'from-cosmic-integration to-blue-500',
                'from-blue-500 to-cosmic-violet',
                'from-cosmic-violet to-purple-500',
                'from-purple-500 to-cosmic-integration',
                'from-cosmic-integration to-blue-500'
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div key={index} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
                  <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 hover:border-white/10 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                        <div className="space-y-3">
                          {section.content.map((paragraph: string, pIndex: number) => (
                            <p key={pIndex} className="text-gray-400 leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Contact Section */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cosmic-violet via-purple-500 to-cosmic-integration rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-white/5 p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Questions?</h3>
                <p className="text-gray-400 mb-4">If you have any questions about this Privacy Policy, contact us at:</p>
                <a
                  href="mailto:hello@inner-ascend.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cosmic-violet to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cosmic-violet/50 transform hover:scale-105 transition-all"
                >
                  hello@inner-ascend.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500">
              © 2025 Inner Ascend • Being Human 101
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
