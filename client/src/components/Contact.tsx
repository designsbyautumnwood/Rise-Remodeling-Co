import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
      timeline: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for your message. We'll contact you within 24 hours.",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 fade-in-up px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 modern-text-gradient">Ready to Transform Your Home?</h2>
          <p className="modern-subtitle max-w-3xl mx-auto">
            Get started with your free consultation today. We'll discuss your vision, assess your space, 
            and provide a detailed quote for your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="modern-card p-4 sm:p-6 lg:p-8 fade-in-up">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 modern-accent">Get Your Free Quote</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                          <SelectItem value="bathroom">Bathroom Renovation</SelectItem>
                          <SelectItem value="doors-windows">Doors & Windows</SelectItem>
                          <SelectItem value="trim">Trim & Millwork</SelectItem>
                          <SelectItem value="flooring">Flooring</SelectItem>
                          <SelectItem value="custom">Custom Project</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Estimated Budget</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="over-100k">Over $100,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project. What are your goals and vision?"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Timeline</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="asap">As soon as possible</SelectItem>
                          <SelectItem value="1-3-months">1-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-12-months">6-12 months</SelectItem>
                          <SelectItem value="planning">Just planning ahead</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button 
                  type="submit" 
                  className="modern-button w-full text-lg py-4"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get My Free Estimate"}
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. We'll contact you within 24 hours to schedule your consultation.
                </p>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold mb-6 modern-accent">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center modern-hover-lift">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 modern-icon">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+18032038664" className="text-primary hover:text-secondary transition-all duration-300 modern-link">
                    (803) 203-8664
                  </a>
                </div>
              </div>

              <div className="flex items-center modern-hover-lift">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 modern-icon">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:info@riseremodeling.com" className="text-primary hover:text-secondary transition-colors modern-link">
                    info@riseremodeling.com
                  </a>
                </div>
              </div>

              <div className="flex items-center modern-hover-lift">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 modern-icon">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Service Area</h4>
                  <p className="text-muted-foreground">Rock Hill, SC & York County</p>
                </div>
              </div>

              <div className="flex items-center modern-hover-lift">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 modern-icon">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p className="text-muted-foreground">Sat: By appointment</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 modern-card">
              <h4 className="font-semibold mb-3 modern-accent">Emergency Services</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Need urgent repairs? We offer emergency services for water damage, 
                structural issues, and other urgent situations.
              </p>
              <a href="tel:+18032038664" className="text-primary hover:text-secondary transition-colors font-semibold modern-link">
                Call (803) 203-8664
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
