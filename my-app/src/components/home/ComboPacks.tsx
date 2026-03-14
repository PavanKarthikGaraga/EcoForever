"use client";

import { ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { useCartStore } from "@/store/useCartStore";

const ComboPacks = () => {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = (pack: any) => {
        const price = pack.isPremium ? 799 : 499; // Mock prices for combo packs

        addItem({
            id: `combo-${pack.isPremium ? 'premium' : 'normal'}`,
            productId: `combo-${pack.isPremium ? 'premium' : 'normal'}`,
            name: pack.name,
            image: pack.image,
            price: price,
            quantity: 1,
            packSize: "1 Combo Box",
            size: "Standard",
            isPremium: pack.isPremium
        });
    };

    const packs = [
        {
            name: "Normal Combo Pack",
            items: [
                "14'' inch Buffet Plate",
                "15'' inch Sitting Plate",
                "10'' Inch Breakfast Plate",
                "14'' inch Meal Trays",
                "4'' Inch Bowls",
                "Spoons & Forks",
            ],
            // Using a reliable table setting image
            image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1974&auto=format&fit=crop",
            isPremium: false,
            textPosition: "left",
        },
        {
            name: "Premium Combo Pack",
            items: [
                "14'' inch Buffet Plate Premium",
                "15'' inch Sitting Plate",
                "10'' Inch Breakfast Plate",
                "14'' Meal Trays (Slotted)",
                "4'' Inch Bowls",
                "Spoons & Forks",
            ],
            // Using a different high quality image
            image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
            isPremium: true,
            textPosition: "right",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation direction="up">
                    <h2 className="text-4xl md:text-5xl text-center font-heading font-bold text-headings mb-6">
                        Value Combo Packs
                    </h2>
                </ScrollAnimation>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden p-2">
                    {packs.map((pack, index) => (
                        <ScrollAnimation
                            key={pack.name}
                            direction={index % 2 === 0 ? "left" : "right"}
                            delay={0.2}
                            className="h-full"
                        >
                            <div
                                className="relative overflow-hidden rounded-3xl h-[400px] md:h-[500px] shadow-lg group border border-gray-100"
                            >
                                <Image
                                    src={pack.image}
                                    alt={pack.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Subtle Overlay to ensure text readability only on the text side */}
                                <div
                                    className={`absolute inset-0 transition-opacity duration-300 bg-black/40 md:bg-transparent ${pack.textPosition === 'left'
                                        ? 'md:bg-gradient-to-r md:from-black/70 md:via-black/30 md:to-transparent'
                                        : 'md:bg-gradient-to-l md:from-black/70 md:via-black/30 md:to-transparent'
                                        }`}
                                />

                                <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end md:justify-center text-white ${pack.textPosition === 'left' ? 'md:items-start' : 'md:items-end'} ${pack.textPosition === 'left' ? 'md:text-left' : 'md:text-right'}`}>
                                    <div className="max-w-full md:max-w-[75%]">
                                        <div className="text-2xl md:text-3xl text-white font-bold mb-2">{pack.name}</div>
                                        {pack.isPremium && (
                                            <span className="bg-primary-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                                                PREMIUM
                                            </span>
                                        )}

                                        <ul className={`space-y-1 md:space-y-1.5 mb-6 text-white/90 hidden md:block`}>
                                            {pack.items.map((item, idx) => (
                                                <li key={idx} className="text-sm md:text-base flex items-center gap-2">
                                                    <Check className="w-4 h-4 text-primary-accent" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                        {/* Mobile list summary */}
                                        <p className="text-white/90 text-sm mb-4 md:hidden line-clamp-2">
                                            Includes: {pack.items.join(", ")}
                                        </p>

                                        <Button
                                            onClick={() => handleAddToCart(pack)}
                                            className="bg-white text-black hover:bg-white/90 font-semibold px-6 py-2 md:px-8 shadow-md transition-transform active:scale-95 text-sm md:text-base w-full md:w-auto"
                                        >
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ComboPacks;
