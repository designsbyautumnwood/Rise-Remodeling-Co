import { Facebook, Twitter, Linkedin } from "lucide-react";
import TransparentHammerLogo from "./TransparentHammerLogo";
import TransparentTextLogo from "./TransparentTextLogo";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white section-padding">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <TransparentHammerLogo className="w-10 h-10 text-white" />
              <div>
                <TransparentTextLogo className="h-8 text-white" />
                <p className="text-sm opacity-80">Born to Belong, Built to Last</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Transforming Rock Hill homes with expert craftsmanship and personalized service. 
              Your vision, our expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-secondary transition-colors">
                  Kitchen Remodeling
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-secondary transition-colors">
                  Bathroom Renovation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-secondary transition-colors">
                  Doors & Windows
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-secondary transition-colors">
                  Trim & Millwork
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-secondary transition-colors">
                  Flooring Solutions
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-secondary transition-colors">
                  Custom Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-secondary transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("portfolio")} className="hover:text-secondary transition-colors">
                  Our Work
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("testimonials")} className="hover:text-secondary transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="hover:text-secondary transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-secondary transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-secondary transition-colors">
                  Free Estimate
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm opacity-80">
              <p>Rock Hill, SC & York County</p>
              <p>
                <a href="tel:+18032038664" className="hover:text-secondary transition-colors">
                  (803) 203-8664
                </a>
              </p>
              <p>
                <a href="mailto:info@riseremodeling.com" className="hover:text-secondary transition-colors">
                  info@riseremodeling.com
                </a>
              </p>
              <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
              <p>Saturday: By appointment</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Rise Remodeling Co. All rights reserved. | Licensed & Insured | Rock Hill remodeling, York County renovation, South Carolina home improvements</p>
        </div>
      </div>
    </footer>
  );
}
