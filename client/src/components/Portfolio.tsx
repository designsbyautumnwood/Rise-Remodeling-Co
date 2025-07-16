import { MapPin } from "lucide-react";
import { useState } from "react";
import bathroomImage from "@assets/IMG_0274_1752702485321.png";
import plumbingImage from "@assets/IMG_0276_1752702485321.png";
import projectImage1 from "@assets/508439585593227258_1752704169241.jpeg";
import projectImage2 from "@assets/9202957212892310662_1752704169242.jpeg";
import projectImage3 from "@assets/5113705536296508580_1752704207399.jpeg";

export default function Portfolio() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = [
    {
      title: "Bathroom Renovation",
      description: "Complete bathroom remodel with professional tile work and modern fixtures.",
      image: bathroomImage,
      alt: "Bathroom renovation with tile flooring in Rock Hill",
      location: "Rock Hill, SC"
    },
    {
      title: "Professional Plumbing Installation",
      description: "Quality plumbing fixture installation with precision brass fittings and professional workmanship.",
      image: plumbingImage,
      alt: "Professional plumbing fixture installation",
      location: "York County, SC"
    },
    {
      title: "Home Remodeling Project",
      description: "Professional renovation work showcasing quality craftsmanship and attention to detail.",
      image: projectImage1,
      alt: "Home remodeling project in Rock Hill",
      location: "Rock Hill, SC"
    },
    {
      title: "Custom Renovation Work",
      description: "Expert remodeling services with professional installation and finishing work.",
      image: projectImage2,
      alt: "Custom renovation project in York County",
      location: "York County, SC"
    },
    {
      title: "Professional Remodeling Services",
      description: "Quality renovation work with expert craftsmanship and professional results.",
      image: projectImage3,
      alt: "Professional remodeling project in Rock Hill",
      location: "Rock Hill, SC"
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
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              onMouseEnter={() => setHoveredImage(project.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover cursor-pointer"
                />
                {hoveredImage === project.image && (
                  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 pointer-events-none">
                    <div className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center p-8">
                      <img 
                        src={project.image}
                        alt={project.alt}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        style={{ minWidth: '400px', minHeight: '300px' }}
                      />
                    </div>
                  </div>
                )}
              </div>
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
