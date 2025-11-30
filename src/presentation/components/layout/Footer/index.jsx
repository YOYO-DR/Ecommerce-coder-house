import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold text-white">Sobre nosotros</h3>
            <p className="mt-4">
              Tu tienda especializada en PCs gamer, periféricos y accesorios de alto rendimiento.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Enlaces rápidos</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/shop" className="transition-colors hover:text-white">
                  Tienda
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <ul className="mt-4 space-y-2">
              <li>Email: info@pcgamerstore.com</li>
              <li>Teléfono: (555) 123-4567</li>
              <li>Dirección: 456 Gaming Avenue</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Siguenos</h3>
            <div className="mt-4 flex space-x-4">
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-white"
                aria-label="Github"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2024 PC Gamer Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;