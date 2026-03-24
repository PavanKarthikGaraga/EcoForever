import { Leaf, Recycle, Heart, Shield, Truck, Award } from "lucide-react";

const WhyEcoForever = () => {
  const reasons = [
    {
      icon: Leaf,
      title: "100% Natural Materials",
      description: "Crafted from sustainable wood, bamboo, and areca palm - all renewable resources harvested responsibly.",
    },
    {
      icon: Recycle,
      title: "Fully Biodegradable",
      description: "Our products naturally decompose, eliminating plastic waste and reducing environmental impact.",
    },
    {
      icon: Heart,
      title: "Handcrafted with Care",
      description: "Each piece is meticulously handcrafted by skilled artisans, ensuring quality and supporting traditional crafts.",
    },
    {
      icon: Shield,
      title: "Food-Safe & Durable",
      description: "Treated with natural oils, our tableware is safe for food contact and designed to last through multiple uses.",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      description: "We ship worldwide with eco-friendly packaging, bringing sustainable dining to homes everywhere.",
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous quality control ensures every product meets our high standards for sustainability and performance.",
    },
  ];

  return (
    <section className="py-10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
            Why Choose EcoForever?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re committed to sustainable dining that doesn&apos;t compromise on quality,
            beauty, or functionality. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="text-center cursor-pointer p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-accent/10 rounded-full mb-6 group-hover:bg-primary-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-headings mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary-accent/10 text-primary-accent px-6 py-3 rounded-full">
            <Shield className="h-5 w-5" />
            <span className="font-medium">Trusted by 50,000+ conscious consumers worldwide</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export default WhyEcoForever;