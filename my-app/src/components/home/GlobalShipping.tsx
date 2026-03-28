"use client";

import { MapPin, Truck, Clock } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const GlobalShipping = () => {
  const regions = [
    { name: "North America", countries: "USA, Canada", time: "5-7 days" },
    { name: "Europe", countries: "UK, Germany, France", time: "7-10 days" },
    { name: "Asia Pacific", countries: "Australia, Singapore, Japan", time: "3-5 days" },
    { name: "Middle East", countries: "UAE, Saudi Arabia", time: "5-8 days" },
  ];

  return (
    <section className="py-10 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
              Global Reach, Local Impact
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We&apos;re proud to deliver sustainable tableware to conscious consumers worldwide,
              supporting local economies and reducing global plastic waste.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12">
          {regions.map((region, index) => (
            <ScrollAnimation key={region.name} direction="up" delay={index * 0.1}>
              <div
                className="bg-white rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary-accent/10 group h-full"
              >
                <div className="flex flex-col md:flex-row md:items-center mb-3 md:mb-4">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary-accent mb-2 md:mb-0 md:mr-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading font-semibold text-headings text-sm md:text-base">
                    {region.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 line-clamp-2 md:line-clamp-none">
                  {region.countries}
                </p>
                <div className="flex items-center text-xs md:text-sm text-primary-accent font-medium">
                  <Clock className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                  {region.time}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div> */}

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="text-center bg-primary-accent rounded-2xl p-8 md:p-12">
            <Truck className="h-12 w-12 text-white mx-auto mb-6" />
            <h3 className="text-2xl font-heading font-bold text-white  mb-4">
              Eco-Friendly Shipping
            </h3>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              All shipments use recycled packaging materials and carbon-offset delivery partners.
              Free shipping on orders over ₹500.
            </p>
            <div className="flex text-white/90 flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                <span>Carbon Neutral Shipping</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span>Recycled Packaging</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-accent rounded-full mr-2"></div>
                <span>Free Shipping ₹500+</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default GlobalShipping;
