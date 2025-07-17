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
      question: "What's the difference between quotes and estimates?",
      answer: "We provide free, no-obligation quotes for all our services. A quote gives you a clear understanding of project scope and approximate costs. Detailed estimates, which include precise measurements and material specifications, require a small fee that's credited toward your project if you hire us. This ensures we can invest the time needed for accurate planning."
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
      <div className="container-padding px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">Frequently Asked Questions</h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our remodeling process, pricing, and timelines.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm mb-4 sm:mb-6 overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left font-semibold text-base sm:text-lg flex items-center justify-between hover:bg-gray-50 transition-colors text-gray-900 touch-manipulation"
              >
                <span className="pr-4 leading-relaxed">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-200 text-gray-500 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-700 bg-gray-50/50">
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-sm sm:text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
