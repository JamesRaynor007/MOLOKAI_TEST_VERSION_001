// Colección de Diseños y Templates para personalizar prendas en MOLOKAI
export const DESIGN_TEMPLATES = [
  {
    id: "wave-classic",
    title: "Molokai Endless Wave",
    category: "Surf",
    tags: ["surf", "ola", "retro", "mar"],
    description: "Gran ola estilizada con sol radiante y tipografía clásica inspirada en las costas del Pacífico y Necochea.",
    recommendedGarment: "Remera Oversize",
    recommendedPlacement: "pecho",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#0ea5e9") => `
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="95" fill="none" stroke="${primaryColor}" stroke-width="4" stroke-dasharray="8 4" opacity="0.4"/>
        <circle cx="0" cy="-15" r="45" fill="#f59e0b" opacity="0.85"/>
        <path d="M-85,35 Q-40,5 0,35 T85,35 L85,80 L-85,80 Z" fill="${primaryColor}" opacity="0.15"/>
        <path d="M-90,45 C-50,0 -20,20 15,-10 C35,-30 20,-50 -5,-45 C-10,-44 -15,-40 -12,-35 C-8,-32 -2,-32 8,-22 C18,-12 12,5 -15,15 C-45,25 -70,35 -90,45 Z" fill="${accentColor}"/>
        <path d="M-80,60 C-40,25 0,35 40,15 C60,5 75,12 85,25 L85,80 L-80,80 Z" fill="${primaryColor}"/>
        <text x="0" y="-70" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="20" fill="${primaryColor}" letter-spacing="4">MOLOKAI</text>
        <text x="0" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="9" fill="${primaryColor}" letter-spacing="3">COASTAL DIVISION • EST. 2024</text>
      </g>
    `
  },
  {
    id: "necochea-surf",
    title: "Necochea Surf Club 7630",
    category: "Coastal",
    tags: ["necochea", "quequen", "club", "surfboards"],
    description: "Insignia náutica vintage con tablas cruzadas celebrando las olas de Necochea y Quequén.",
    recommendedGarment: "Remera Clásica",
    recommendedPlacement: "pecho",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#f97316") => `
      <g transform="translate(150, 150)">
        <rect x="-85" y="-85" width="170" height="170" rx="20" fill="none" stroke="${primaryColor}" stroke-width="3" opacity="0.6"/>
        <g transform="rotate(35)">
          <ellipse cx="0" cy="0" rx="14" ry="75" fill="${accentColor}" opacity="0.9"/>
          <line x1="0" y1="-70" x2="0" y2="70" stroke="${primaryColor}" stroke-width="2"/>
        </g>
        <g transform="rotate(-35)">
          <ellipse cx="0" cy="0" rx="14" ry="75" fill="${primaryColor}" opacity="0.85"/>
          <line x1="0" y1="-70" x2="0" y2="70" stroke="#0f172a" stroke-width="2"/>
        </g>
        <circle cx="0" cy="0" r="32" fill="#0f172a" stroke="${primaryColor}" stroke-width="3"/>
        <text x="0" y="-4" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="${primaryColor}">NEC</text>
        <text x="0" y="10" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="9" fill="${accentColor}">7630</text>
        <text x="0" y="-95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="13" fill="${primaryColor}" letter-spacing="3">NECOCHEA SURF</text>
        <text x="0" y="105" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="8" fill="${primaryColor}" letter-spacing="2">BUENOS AIRES • ARGENTINA</text>
      </g>
    `
  },
  {
    id: "quequen-faro",
    title: "Faro Quequén Swell",
    category: "Coastal",
    tags: ["quequen", "faro", "mar", "olas"],
    description: "Tributo al icónico Faro de Quequén con estética náutica lineal moderna.",
    recommendedGarment: "Buzo Hoodie",
    recommendedPlacement: "espalda",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#38bdf8") => `
      <g transform="translate(150, 150)">
        <polygon points="0,-85 -75,65 75,65" fill="none" stroke="${primaryColor}" stroke-width="2" opacity="0.4"/>
        <path d="M-15,45 L-8,-50 L8,-50 L15,45 Z" fill="${primaryColor}"/>
        <rect x="-11" y="-25" width="22" height="12" fill="${accentColor}"/>
        <rect x="-13" y="10" width="26" height="12" fill="${accentColor}"/>
        <polygon points="-12,-50 12,-50 0,-70" fill="${primaryColor}"/>
        <!-- Rayos de luz -->
        <polygon points="0,-55 -80,-30 -80,-10" fill="#fef08a" opacity="0.3"/>
        <polygon points="0,-55 80,-30 80,-10" fill="#fef08a" opacity="0.3"/>
        <!-- Olas en la base -->
        <path d="M-60,50 Q-30,40 0,50 T60,50" fill="none" stroke="${accentColor}" stroke-width="4"/>
        <path d="M-70,60 Q-35,50 0,60 T70,60" fill="none" stroke="${primaryColor}" stroke-width="3"/>
        <text x="0" y="85" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="14" fill="${primaryColor}" letter-spacing="4">QUEQUÉN</text>
        <text x="0" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="8" fill="${accentColor}" letter-spacing="2">LIGHTHOUSE DIVISION</text>
      </g>
    `
  },
  {
    id: "wild-skull",
    title: "Wild Skull Rider",
    category: "Streetwear",
    tags: ["skull", "calavera", "streetwear", "urban"],
    description: "Calavera urbana con gafas oscuras y flores tropicales, un must del streetwear costero.",
    recommendedGarment: "Remera Oversize",
    recommendedPlacement: "pecho",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#f43f5e") => `
      <g transform="translate(150, 150)">
        <!-- Fondo circular degradado simulado -->
        <circle cx="0" cy="0" r="85" fill="${accentColor}" opacity="0.2"/>
        <!-- Calavera -->
        <path d="M-45,-15 C-45,-60 45,-60 45,-15 C45,15 35,25 25,45 L-25,45 C-35,25 -45,15 -45,-15 Z" fill="${primaryColor}"/>
        <!-- Mandíbula y dientes -->
        <rect x="-18" y="32" width="6" height="10" rx="2" fill="#0f172a"/>
        <rect x="-6" y="32" width="5" height="10" rx="2" fill="#0f172a"/>
        <rect x="5" y="32" width="5" height="10" rx="2" fill="#0f172a"/>
        <rect x="16" y="32" width="6" height="10" rx="2" fill="#0f172a"/>
        <!-- Gafas de sol oscuras con reflejo -->
        <path d="M-38,-20 C-38,-30 -10,-30 -5,-20 C-2,-18 2,-18 5,-20 C10,-30 38,-30 38,-20 C38,-5 12,0 5,-5 C0,-8 0,-8 -5,-5 C-12,0 -38,-5 -38,-20 Z" fill="#0f172a"/>
        <line x1="-30" y1="-22" x2="-12" y2="-12" stroke="${accentColor}" stroke-width="3" stroke-linecap="round"/>
        <line x1="12" y1="-22" x2="30" y2="-12" stroke="${accentColor}" stroke-width="3" stroke-linecap="round"/>
        <!-- Flor tropical -->
        <circle cx="38" cy="-35" r="10" fill="${accentColor}"/>
        <circle cx="48" cy="-30" r="8" fill="#fbbf24"/>
        <!-- Texto superior e inferior -->
        <text x="0" y="-72" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${primaryColor}" letter-spacing="3">MOLOKAI CREW</text>
        <text x="0" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" fill="${accentColor}" letter-spacing="3">RIDE OR DIE • STREETWEAR</text>
      </g>
    `
  },
  {
    id: "golden-palm",
    title: "Golden Hour Palm",
    category: "Minimal",
    tags: ["palm", "palmera", "sunset", "minimal"],
    description: "Silueta geométrica de palmera al atardecer sobre líneas horizontales.",
    recommendedGarment: "Remera Clásica",
    recommendedPlacement: "bolsillo",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#f59e0b") => `
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="80" fill="none" stroke="${primaryColor}" stroke-width="2"/>
        <circle cx="0" cy="-10" r="40" fill="${accentColor}" opacity="0.9"/>
        <!-- Líneas de horizonte cortando el sol -->
        <line x1="-50" y1="5" x2="50" y2="5" stroke="#0f172a" stroke-width="3"/>
        <line x1="-65" y1="15" x2="65" y2="15" stroke="#0f172a" stroke-width="4"/>
        <line x1="-75" y1="28" x2="75" y2="28" stroke="#0f172a" stroke-width="5"/>
        <!-- Tronco y ramas de la palmera -->
        <path d="M-5,50 Q10,10 0,-25" fill="none" stroke="${primaryColor}" stroke-width="5" stroke-linecap="round"/>
        <path d="M0,-25 Q-30,-45 -45,-30 Q-25,-25 0,-25" fill="${primaryColor}"/>
        <path d="M0,-25 Q30,-45 45,-30 Q25,-25 0,-25" fill="${primaryColor}"/>
        <path d="M0,-25 Q-20,-60 -5,-55 Q-5,-35 0,-25" fill="${primaryColor}"/>
        <path d="M0,-25 Q20,-60 5,-55 Q5,-35 0,-25" fill="${primaryColor}"/>
        <path d="M0,-25 Q-40,-15 -45,-5 Q-25,-10 0,-25" fill="${primaryColor}"/>
        <path d="M0,-25 Q40,-15 45,-5 Q25,-10 0,-25" fill="${primaryColor}"/>
        <text x="0" y="68" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="11" fill="${primaryColor}" letter-spacing="3">PACIFIC BREEZE</text>
      </g>
    `
  },
  {
    id: "minimal-typo",
    title: "MOLOKAI Signature Typo",
    category: "Streetwear",
    tags: ["typography", "logo", "minimal", "streetwear"],
    description: "Composición tipográfica bold contemporánea con coordenadas geográficas y sello de autenticidad.",
    recommendedGarment: "Remera Oversize",
    recommendedPlacement: "pecho",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#10b981") => `
      <g transform="translate(150, 150)">
        <rect x="-80" y="-70" width="160" height="140" fill="none" stroke="${primaryColor}" stroke-width="1.5" stroke-dasharray="6 3" opacity="0.35"/>
        <text x="-70" y="-45" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="8" fill="${accentColor}" letter-spacing="2">AUTH. APPAREL // 001</text>
        <text x="0" y="5" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" fill="${primaryColor}" letter-spacing="6">MOLOKAI</text>
        <line x1="-70" y1="18" x2="70" y2="18" stroke="${primaryColor}" stroke-width="2"/>
        <text x="0" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="8" fill="${primaryColor}" letter-spacing="3">INDUMENTARIA PARA TODOS</text>
        <text x="0" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="7" fill="${primaryColor}" opacity="0.7">38°33'S 58°44'W • NECOCHEA ARG</text>
      </g>
    `
  },
  {
    id: "stay-salty",
    title: "Stay Salty Pacific Badge",
    category: "Surf",
    tags: ["badge", "salty", "ocean", "surf"],
    description: "Sello náutico circular vintage con ancla, gaviotas y estilo retro playero.",
    recommendedGarment: "Tote Bag",
    recommendedPlacement: "pecho",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#0284c7") => `
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="85" fill="none" stroke="${primaryColor}" stroke-width="4"/>
        <circle cx="0" cy="0" r="77" fill="none" stroke="${accentColor}" stroke-width="1.5"/>
        <!-- Ancla central -->
        <circle cx="0" cy="-35" r="8" fill="none" stroke="${primaryColor}" stroke-width="3"/>
        <line x1="0" y1="-27" x2="0" y2="35" stroke="${primaryColor}" stroke-width="4"/>
        <line x1="-20" y1="-15" x2="20" y2="-15" stroke="${primaryColor}" stroke-width="4"/>
        <path d="M-32,15 C-32,45 32,45 32,15" fill="none" stroke="${primaryColor}" stroke-width="4" stroke-linecap="round"/>
        <polygon points="-35,15 -27,15 -31,8" fill="${primaryColor}"/>
        <polygon points="35,15 27,15 31,8" fill="${primaryColor}"/>
        <!-- Gaviotas en vuelo -->
        <path d="M-45,-25 Q-38,-32 -30,-25 Q-22,-32 -15,-25" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <path d="M20,-30 Q28,-37 35,-30 Q42,-37 50,-30" fill="none" stroke="${accentColor}" stroke-width="2"/>
        <text x="0" y="-55" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="12" fill="${primaryColor}" letter-spacing="3">STAY SALTY</text>
        <text x="0" y="65" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="9" fill="${accentColor}" letter-spacing="2">MOLOKAI • OCEAN LIFE</text>
      </g>
    `
  },
  {
    id: "acid-smile",
    title: "Good Vibes Happy Sun",
    category: "Streetwear",
    tags: ["happy", "smile", "retro", "vibes"],
    description: "Carita sonriente retro inspirada en los años 90 con lentes surferos y rayos de sol.",
    recommendedGarment: "Remera Oversize",
    recommendedPlacement: "pecho",
    renderSvg: (primaryColor = "#ffffff", accentColor = "#eab308") => `
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="75" fill="${accentColor}"/>
        <!-- Rayos de sol triangulares -->
        ${Array.from({length: 12}).map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x1 = Math.cos(angle) * 80;
          const y1 = Math.sin(angle) * 80;
          const x2 = Math.cos(angle + 0.15) * 95;
          const y2 = Math.sin(angle + 0.15) * 95;
          const x3 = Math.cos(angle - 0.15) * 95;
          const y3 = Math.sin(angle - 0.15) * 95;
          return `<polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${accentColor}" opacity="0.85"/>`;
        }).join('')}
        <!-- Lentes de sol en forma de gota -->
        <path d="M-40,-15 C-40,-25 -15,-25 -10,-15 C-8,-10 -2,-10 0,-15 C5,-25 30,-25 30,-15 C30,2 10,8 0,0 C-10,8 -40,2 -40,-15 Z" fill="#0f172a"/>
        <!-- Sonrisa ancha -->
        <path d="M-30,15 Q0,50 30,15" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
        <text x="0" y="105" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="${primaryColor}" letter-spacing="4">GOOD VIBES ONLY</text>
      </g>
    `
  }
];

// Opciones de prendas disponibles para personalizar
export const CUSTOMIZABLE_GARMENTS = [
  {
    id: "remera-oversize",
    name: "Remera Oversize Heavy",
    basePrice: 18500,
    fit: "Oversize Streetwear",
    material: "100% Algodón Peinado 24/1 Pesado",
    description: "Corte holgado con hombro caído y cuello cerrado grueso de 2.5cm.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { id: "white", name: "Blanco Óptico", hex: "#f8fafc", textColor: "#0f172a" },
      { id: "black", name: "Negro Profundo", hex: "#111827", textColor: "#ffffff" },
      { id: "cream", name: "Crudo / Oatmeal", hex: "#ece7dc", textColor: "#1e293b" },
      { id: "charcoal", name: "Gris Melange", hex: "#64748b", textColor: "#ffffff" },
      { id: "army", name: "Verde Militar", hex: "#3f4a3c", textColor: "#ffffff" },
      { id: "navy", name: "Azul Marino", hex: "#1e293b", textColor: "#ffffff" }
    ],
    mockupType: "tshirt"
  },
  {
    id: "remera-clasica",
    name: "Remera Clásica Regular",
    basePrice: 15500,
    fit: "Regular Fit Unisex",
    material: "100% Algodón Premium 30/1 Suave",
    description: "Corte clásico regular, súper suave y cómoda para todos los días.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { id: "white", name: "Blanco Óptico", hex: "#ffffff", textColor: "#0f172a" },
      { id: "black", name: "Negro Profundo", hex: "#111827", textColor: "#ffffff" },
      { id: "cream", name: "Crudo Natural", hex: "#f3ede2", textColor: "#1e293b" },
      { id: "charcoal", name: "Gris Topo", hex: "#475569", textColor: "#ffffff" }
    ],
    mockupType: "tshirt"
  },
  {
    id: "buzo-hoodie",
    name: "Buzo Hoodie Canguro",
    basePrice: 34500,
    fit: "Relaxed Boxy Fit",
    material: "Frisa Invisible Pesada Algodón Premium",
    description: "Capucha forrada de doble tela, cordón tubular grueso y bolsillo frontal canguro.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { id: "black", name: "Negro Azabache", hex: "#111827", textColor: "#ffffff" },
      { id: "cream", name: "Crudo Arena", hex: "#ece7dc", textColor: "#1e293b" },
      { id: "charcoal", name: "Gris Melange", hex: "#64748b", textColor: "#ffffff" },
      { id: "army", name: "Verde Bosque", hex: "#2d372e", textColor: "#ffffff" }
    ],
    mockupType: "hoodie"
  },
  {
    id: "tote-bag",
    name: "Tote Bag Lienzo Pesado",
    basePrice: 11000,
    fit: "Universal (40 x 42 cm)",
    material: "Lienzo 100% Algodón 12 oz Reforzado",
    description: "Bolsa resistente para playa, compras o uso urbano cotidiano.",
    sizes: ["Único"],
    colors: [
      { id: "cream", name: "Crudo Natural", hex: "#ece7dc", textColor: "#1e293b" },
      { id: "black", name: "Negro", hex: "#111827", textColor: "#ffffff" }
    ],
    mockupType: "tote"
  }
];

// Ubicaciones de estampado
export const PLACEMENT_OPTIONS = [
  { id: "pecho", name: "Frente (Pecho Grande)", scale: 1, top: 46, left: 50 },
  { id: "bolsillo", name: "Bolsillo (Pecho Izq.)", scale: 0.45, top: 38, left: 34 },
  { id: "espalda", name: "Espalda Completa", scale: 1.2, top: 48, left: 50 }
];
