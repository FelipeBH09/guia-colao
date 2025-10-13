import { Search, Award, Coffee, TrendingUp, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CafeCard from "@/components/CafeCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cafes } from "@/data/cafes";
import heroImage from "@/assets/hero-coffee.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const featuredCafes = cafes.filter(cafe => cafe.hasGreca).slice(0, 3);
  const newCafes = cafes.filter(cafe => cafe.isNew).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Hero coffee shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 animate-fade-in">
            Descubre las Mejores<br />Cafeterías de República Dominicana
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
            Guía Colao clasifica las mejores cafeterías evaluadas por expertos según ambiente, servicio y originalidad
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-card rounded-full shadow-elegant p-2 flex gap-2 animate-scale-in">
            <Input
              type="text"
              placeholder="Buscar por ubicación o nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 focus-visible:ring-0 text-lg"
            />
            <Button size="lg" className="rounded-full px-8">
              <Search className="h-5 w-5 mr-2" />
              Buscar
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Access Buttons */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/cafeterias">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2 hover:shadow-elegant transition-smooth">
                <Coffee className="h-8 w-8 text-primary" />
                <span className="font-semibold">Todas las Cafeterías</span>
              </Button>
            </Link>
            <Link to="/nuevas">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2 hover:shadow-elegant transition-smooth">
                <TrendingUp className="h-8 w-8 text-primary" />
                <span className="font-semibold">Nuevas</span>
              </Button>
            </Link>
            <Link to="/greca">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2 hover:shadow-elegant transition-smooth">
                <Award className="h-8 w-8 text-accent" />
                <span className="font-semibold">Reconocimiento Greca COLAO</span>
              </Button>
            </Link>
            <Link to="/sobre-nosotros">
              <Button variant="outline" className="w-full h-24 flex flex-col gap-2 hover:shadow-elegant transition-smooth">
                <MapPin className="h-8 w-8 text-primary" />
                <span className="font-semibold">Sobre Nosotros</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cafes with Greca */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Award className="h-5 w-5 text-accent" />
              <span className="font-semibold text-accent">Reconocimiento Greca COLAO</span>
            </div>
            <h2 className="text-4xl font-bold font-serif mb-4">
              Cafeterías Destacadas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Las cafeterías con calificación excepcional (4.5★ - 5★) merecedoras del prestigioso Reconocimiento Greca COLAO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/greca">
              <Button size="lg" className="gap-2">
                Ver todas las cafeterías con Greca COLAO
                <Award className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Cafes */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Recién Llegadas</span>
            </div>
            <h2 className="text-4xl font-bold font-serif mb-4">
              Nuevas Cafeterías
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Las últimas incorporaciones a nuestra guía, listas para sorprenderte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newCafes.map((cafe) => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/nuevas">
              <Button size="lg" variant="outline" className="gap-2">
                Ver todas las cafeterías nuevas
                <TrendingUp className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-warm text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold font-serif mb-6">
            ¿Conoces una cafetería excepcional?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Ayúdanos a hacer crecer nuestra guía sugiriendo nuevas cafeterías para evaluar
          </p>
          <Link to="/contacto">
            <Button size="lg" variant="secondary" className="gap-2">
              Sugerir una cafetería
              <Coffee className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
