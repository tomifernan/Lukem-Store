"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { About } from "@/components/about";
import { Hours } from "@/components/hours";
import { Location } from "@/components/location";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Cart } from "@/components/cart";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);

  const handleAddToCart = (product: any) => {
    // 👇 le agregamos un cartId único cada vez que se agrega un producto
    const productWithId = {
      ...product,
      cartId: Date.now() + Math.random(),
    };
    setCart((prev) => [...prev, productWithId]);
    console.log("Producto agregado:", productWithId);
  };

  const handleRemoveFromCart = (cartId: number) => {
    setCart((prev) => prev.filter((p) => p.cartId !== cartId));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <About />
        <Hours />
        <Location />
        <Contact />
      </main>

      <Footer />

      {/* Carrito flotante */}
      <Cart cart={cart} onRemove={handleRemoveFromCart} />
    </div>
  );
}
