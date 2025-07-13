import { MapPin } from "lucide-react";

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Modern Kitchen Transformation",
      description: "Complete kitchen remodel with custom cabinetry, quartz countertops, and stainless steel appliances.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern kitchen renovation in Rock Hill",
      location: "Rock Hill, SC"
    },
    {
      title: "Spa-Like Master Bath",
      description: "Luxurious bathroom renovation featuring a walk-in shower, dual vanities, and heated floors.",
      image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Luxury master bathroom renovation",
      location: "York County, SC"
    },
    {
      title: "Custom Trim & Millwork",
      description: "Elegant crown molding and custom trim work that adds character to this living space.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Custom trim work and crown molding installation",
      location: "Rock Hill, SC"
    },
    {
      title: "Front Door Transformation",
      description: "Complete entryway makeover with a new front door, sidelights, and updated hardware.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Modern front door installation and entryway",
      location: "York County, SC"
    },
    {
      title: "Hardwood Floor Installation",
      description: "Beautiful oak hardwood flooring throughout the main living areas of this Rock Hill home.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Hardwood flooring installation project",
      location: "Rock Hill, SC"
    },
    {
      title: "Custom Built-In Storage",
      description: "Maximized storage space with custom built-in shelving and cabinetry solutions.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Custom built-in shelving project",
      location: "York County, SC"
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-cream">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Recent Work</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how we've transformed homes across Rock Hill and York County. Each project tells a story of craftsmanship and customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
