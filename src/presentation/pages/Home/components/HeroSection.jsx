import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <img
        src="/img/fondo-inicio.jpg"
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
              className="mt-8 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
            >
              Comprar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;