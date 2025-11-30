import { Star } from "lucide-react";
import { Award } from "lucide-react";
import { TrendingUp } from "lucide-react";


const Features = () => {
  return (
    <section className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <TrendingUp className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Alto Rendimiento</h3>
              <p className="mt-2 text-blue-100">
                Componentes de última generación para máximo FPS y rendimiento
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Garantía Extendida</h3>
              <p className="mt-2 text-blue-100">
                Todos nuestros productos incluyen garantía y soporte técnico
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Star className="h-8 w-8" />
            <div>
              <h3 className="text-xl font-semibold">Elegido por Pros</h3>
              <p className="mt-2 text-blue-100">
                Equipamiento usado por streamers y jugadores profesionales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Features;