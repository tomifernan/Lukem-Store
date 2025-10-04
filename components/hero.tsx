"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const images = [
  "/images/model1.jpeg",
  "/images/model2.jpeg",
  "/images/model3.jpeg",
  "/images/model4.jpeg",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById("productos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${images[current]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-balance">
          Lukem Store
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          Descubre la mejor ropa de moda diseñada para hombres.
        </p>
        <Button
          size="lg"
          className="bg-black hover:bg-gray-900 text-white font-semibold"
          onClick={scrollToProducts}
        >
          Ver Productos
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
