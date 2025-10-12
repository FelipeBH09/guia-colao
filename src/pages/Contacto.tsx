import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado!", {
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-16 bg-gradient-warm text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-6">
            Contacto
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            ¿Tienes preguntas o sugerencias? Nos encantaría escucharte
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">
                Envíanos un mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  Enviar mensaje
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-6">
                  Información de contacto
                </h2>
                <p className="text-muted-foreground mb-8">
                  Estamos aquí para responder tus preguntas, recibir sugerencias de nuevas cafeterías, o simplemente charlar sobre café.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 mt-1">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">contacto@guiacolao.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 mt-1">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+1 (809) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 mt-1">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Santo Domingo, República Dominicana
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-6 mt-8">
                <h3 className="font-serif font-bold mb-3">Sugerir una cafetería</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  ¿Conoces una cafetería excepcional que debería estar en nuestra guía? Háznoslo saber en tu mensaje incluyendo:
                </p>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Nombre del establecimiento</li>
                  <li>• Ubicación exacta</li>
                  <li>• Qué hace especial a este lugar</li>
                  <li>• Tu experiencia personal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
