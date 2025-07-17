import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Phone } from "lucide-react";
import riseLogoImage from "@assets/Rise_Hammer_Icon_Transparent_Cleaned_1752778537067.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "modern-header modern-shadow" : "modern-header"
    }`}>
      <nav className="container-padding py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 hover-scale">
            <div className="flex items-center p-1">
              <img 
                src={riseLogoImage} 
                alt="Rise Remodeling Co. Logo" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                style={{ 
                  filter: 'invert(1) brightness(1.5)',
                  background: 'transparent'
                }}
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-blue-400">Rise Remodeling Co</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">"Born to Last, Built to Belong"</p>
            </div>
          </div>

          {/* Mobile Contact Button - Fixed in center */}
          {isMobile && (
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold text-sm touch-manipulation hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              <button onClick={() => scrollToSection("services")} className="modern-nav-item">
                Services
              </button>
              <button onClick={() => scrollToSection("about")} className="modern-nav-item">
                About
              </button>
              <button onClick={() => scrollToSection("portfolio")} className="modern-nav-item">
                Portfolio
              </button>
              <button onClick={() => scrollToSection("testimonials")} className="modern-nav-item">
                Reviews
              </button>
              <button onClick={() => scrollToSection("faq")} className="modern-nav-item">
                FAQ
              </button>
              <button onClick={() => scrollToSection("contact")} className="modern-nav-item">
                Contact
              </button>
            </div>
          )}

          {/* CTA Button */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <a href="tel:+18032038664" className="text-primary hover:text-secondary transition-colors flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (803) 203-8664
              </a>
              <button onClick={() => scrollToSection("contact")} className="modern-button">
                Get Free Quote
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 sm:p-3 touch-manipulation relative z-10"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div className={`${isMenuOpen ? "block" : "hidden"} pt-4 pb-3 space-y-1 border-t border-white/10 mt-4`}>
            <button onClick={() => { scrollToSection("services"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:text-secondary transition-colors text-base font-medium touch-manipulation">
              Services
            </button>
            <button onClick={() => { scrollToSection("about"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:text-secondary transition-colors text-base font-medium touch-manipulation">
              About
            </button>
            <button onClick={() => { scrollToSection("portfolio"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:text-secondary transition-colors text-base font-medium touch-manipulation">
              Portfolio
            </button>
            <button onClick={() => { scrollToSection("testimonials"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:text-secondary transition-colors text-base font-medium touch-manipulation">
              Reviews
            </button>
            <button onClick={() => { scrollToSection("faq"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:text-secondary transition-colors text-base font-medium touch-manipulation">
              FAQ
            </button>
            <button onClick={() => { scrollToSection("contact"); setIsMenuOpen(false); }} className="block w-full text-left px-4 py-3 hover:text-secondary transition-colors text-base font-medium touch-manipulation">
              Contact
            </button>
            <div className="pt-4 border-t border-white/10">
              <a href="tel:+18032038664" className="flex items-center px-4 py-3 text-primary hover:text-secondary text-base font-medium touch-manipulation">
                <Phone className="w-5 h-5 mr-3" />
                (803) 203-8664
              </a>
              <button onClick={() => { scrollToSection("contact"); setIsMenuOpen(false); }} className="btn-primary w-full mx-4 mt-3 py-3 text-base font-semibold touch-manipulation">
                Get Free Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
