"use client";

import { Star, Quote } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "The quality of EcoForever products is exceptional. My wooden spoons are still perfect after months of daily use, and knowing they're biodegradable makes every meal feel more meaningful.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Rajesh Kumar",
      location: "Mumbai, India",
      rating: 5,
      text: "As someone who cares deeply about the environment, finding EcoForever was a game-changer. Their bamboo plates are beautiful and the fact that they're supporting local artisans is a bonus.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      rating: 5,
      text: "The craftsmanship is outstanding. Each piece tells a story of sustainability and care. My dinner parties now feature these beautiful, eco-friendly alternatives to plastic.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
              What Our Customers Say
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who have made the switch to sustainable dining
            </p>
          </ScrollAnimation>
        </div>

        {/* Testimonials Grid/Carousel */}
        <div className="relative">
          <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
            {testimonials.map((testimonial, index) => (
              <ScrollAnimation key={testimonial.name} direction="up" delay={index * 0.1} className="min-w-[85vw] md:min-w-0 snap-center first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0 h-full">
                <div
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-accent/10 group h-full flex flex-col"
                >
                  {/* Quote Icon */}
                  <div className="mb-6 relative">
                    <Quote className="h-10 w-10 text-primary-accent/20 group-hover:text-primary-accent/40 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden mr-4 shrink-0 border border-gray-200">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-headings group-hover:text-primary-accent transition-colors">
                        {testimonial.name}
                      </div>
                      <div className="text-xs md:text-sm text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          {/* Mobile Scroll Indicator Hint */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-primary-accent/20"
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <ScrollAnimation direction="up" delay={0.4}>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.8/5 Rating</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">50,000+</span> Happy Customers
              </div>
              <div className="text-sm">
                <span className="font-medium">25+</span> Countries Served
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
