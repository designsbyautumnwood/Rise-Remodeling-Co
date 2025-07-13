import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a typical remodeling project take?",
      answer: "Project timelines vary based on scope and complexity. Kitchen remodels typically take 3-6 weeks, bathroom renovations 2-4 weeks, and trim work 1-2 weeks. We provide detailed timelines during our consultation and keep you updated throughout the process."
    },
    {
      question: "Do you provide free estimates?",
      answer: "Yes! We offer completely free, no-obligation estimates. Our team will visit your home, assess the project, discuss your vision, and provide a detailed estimate at no cost. There's no pressure to commit—we want you to make an informed decision."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. Rise Remodeling Co. is fully licensed in South Carolina and carries comprehensive liability insurance and workers' compensation coverage. This protects both you and our team throughout the project."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our transparent pricing includes all labor, materials, permits, and cleanup. We provide detailed breakdowns so you know exactly what you're paying for. No hidden fees or surprise charges—just honest, fair pricing."
    },
    {
      question: "Do you handle permits and inspections?",
      answer: "Yes, we handle all necessary permits and coordinate inspections with local authorities. Our team is familiar with Rock Hill and York County building codes, ensuring your project meets all requirements."
    },
    {
      question: "What if I need changes during the project?",
      answer: "We understand that projects can evolve. We maintain open communication and can accommodate reasonable changes. Any modifications will be discussed with you first, including time and cost implications, before proceeding."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about our remodeling process, pricing, and timelines.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left font-semibold text-lg flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-muted-foreground">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
