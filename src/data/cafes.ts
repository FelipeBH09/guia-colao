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
import affogato1 from "@/assets/affogato-1.jpg";
import affogato2 from "@/assets/affogato-2.jpg";
import affogato3 from "@/assets/affogato-3.jpg";
import affogato4 from "@/assets/affogato-4.jpg";
import affogato5 from "@/assets/affogato-5.jpg";
import affogato6 from "@/assets/affogato-6.jpg";
import affogato7 from "@/assets/affogato-7.jpg";
import affogato8 from "@/assets/affogato-8.jpg";
import affogato9 from "@/assets/affogato-9.jpg";
import affogato10 from "@/assets/affogato-10.jpg";
import sugarMommy1 from "@/assets/sugar-mommy-1.jpg";
import sugarMommy2 from "@/assets/sugar-mommy-2.jpg";
import sugarMommy3 from "@/assets/sugar-mommy-3.jpg";
import sugarMommy4 from "@/assets/sugar-mommy-4.jpg";
import sugarMommy5 from "@/assets/sugar-mommy-5.jpg";
import sugarMommy6 from "@/assets/sugar-mommy-6.jpg";
import sugarMommy7 from "@/assets/sugar-mommy-7.jpg";
import sugarMommy8 from "@/assets/sugar-mommy-8.jpg";
import sugarMommy9 from "@/assets/sugar-mommy-9.jpg";
import sugarMommy10 from "@/assets/sugar-mommy-10.jpg";
import mrMrsCoffee1 from "@/assets/mr-mrs-coffee-1.jpg";
import mrMrsCoffee2 from "@/assets/mr-mrs-coffee-2.jpg";
import mrMrsCoffee3 from "@/assets/mr-mrs-coffee-3.jpg";
import mrMrsCoffee4 from "@/assets/mr-mrs-coffee-4.jpg";
import mrMrsCoffee5 from "@/assets/mr-mrs-coffee-5.jpg";
import mrMrsCoffee6 from "@/assets/mr-mrs-coffee-6.jpg";
import mrMrsCoffee7 from "@/assets/mr-mrs-coffee-7.jpg";
import mrMrsCoffee8 from "@/assets/mr-mrs-coffee-8.jpg";
import mrMrsCoffee9 from "@/assets/mr-mrs-coffee-9.jpg";
import mrMrsCoffee10 from "@/assets/mr-mrs-coffee-10.jpg";

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
    name: "Affogato Café",
    location: "Calle Sánchez esquina Arzobispo Nouel, Ciudad Colonial, Santo Domingo",
    rating: 4.5,
    image: affogato1,
    description: "Cafetería con encanto moderno y ambiente íntimo en la Ciudad Colonial, ideal para disfrutar cafés artesanales y postres inspirados en la tradición italiana.",
    isNew: false,
    hasGreca: true,
  },
  {
    id: 3,
    name: "Sugar Mommy Café",
    location: "Zona de Los Prados / Bella Vista, Santo Domingo",
    rating: 4.5,
    image: sugarMommy1,
    description: "Una cafetería rosa y encantadora en Santo Domingo, ideal para fotos, postres y brunchs llenos de color y dulzura.",
    isNew: false,
    hasGreca: true,
  },
  {
    id: 11,
    name: "Mr & Mrs Coffee",
    location: "El Millón y Bella Vista, Santo Domingo",
    rating: 4.5,
    image: mrMrsCoffee1,
    description: "Un espacio moderno y acogedor ideal para brunch y café, con dos sucursales en Santo Domingo.",
    isNew: false,
    hasGreca: true,
  },
  {
    id: 4,
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

export const affogatoGallery = [
  affogato1,
  affogato2,
  affogato3,
  affogato4,
  affogato5,
  affogato6,
  affogato7,
  affogato8,
  affogato9,
  affogato10,
];

export const sugarMommyGallery = [
  sugarMommy1,
  sugarMommy2,
  sugarMommy3,
  sugarMommy4,
  sugarMommy5,
  sugarMommy6,
  sugarMommy7,
  sugarMommy8,
  sugarMommy9,
  sugarMommy10,
];

export const mrMrsCoffeeGallery = [
  mrMrsCoffee1,
  mrMrsCoffee2,
  mrMrsCoffee3,
  mrMrsCoffee4,
  mrMrsCoffee5,
  mrMrsCoffee6,
  mrMrsCoffee7,
  mrMrsCoffee8,
  mrMrsCoffee9,
  mrMrsCoffee10,
];
