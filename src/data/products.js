// Catálogo de Productos Listos para Usar en MOLOKAI
export const PRODUCTS = [
  {
    id: "prod-remera-endless-wave",
    name: "Remera Oversize Endless Wave",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 18500,
    originalPrice: 22000,
    badge: "MÁS VENDIDO",
    rating: 4.9,
    reviewsCount: 38,
    isCustomizable: true,
    colors: [
      { name: "Negro", hex: "#111827" },
      { name: "Blanco", hex: "#f8fafc" },
      { name: "Crudo", hex: "#ece7dc" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Remera de corte oversize premium confeccionada en 100% algodón peinado 24/1 pesado. Estampa serigráfica 'Endless Wave' en el pecho con tintas al agua de máxima durabilidad.",
    features: [
      "100% Algodón Peinado 24/1 Pesado",
      "Corte Boxy Oversize con hombros caídos",
      "Cuello rib de 2.5cm que no se deforma",
      "Serigrafía de alta definición al agua"
    ],
    templateId: "wave-classic",
    mockupType: "tshirt"
  },
  {
    id: "prod-hoodie-faro-quequen",
    name: "Buzo Hoodie Faro Quequén",
    category: "buzos",
    categoryLabel: "Buzos & Hoodies",
    price: 34500,
    originalPrice: 39900,
    badge: "NUEVO",
    rating: 5.0,
    reviewsCount: 19,
    isCustomizable: true,
    colors: [
      { name: "Negro", hex: "#111827" },
      { name: "Gris Melange", hex: "#64748b" },
      { name: "Verde Bosque", hex: "#2d372e" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Buzo hoodie confeccionado en frisa invisible pesada premium con interior afelpado super abrigado. Gran estampa en espalda inspirada en el icónico Faro de Quequén.",
    features: [
      "Frisa invisible 100% algodón de alto gramaje",
      "Capucha forrada con doble tejido",
      "Bolsillo frontal tipo canguro reforzado",
      "Puños y cintura de rib elastizado"
    ],
    templateId: "quequen-faro",
    mockupType: "hoodie"
  },
  {
    id: "prod-remera-necochea-surf",
    name: "Remera Boxy Necochea Surf Club",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 18500,
    originalPrice: 21500,
    badge: "EDICIÓN LIMITADA",
    rating: 4.8,
    reviewsCount: 27,
    isCustomizable: true,
    colors: [
      { name: "Crudo Arena", hex: "#ece7dc" },
      { name: "Negro", hex: "#111827" },
      { name: "Azul Marino", hex: "#1e293b" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Homenaje a la comunidad surfera de Necochea y Quequén. Corte amplio y relajado para usar después de la sesión de olas o en la ciudad.",
    features: [
      "100% Algodón Peinado 24/1",
      "Fit Boxy relajado Unisex",
      "Estampa frontal y detalle en manga",
      "Lavado suavizado pre-encogido"
    ],
    templateId: "necochea-surf",
    mockupType: "tshirt"
  },
  {
    id: "prod-remera-wild-skull",
    name: "Remera Streetwear Wild Skull",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 18500,
    originalPrice: 22000,
    badge: "POPULAR",
    rating: 4.9,
    reviewsCount: 42,
    isCustomizable: true,
    colors: [
      { name: "Blanco Óptico", hex: "#f8fafc" },
      { name: "Negro", hex: "#111827" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Gráfica audaz de calavera urbana con estética noventera y flores tropicales. Ideal para outfits streetwear de alto impacto.",
    features: [
      "Algodón 24/1 alta densidad",
      "Corte oversize moderno",
      "Tacto suave y transpirable",
      "Resistente a lavados frecuentes"
    ],
    templateId: "wild-skull",
    mockupType: "tshirt"
  },
  {
    id: "prod-tote-salty",
    name: "Tote Bag Lienzo Stay Salty",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 11000,
    originalPrice: 13500,
    badge: "ESENCIAL",
    rating: 4.9,
    reviewsCount: 15,
    isCustomizable: true,
    colors: [
      { name: "Crudo Natural", hex: "#ece7dc" },
      { name: "Negro", hex: "#111827" }
    ],
    sizes: ["Único"],
    description: "Bolsa de lienzo pesado reforzado de 12 oz. Manijas anchas de cinta de algodón para máxima comodidad al cargarla al hombro.",
    features: [
      "Lienzo 100% algodón 12 oz",
      "Medidas: 40 cm x 42 cm x 10 cm fuelle",
      "Manijas reforzadas de 65 cm",
      "Costuras de seguridad internas"
    ],
    templateId: "stay-salty",
    mockupType: "tote"
  },
  {
    id: "prod-hoodie-minimal-typo",
    name: "Buzo Hoodie Signature Typo",
    category: "buzos",
    categoryLabel: "Buzos & Hoodies",
    price: 34500,
    originalPrice: 39500,
    badge: "DESTACADO",
    rating: 4.8,
    reviewsCount: 22,
    isCustomizable: true,
    colors: [
      { name: "Negro", hex: "#111827" },
      { name: "Crudo Arena", hex: "#ece7dc" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Hoodie minimalista con tipografía Molokai y coordenadas de Necochea en el pecho. Calidez y sobriedad para cualquier momento del día.",
    features: [
      "Frisa pesada anti-peeling",
      "Calce relajado street style",
      "Cordones con punteras metálicas",
      "Etiqueta bordada en ruedo"
    ],
    templateId: "minimal-typo",
    mockupType: "hoodie"
  },
  {
    id: "prod-gorra-trucker-molokai",
    name: "Gorra Trucker Vintage Molokai",
    category: "accesorios",
    categoryLabel: "Accesorios",
    price: 13500,
    originalPrice: 16000,
    badge: "VERANO",
    rating: 4.7,
    reviewsCount: 18,
    isCustomizable: false,
    colors: [
      { name: "Negro / Blanco", hex: "#111827" },
      { name: "Azul Marino / Crudo", hex: "#1e293b" }
    ],
    sizes: ["Ajustable"],
    description: "Gorra modelo trucker con frente de gomaespuma acolchada, red trasera respirable y parche vintage bordado Molokai Necochea.",
    features: [
      "Frente estructurado acolchado",
      "Malla trasera de alta ventilación",
      "Broche snapback regulable",
      "Visera curva con costuras reforzadas"
    ],
    templateId: null,
    mockupType: "cap"
  },
  {
    id: "prod-remera-golden-palm",
    name: "Remera Pocket Golden Hour Palm",
    category: "remeras",
    categoryLabel: "Remeras",
    price: 15500,
    originalPrice: 18500,
    badge: "CLÁSICA",
    rating: 4.9,
    reviewsCount: 31,
    isCustomizable: true,
    colors: [
      { name: "Blanco", hex: "#ffffff" },
      { name: "Negro", hex: "#111827" },
      { name: "Gris Melange", hex: "#64748b" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Remera clásica con detalle de estampa minimalista en bolsillo izquierdo y print sutil de palmera al atardecer.",
    features: [
      "100% Algodón 30/1 peinado liviano",
      "Corte regular clásico unisex",
      "Estampa sutil y elegante",
      "Ideal para media estación y verano"
    ],
    templateId: "golden-palm",
    mockupType: "tshirt"
  }
];
