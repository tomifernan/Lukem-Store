import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";

export function Hours() {
  const schedule = [
    { day: "Lunes - Sábado", hours: "9:00 AM - 13:00 PM" },
    { day: "Lunes - Sábado", hours: "17:00 PM - 20:00 PM" },
  ];

  return (
    <section id="horarios" className="w-full py-20 bg-black">
      <div className="container mx-auto px-4 bg-black">
        <div className="text-center mb-12 bg-black">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Horarios de Atención
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-white">
            Visítanos en nuestra tienda física durante nuestro horario de
            atención
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-black">
          <Card className="bg-black text-white ">
            <CardHeader className="bg-black text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-2xl text-white bg-black">
                <Clock className="h-6 w-6 text-primary" />
                Horario de la Tienda
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 bg-black text-white rounded-b-lg ">
              <div className="space-y-4 bg-black">
                {schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-white/20 last:border-b-0"
                  >
                    <span className="font-semibold text-lg text-white">
                      {item.day}
                    </span>
                    <span className="font-semibold text-lg text-white">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-black rounded-lg border border-white/20">
                <p className="text-sm text-white leading-relaxed">
                  <strong className="text-white">Nota:</strong> Los horarios
                  pueden variar durante días festivos. Te recomendamos llamar
                  antes de visitarnos en fechas especiales.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
