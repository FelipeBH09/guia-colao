import { TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CafeCard from "@/components/CafeCard";
import { cafes } from "@/data/cafes";

const Nuevas = () => {
  const newCafes = cafes.filter((cafe) => cafe.isNew);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-gradient-warm text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">Recién Llegadas</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 text-amber-900">
            Nuevas Cafeterías
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-accent font-medium">
            Las últimas incorporaciones a nuestra guía, listas para sorprenderte con sus propuestas únicas
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background flex-1">
        <div className="container mx-auto px-4">
          {newCafes.length > 0 ? (
            <>
              <div className="text-center mb-8">
                <p className="text-lg text-muted-foreground">
                  Descubre {newCafes.length} nuevas cafeterías recientemente evaluadas
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newCafes.map((cafe) => (
                  <CafeCard key={cafe.id} cafe={cafe} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <TrendingUp className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground mb-4">
                No hay cafeterías nuevas en este momento
              </p>
              <p className="text-muted-foreground">
                Estamos constantemente evaluando nuevos establecimientos. ¡Vuelve pronto!
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nuevas;
