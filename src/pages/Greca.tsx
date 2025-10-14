import { Award, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CafeCard from "@/components/CafeCard";
import { cafes } from "@/data/cafes";
const Greca = () => {
  const grecaCafes = cafes.filter(cafe => cafe.hasGreca);
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-gold text-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Award className="h-6 w-6" />
            <span className="font-semibold text-lg">Máximo Reconocimiento</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Reconocimiento Greca COLAO
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
            El Reconocimiento Greca COLAO es el máximo reconocimiento otorgado por Guía Colao a cafeterías excepcionales con calificaciones de 4.5 a 5 estrellas y evaluado por nuestros inspectores autorizados
          </p>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="h-8 w-8 fill-accent text-accent" />)}
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              ¿Qué se necesita para obtener el Reconocimiento Greca COLAO?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold mb-2">Excelencia Consistente</h3>
                <p className="text-sm text-muted-foreground">
                  Calificación mínima de 4.5 estrellas mantenida a lo largo de múltiples evaluaciones
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold mb-2">Experiencia Memorable</h3>
                <p className="text-sm text-muted-foreground">
                  Ambiente excepcional que crea una experiencia única e inolvidable
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold mb-2">Calidad Premium</h3>
                <p className="text-sm text-muted-foreground">
                  Café y productos de origen superior preparados con técnicas profesionales
                </p>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="bg-accent/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif font-bold mb-2">Propuesta Única</h3>
                <p className="text-sm text-muted-foreground">
                  Originalidad e innovación que distingue al establecimiento
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cafes with Greca */}
      <section className="py-12 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold font-serif mb-4">
              Cafeterías con Reconocimiento Greca COLAO
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              {grecaCafes.length} cafeterías excepcionales merecedoras de este prestigioso reconocimiento
            </p>
            
          </div>

          {grecaCafes.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {grecaCafes.map(cafe => <CafeCard key={cafe.id} cafe={cafe} />)}
            </div> : <div className="text-center py-16">
              <Award className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground mb-4">
                Aún no hay cafeterías con el Reconocimiento Greca COLAO
              </p>
              <p className="text-muted-foreground">
                Estamos evaluando los mejores establecimientos para otorgar este prestigioso premio
              </p>
            </div>}
        </div>
      </section>

      <Footer />
    </div>;
};
export default Greca;