import { Clock, Hammer, Lightbulb, DollarSign, Zap, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Clock,
      title: "Reliability",
      description: "We show up on time, stick to schedules, and communicate clearly throughout your project."
    },
    {
      icon: Hammer,
      title: "Expert Craftsmanship",
      description: "Our skilled team takes pride in every detail, ensuring lasting quality in every project."
    },
    {
      icon: Lightbulb,
      title: "Creative Solutions",
      description: "We bring innovative ideas to maximize your space and create unique, personalized results."
    },
    {
      icon: DollarSign,
      title: "Fair Pricing",
      description: "Competitive rates with transparent pricing and no hidden fees. Quality work at fair prices."
    },
    {
      icon: Zap,
      title: "Timely Completion",
      description: "We respect your time and work efficiently to complete projects on schedule without compromising quality."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of Rock Hill building codes, weather patterns, and local home styles."
    }
  ];

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Rise Remodeling Co.?</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            We're not just contractors—we're your partners in creating the home of your dreams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                <p className="opacity-90">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
