"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Star, ShoppingCart, Truck, Shield, RotateCcw, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

const ProductDetail = () => {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [isPremiumSelected, setIsPremiumSelected] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [currentVariant, setCurrentVariant] = useState<any>(null);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/admin/products/${id}`);
        if (!res.ok) throw new Error("Product not found");
        const data = await res.json();
        setProduct(data);

        // Set initial defaults
        if (data.variants && data.variants.length > 0) {
          setSelectedSize(data.variants[0].size);
          setCurrentVariant(data.variants[0]);
        }
        setActiveImages(data.images || []);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // Update current variant when size changes
  useEffect(() => {
    if (product && product.variants) {
      const variant = product.variants.find((v: any) => v.size === selectedSize);
      setCurrentVariant(variant || null);
    }
  }, [product, selectedSize]);

  // Update active images based on premium toggle
  useEffect(() => {
    if (product) {
      if (isPremiumSelected && product.hasPremium && product.premiumImages && product.premiumImages.length > 0) {
        setActiveImages(product.premiumImages);
      } else {
        setActiveImages(product.images || []);
      }
    }
  }, [isPremiumSelected, product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary-accent" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link href="/#products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const availableSizes = product.variants ? product.variants.map((v: any) => v.size) : [];

  // Calculate current price based on premium toggle
  let displayPrice = 0;
  let displayStock = 0;

  if (currentVariant) {
    if (isPremiumSelected) {
      displayPrice = currentVariant.premiumPrice || currentVariant.price;
      displayStock = currentVariant.premiumStock || 0;
    } else {
      displayPrice = currentVariant.price;
      displayStock = currentVariant.stock;
    }
  }

  const handleAddToCart = () => {
    if (!product || !currentVariant) return;
    const itemId = `${product._id}-${currentVariant.size}-${isPremiumSelected ? 'premium' : 'standard'}`;
    addItem({
      id: itemId,
      productId: product._id,
      name: product.title,
      image: activeImages[0] || "/placeholder.png",
      price: totalPrice,
      quantity: quantity,
      packSize: product.packSize || "pack",
      size: currentVariant.size,
      isPremium: isPremiumSelected
    });
    setQuantity(1);
  };

  // Try to extract original pack size number for per-piece price calculation
  const packCount = product.packSize;
  const perPiecePrice = displayPrice;
  const totalPrice = displayPrice * packCount;
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary-accent">Home</Link>
          <span>/</span>
          <Link href="/#products" className="hover:text-primary-accent">Products</Link>
          <span>/</span>
          <span className="text-headings">{product.category}</span>
          <span>/</span>
          <span className="text-headings">{product.title}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-2xl bg-card-accent border shadow-sm">
              <Image
                src={activeImages[0] || "/placeholder.png"}
                alt={product.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {activeImages.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {activeImages.map((image, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-lg bg-card-accent cursor-pointer border shadow-sm">
                    <Image
                      src={image}
                      alt={`${product.title} view ${index + 1}`}
                      fill
                      className="object-cover hover:opacity-80 transition-opacity"
                      sizes="(max-width: 1024px) 25vw, 12.5vw"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Shipping & Returns */}
            <div className="grid grid-cols-1 gap-4 pt-6">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 border rounded-xl">
                <Truck className="h-8 w-8 text-primary-accent" />
                <div>
                  <div className="font-medium text-headings">Free Shipping</div>
                  <div className="text-sm text-muted-foreground">Orders over ₹500</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 border rounded-xl">
                <Shield className="h-8 w-8 text-primary-accent" />
                <div>
                  <div className="font-medium text-headings">Secure Payment</div>
                  <div className="text-sm text-muted-foreground">100% Protected</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 border rounded-xl">
                <RotateCcw className="h-8 w-8 text-primary-accent" />
                <div>
                  <div className="font-medium text-headings">Easy Returns</div>
                  <div className="text-sm text-muted-foreground">30-day policy</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary-accent text-primary-foreground">
                  100% Areca Leaf
                </Badge>
                {product.hasPremium && (
                  <Badge variant="outline" className="text-amber-600 border-amber-600">
                    Premium Available
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold text-headings mb-4">
                {product.title}
              </h1>

              {/* Default Rating Placeholder */}
              {/* <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < 5 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-lg font-medium">5.0</span>
                </div>
                <span className="text-muted-foreground">
                  (12 reviews)
                </span>
              </div> */}

              {/* Price */}
              <div className="flex flex-col mb-6 bg-gray-50 p-4 border rounded-xl relative overflow-hidden">
                {isPremiumSelected && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    PREMIUM
                  </div>
                )}
                <div className="flex items-center space-x-3 ">
                  <span className="text-3xl font-heading font-bold text-headings">
                    {currentVariant ? `₹${perPiecePrice.toFixed(2)} / piece` : "..."} 
                  </span>
                  <span className="text-sm text-muted-foreground"> (pack of {packCount})</span>
                </div>

              </div>

              {/* Variant Selectors */}

              {/* Premium Toggle */}
              {product.hasPremium && (
                <div className="mb-6 border-b pb-6">
                  <span className="block text-sm font-medium text-headings mb-2">Select Variant Quality</span>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsPremiumSelected(false)}
                      className={cn(
                        "flex-1 px-4 py-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center relative",
                        !isPremiumSelected
                          ? "bg-primary-accent/5 border-primary-accent"
                          : "bg-white border-border hover:border-primary-accent/50"
                      )}
                    >
                      <span className={cn("font-bold", !isPremiumSelected ? "text-primary-accent" : "text-headings")}>
                        Standard
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">High-quality eco friendly</span>
                      {!isPremiumSelected && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-primary-accent" />
                      )}
                    </button>
                    <button
                      onClick={() => setIsPremiumSelected(true)}
                      className={cn(
                        "flex-1 px-4 py-3 rounded-lg border-2 transition-all flex flex-col items-center justify-center relative",
                        isPremiumSelected
                          ? "bg-amber-50 border-amber-500"
                          : "bg-white border-border hover:border-amber-500/50"
                      )}
                    >
                      <span className={cn("font-bold", isPremiumSelected ? "text-amber-600" : "text-headings")}>
                        Premium
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">Sturdier, zero defects</span>
                      {isPremiumSelected && (
                        <Check className="absolute top-2 right-2 w-4 h-4 text-amber-500" />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* Size Selector */}
              {availableSizes.length > 0 && (
                <div className="mb-6">
                  <span className="block text-sm font-medium text-headings mb-2">Available Sizes</span>
                  <div className="flex flex-wrap gap-3">
                    {availableSizes.map((s: string) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={cn(
                          "px-4 py-2 rounded-lg border transition-all text-sm font-medium",
                          selectedSize === s
                            ? "bg-primary-accent text-white border-primary-accent"
                            : "bg-white text-body-text border-gray-200 hover:border-primary-accent/50"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}


              {/* Stock Status */}
              <div className="flex items-center space-x-2 mb-6">
                {displayStock > 0 ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </>
                ) : (
                  <>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Out of Stock</span>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-heading font-semibold text-headings mb-3">
                Description
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                {product.description}
              </p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <label className="font-medium text-headings">Quantity:</label>
                <select
                  className="px-4 py-2 border border-border rounded-xl bg-white min-w-20"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 10, 20].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4">
                <Button
                  className="flex-1 py-6 text-lg shadow-md"
                  size="lg"
                  disabled={!currentVariant || displayStock <= 0}
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {!currentVariant ? "Select Options" : displayStock <= 0 ? "Out of Stock" : "Add to Cart"}
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;