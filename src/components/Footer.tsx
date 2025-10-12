import { Instagram, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logoBrown from "@/assets/logo-guia-colao-brown.jpg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <img 
              src={logoBrown} 
              alt="Guía Colao" 
              className="h-12"
            />
            <p className="text-sm text-primary-foreground/80">
              Las mejores cafeterías de República Dominicana evaluadas por expertos.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-4 font-serif">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/cafeterias" className="hover:text-accent transition-smooth">
                  Cafeterías
                </Link>
              </li>
              <li>
                <Link to="/nuevas" className="hover:text-accent transition-smooth">
                  Nuevas
                </Link>
              </li>
              <li>
                <Link to="/greca" className="hover:text-accent transition-smooth">
                  Reconocimiento Greca COLAO
                </Link>
              </li>
            </ul>
          </div>

          {/* Información */}
          <div>
            <h3 className="font-semibold mb-4 font-serif">Información</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre-nosotros" className="hover:text-accent transition-smooth">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-accent transition-smooth">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="font-semibold mb-4 font-serif">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-primary transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-primary transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-primary transition-smooth"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Guía Colao. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
