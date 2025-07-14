import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Phone } from "lucide-react";
import TransparentHammerLogo from "./TransparentHammerLogo";
import TransparentTextLogo from "./TransparentTextLogo";

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
      <nav className="container-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 hover-scale">
            <TransparentHammerLogo className="w-10 h-10 text-primary float-animation" />
            <div>
              <TransparentTextLogo className="h-8 text-primary hover-glow" />
              <p className="text-sm text-muted-foreground hidden sm:block">Born to Belong, Built to Last</p>
            </div>
          </div>

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
                Get Free Estimate
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div className={`${isMenuOpen ? "block" : "hidden"} pt-4 pb-3 space-y-1`}>
            <button onClick={() => scrollToSection("services")} className="block w-full text-left px-3 py-2 hover:text-secondary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("about")} className="block w-full text-left px-3 py-2 hover:text-secondary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="block w-full text-left px-3 py-2 hover:text-secondary transition-colors">
              Portfolio
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="block w-full text-left px-3 py-2 hover:text-secondary transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection("faq")} className="block w-full text-left px-3 py-2 hover:text-secondary transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("contact")} className="block w-full text-left px-3 py-2 hover:text-secondary transition-colors">
              Contact
            </button>
            <div className="pt-4 border-t">
              <a href="tel:+18032038664" className="flex items-center px-3 py-2 text-primary hover:text-secondary">
                <Phone className="w-4 h-4 mr-2" />
                (803) 203-8664
              </a>
              <button onClick={() => scrollToSection("contact")} className="btn-primary w-full mx-3 mt-2">
                Get Free Estimate
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
