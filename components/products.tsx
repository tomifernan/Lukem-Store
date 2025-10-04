"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Camiseta Running Pro",
    category: "Camisetas",
    price: "$29.99",
    images: [
      "/athletic-running-shirt-red.jpg",
      "/athletic-hoodie-sweatshirt-navy.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rojo", "Negro", "Azul"],
  },

  {
    id: 2,
    name: "Pantalón Deportivo Elite",
    category: "Pantalones",
    price: "$49.99",
    images: ["/athletic-sports-pants-black.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Gris"],
  },
  {
    id: 3,
    name: "Chaqueta Training",
    category: "Chaquetas",
    price: "$79.99",
    images: ["/athletic-training-jacket-gray.jpg"],
    sizes: ["M", "L", "XL"],
    colors: ["Gris", "Negro"],
  },
  {
    id: 4,
    name: "Shorts Performance",
    category: "Shorts",
    price: "$34.99",
    images: ["/athletic-performance-shorts-blue.jpg"],
    sizes: ["S", "M", "L"],
    colors: ["Azul", "Negro"],
  },
  {
    id: 5,
    name: "Sudadera Comfort",
    category: "Sudaderas",
    price: "$59.99",
    images: ["/athletic-hoodie-sweatshirt-navy.jpg"],
    sizes: ["M", "L", "XL"],
    colors: ["Azul", "Gris"],
  },
  {
    id: 6,
    name: "Leggings Flex",
    category: "Leggings",
    price: "$44.99",
    images: ["/athletic-leggings-black-woman.jpg"],
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
  },
];

const categories = [...new Set(products.map((p) => p.category))];

export function Products({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [currentImgs, setCurrentImgs] = useState({});

  const handleOptionChange = (productId, field, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: value,
      },
    }));
  };

  const handleImgChange = (productId, images, direction) => {
    setCurrentImgs((prev) => {
      const current = prev[productId] || 0;
      const next =
        direction === "next"
          ? (current + 1) % images.length
          : (current - 1 + images.length) % images.length;
      return { ...prev, [productId]: next };
    });
  };

  return (
    <section id="productos" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4 text-white underline decoration-white decoration-2">
            Nuestros Productos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6 text-white">
            Ropa de alta calidad para hombres.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {categories.map((cat) => (
              <Button
      key={cat}
      variant={selectedCategory === cat ? "default" : "outline"}
      className={`font-semibold ${
        selectedCategory === cat
          ? "bg-black text-white" // botón seleccionado: fondo blanco, texto negro
          : "text-black border-white" // botones no seleccionados: texto y borde blancos
      }`}
      onClick={() => setSelectedCategory(cat)}
    >
      {cat}
    </Button>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            {selectedCategory}
          </h3>
          <div className="flex overflow-x-auto gap-6 pb-4">
            {products
              .filter((product) => product.category === selectedCategory)
              .map((product) => {
                const images = product.images;
                const currentImg = currentImgs[product.id] || 0;

                return (
                  <Card
                    key={product.id}
                    className="min-w-[250px] max-w-[250px] flex-shrink-0 overflow-hidden hover:shadow-lg transition-shadow p-2"
                  >
                    <div className="relative aspect-square overflow-hidden mb-2">
                      <img
                        src={images[currentImg]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-300"
                      />
                      {images.length > 1 && (
                        <>
                          <button
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1"
                            onClick={() =>
                              handleImgChange(product.id, images, "prev")
                            }
                            type="button"
                          >
                            {"<"}
                          </button>
                          <button
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full p-1"
                            onClick={() =>
                              handleImgChange(product.id, images, "next")
                            }
                            type="button"
                          >
                            {">"}
                          </button>
                        </>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-accent font-semibold mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-semibold text-lg mb-2">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-bold text-primary mb-2">
                        {product.price}
                      </p>
                      <div className="mb-2">
                        <label className="block text-sm mb-1">Talle:</label>
                        <select
                          className="w-full border rounded px-2 py-1"
                          value={selectedOptions[product.id]?.size || ""}
                          onChange={(e) =>
                            handleOptionChange(
                              product.id,
                              "size",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Selecciona un talle</option>
                          {product.sizes.map((size) => (
                            <option key={size} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm mb-1">Color:</label>
                        <select
                          className="w-full border rounded px-2 py-1"
                          value={selectedOptions[product.id]?.color || ""}
                          onChange={(e) =>
                            handleOptionChange(
                              product.id,
                              "color",
                              e.target.value
                            )
                          }
                        >
                          <option value="">Selecciona un color</option>
                          {product.colors.map((color) => (
                            <option key={color} value={color}>
                              {color}
                            </option>
                          ))}
                        </select>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full bg-black text-white hover:bg-black/80"
                        onClick={() =>
                          onAddToCart({
                            ...product,
                            size: selectedOptions[product.id]?.size,
                            color: selectedOptions[product.id]?.color,
                          })
                        }
                        disabled={
                          !selectedOptions[product.id]?.size ||
                          !selectedOptions[product.id]?.color
                        }
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Agregar al Carrito
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
