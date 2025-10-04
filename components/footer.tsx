import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Línea blanca separadora arriba del footer */}
      <div className="border-t border-white w-full mb-8"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-playfair text-xl font-bold text-white">
                Lukem store
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Tu tienda de confianza para ropa de calidad.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/lukem_store/"
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#productos"
                  className="hover:text-gray-300 transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-gray-300 transition-colors"
                >
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a
                  href="#horarios"
                  className="hover:text-gray-300 transition-colors"
                >
                  Horarios
                </a>
              </li>
              <li>
                <a
                  href="#ubicacion"
                  className="hover:text-gray-300 transition-colors"
                >
                  Ubicación
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Pantalones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Chaquetas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Shorts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300 transition-colors">
                  Accesorios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span>Nacion 130</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <span>3364528395</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lukem store. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
