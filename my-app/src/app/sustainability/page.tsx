import Link from "next/link";
import Image from "next/image";
import { Leaf, Recycle, TreePine, Droplets, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Sustainability = () => {
  const materials = [
    {
      name: "Bamboo",
      description: "Fast-growing, renewable resource that matures in just 3-5 years",
      benefits: ["Carbon sequestering", "Minimal water usage", "No pesticides needed"],
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      impact: "1 bamboo plant absorbs 35% more CO₂ than trees"
    },
    {
      name: "Areca Palm",
      description: "Sustainable leaf sheath that regenerates annually without harming the tree",
      benefits: ["100% biodegradable", "Natural antimicrobial", "Water-resistant"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
      impact: "Zero waste production - leaves regrow naturally"
    },
    {
      name: "Wood Fiber",
      description: "Sourced from certified sustainable forests with FSC certification",
      benefits: ["Renewable resource", "Carbon neutral", "Biodegradable"],
      image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=400&h=300&fit=crop&crop=center",
      impact: "Forests managed for long-term sustainability"
    }
  ];

  const certifications = [
    {
      name: "FSC Certified",
      description: "Forest Stewardship Council certification ensures responsible forest management",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=80&h=80&fit=crop&crop=center"
    },
    {
      name: "Biodegradable",
      description: "All products fully decompose within 90-180 days in composting conditions",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=80&h=80&fit=crop&crop=center"
    },
    {
      name: "Food Safe",
      description: "Meets international food safety standards and FDA requirements",
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop&crop=center"
    },
    {
      name: "Fair Trade",
      description: "Ethical sourcing and fair wages for all artisans and workers",
      logo: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=80&h=80&fit=crop&crop=center"
    }
  ];

  const impactStats = [
    { number: "500K+", label: "Plastic Items Replaced", icon: Recycle },
    { number: "250T", label: "CO₂ Emissions Reduced", icon: Leaf },
    { number: "50K", label: "Trees Preserved", icon: TreePine },
    { number: "2M", label: "Liters Water Saved", icon: Droplets }
  ];

  const comparisonData = [
    { aspect: "Lifespan", plastic: "Years", eco: "Biodegradable", ecoColor: "text-green-600" },
    { aspect: "Environmental Impact", plastic: "High", eco: "Low", ecoColor: "text-green-600" },
    { aspect: "Resource Usage", plastic: "Non-renewable", eco: "Renewable", ecoColor: "text-green-600" },
    { aspect: "End of Life", plastic: "Landfill/Pollution", eco: "Compost/Nutrients", ecoColor: "text-green-600" },
    { aspect: "Manufacturing", plastic: "High energy", eco: "Low energy", ecoColor: "text-green-600" },
    { aspect: "Cost", plastic: "Cheap", eco: "Competitive", ecoColor: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero & Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-headings mb-6">
              Sustainability at Our Core
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
              Every product we create is designed with the planet in mind, from sustainable sourcing
              to complete biodegradability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-accent/10 rounded-full mb-4">
                      <Icon className="h-6 w-6 text-primary-accent" />
                    </div>
                    <div className="text-3xl font-bold text-primary-accent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
              Our Sustainable Materials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We carefully select materials that are both beautiful and beneficial to the environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {materials.map((material) => (
              <Card key={material.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-4/3 relative">
                  <Image
                    src={material.image}
                    alt={material.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-headings mb-3">
                    {material.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {material.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-medium text-headings mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {material.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    {material.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
              Plastic vs Sustainable
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See the real difference between traditional plastic tableware and our eco-friendly alternatives.
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-alt-bg">
                    <tr>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-headings">
                        Aspect
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-headings">
                        Plastic
                      </th>
                      <th className="px-6 py-4 text-left font-heading font-semibold text-headings">
                        EcoForever
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonData.map((row, index) => (
                      <tr key={index} className="hover:bg-alt-bg/50">
                        <td className="px-6 py-4 font-medium text-headings">
                          {row.aspect}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">
                          {row.plastic}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`font-medium ${row.ecoColor}`}>
                            {row.eco}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
              Our Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Third-party verified commitments to sustainability and quality standards.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.name} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden bg-white">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-headings mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Waste to Product */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-6">
                From Waste to Wonder
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our manufacturing process transforms agricultural waste and sustainably harvested
                materials into beautiful, functional tableware. What was once discarded becomes
                a valuable resource in the circular economy.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-accent mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Waste Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Biodegradable</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-card-accent rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop&crop=center"
                  alt="Sustainable manufacturing process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Make a Difference Today
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Every purchase helps reduce plastic waste and supports sustainable manufacturing.
              Join thousands of eco-conscious customers making a positive impact.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#products">
                Shop Sustainable Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
