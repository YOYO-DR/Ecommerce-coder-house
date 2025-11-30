import { Link } from "react-router-dom";
import {
  Star,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";


const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/img/fondo-inicio.avif"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold leading-tight">
                Eleva Tu Experiencia Gaming
              </h1>
              <p className="mt-4 text-xl">
                PCs gamer de alto rendimiento y accesorios premium para gamers exigentes
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Comprar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold">Únete a la Comunidad Gamer</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Suscríbete para ofertas exclusivas, lanzamientos y novedades del mundo gaming
            </p>
            <form className="mt-6 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder={"Ingresa tu correo"}
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-700 dark:bg-gray-800"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
