import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Award, MapPin, Star } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cafes, casaBaristaGallery, affogatoGallery } from "@/data/cafes";
import StarRating from "@/components/StarRating";
import ImageLightbox from "@/components/ImageLightbox";

const CafeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cafe = cafes.find((c) => c.id === Number(id));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!cafe) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Cafetería no encontrada</h1>
            <Button onClick={() => navigate("/cafeterias")}>
              Volver a cafeterías
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Define cafe details based on ID
  const cafeDetails = {
    1: {
      gallery: casaBaristaGallery,
      description: [
        "Casabarista & Co. es una cafetería artesanal ubicada en la Ciudad Colonial de Santo Domingo. Su encanto radica en su ambiente acogedor, donde el diseño rústico y los tonos cálidos se combinan con un servicio atento y cercano.",
        "El espacio conserva paredes de ladrillo y una iluminación tenue que resalta la textura natural del local, creando una atmósfera perfecta para disfrutar de un buen café o una comida ligera.",
        "El personal destaca por su trato amable y su conocimiento del menú. Durante la visita, el camarero explicó con detalle los ingredientes de cada plato, incluyendo aquellos que no aparecen descritos en profundidad en el menú, mostrando disposición para adaptarse a las preferencias del cliente.",
        "El menú ofrece una variedad de cafés artesanales, acompañados de repostería fresca y opciones de brunch que reflejan un equilibrio entre lo clásico y lo moderno.",
        "Casa Barista Co. se ha ganado un lugar especial en la escena cafetera dominicana, combinando calidad, servicio y autenticidad en cada experiencia."
      ],
      score: 95,
      title: "Casa Barista & Co."
    },
    2: {
      gallery: affogatoGallery,
      description: [
        "Affogato Café se encuentra en una esquina emblemática de la Ciudad Colonial, donde la historia y el arte se funden con el aroma del café recién hecho.",
        "Su diseño mezcla lo moderno con lo clásico: mesas de madera clara, paredes de tonos neutros y una iluminación cálida que invita a la conversación tranquila.",
        "El ambiente es relajado y bien cuidado, ideal para quienes buscan una experiencia pausada y de calidad.",
        "El servicio al cliente es excelente: los camareros son atentos, educados y conocen a fondo el menú, explicando con detalle cada bebida y plato disponible.",
        "Durante la visita, se observó un trato personalizado, con sugerencias acertadas y disposición para ajustar ingredientes según preferencias.",
        "El menú ofrece cafés de autor, bebidas frías y postres, destacando la preparación del clásico affogato, que da nombre al local.",
        "Affogato Café combina una propuesta de sabor elegante con un ambiente auténtico, consolidándose como una de las joyas cafeteras de la Ciudad Colonial."
      ],
      score: 93,
      title: "Affogato Café"
    }
  };

  const currentCafeDetails = cafeDetails[cafe.id as keyof typeof cafeDetails];
  
  if (!currentCafeDetails) {
    navigate("/cafeterias");
    return null;
  }

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/cafeterias")}
            className="mb-6 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a cafeterías evaluadas
          </Button>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4 text-primary">
              {cafe.name}
            </h1>
            
            <div className="inline-flex items-center gap-2 bg-accent text-primary px-4 py-2 rounded-full shadow-gold mb-6">
              <Award className="h-5 w-5" />
              <span className="font-semibold">Reconocimiento Greca COLAO</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-primary/80 mb-6">
              <MapPin className="h-5 w-5" />
              <span className="text-lg">{cafe.location}</span>
            </div>

            <StarRating rating={cafe.rating} size="lg" />
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img
              src={cafe.image}
              alt={cafe.name}
              className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              Galería de Fotos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCafeDetails.gallery.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-elegant hover:scale-105 transition-smooth cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <img
                    src={image}
                    alt={`${cafe.name} - Foto ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-6">
              Sobre {currentCafeDetails.title}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {currentCafeDetails.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              Evaluación según el Sistema COLAO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-lg">Servicio al Cliente</h3>
                  <span className="text-2xl font-bold text-accent">40%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-accent h-3 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-lg">Productos y Café</h3>
                  <span className="text-2xl font-bold text-accent">25%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-accent h-3 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-lg">Originalidad y Propuesta</h3>
                  <span className="text-2xl font-bold text-accent">20%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-accent h-3 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-elegant">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif font-bold text-lg">Ambiente y Diseño</h3>
                  <span className="text-2xl font-bold text-accent">15%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-accent h-3 rounded-full" style={{ width: "15%" }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center bg-gradient-gold rounded-xl p-8">
              <p className="text-sm uppercase tracking-wider text-primary/80 mb-2">
                Puntuación Total
              </p>
              <p className="text-6xl font-bold text-primary mb-2">{currentCafeDetails.score}</p>
              <p className="text-2xl text-primary/90">de 100</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center">
              Información Adicional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary rounded-xl p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-bold mb-2">Ciudad</h3>
                <p className="text-muted-foreground">{cafe.location}</p>
              </div>

              <div className="bg-secondary rounded-xl p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-bold mb-2">Tipo de Visita</h3>
                <p className="text-muted-foreground">Evaluación Oficial Guía COLAO</p>
              </div>

              <div className="bg-secondary rounded-xl p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-3 text-accent" />
                <h3 className="font-bold mb-2">Reconocimiento</h3>
                <p className="text-muted-foreground">Greca COLAO – Cafetería Destacada 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <Button
            size="lg"
            onClick={() => navigate("/cafeterias")}
            className="text-lg px-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a cafeterías evaluadas
          </Button>
        </div>
      </section>

      <Footer />

      {lightboxOpen && (
        <ImageLightbox
          images={currentCafeDetails.gallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          altPrefix={cafe.name}
        />
      )}
    </div>
  );
};

export default CafeDetail;
