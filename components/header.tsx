"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black backdrop-blur supports-[backdrop-filter]:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/lukemlogo.jpg"
              alt="Logo tienda"
              className="h-12 w-12 object-contain rounded-full"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollToSection("horarios")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Horarios
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2 bg-black rounded-lg shadow-lg mt-2">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Productos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Quiénes Somos
            </button>
            <button
              onClick={() => scrollToSection("horarios")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Horarios
            </button>
            <button
              onClick={() => scrollToSection("ubicacion")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Ubicación
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 rounded-md transition-colors"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
