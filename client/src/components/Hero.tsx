import { CheckCircle } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="container-padding relative z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Transform Your Home<br />
          <span className="text-secondary">With Expert Craftsmanship</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto">
          Born to Belong, Built to Last.
        </p>
        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Trusted Rock Hill remodeling contractor specializing in kitchens, bathrooms, doors, windows, and trim. 
          Serving York County families with 20+ years of combined experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-success text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-success/90 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Get Your Free Estimate
          </button>
          <button 
            onClick={() => scrollToSection("portfolio")}
            className="btn-outline w-full sm:w-auto px-8 py-4 text-lg"
          >
            View Our Work
          </button>
        </div>
        
        <div className="text-center">
          <p className="text-sm opacity-80 mb-4">Locally Owned & Operated in Rock Hill, SC</p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Licensed & Insured
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              Free Estimates
            </span>
            <span className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-1" />
              20+ Years Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
