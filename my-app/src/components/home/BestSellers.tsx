"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Loader2 } from "lucide-react";

const BestSellers = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/admin/products?limit=8");
        if (res.ok) {
          const data = await res.json();
          setProducts(data.products || []);
        }
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <section className="py-16 bg-bg" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {products.map((product, index) => {
              // Calculate min unit price from new schema
              const minPrice = product.variants && product.variants.length > 0
                ? Math.min(...product.variants.map((v: any) => v.price))
                : 0;

              return (
                <ScrollAnimation
                  key={product._id}
                  direction="up"
                  delay={index * 0.15}
                  duration={0.8}
                  distance={100}
                  className="w-[calc(50%-0.5rem)] md:w-[calc(25%-1.5rem)]"
                >
                  <Link
                    href={`/product/${product._id}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 block h-full flex flex-col"
                  >
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden bg-gray-100 flex-shrink-0">
                      <Image
                        src={product.images && product.images[0] ? product.images[0] : "/placeholder.png"}
                        alt={product.title || 'Product'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                      {/* Badges */}
                      {product.hasPremium && (
                        <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary-accent text-white text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full z-10 shadow-sm">
                          Premium Available
                        </div>
                      )}
                      {product.isFeatured && (
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 backdrop-blur text-primary-accent text-[10px] md:text-xs font-bold px-2 py-1 md:px-3 md:py-1.5 rounded-full z-10 shadow-sm">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-3 md:p-6 flex flex-col flex-grow">
                      <h3 className="text-sm md:text-xl font-heading font-bold text-headings mb-1 md:mb-2 hover:text-primary-accent transition-colors line-clamp-1 md:line-clamp-2">
                        {product.title}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center space-x-2 md:space-x-3 flex-wrap mt-auto">
                        <span className="text-sm md:text-lg font-bold text-primary-accent">
                          From ₹{minPrice.toFixed(2)}
                        </span>
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
