"use client";
import BestSellers from "@/components/home/BestSellers";
import Testimonials from "@/components/home/Testimonials";
import ProductCategories from "@/components/home/ProductCategories";
import MobileCategories from "@/components/home/MobileCategories";
import GlobalShipping from "@/components/home/GlobalShipping";
import DualCTA from "@/components/home/DualCTA";
import Hero from "@/components/home/Hero";
// import ComboPacks from "@/components/home/ComboPacks";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <MobileCategories />
      <Hero />
      <ProductCategories />
      <BestSellers />
      {/* <ComboPacks /> */}
      <GlobalShipping />
      <Testimonials />
      <DualCTA />
    </div>
  );
}
