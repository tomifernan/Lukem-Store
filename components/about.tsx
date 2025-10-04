import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, TrendingUp } from "lucide-react";

export function About() {
  return (
    <section id="nosotros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
            Quiénes Somos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En Rufina showroom, somos más que una tienda de ropa. Somos un
            espacio dedicado a la moda y el estilo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">
              Nuestra Historia
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundada en 2020, Rufina showroom nació de la pasión por el deporte
              y el deseo de ofrecer productos de calidad superior a precios
              accesibles. Comenzamos como una pequeña tienda local y hemos
              crecido hasta convertirnos en un referente en ropa deportiva.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Trabajamos directamente con las mejores marcas y fabricantes para
              garantizar que cada producto cumpla con nuestros estándares de
              calidad, durabilidad y rendimiento.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">Nuestra Misión</h3>
            <p className="text-muted-foreground leading-relaxed">
              Inspirar y equipar a atletas de todos los niveles con ropa
              deportiva de alta calidad que mejore su rendimiento y confianza.
              Creemos que todos merecen acceso a productos excepcionales sin
              importar su presupuesto.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nos comprometemos a ofrecer un servicio al cliente excepcional,
              asesoramiento experto y una experiencia de compra que supere tus
              expectativas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center bg-black">
            <CardContent className="pt-6 bg-black text-white rounded-lg">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-white">
                Calidad Premium
              </h4>
              <p className="text-sm leading-relaxed text-white">
                Productos certificados de las mejores marcas
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-black">
            <CardContent className="pt-6 bg-black text-white rounded-lg">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-white">
                Comunidad
              </h4>
              <p className="text-sm leading-relaxed text-white">
                Más de 10,000 clientes satisfechos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-black">
            <CardContent className="pt-6 bg-black text-white rounded-lg">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-white">Pasión</h4>
              <p className="text-sm leading-relaxed text-white">
                Amamos la moda
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-black">
            <CardContent className="pt-6 bg-black text-white rounded-lg">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2 text-white">
                Innovación
              </h4>
              <p className="text-sm leading-relazed text-white">
                Siempre a la vanguardia de las tendencias
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
