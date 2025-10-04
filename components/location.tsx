import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
  return (
    <section id="ubicacion" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
            Nuestra Ubicación
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Encuéntranos fácilmente y visita nuestra tienda física
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <Card className="w-full max-w-md mb-8 lg:mb-0 bg-black text-white rounded-lg">
            <CardHeader className="bg-black text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl text-white">
                <MapPin className="h-6 w-6 text-primary" />
                Dirección
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 bg-black text-white rounded-b-lg">
              <div>
                <p className="text-lg font-semibold mb-2 text-white">
                  Rufina showroom
                </p>
                <p className="leading-relaxed text-white">
                  Nación 130
                  <br />
                  San Nicolás de los Arroyos
                  <br />
                  Buenos Aires, Argentina
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-white" />
                  <span className="font-semibold text-white">3364528395</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="w-full max-w-md lg:max-w-xl rounded-lg overflow-hidden border h-64 sm:h-80 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps?q=Nación+130,+San+Nicolás+de+los+Arroyos,+Buenos+Aires&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Nación 130"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
