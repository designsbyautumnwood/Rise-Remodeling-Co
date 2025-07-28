export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Kitchen Remodeling",
      description: "Transform your kitchen into the heart of your home with custom cabinetry, countertops, and modern appliances.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern kitchen renovation with marble countertops",
      features: ["Custom cabinetry design", "Countertop installation", "Appliance integration", "Lighting & electrical work"],
      badge: "Most Popular",
      badgeColor: "bg-gradient-to-r from-green-600/20 to-green-400/20 text-green-300"
    },
    {
      title: "Bathroom Renovation",
      description: "Create a spa-like retreat with modern fixtures, beautiful tile work, and thoughtful design.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury bathroom renovation with walk-in shower",
      features: ["Walk-in shower installation", "Vanity & storage solutions", "Tile & flooring", "Plumbing & fixtures"],
      badge: "Premium",
      badgeColor: "bg-gradient-to-r from-purple-600/20 to-purple-400/20 text-purple-300"
    },
    {
      title: "Doors & Windows",
      description: "Enhance your home's curb appeal and energy efficiency with quality door and window installations.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern front door installation with glass panels",
      features: ["Entry door replacement", "Window installation", "Weather sealing", "Hardware upgrades"]
    },
    {
      title: "Trim & Millwork",
      description: "Add character and elegance to your home with custom trim work and millwork installations.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Custom trim work and crown molding installation",
      features: ["Crown molding installation", "Baseboards & casings", "Wainscoting & paneling", "Built-in shelving"]
    },
    {
      title: "Flooring Solutions",
      description: "From hardwood to tile, we install beautiful flooring that stands the test of time.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Hardwood flooring installation in modern living room",
      features: ["Hardwood installation", "Tile & stone work", "Vinyl & laminate", "Subfloor preparation"]
    },
    {
      title: "Custom Projects",
      description: "Have a unique vision? We love bringing custom ideas to life with expert craftsmanship.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Custom built-in shelving and storage solutions",
      features: ["Built-in storage", "Custom shelving", "Unique installations", "Creative solutions"],
      badge: "Expert Craftsmanship",
      badgeColor: "bg-gradient-to-r from-blue-600/20 to-blue-400/20 text-blue-300"
    }
  ];

  return (
    <section id="services" className="section-padding modern-section">
      <div className="container-padding">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 modern-text-gradient">Our Specialty Services</h2>
          <p className="modern-subtitle max-w-3xl mx-auto">
            We specialize in the most impactful home renovations that add value and beauty to your space. 
            Each project is crafted with attention to detail and quality materials.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="modern-card p-6 sm:p-8 lg:p-10 stagger-animation relative cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 touch-manipulation"
              onClick={() => scrollToSection("contact")}
            >
              {service.badge && (
                <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-medium ${service.badgeColor} border border-white/20 backdrop-blur-sm z-10`}>
                  {service.badge}
                </div>
              )}
              <div className="rounded-xl mb-6 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 modern-accent">{service.title}</h3>
              <p className="modern-subtitle mb-4 text-sm">{service.description}</p>
              <ul className="text-sm text-gray-600 space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-4 text-center">
                <div className="inline-flex items-center text-primary text-sm font-medium">
                  Click to Get Quote
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-secondary/10 rounded-2xl p-8 slide-in-up glass-morph" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold mb-4 gradient-text">What Else Can We Help With?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your project listed? We're happy to discuss your renovation needs — big or small. 
            From minor repairs to major renovations, we have the expertise to bring your vision to life.
          </p>
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold hover-lift hover-glow pulse-glow"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
