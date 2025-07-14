import { Shield, Award, Clock, ThumbsUp, Star } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Licensed & Insured",
      description: "Professional Contractor",
      color: "from-blue-600/20 to-blue-400/20"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-400" />,
      title: "20+ Years",
      description: "Combined Experience",
      color: "from-green-600/20 to-green-400/20"
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-orange-400" />,
      title: "Quality Work",
      description: "Professional Results",
      color: "from-orange-600/20 to-orange-400/20"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: "Rock Hill Local",
      description: "Serving York County",
      color: "from-purple-600/20 to-purple-400/20"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400" />,
      title: "Free Estimates",
      description: "No Obligation Quotes",
      color: "from-yellow-600/20 to-yellow-400/20"
    }
  ];

  return (
    <section className="section-padding modern-section-alt">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Rise Remodeling?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your home deserves the best. We're committed to delivering exceptional results with every project.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl bg-gradient-to-br ${badge.color} border border-white/10 backdrop-blur-sm modern-hover-lift text-center hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300`}
          >
            <div className="flex justify-center mb-4">
              {badge.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{badge.title}</h3>
            <p className="text-sm text-muted-foreground">{badge.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}