import { CafeData } from "@/components/CafeCard";
import cafe1 from "@/assets/cafe-1.jpg";
import cafe2 from "@/assets/cafe-2.jpg";
import cafe3 from "@/assets/cafe-3.jpg";
import cafe4 from "@/assets/cafe-4.jpg";
import cafe5 from "@/assets/cafe-5.jpg";
import cafe6 from "@/assets/cafe-6.jpg";
import cafe7 from "@/assets/cafe-7.jpg";
import cafe8 from "@/assets/cafe-8.jpg";
import casaBarista1 from "@/assets/casa-barista-1.jpg";
import casaBarista2 from "@/assets/casa-barista-2.jpg";
import casaBarista3 from "@/assets/casa-barista-3.jpg";
import casaBarista4 from "@/assets/casa-barista-4.jpg";
import casaBarista5 from "@/assets/casa-barista-5.jpg";
import casaBarista6 from "@/assets/casa-barista-6.jpg";
import casaBarista7 from "@/assets/casa-barista-7.jpg";
import casaBarista8 from "@/assets/casa-barista-8.jpg";
import casaBarista9 from "@/assets/casa-barista-9.jpg";
import casaBarista10 from "@/assets/casa-barista-10.jpg";

export const cafes: CafeData[] = [
  {
    id: 1,
    name: "Casa Barista & Co.",
    location: "Ciudad Colonial, Santo Domingo",
    rating: 4.6,
    image: casaBarista1,
    description: "Cafetería artesanal en el corazón de la Ciudad Colonial, con un ambiente cálido y un servicio que te hace sentir en casa.",
    isNew: false,
    hasGreca: true,
  },
  {
    id: 2,
    name: "Espresso Bar",
    location: "Santo Domingo, Naco",
    rating: 4.3,
    image: cafe4,
    description: "Cafetería boutique especializada en espresso italiano. Baristas certificados y granos de importación.",
    isNew: true,
    hasGreca: false,
  },
  {
    id: 3,
    name: "Bean & Brew",
    location: "Santo Domingo, Bella Vista",
    rating: 4.4,
    image: cafe6,
    description: "Espacio de co-working con excelente café. Ambiente relajado ideal para trabajar o estudiar.",
    isNew: true,
    hasGreca: false,
  },
  {
    id: 4,
    name: "Urban Coffee",
    location: "Santo Domingo, Gazcue",
    rating: 4.2,
    image: cafe8,
    description: "Cafetería moderna con arte urbano. Menú innovador con opciones veganas y sin gluten.",
    isNew: true,
    hasGreca: false,
  },
  {
    id: 5,
    name: "El Rincón del Barista",
    location: "San Pedro de Macorís, Centro",
    rating: 4.4,
    image: cafe1,
    description: "Cafetería familiar con tradición de tres generaciones. Café criollo y repostería casera.",
    isNew: false,
    hasGreca: false,
  },
  {
    id: 6,
    name: "Mocca House",
    location: "Boca Chica, Playa",
    rating: 4.3,
    image: cafe3,
    description: "Cafetería frente al mar con ambiente caribeño. Especialidad en bebidas con chocolate.",
    isNew: false,
    hasGreca: false,
  },
  {
    id: 7,
    name: "Café Express Center",
    location: "Santiago, Los Jardines",
    rating: 4.5,
    image: cafe4,
    description: "Servicio rápido sin sacrificar calidad. Ideal para profesionales en movimiento.",
    isNew: true,
    hasGreca: false,
  },
];

export const casaBaristaGallery = [
  casaBarista1,
  casaBarista2,
  casaBarista3,
  casaBarista4,
  casaBarista5,
  casaBarista6,
  casaBarista7,
  casaBarista8,
  casaBarista9,
  casaBarista10,
];
