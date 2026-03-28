"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ShoppingCart } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Loader2 } from "lucide-react";
import { products as defaultProductsData } from "@/data/products";

const BestSellers = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/admin/products?limit=8");
        if (res.ok) {
          const data = await res.json();
          if (data.products && data.products.length > 0) {
            setProducts(data.products);
          } else {
            // Fallback to local data
            const fallback = defaultProductsData.map(p => ({
              _id: p.id,
              title: p.name,
              images: p.images,
              hasPremium: false,
              isFeatured: p.badge === "Best Seller",
              variants: p.variants.map(v => ({
                size: v.attributes.size || v.attributes.type || v.attributes.pack || "Standard",
                price: v.price,
                mrp: v.originalPrice,
              }))
            }));
            setProducts(fallback);
          }
        }
      } catch (err) {
        console.error("Failed to fetch products", err);
        // Fallback to local data on error
        const fallback = defaultProductsData.map(p => ({
            _id: p.id,
            title: p.name,
            images: p.images,
            hasPremium: false,
            isFeatured: p.badge === "Best Seller",
            variants: p.variants.map(v => ({
            size: v.attributes.size || v.attributes.type || v.attributes.pack || "Standard",
            price: v.price,
            mrp: v.originalPrice,
            }))
        }));
        setProducts(fallback);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="py-16 bg-[url('/grss-bg.png')] bg-[length:100%_100%] bg-center bg-no-repeat" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}        <div className="text-center mb-12">
          <ScrollAnimation direction="up" duration={0.8} distance={80}>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-headings mb-4">
              Our Products
            </h2>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={0.1} duration={0.8} distance={80}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sustainable, eco-friendly tableware for every occasion.
            </p>
          </ScrollAnimation>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary-accent" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            No products available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, index) => {
              // Calculate min unit price from new schema
              const hasVariants = product.variants?.length ?? 0 > 0;
              const minPrice = hasVariants
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ? Math.min(...product.variants.map((v: any) => v.price))
                : 0;

              const minMrp = hasVariants
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ? Math.min(...product.variants.map((v: any) => v.mrp || Infinity))
                : Infinity;
              const displayMrp = minMrp !== Infinity && minMrp > minPrice ? minMrp : null;

              const packCount = product.packSize || 1;
              const totalMinPrice = minPrice * packCount;
              const totalDisplayMrp = displayMrp ? displayMrp * packCount : null;

              return (
                <ScrollAnimation
                  key={product._id}
                  direction="up"
                  delay={index * 0.1}
                  duration={0.6}
                  distance={60}
                  className="h-full"
                >
                  <Link
                    href={`/product/${product._id}`}
                    className="bg-white border border-border rounded-2xl p-4 shadow-sm hover:shadow-lg hover:border-primary-accent/30 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Title on Top */}
                    <h3 className="text-lg md:text-3xl font-heading font-bold text-headings mb-5 group-hover:text-primary-accent transition-colors line-clamp-2 leading-tight">
                      {product.title}
                    </h3>

                    {/* Content Row: Image Left, Details Right */}
                    <div className="flex flex-row gap-5 mt-auto">
                      
                      {/* Square Image on Left */}
                      <div className="w-36 h-36 md:w-44 md:h-44 aspect-square relative overflow-hidden rounded-xl bg-card-accent flex-shrink-0">
                        <Image
                          src={product.images && product.images[0] ? product.images[0] : "/placeholder.png"}
                          alt={product.title || 'Product'}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 144px, 176px"
                        />
                        
                        {/* Badges */}
                        {product.hasPremium && (
                          <div className="absolute top-1.5 left-1.5 bg-primary-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-md z-10 shadow-sm">
                            PREMIUM
                          </div>
                        )}
                      </div>

                      {/* Price & Action on Right */}
                      <div className="flex flex-col justify-between flex-grow">
                        <div className="mb-2">
                          {totalDisplayMrp && (
                            <span className="text-xs text-muted-foreground line-through block mb-0.5">
                              ₹{totalDisplayMrp.toFixed(2)}
                            </span>
                          )}
                          <span className="text-xl md:text-2xl font-bold text-primary-accent block leading-none">
                            ₹{totalMinPrice.toFixed(2)}
                          </span>
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-muted-foreground line-clamp-4 leading-relaxed mb-3">
                          {product.description || "100% natural, compostable and eco-friendly tableware for a sustainable lifestyle."}
                        </p>
                        
                        <div className="mt-auto">
                          <Button size="sm" className="w-full bg-primary-accent hover:bg-primary-accent/90 text-white rounded-lg font-medium shadow-sm transition-all group-hover:shadow-md h-9">
                             Shop Now
                          </Button>
                        </div>
                      </div>

                    </div>
                  </Link>
                </ScrollAnimation>
              )
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSellers;
