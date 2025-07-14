import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Wow, what a difference! Our kitchen went from 1990s disaster to something you'd see in a magazine. The guys were great - showed up on time, cleaned up after themselves, and actually listened to what we wanted. My wife is obsessed with the new island!",
      author: "Sarah & Mike Thompson",
      location: "Rock Hill, SC",
      initials: "SM"
    },
    {
      text: "I was worried about the mess and noise, but these guys made it so much easier than I thought. They finished our bathroom in 2 weeks like they promised, and honestly? It looks amazing. My teenage daughter actually said 'Mom, this is actually cool' - that's a win!",
      author: "Jennifer Rodriguez",
      location: "York County, SC",
      initials: "JR"
    },
    {
      text: "Rise Remodeling turned our cramped master bath into a spa-like retreat. The walk-in shower is incredible, and they even figured out how to add storage we didn't think was possible. Worth every penny and then some.",
      author: "David & Lisa Johnson",
      location: "Rock Hill, SC",
      initials: "DJ"
    }
  ];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className="w-5 h-5 fill-current text-secondary" />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what Rock Hill families say about working with Rise Remodeling Co.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-cream rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="flex">
                  {renderStars()}
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
