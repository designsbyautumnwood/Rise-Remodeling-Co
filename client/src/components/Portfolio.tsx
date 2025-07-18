import { MapPin, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import bathroomImage from "@assets/IMG_0274_1752702485321.png";
import plumbingImage from "@assets/IMG_0276_1752702485321.png";
import projectImage1 from "@assets/508439585593227258_1752704169241.jpeg";
import projectImage2 from "@assets/9202957212892310662_1752704169242.jpeg";
import projectImage3 from "@assets/5113705536296508580_1752704207399.jpeg";

export default function Portfolio() {
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [imagePosition, setImagePosition] = useState({ top: 0, bottom: 0 });
  const imageRefs = useRef<{ [key: string]: HTMLImageElement | null }>({});
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Check if device is mobile/tablet
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  // Handle image click to enlarge
  const handleImageClick = (imageSrc: string, event: React.MouseEvent) => {
    event.stopPropagation();
    if (enlargedImage === imageSrc) {
      setEnlargedImage(null);
      return;
    }
    
    // Store the position of the clicked image
    const imageElement = imageRefs.current[imageSrc];
    if (imageElement) {
      const rect = imageElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setImagePosition({
        top: rect.top + scrollTop,
        bottom: rect.bottom + scrollTop
      });
    }
    
    setEnlargedImage(imageSrc);
  };

  // Handle scroll detection to minimize enlarged image on mobile
  useEffect(() => {
    if (!enlargedImage || !isMobile()) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const currentViewTop = scrollTop;
      const currentViewBottom = scrollTop + windowHeight;

      // Check if the original image is no longer visible
      const imageVisibleThreshold = 100; // pixels
      const imageIsVisible = 
        imagePosition.bottom >= currentViewTop - imageVisibleThreshold &&
        imagePosition.top <= currentViewBottom + imageVisibleThreshold;

      if (!imageIsVisible) {
        setEnlargedImage(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enlargedImage, imagePosition, isMobile]);

  // Handle clicking outside enlarged image to close
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setEnlargedImage(null);
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
            >
              <div className="relative">
                <img 
                  ref={(el) => (imageRefs.current[project.image] = el)}
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={(e) => handleImageClick(project.image, e)}
                />
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

      {/* Enlarged Image Overlay */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <img 
              src={enlargedImage}
              alt="Enlarged project image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              style={{ minWidth: '300px', minHeight: '200px' }}
            />
            <button
              onClick={() => setEnlargedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors"
              aria-label="Close enlarged image"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
