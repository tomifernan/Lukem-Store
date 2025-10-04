"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, Send, Trash2 } from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: string;
  size?: string;
  color?: string;
};

type CartProps = {
  cart: Product[];
  onRemove: (id: number) => void;
};

function getTotal(cart: Product[]) {
  return cart
    .reduce((acc, p) => acc + Number(p.price.replace(/[^0-9.]/g, "")), 0)
    .toFixed(2);
}

export function Cart({ cart, onRemove }: CartProps) {
  const phoneNumber = "3364039865"; // Cambia por tu número de WhatsApp

  const handleSendWhatsApp = () => {
    if (cart.length === 0) return;
    const message = encodeURIComponent(
      `¡Hola! Quiero hacer el siguiente pedido:\n\n${cart
        .map(
          (p) =>
            `- ${p.name} (${p.price}) - Talle: ${p.size || "-"} - Color: ${
              p.color || "-"
            }`
        )
        .join("\n")}\n\nTotal: $${getTotal(cart)}\n\nGracias.`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:bottom-2 sm:left-auto sm:right-4 bg-black border rounded-t-lg sm:rounded-lg shadow-lg p-2 sm:p-4 w-full max-w-full sm:max-w-sm md:w-80 z-50 overflow-y-auto max-h-[60vh]">
      <h3 className="font-bold text-base sm:text-lg mb-2 flex items-center gap-2 text-white">
        <ShoppingCart className="h-5 w-5 text-white" />
        Carrito
      </h3>
      {cart.length === 0 ? (
        <p className="text-muted-foreground text-white text-sm">
          Tu carrito está vacío.
        </p>
      ) : (
        <>
          <ul className="mb-4">
            {cart.map((product, idx) => (
              <li key={idx} className="flex justify-between items-center py-1">
                <span className="text-white text-sm">
                  {product.name}{" "}
                  <span className="font-semibold">{product.price}</span>
                  <span className="ml-2 text-xs text-white">
                    Talle: {product.size || "-"} | Color: {product.color || "-"}
                  </span>
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onRemove(product.id)}
                  aria-label="Eliminar"
                  className="text-white"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </li>
            ))}
          </ul>
          <div className="font-bold text-right mb-2 text-white text-base">
            Total: ${getTotal(cart)}
          </div>
        </>
      )}
      <Button
        className="w-full bg-black text-white border border-white hover:bg-black/80 flex items-center gap-2 text-sm sm:text-base"
        onClick={handleSendWhatsApp}
        disabled={cart.length === 0}
      >
        <Send className="h-4 w-4" />
        Enviar pedido por WhatsApp
      </Button>
    </div>
  );
}
