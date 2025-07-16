import { CheckCircle, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with gradient overlay */}
      <div className="absolute inset-0 gradient-bg opacity-90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-1000" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Floating sparkles */}
      <div className="absolute inset-0 z-15">
        <Sparkles className="absolute top-20 left-20 w-6 h-6 text-yellow-300 float-animation opacity-70" />
        <Sparkles className="absolute top-40 right-32 w-4 h-4 text-yellow-200 float-animation opacity-60" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute bottom-40 left-1/4 w-5 h-5 text-yellow-400 float-animation opacity-80" style={{ animationDelay: '1s' }} />
        <Zap className="absolute top-1/3 right-20 w-6 h-6 text-yellow-300 float-animation opacity-70" style={{ animationDelay: '1.5s' }} />
      </div>
      
      <div className="container-padding relative z-20 text-center text-white">
        <div className="mb-4 fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-full border border-blue-400/30 backdrop-blur-sm">
            <span className="text-sm font-medium text-blue-300">🏠 Professional Contractor in Rock Hill</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight fade-in-up">
          Transform Your Home<br />
          <span className="modern-text-gradient">With Expert Craftsmanship</span>
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
          "Born to Last, Built to Belong."
        </p>
        <p className="modern-subtitle mb-6 max-w-3xl mx-auto opacity-90 fade-in-up" style={{ animationDelay: '0.4s' }}>
          Trusted Rock Hill remodeling contractor specializing in kitchens, bathrooms, doors, windows, and trim. 
          Serving York County families with 20+ years of combined experience.
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 mb-8 fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center text-sm text-blue-300">
            <span className="mr-2">🛡️</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center text-sm text-blue-300">
            <span className="mr-2">🏠</span>
            <span>Local Rock Hill Contractor</span>
          </div>
          <div className="flex items-center text-sm text-blue-300">
            <span className="mr-2">⚡</span>
            <span>Free Estimates</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => scrollToSection("contact")}
            className="modern-button w-full sm:w-auto text-lg"
          >
            Get Your Free Estimate
          </button>
          <button 
            onClick={() => scrollToSection("portfolio")}
            className="bg-white/10 backdrop-blur-sm w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white modern-hover-lift border-2 border-white/30 hover:border-white/50 hover:bg-white/20 transition-all duration-300"
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
