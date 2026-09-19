// Configuración principal de la tienda MOLOKAI
export const STORE_CONFIG = {
  name: "MOLOKAI",
  subtitle: "INDUMENTARIA",
  slogan: "Indumentaria para todos",
  bio: "Diseños propios, indumentaria personalizada y las mejores prendas streetwear & surfwear.",
  
  // Ubicación
  location: {
    city: "Necochea",
    province: "Buenos Aires",
    country: "Argentina",
    zones: "Necochea & Quequén",
    showroomAddress: "Necochea, Bs. As. (Atención personalizada con cita previa)",
    postalCode: "B7630"
  },

  // Canales de contacto
  contact: {
    // Reemplazar con el número real de WhatsApp (formato internacional sin +)
    whatsappNumber: "5492262551234",
    whatsappDisplay: "+54 9 2262 55-1234",
    email: "tienda.molokai@gmail.com",
    instagramHandle: "@tienda.molokai",
    instagramUrl: "https://www.instagram.com/tienda.molokai/",
    facebookName: "Tienda Molokai",
    facebookUrl: "https://www.facebook.com/profile.php?id=61565569539188",
    showroomSchedule: "Lunes a Sábados con Cita Previa"
  },

  // Beneficios de compra
  benefits: [
    {
      icon: "truck",
      title: "Envíos a todo el país",
      desc: "Llegamos a cada rincón de Argentina vía Andreani y Correo Argentino."
    },
    {
      icon: "map-pin",
      title: "Showroom en Necochea",
      desc: "Vení a probarte y retirar gratis coordinando tu cita previa."
    },
    {
      icon: "palette",
      title: "Crea tu propia prenda",
      desc: "Elegí tu diseño, remera, color y tamaño con nuestro simulador en vivo."
    },
    {
      icon: "shield-check",
      title: "10% OFF con Transferencia",
      desc: "Aboná con transferencia bancaria o en efectivo y obtené descuento directo."
    }
  ],

  // Moneda
  currency: {
    symbol: "$",
    code: "ARS",
    format: (amount) => {
      return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
      }).format(amount);
    }
  },

  // Descuentos aplicables
  discounts: {
    transferDiscountPercent: 10,
    promoCodes: {
      "MOLOKAI10": 0.10,
      "NECOCHEA": 0.15,
      "BIENVENIDA": 0.10
    }
  }
};
