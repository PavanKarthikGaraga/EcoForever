import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@ecoforever.com",
      action: "mailto:hello@ecoforever.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our customer service team",
      contact: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick responses and product inquiries",
      contact: "+91 98765 43210",
      action: "https://wa.me/919876543210"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Schedule a factory tour or office visit",
      contact: "Coimbatore, Tamil Nadu, India",
      action: "#"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div className="min-h-screen w-[85%] mx-auto bg-bg">
      {/* Hero & Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-headings mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
              Have questions about our products or want to learn more about sustainable dining?
              We&apos;re here to help and love hearing from you.
            </p>
          </div>



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold text-headings mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-headings mb-2">
                        First Name *
                      </label>
                      <Input placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-headings mb-2">
                        Last Name *
                      </label>
                      <Input placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-headings mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="john@example.com" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-headings mb-2">
                      Phone Number
                    </label>
                    <Input type="tel" placeholder="+91 98765 43210" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-headings mb-2">
                      Subject *
                    </label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="products">Product Information</SelectItem>
                        <SelectItem value="bulk">Bulk Orders</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="tour">Factory Tour</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-headings mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Info & FAQ */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="h-6 w-6 text-primary-accent mr-3" />
                    <h3 className="text-xl font-heading font-semibold text-headings">
                      Business Hours
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {businessHours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between">
                        <span className="font-medium text-headings">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    * Response time may vary during holidays and weekends
                  </p>
                </CardContent>
              </Card>

              {/* Download Catalog */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <FileText className="h-6 w-6 text-primary-accent mr-3" />
                    <h3 className="text-xl font-heading font-semibold text-headings">
                      Product Catalog
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Download our complete product catalog with detailed specifications,
                    pricing, and bulk order information.
                  </p>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Download PDF Catalog
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-headings mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link
                      href="/#products"
                      className="block text-primary-accent hover:text-primary-accent/80 transition-colors"
                    >
                      Browse Products →
                    </Link>
                    <Link
                      href="/sustainability"
                      className="block text-primary-accent hover:text-primary-accent/80 transition-colors"
                    >
                      Sustainability Info →
                    </Link>
                    <Link
                      href="/manufacturing"
                      className="block text-primary-accent hover:text-primary-accent/80 transition-colors"
                    >
                      Factory Tour →
                    </Link>
                    <Link
                      href="/about"
                      className="block text-primary-accent hover:text-primary-accent/80 transition-colors"
                    >
                      About Us →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <Card key={method.title} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-accent/10 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-headings mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {method.description}
                </p>
                <div className="text-primary-accent font-medium mb-4">
                  {method.contact}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={method.action}>
                    Contact
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Map Section */}
      <section className="py-16 bg-alt-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Tamil Nadu&apos;s industrial district, our facilities
              combine traditional craftsmanship with modern sustainable practices.
            </p>
          </div>

          {/* Placeholder for map - in real app, integrate Google Maps or similar */}
          <Card className="aspect-video relative overflow-hidden">
            <div className="w-full h-full bg-card-accent flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-semibold text-headings mb-2">
                  Coimbatore, Tamil Nadu
                </h3>
                <p className="text-muted-foreground">
                  Interactive map would be displayed here
                </p>
                <Button className="mt-4" variant="outline">
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold text-headings mb-2">
                  Are your products truly biodegradable?
                </h3>
                <p className="text-muted-foreground">
                  Yes, all our products are made from natural materials and fully decompose within 90-180 days
                  in composting conditions. We have third-party certifications to verify this.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold text-headings mb-2">
                  Do you offer bulk pricing for events?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! We offer special pricing for bulk orders, weddings, corporate events, and restaurants.
                  Contact us for customized quotes based on your specific needs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold text-headings mb-2">
                  What&apos;s your shipping policy?
                </h3>
                <p className="text-muted-foreground">
                  We offer free shipping on orders over ₹500 within India. International shipping is available
                  with carbon-neutral options. All packages use biodegradable materials.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-heading font-semibold text-headings mb-2">
                  Can I schedule a factory tour?
                </h3>
                <p className="text-muted-foreground">
                  Yes! We welcome visitors to our facilities. Virtual tours are available anytime,
                  and in-person tours can be scheduled with advance notice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
