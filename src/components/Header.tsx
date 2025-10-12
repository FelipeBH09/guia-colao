import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Inicio",
    path: "/"
  }, {
    name: "Sobre Nosotros",
    path: "/sobre-nosotros"
  }, {
    name: "Cafeterías",
    path: "/cafeterias"
  }, {
    name: "Nuevas",
    path: "/nuevas"
  }, {
    name: "Greca",
    path: "/greca"
  }, {
    name: "Contacto",
    path: "/contacto"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-sm border-b border-border shadow-elegant">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-gold rounded-full p-2 shadow-gold transition-smooth group-hover:scale-110">
              
            </div>
            <div className="flex flex-col">
              
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => <Link key={item.path} to={item.path}>
                <Button variant={isActive(item.path) ? "default" : "ghost"} className="transition-smooth">
                  {item.name}
                </Button>
              </Link>)}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition-smooth" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <nav className="md:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                <Button variant={isActive(item.path) ? "default" : "ghost"} className="w-full justify-start">
                  {item.name}
                </Button>
              </Link>)}
          </nav>}
      </div>
    </header>;
};
export default Header;