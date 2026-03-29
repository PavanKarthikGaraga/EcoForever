"use client";

import { MapPin, Truck, Clock, Globe, Package, Leaf } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const GlobalShipping = () => {
  const regions = [
    { name: "North America", countries: "USA, Canada", time: "5-7 days", icon: <Globe className="h-6 w-6" /> },
    { name: "Europe", countries: "UK, Germany, France", time: "7-10 days", icon: <Globe className="h-6 w-6" /> },
    { name: "Asia Pacific", countries: "Australia, Singapore, Japan", time: "3-5 days", icon: <Globe className="h-6 w-6" /> },
    { name: "Middle East", countries: "UAE, Saudi Arabia", time: "5-8 days", icon: <Globe className="h-6 w-6" /> },
  ];

  return (
    <section className="py-10 overflow-hidden relative">
      {/* Background Decorative Elements */}
      {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-accent/5 rounded-full blur-3xl" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* <div className="text-center mb-16">
          <ScrollAnimation direction="up">
            <span className="inline-block px-4 py-1.5 bg-primary-accent/10 text-primary-accent font-semibold text-sm rounded-full mb-4">
              Our Global Footprint
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-headings mb-6 leading-tight">
              Global Reach, <br className="hidden md:block" />Local Impact
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We&apos;re proud to deliver sustainable tableware to conscious consumers worldwide,
              supporting local economies and reducing global plastic waste.
            </p>
          </ScrollAnimation>
        </div> */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {regions.map((region, index) => (
            <ScrollAnimation key={region.name} direction="up" delay={index * 0.1}>
              <div
                className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-primary-accent/5 hover:border-primary-accent/20 h-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/0 to-primary-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="bg-alt-bg w-14 h-14 rounded-2xl flex items-center justify-center text-primary-accent mb-6 group-hover:scale-110 group-hover:bg-primary-accent group-hover:text-white transition-all duration-500">
                    {region.icon}
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-headings mb-3 group-hover:text-primary-accent transition-colors">
                    {region.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {region.countries}
                  </p>
                  <div className="flex items-center text-primary-accent font-semibold pt-4 border-t border-alt-bg">
                    <Clock className="h-5 w-5 mr-3" />
                    <span>{region.time}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div> */}

        <ScrollAnimation direction="up" delay={0.4}>
          <div className="relative bg-primary-accent rounded-[3rem] p-8 md:p-16 overflow-hidden shadow-2xl">
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-15deg] translate-x-1/4" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center justify-between">
              <div>
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                  Eco-Friendly Shipping
                </h3>
                <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl">
                  All shipments use recycled packaging materials and carbon-offset delivery partners. 
                  Every order contributes to a cleaner planet.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-4 text-white">
                    <Package className="h-6 w-6 text-white/60" />
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-wider font-semibold">Min. Order</p>
                      <p className="text-lg font-bold">₹500 for Free Shipping</p>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-4 text-white">
                    <Leaf className="h-6 w-6 text-white/60" />
                    <div>
                      <p className="text-sm text-white/60 uppercase tracking-wider font-semibold">Packaging</p>
                      <p className="text-lg font-bold">100% Recyclable</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:flex flex-col gap-6 ml-auto">
                <div className="flex items-center gap-6 text-bold text-white">
                  <div className="w-4 h-4 bg-white/70 rounded-full animate-pulse"></div>
                  <span className="text-xl font-heading font-semibold">Carbon Neutral Shipping</span>
                </div>

                <div className="flex items-center gap-6 text-bold text-white">
                  <div className="w-4 h-4 bg-white/80 rounded-full animate-pulse delay-75"></div>
                  <span className="text-xl font-heading font-semibold">Zero Plastic Packaging</span>
                </div>

                <div className="flex items-center gap-6 text-bold text-white">
                  <div className="w-4 h-4 bg-white/90 rounded-full animate-pulse delay-150"></div>
                  <span className="text-xl font-heading font-semibold">Supporting Local Economies</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default GlobalShipping;
