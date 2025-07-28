import { CheckCircle } from "lucide-react";
import deckImage from "@assets/Residential-Decks-1_1752703216479.jpg";

export default function About() {
  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "300+", label: "Projects Completed" },
    { number: "100%", label: "Local Ownership" },
    { number: "5★", label: "Customer Rating" }
  ];

  return (
    <section id="about" className="section-padding modern-section-alt">
      <div className="container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 modern-text-gradient">About Rise Remodeling Co.</h2>
            <p className="text-lg modern-subtitle mb-6">
              Founded on the principle that every home should reflect the unique character of its owners, 
              Rise Remodeling Co. has been transforming Rock Hill homes for over two decades.
            </p>
            <p className="text-muted-foreground mb-6">
              Our motto, "Born to Last, Built to Belong," represents our commitment to creating spaces 
              that not only feel like home but stand the test of time. We understand that your home is 
              more than just a building—it's where memories are made, families gather, and life unfolds.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center modern-card p-4">
                  <div className="text-3xl font-bold text-primary mb-2 modern-accent">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 mb-6 modern-hover-lift">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center modern-icon">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold modern-accent">Licensed & Insured</h4>
                <p className="text-sm text-muted-foreground">
                  Fully licensed in South Carolina with comprehensive insurance coverage
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <img 
              src={deckImage}
              alt="Rise Remodeling Co. deck construction projects in Rock Hill"
              className="rounded-2xl shadow-lg w-full modern-hover-lift"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-8 shadow-lg modern-card min-w-[200px]">
              <div className="text-center">
                <div className="text-xl font-bold text-primary mb-2 modern-accent whitespace-nowrap">Locally Owned</div>
                <div className="text-base text-muted-foreground whitespace-nowrap">Rock Hill, SC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
