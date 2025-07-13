import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Rise Remodeling Co. transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations. The team was punctual, clean, and respectful of our home.",
      author: "Sarah & Mike Thompson",
      location: "Rock Hill, SC",
      initials: "SM"
    },
    {
      text: "We couldn't be happier with our bathroom renovation! The team worked within our budget and timeline, delivering exceptional results. The quality of workmanship is outstanding, and we've received so many compliments.",
      author: "Jennifer Rodriguez",
      location: "York County, SC",
      initials: "JR"
    },
    {
      text: "From start to finish, Rise Remodeling Co. made our home renovation stress-free. Their communication was excellent, and they went above and beyond to ensure we were happy with every detail. Highly recommended!",
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
