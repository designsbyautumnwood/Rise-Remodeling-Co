export default function Process() {
  const steps = [
    {
      number: 1,
      title: "Free Quote",
      description: "We visit your home, discuss your vision, and provide a free quote to understand project scope and approximate costs."
    },
    {
      number: 2,
      title: "Detailed Estimate",
      description: "If you choose to proceed, we create a detailed estimate with precise measurements and material specifications."
    },
    {
      number: 3,
      title: "Design & Planning",
      description: "Our team creates detailed plans and helps you select materials that fit your style and budget."
    },
    {
      number: 4,
      title: "Expert Installation",
      description: "Our skilled craftsmen bring your vision to life with attention to detail and quality workmanship."
    },
    {
      number: 5,
      title: "Final Walkthrough",
      description: "We ensure everything meets our high standards and your complete satisfaction."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Step-by-Step Process</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've streamlined our process to make your renovation journey as smooth as possible, 
            from free quote to final walkthrough.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
