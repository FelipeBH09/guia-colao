import { Coffee, Award, Users, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const SobreNosotros = () => {
  const faqs = [{
    question: "¿Cómo obtener el Reconocimiento Greca COLAO?",
    answer: "El Reconocimiento Greca COLAO es otorgado exclusivamente a cafeterías con calificaciones excepcionales entre 4.5 y 5 estrellas. Nuestros inspectores expertos visitan cada establecimiento de forma anónima y evalúan múltiples aspectos antes de otorgar este prestigioso reconocimiento. No es posible solicitarlo directamente; debe ser ganado mediante excelencia consistente."
  }, {
    question: "¿Qué toman en cuenta los inspectores de COLAO para otorgar el Reconocimiento Greca COLAO?",
    answer: "Nuestros inspectores evalúan: 1) Calidad del café y los productos ofrecidos (origen, preparación, sabor), 2) Ambiente (diseño, limpieza, comodidad, música), 3) Servicio (atención, conocimiento del personal), 4) Originalidad (propuesta única, innovación), 5) Consistencia (calidad mantenida en múltiples visitas). Cada criterio debe alcanzar estándares excepcionales."
  }, {
    question: "¿Qué criterios se usan para calificar las cafeterías?",
    answer: "Utilizamos el sistema COLAO - Calificación Orgánica de Locales, Ambiente y Originalidad. Evaluamos: calidad del café y productos (25%), ambiente y diseño (20%), servicio al cliente (40%) y originalidad y propuesta única (15%). Cada cafetería recibe una puntuación de 1 a 5 estrellas basada en estos criterios, y solo las que alcanzan 4 estrellas en adelante son reconocidas con la Greca COLAO."
  }, {
    question: "¿Puedo sugerir una cafetería para la guía?",
    answer: "¡Por supuesto! Valoramos mucho las sugerencias de nuestra comunidad. Puedes enviarnos tu recomendación a través de nuestra página de contacto. Incluye el nombre, ubicación y qué hace especial a ese lugar. Nuestro equipo evaluará todas las sugerencias y programará visitas a las cafeterías más prometedoras."
  }, {
    question: "¿Qué significa cada estrella en la calificación?",
    answer: "⭐ 1-2 estrellas: Básico, necesita mejoras significativas. ⭐⭐⭐ 3 estrellas: Bueno, experiencia satisfactoria. ⭐⭐⭐⭐ 4 estrellas: Muy bueno, vale la pena visitar. ⭐⭐⭐⭐⭐ 4.5-5 estrellas: Excepcional, merece ser visitado para ver si califica para obtener el reconocimiento de Greca COLAO. Las calificaciones se actualizan regularmente basándose en evaluaciones continuas."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-warm text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-6">
            <Coffee className="h-5 w-5" />
            <span className="font-semibold">Nuestra Historia</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6 animate-fade-in text-primary">
            Sobre Guía Colao
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 text-yellow-600">
            La guía definitiva de cafeterías en República Dominicana
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold font-serif mb-6 text-foreground">
              Nuestra Historia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
              La Guía COLAO nace el 8 de octubre de 2025 de la pasión por el café, la calidad y el deseo de conectar a los amantes del buen café con los mejores establecimientos de la República Dominicana. Fue creada por Emely Hernández y Hanna Méndez, estudiantes de Hospitalidad y Turismo de la Pontificia Universidad Católica Madre y Maestra (PUCMM), durante la asignatura Gestión de Servicios de Alimentos y Bebidas, impartida por la profesora Cruz Castillo. Esta guía surgió ante la falta de una plataforma profesional que evaluara cafeterías bajo estándares reales de calidad.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
              Nuestra misión es evaluar la cultura cafetera dominicana y reconocer la excelencia donde la encontremos. En el corto tiempo de existencia de la guía, hemos calificado cuatro cafeterías en el país aplicando nuestro sistema profesional de evaluación y hemos otorgado el reconocimiento Greca COLAO únicamente a aquellas que demuestran estándares superiores.
            </p>
            <p className="text-muted-foreground leading-relaxed text-justify">
              Nuestra metodología es objetiva, transparente y confiable. Cada evaluación es realizada por inspectores anónimos, lo que garantiza calificaciones honestas, imparciales y basadas en experiencia real.
            </p>
          </div>
        </div>
      </section>

      {/* COLAO Explicación */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-6">
              ¿Qué significa COLAO?
            </h2>
            <div className="bg-accent/10 rounded-2xl p-8 border-2 border-accent/20">
              <p className="text-2xl font-bold text-accent font-serif mb-2">COLAO</p>
              <p className="text-xl text-foreground">
                Calificación Orgánica de Locales, Ambiente y Originalidad
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-elegant text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold mb-2">Calidad</h3>
              <p className="text-sm text-muted-foreground">
                Evaluamos la excelencia del café y productos ofrecidos
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-elegant text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif font-bold mb-2">Ambiente</h3>
              <p className="text-sm text-muted-foreground">
                Analizamos el diseño, comodidad y atmósfera del local
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-elegant text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif font-bold mb-2">Servicio</h3>
              <p className="text-sm text-muted-foreground">
                Medimos la atención y conocimiento del personal
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-elegant text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif font-bold mb-2">Originalidad</h3>
              <p className="text-sm text-muted-foreground">
                Valoramos propuestas únicas e innovación
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Todo lo que necesitas saber sobre Guía Colao
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6 shadow-sm">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>;
};
export default SobreNosotros;