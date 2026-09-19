(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();const g={name:"MOLOKAI",subtitle:"INDUMENTARIA",bio:"Diseños propios, indumentaria personalizada y las mejores prendas streetwear & surfwear.",location:{city:"Necochea",province:"Buenos Aires",country:"Argentina"},contact:{whatsappNumber:"5492262551234",whatsappDisplay:"+54 9 2262 55-1234",email:"tienda.molokai@gmail.com",instagramHandle:"@tienda.molokai",instagramUrl:"https://www.instagram.com/tienda.molokai/",facebookName:"Tienda Molokai",facebookUrl:"https://www.facebook.com/profile.php?id=61565569539188"},currency:{format:e=>new Intl.NumberFormat("es-AR",{style:"currency",currency:"ARS",maximumFractionDigits:0}).format(e)},discounts:{promoCodes:{MOLOKAI10:.1,NECOCHEA:.15,BIENVENIDA:.1}}},X=[{id:"prod-remera-endless-wave",name:"Remera Oversize Endless Wave",category:"remeras",categoryLabel:"Remeras",price:18500,originalPrice:22e3,badge:"MÁS VENDIDO",rating:4.9,reviewsCount:38,isCustomizable:!0,colors:[{name:"Negro",hex:"#111827"},{name:"Blanco",hex:"#f8fafc"},{name:"Crudo",hex:"#ece7dc"}],sizes:["S","M","L","XL","XXL"],description:"Remera de corte oversize premium confeccionada en 100% algodón peinado 24/1 pesado. Estampa serigráfica 'Endless Wave' en el pecho con tintas al agua de máxima durabilidad.",features:["100% Algodón Peinado 24/1 Pesado","Corte Boxy Oversize con hombros caídos","Cuello rib de 2.5cm que no se deforma","Serigrafía de alta definición al agua"],templateId:"wave-classic",mockupType:"tshirt"},{id:"prod-hoodie-faro-quequen",name:"Buzo Hoodie Faro Quequén",category:"buzos",categoryLabel:"Buzos & Hoodies",price:34500,originalPrice:39900,badge:"NUEVO",rating:5,reviewsCount:19,isCustomizable:!0,colors:[{name:"Negro",hex:"#111827"},{name:"Gris Melange",hex:"#64748b"},{name:"Verde Bosque",hex:"#2d372e"}],sizes:["S","M","L","XL","XXL"],description:"Buzo hoodie confeccionado en frisa invisible pesada premium con interior afelpado super abrigado. Gran estampa en espalda inspirada en el icónico Faro de Quequén.",features:["Frisa invisible 100% algodón de alto gramaje","Capucha forrada con doble tejido","Bolsillo frontal tipo canguro reforzado","Puños y cintura de rib elastizado"],templateId:"quequen-faro",mockupType:"hoodie"},{id:"prod-remera-necochea-surf",name:"Remera Boxy Necochea Surf Club",category:"remeras",categoryLabel:"Remeras",price:18500,originalPrice:21500,badge:"EDICIÓN LIMITADA",rating:4.8,reviewsCount:27,isCustomizable:!0,colors:[{name:"Crudo Arena",hex:"#ece7dc"},{name:"Negro",hex:"#111827"},{name:"Azul Marino",hex:"#1e293b"}],sizes:["S","M","L","XL","XXL"],description:"Homenaje a la comunidad surfera de Necochea y Quequén. Corte amplio y relajado para usar después de la sesión de olas o en la ciudad.",features:["100% Algodón Peinado 24/1","Fit Boxy relajado Unisex","Estampa frontal y detalle en manga","Lavado suavizado pre-encogido"],templateId:"necochea-surf",mockupType:"tshirt"},{id:"prod-remera-wild-skull",name:"Remera Streetwear Wild Skull",category:"remeras",categoryLabel:"Remeras",price:18500,originalPrice:22e3,badge:"POPULAR",rating:4.9,reviewsCount:42,isCustomizable:!0,colors:[{name:"Blanco Óptico",hex:"#f8fafc"},{name:"Negro",hex:"#111827"}],sizes:["S","M","L","XL","XXL"],description:"Gráfica audaz de calavera urbana con estética noventera y flores tropicales. Ideal para outfits streetwear de alto impacto.",features:["Algodón 24/1 alta densidad","Corte oversize moderno","Tacto suave y transpirable","Resistente a lavados frecuentes"],templateId:"wild-skull",mockupType:"tshirt"},{id:"prod-tote-salty",name:"Tote Bag Lienzo Stay Salty",category:"accesorios",categoryLabel:"Accesorios",price:11e3,originalPrice:13500,badge:"ESENCIAL",rating:4.9,reviewsCount:15,isCustomizable:!0,colors:[{name:"Crudo Natural",hex:"#ece7dc"},{name:"Negro",hex:"#111827"}],sizes:["Único"],description:"Bolsa de lienzo pesado reforzado de 12 oz. Manijas anchas de cinta de algodón para máxima comodidad al cargarla al hombro.",features:["Lienzo 100% algodón 12 oz","Medidas: 40 cm x 42 cm x 10 cm fuelle","Manijas reforzadas de 65 cm","Costuras de seguridad internas"],templateId:"stay-salty",mockupType:"tote"},{id:"prod-hoodie-minimal-typo",name:"Buzo Hoodie Signature Typo",category:"buzos",categoryLabel:"Buzos & Hoodies",price:34500,originalPrice:39500,badge:"DESTACADO",rating:4.8,reviewsCount:22,isCustomizable:!0,colors:[{name:"Negro",hex:"#111827"},{name:"Crudo Arena",hex:"#ece7dc"}],sizes:["S","M","L","XL","XXL"],description:"Hoodie minimalista con tipografía Molokai y coordenadas de Necochea en el pecho. Calidez y sobriedad para cualquier momento del día.",features:["Frisa pesada anti-peeling","Calce relajado street style","Cordones con punteras metálicas","Etiqueta bordada en ruedo"],templateId:"minimal-typo",mockupType:"hoodie"},{id:"prod-gorra-trucker-molokai",name:"Gorra Trucker Vintage Molokai",category:"accesorios",categoryLabel:"Accesorios",price:13500,originalPrice:16e3,badge:"VERANO",rating:4.7,reviewsCount:18,isCustomizable:!1,colors:[{name:"Negro / Blanco",hex:"#111827"},{name:"Azul Marino / Crudo",hex:"#1e293b"}],sizes:["Ajustable"],description:"Gorra modelo trucker con frente de gomaespuma acolchada, red trasera respirable y parche vintage bordado Molokai Necochea.",features:["Frente estructurado acolchado","Malla trasera de alta ventilación","Broche snapback regulable","Visera curva con costuras reforzadas"],templateId:null,mockupType:"cap"},{id:"prod-remera-golden-palm",name:"Remera Pocket Golden Hour Palm",category:"remeras",categoryLabel:"Remeras",price:15500,originalPrice:18500,badge:"CLÁSICA",rating:4.9,reviewsCount:31,isCustomizable:!0,colors:[{name:"Blanco",hex:"#ffffff"},{name:"Negro",hex:"#111827"},{name:"Gris Melange",hex:"#64748b"}],sizes:["XS","S","M","L","XL","XXL"],description:"Remera clásica con detalle de estampa minimalista en bolsillo izquierdo y print sutil de palmera al atardecer.",features:["100% Algodón 30/1 peinado liviano","Corte regular clásico unisex","Estampa sutil y elegante","Ideal para media estación y verano"],templateId:"golden-palm",mockupType:"tshirt"}],P=[{id:"wave-classic",title:"Molokai Endless Wave",category:"Surf",tags:["surf","ola","retro","mar"],description:"Gran ola estilizada con sol radiante y tipografía clásica inspirada en las costas del Pacífico y Necochea.",recommendedGarment:"Remera Oversize",recommendedPlacement:"pecho",renderSvg:(e="#ffffff",a="#0ea5e9")=>`
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="95" fill="none" stroke="${e}" stroke-width="4" stroke-dasharray="8 4" opacity="0.4"/>
        <circle cx="0" cy="-15" r="45" fill="#f59e0b" opacity="0.85"/>
        <path d="M-85,35 Q-40,5 0,35 T85,35 L85,80 L-85,80 Z" fill="${e}" opacity="0.15"/>
        <path d="M-90,45 C-50,0 -20,20 15,-10 C35,-30 20,-50 -5,-45 C-10,-44 -15,-40 -12,-35 C-8,-32 -2,-32 8,-22 C18,-12 12,5 -15,15 C-45,25 -70,35 -90,45 Z" fill="${a}"/>
        <path d="M-80,60 C-40,25 0,35 40,15 C60,5 75,12 85,25 L85,80 L-80,80 Z" fill="${e}"/>
        <text x="0" y="-70" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="20" fill="${e}" letter-spacing="4">MOLOKAI</text>
        <text x="0" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="9" fill="${e}" letter-spacing="3">COASTAL DIVISION • EST. 2024</text>
      </g>
    `},{id:"necochea-surf",title:"Necochea Surf Club 7630",category:"Coastal",tags:["necochea","quequen","club","surfboards"],description:"Insignia náutica vintage con tablas cruzadas celebrando las olas de Necochea y Quequén.",recommendedGarment:"Remera Clásica",recommendedPlacement:"pecho",renderSvg:(e="#ffffff",a="#f97316")=>`
      <g transform="translate(150, 150)">
        <rect x="-85" y="-85" width="170" height="170" rx="20" fill="none" stroke="${e}" stroke-width="3" opacity="0.6"/>
        <g transform="rotate(35)">
          <ellipse cx="0" cy="0" rx="14" ry="75" fill="${a}" opacity="0.9"/>
          <line x1="0" y1="-70" x2="0" y2="70" stroke="${e}" stroke-width="2"/>
        </g>
        <g transform="rotate(-35)">
          <ellipse cx="0" cy="0" rx="14" ry="75" fill="${e}" opacity="0.85"/>
          <line x1="0" y1="-70" x2="0" y2="70" stroke="#0f172a" stroke-width="2"/>
        </g>
        <circle cx="0" cy="0" r="32" fill="#0f172a" stroke="${e}" stroke-width="3"/>
        <text x="0" y="-4" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="${e}">NEC</text>
        <text x="0" y="10" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="700" font-size="9" fill="${a}">7630</text>
        <text x="0" y="-95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="13" fill="${e}" letter-spacing="3">NECOCHEA SURF</text>
        <text x="0" y="105" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="8" fill="${e}" letter-spacing="2">BUENOS AIRES • ARGENTINA</text>
      </g>
    `},{id:"quequen-faro",title:"Faro Quequén Swell",category:"Coastal",tags:["quequen","faro","mar","olas"],description:"Tributo al icónico Faro de Quequén con estética náutica lineal moderna.",recommendedGarment:"Buzo Hoodie",recommendedPlacement:"espalda",renderSvg:(e="#ffffff",a="#38bdf8")=>`
      <g transform="translate(150, 150)">
        <polygon points="0,-85 -75,65 75,65" fill="none" stroke="${e}" stroke-width="2" opacity="0.4"/>
        <path d="M-15,45 L-8,-50 L8,-50 L15,45 Z" fill="${e}"/>
        <rect x="-11" y="-25" width="22" height="12" fill="${a}"/>
        <rect x="-13" y="10" width="26" height="12" fill="${a}"/>
        <polygon points="-12,-50 12,-50 0,-70" fill="${e}"/>
        <!-- Rayos de luz -->
        <polygon points="0,-55 -80,-30 -80,-10" fill="#fef08a" opacity="0.3"/>
        <polygon points="0,-55 80,-30 80,-10" fill="#fef08a" opacity="0.3"/>
        <!-- Olas en la base -->
        <path d="M-60,50 Q-30,40 0,50 T60,50" fill="none" stroke="${a}" stroke-width="4"/>
        <path d="M-70,60 Q-35,50 0,60 T70,60" fill="none" stroke="${e}" stroke-width="3"/>
        <text x="0" y="85" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="14" fill="${e}" letter-spacing="4">QUEQUÉN</text>
        <text x="0" y="100" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="8" fill="${a}" letter-spacing="2">LIGHTHOUSE DIVISION</text>
      </g>
    `},{id:"wild-skull",title:"Wild Skull Rider",category:"Streetwear",tags:["skull","calavera","streetwear","urban"],description:"Calavera urbana con gafas oscuras y flores tropicales, un must del streetwear costero.",recommendedGarment:"Remera Oversize",recommendedPlacement:"pecho",renderSvg:(e="#ffffff",a="#f43f5e")=>`
      <g transform="translate(150, 150)">
        <!-- Fondo circular degradado simulado -->
        <circle cx="0" cy="0" r="85" fill="${a}" opacity="0.2"/>
        <!-- Calavera -->
        <path d="M-45,-15 C-45,-60 45,-60 45,-15 C45,15 35,25 25,45 L-25,45 C-35,25 -45,15 -45,-15 Z" fill="${e}"/>
        <!-- Mandíbula y dientes -->
        <rect x="-18" y="32" width="6" height="10" rx="2" fill="#0f172a"/>
        <rect x="-6" y="32" width="5" height="10" rx="2" fill="#0f172a"/>
        <rect x="5" y="32" width="5" height="10" rx="2" fill="#0f172a"/>
        <rect x="16" y="32" width="6" height="10" rx="2" fill="#0f172a"/>
        <!-- Gafas de sol oscuras con reflejo -->
        <path d="M-38,-20 C-38,-30 -10,-30 -5,-20 C-2,-18 2,-18 5,-20 C10,-30 38,-30 38,-20 C38,-5 12,0 5,-5 C0,-8 0,-8 -5,-5 C-12,0 -38,-5 -38,-20 Z" fill="#0f172a"/>
        <line x1="-30" y1="-22" x2="-12" y2="-12" stroke="${a}" stroke-width="3" stroke-linecap="round"/>
        <line x1="12" y1="-22" x2="30" y2="-12" stroke="${a}" stroke-width="3" stroke-linecap="round"/>
        <!-- Flor tropical -->
        <circle cx="38" cy="-35" r="10" fill="${a}"/>
        <circle cx="48" cy="-30" r="8" fill="#fbbf24"/>
        <!-- Texto superior e inferior -->
        <text x="0" y="-72" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${e}" letter-spacing="3">MOLOKAI CREW</text>
        <text x="0" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="9" fill="${a}" letter-spacing="3">RIDE OR DIE • STREETWEAR</text>
      </g>
    `},{id:"golden-palm",title:"Golden Hour Palm",category:"Minimal",tags:["palm","palmera","sunset","minimal"],description:"Silueta geométrica de palmera al atardecer sobre líneas horizontales.",recommendedGarment:"Remera Clásica",recommendedPlacement:"bolsillo",renderSvg:(e="#ffffff",a="#f59e0b")=>`
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="80" fill="none" stroke="${e}" stroke-width="2"/>
        <circle cx="0" cy="-10" r="40" fill="${a}" opacity="0.9"/>
        <!-- Líneas de horizonte cortando el sol -->
        <line x1="-50" y1="5" x2="50" y2="5" stroke="#0f172a" stroke-width="3"/>
        <line x1="-65" y1="15" x2="65" y2="15" stroke="#0f172a" stroke-width="4"/>
        <line x1="-75" y1="28" x2="75" y2="28" stroke="#0f172a" stroke-width="5"/>
        <!-- Tronco y ramas de la palmera -->
        <path d="M-5,50 Q10,10 0,-25" fill="none" stroke="${e}" stroke-width="5" stroke-linecap="round"/>
        <path d="M0,-25 Q-30,-45 -45,-30 Q-25,-25 0,-25" fill="${e}"/>
        <path d="M0,-25 Q30,-45 45,-30 Q25,-25 0,-25" fill="${e}"/>
        <path d="M0,-25 Q-20,-60 -5,-55 Q-5,-35 0,-25" fill="${e}"/>
        <path d="M0,-25 Q20,-60 5,-55 Q5,-35 0,-25" fill="${e}"/>
        <path d="M0,-25 Q-40,-15 -45,-5 Q-25,-10 0,-25" fill="${e}"/>
        <path d="M0,-25 Q40,-15 45,-5 Q25,-10 0,-25" fill="${e}"/>
        <text x="0" y="68" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="800" font-size="11" fill="${e}" letter-spacing="3">PACIFIC BREEZE</text>
      </g>
    `},{id:"minimal-typo",title:"MOLOKAI Signature Typo",category:"Streetwear",tags:["typography","logo","minimal","streetwear"],description:"Composición tipográfica bold contemporánea con coordenadas geográficas y sello de autenticidad.",recommendedGarment:"Remera Oversize",recommendedPlacement:"pecho",renderSvg:(e="#ffffff",a="#10b981")=>`
      <g transform="translate(150, 150)">
        <rect x="-80" y="-70" width="160" height="140" fill="none" stroke="${e}" stroke-width="1.5" stroke-dasharray="6 3" opacity="0.35"/>
        <text x="-70" y="-45" font-family="'Plus Jakarta Sans', sans-serif" font-weight="700" font-size="8" fill="${a}" letter-spacing="2">AUTH. APPAREL // 001</text>
        <text x="0" y="5" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="34" fill="${e}" letter-spacing="6">MOLOKAI</text>
        <line x1="-70" y1="18" x2="70" y2="18" stroke="${e}" stroke-width="2"/>
        <text x="0" y="32" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="8" fill="${e}" letter-spacing="3">INDUMENTARIA PARA TODOS</text>
        <text x="0" y="48" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="7" fill="${e}" opacity="0.7">38°33'S 58°44'W • NECOCHEA ARG</text>
      </g>
    `},{id:"stay-salty",title:"Stay Salty Pacific Badge",category:"Surf",tags:["badge","salty","ocean","surf"],description:"Sello náutico circular vintage con ancla, gaviotas y estilo retro playero.",recommendedGarment:"Tote Bag",recommendedPlacement:"pecho",renderSvg:(e="#ffffff",a="#0284c7")=>`
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="85" fill="none" stroke="${e}" stroke-width="4"/>
        <circle cx="0" cy="0" r="77" fill="none" stroke="${a}" stroke-width="1.5"/>
        <!-- Ancla central -->
        <circle cx="0" cy="-35" r="8" fill="none" stroke="${e}" stroke-width="3"/>
        <line x1="0" y1="-27" x2="0" y2="35" stroke="${e}" stroke-width="4"/>
        <line x1="-20" y1="-15" x2="20" y2="-15" stroke="${e}" stroke-width="4"/>
        <path d="M-32,15 C-32,45 32,45 32,15" fill="none" stroke="${e}" stroke-width="4" stroke-linecap="round"/>
        <polygon points="-35,15 -27,15 -31,8" fill="${e}"/>
        <polygon points="35,15 27,15 31,8" fill="${e}"/>
        <!-- Gaviotas en vuelo -->
        <path d="M-45,-25 Q-38,-32 -30,-25 Q-22,-32 -15,-25" fill="none" stroke="${a}" stroke-width="2"/>
        <path d="M20,-30 Q28,-37 35,-30 Q42,-37 50,-30" fill="none" stroke="${a}" stroke-width="2"/>
        <text x="0" y="-55" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="12" fill="${e}" letter-spacing="3">STAY SALTY</text>
        <text x="0" y="65" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="800" font-size="9" fill="${a}" letter-spacing="2">MOLOKAI • OCEAN LIFE</text>
      </g>
    `},{id:"acid-smile",title:"Good Vibes Happy Sun",category:"Streetwear",tags:["happy","smile","retro","vibes"],description:"Carita sonriente retro inspirada en los años 90 con lentes surferos y rayos de sol.",recommendedGarment:"Remera Oversize",recommendedPlacement:"pecho",renderSvg:(e="#ffffff",a="#eab308")=>`
      <g transform="translate(150, 150)">
        <circle cx="0" cy="0" r="75" fill="${a}"/>
        <!-- Rayos de sol triangulares -->
        ${Array.from({length:12}).map((i,l)=>{const r=l*30*Math.PI/180,n=Math.cos(r)*80,s=Math.sin(r)*80,C=Math.cos(r+.15)*95,d=Math.sin(r+.15)*95,k=Math.cos(r-.15)*95,L=Math.sin(r-.15)*95;return`<polygon points="${n},${s} ${C},${d} ${k},${L}" fill="${a}" opacity="0.85"/>`}).join("")}
        <!-- Lentes de sol en forma de gota -->
        <path d="M-40,-15 C-40,-25 -15,-25 -10,-15 C-8,-10 -2,-10 0,-15 C5,-25 30,-25 30,-15 C30,2 10,8 0,0 C-10,8 -40,2 -40,-15 Z" fill="#0f172a"/>
        <!-- Sonrisa ancha -->
        <path d="M-30,15 Q0,50 30,15" fill="none" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
        <text x="0" y="105" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="14" fill="${e}" letter-spacing="4">GOOD VIBES ONLY</text>
      </g>
    `}],T=[{id:"remera-oversize",name:"Remera Oversize Heavy",basePrice:18500,fit:"Oversize Streetwear",material:"100% Algodón Peinado 24/1 Pesado",description:"Corte holgado con hombro caído y cuello cerrado grueso de 2.5cm.",sizes:["S","M","L","XL","XXL"],colors:[{id:"white",name:"Blanco Óptico",hex:"#f8fafc",textColor:"#0f172a"},{id:"black",name:"Negro Profundo",hex:"#111827",textColor:"#ffffff"},{id:"cream",name:"Crudo / Oatmeal",hex:"#ece7dc",textColor:"#1e293b"},{id:"charcoal",name:"Gris Melange",hex:"#64748b",textColor:"#ffffff"},{id:"army",name:"Verde Militar",hex:"#3f4a3c",textColor:"#ffffff"},{id:"navy",name:"Azul Marino",hex:"#1e293b",textColor:"#ffffff"}],mockupType:"tshirt"},{id:"remera-clasica",name:"Remera Clásica Regular",basePrice:15500,fit:"Regular Fit Unisex",material:"100% Algodón Premium 30/1 Suave",description:"Corte clásico regular, súper suave y cómoda para todos los días.",sizes:["XS","S","M","L","XL","XXL"],colors:[{id:"white",name:"Blanco Óptico",hex:"#ffffff",textColor:"#0f172a"},{id:"black",name:"Negro Profundo",hex:"#111827",textColor:"#ffffff"},{id:"cream",name:"Crudo Natural",hex:"#f3ede2",textColor:"#1e293b"},{id:"charcoal",name:"Gris Topo",hex:"#475569",textColor:"#ffffff"}],mockupType:"tshirt"},{id:"buzo-hoodie",name:"Buzo Hoodie Canguro",basePrice:34500,fit:"Relaxed Boxy Fit",material:"Frisa Invisible Pesada Algodón Premium",description:"Capucha forrada de doble tela, cordón tubular grueso y bolsillo frontal canguro.",sizes:["S","M","L","XL","XXL"],colors:[{id:"black",name:"Negro Azabache",hex:"#111827",textColor:"#ffffff"},{id:"cream",name:"Crudo Arena",hex:"#ece7dc",textColor:"#1e293b"},{id:"charcoal",name:"Gris Melange",hex:"#64748b",textColor:"#ffffff"},{id:"army",name:"Verde Bosque",hex:"#2d372e",textColor:"#ffffff"}],mockupType:"hoodie"},{id:"tote-bag",name:"Tote Bag Lienzo Pesado",basePrice:11e3,fit:"Universal (40 x 42 cm)",material:"Lienzo 100% Algodón 12 oz Reforzado",description:"Bolsa resistente para playa, compras o uso urbano cotidiano.",sizes:["Único"],colors:[{id:"cream",name:"Crudo Natural",hex:"#ece7dc",textColor:"#1e293b"},{id:"black",name:"Negro",hex:"#111827",textColor:"#ffffff"}],mockupType:"tote"}],Y=[{id:"pecho",name:"Frente (Pecho Grande)",scale:1,top:46,left:50},{id:"bolsillo",name:"Bolsillo (Pecho Izq.)",scale:.45,top:38,left:34},{id:"espalda",name:"Espalda Completa",scale:1.2,top:48,left:50}];function Pe(e=0){return`
    <!-- Top Announcement Bar -->
    <div class="announcement-bar">
      <span>
        🌊 Showroom en Necochea con Cita Previa ✍🏻 
        &nbsp;|&nbsp; Envíos a todo el país 🇦🇷 
        &nbsp;|&nbsp; <strong class="badge-discount">10% OFF</strong> con Transferencia
      </span>
    </div>

    <!-- Header Navigation -->
    <header class="site-header" id="site-header">
      <div class="container navbar">
        <!-- Brand Logo -->
        <a href="#inicio" class="brand-logo" aria-label="Molokai Indumentaria">
          <span class="logo-main">${g.name}</span>
          <span class="logo-sub">${g.subtitle}</span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav>
          <ul class="nav-links">
            <li><a href="#inicio" class="nav-link">Inicio</a></li>
            <li><a href="#catalogo" class="nav-link">Catálogo</a></li>
            <li><a href="#personalizador" class="nav-link highlight">✨ Personalizá Tu Prenda</a></li>
            <li><a href="#templates" class="nav-link">Diseños & Templates</a></li>
            <li><a href="#showroom" class="nav-link">Showroom & Envíos</a></li>
            <li><a href="#contacto" class="nav-link">Contacto</a></li>
          </ul>
        </nav>

        <!-- Nav Actions (Search, Cart, Hamburger) -->
        <div class="nav-actions">
          <!-- Search toggle -->
          <button class="action-btn" id="search-toggle-btn" aria-label="Buscar productos">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <!-- Cart trigger -->
          <div class="cart-btn-wrap">
            <button class="action-btn" id="cart-drawer-trigger" aria-label="Abrir carrito de compras">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <span class="cart-count-badge ${e>0?"has-items":""}" id="cart-badge">${e}</span>
            </button>
          </div>

          <!-- Mobile Hamburger -->
          <button class="action-btn hamburger-btn" id="mobile-menu-btn" aria-label="Abrir menú">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-drawer" id="mobile-drawer" style="display:none;">
      <!-- Content populated via main.js -->
    </div>
  `}function F({type:e="tshirt",colorHex:a="#ffffff",templateSvg:i="",placement:l="pecho",customText:r="",customTextColor:n="#ffffff",customImageSrc:s=null}){let C="translate(150, 160) scale(0.65)";return l==="bolsillo"?C="translate(195, 135) scale(0.32)":l==="espalda"&&(C="translate(150, 170) scale(0.8)"),e==="tshirt"?`
      <svg viewBox="0 0 300 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="garment-svg">
        <defs>
          <filter id="fabric-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#000000" flood-opacity="0.18"/>
          </filter>
          <linearGradient id="tshirt-shading" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.14"/>
            <stop offset="18%" stop-color="#ffffff" stop-opacity="0.08"/>
            <stop offset="50%" stop-color="#000000" stop-opacity="0.02"/>
            <stop offset="82%" stop-color="#ffffff" stop-opacity="0.08"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.14"/>
          </linearGradient>
          <linearGradient id="fold-shading" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.1"/>
            <stop offset="85%" stop-color="#000000" stop-opacity="0"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.2"/>
          </linearGradient>
        </defs>

        <!-- Sombra base -->
        <g filter="url(#fabric-shadow)">
          <!-- Cuerpo de la remera -->
          <path d="M 98 48 
                   C 112 55, 130 58, 150 58 
                   C 170 58, 188 55, 202 48 
                   L 242 78 
                   C 255 88, 275 106, 268 132 
                   L 236 148 
                   C 230 134, 222 120, 216 112 
                   L 214 290 
                   C 214 296, 210 300, 204 300 
                   L 96 300 
                   C 90 300, 86 296, 86 290 
                   L 84 112 
                   C 78 120, 70 134, 64 148 
                   L 32 132 
                   C 25 106, 45 88, 58 78 
                   Z" 
                fill="${a}" 
                stroke="rgba(0,0,0,0.12)" 
                stroke-width="1.5"
          />
        </g>

        <!-- Sombreado de volumen y textura de algodón -->
        <path d="M 98 48 C 112 55, 130 58, 150 58 C 170 58, 188 55, 202 48 L 242 78 C 255 88, 275 106, 268 132 L 236 148 C 230 134, 222 120, 216 112 L 214 290 C 214 296, 210 300, 204 300 L 96 300 C 90 300, 86 296, 86 290 L 84 112 C 78 120, 70 134, 64 148 L 32 132 C 25 106, 45 88, 58 78 Z" 
              fill="url(#tshirt-shading)" 
              style="mix-blend-mode: multiply;"
        />
        <path d="M 98 48 C 112 55, 130 58, 150 58 C 170 58, 188 55, 202 48 L 242 78 C 255 88, 275 106, 268 132 L 236 148 C 230 134, 222 120, 216 112 L 214 290 C 214 296, 210 300, 204 300 L 96 300 C 90 300, 86 296, 86 290 L 84 112 C 78 120, 70 134, 64 148 L 32 132 C 25 106, 45 88, 58 78 Z" 
              fill="url(#fold-shading)" 
              style="mix-blend-mode: multiply;"
        />

        <!-- Cuello Rib -->
        ${l==="espalda"?`
          <!-- Espalda: cuello alto recto -->
          <path d="M 98 48 C 112 43, 130 40, 150 40 C 170 40, 188 43, 202 48 C 188 54, 170 57, 150 57 C 130 57, 112 54, 98 48 Z" 
                fill="${a}" 
                stroke="rgba(0,0,0,0.2)" 
                stroke-width="1.5"
          />
          <path d="M 100 49 C 115 44, 132 42, 150 42 C 168 42, 185 44, 200 49" 
                fill="none" 
                stroke="rgba(0,0,0,0.15)" 
                stroke-width="1" 
                stroke-dasharray="2 2"
          />
        `:`
          <!-- Frente: cuello escote redondo cerrado con rib de 2.5cm -->
          <path d="M 98 48 C 112 72, 130 82, 150 82 C 170 82, 188 72, 202 48 C 188 62, 170 70, 150 70 C 130 70, 112 62, 98 48 Z" 
                fill="${a}" 
                stroke="rgba(0,0,0,0.2)" 
                stroke-width="1.5"
          />
          <!-- Interior cuello -->
          <path d="M 104 53 C 118 64, 134 68, 150 68 C 166 68, 182 64, 196 53 C 182 45, 166 42, 150 42 C 134 42, 118 45, 104 53 Z" 
                fill="rgba(0,0,0,0.2)"
          />
          <!-- Pespunte rib -->
          <path d="M 100 56 C 114 74, 131 83, 150 83 C 169 83, 186 74, 200 56" 
                fill="none" 
                stroke="rgba(0,0,0,0.15)" 
                stroke-width="1" 
                stroke-dasharray="2 2"
          />
        `}

        <!-- Costuras de hombros y mangas -->
        <path d="M 98 48 L 58 78" stroke="rgba(0,0,0,0.1)" stroke-width="1" stroke-dasharray="3 2"/>
        <path d="M 202 48 L 242 78" stroke="rgba(0,0,0,0.1)" stroke-width="1" stroke-dasharray="3 2"/>
        <path d="M 216 112 L 236 148" stroke="rgba(0,0,0,0.15)" stroke-width="1.2"/>
        <path d="M 84 112 L 64 148" stroke="rgba(0,0,0,0.15)" stroke-width="1.2"/>
        <!-- Dobladillo inferior -->
        <line x1="88" y1="292" x2="212" y2="292" stroke="rgba(0,0,0,0.15)" stroke-width="1.2" stroke-dasharray="3 2"/>

        <!-- ÁREA DEL ESTAMPADO -->
        <g class="design-canvas-layer" transform="${C}">
          ${s?`
            <image href="${s}" x="-90" y="-90" width="180" height="180" preserveAspectRatio="xMidYMid meet" style="mix-blend-mode: multiply;"/>
          `:i}

          ${r?`
            <text x="0" y="95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${n}" letter-spacing="3" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
              ${r.toUpperCase()}
            </text>
          `:""}
        </g>

        <!-- Etiqueta Molokai en la parte inferior o interior -->
        <g transform="translate(86, 280)">
          <rect x="0" y="0" width="12" height="15" fill="#0f172a" rx="1"/>
          <text x="6" y="11" font-family="'Outfit', sans-serif" font-weight="900" font-size="7" fill="#ffffff" text-anchor="middle">M</text>
        </g>
      </svg>
    `:e==="hoodie"?`
      <svg viewBox="0 0 300 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="garment-svg">
        <defs>
          <filter id="hoodie-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.22"/>
          </filter>
          <linearGradient id="hoodie-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.18"/>
            <stop offset="25%" stop-color="#ffffff" stop-opacity="0.06"/>
            <stop offset="50%" stop-color="#000000" stop-opacity="0.04"/>
            <stop offset="75%" stop-color="#ffffff" stop-opacity="0.06"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.18"/>
          </linearGradient>
        </defs>

        <g filter="url(#hoodie-shadow)">
          <!-- Silueta del Hoodie -->
          <path d="M 105 55 
                   C 120 50, 135 48, 150 48 
                   C 165 48, 180 50, 195 55 
                   L 248 85 
                   C 265 96, 275 125, 265 170 
                   L 246 220 
                   C 242 230, 230 232, 222 225 
                   L 208 135 
                   L 210 292 
                   L 90 292 
                   L 92 135 
                   L 78 225 
                   C 70 232, 58 230, 54 220 
                   L 35 170 
                   C 25 125, 35 96, 52 85 
                   Z" 
                fill="${a}" 
                stroke="rgba(0,0,0,0.15)" 
                stroke-width="1.5"
          />
        </g>

        <!-- Sombra y volumen del cuerpo -->
        <path d="M 105 55 C 120 50, 135 48, 150 48 C 165 48, 180 50, 195 55 L 248 85 C 265 96, 275 125, 265 170 L 246 220 C 242 230, 230 232, 222 225 L 208 135 L 210 292 L 90 292 L 92 135 L 78 225 C 70 232, 58 230, 54 220 L 35 170 C 25 125, 35 96, 52 85 Z" 
              fill="url(#hoodie-grad)" 
              style="mix-blend-mode: multiply;"
        />

        <!-- Capucha forrada superpuesta -->
        <path d="M 96 58 C 96 20, 120 8, 150 8 C 180 8, 204 20, 204 58 C 188 78, 168 85, 150 85 C 132 85, 112 78, 96 58 Z" 
              fill="${a}" 
              stroke="rgba(0,0,0,0.2)" 
              stroke-width="1.5"
        />
        <path d="M 112 55 C 112 28, 128 18, 150 18 C 172 18, 188 28, 188 55 C 176 72, 162 76, 150 76 C 138 76, 124 72, 112 55 Z" 
              fill="rgba(0,0,0,0.18)"
        />

        <!-- Cordones de la capucha -->
        <path d="M 136 78 Q 134 110 132 135" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.9"/>
        <rect x="130" y="132" width="4" height="8" rx="1" fill="#0f172a"/>
        <path d="M 164 78 Q 166 110 168 135" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" fill="none" opacity="0.9"/>
        <rect x="166" y="132" width="4" height="8" rx="1" fill="#0f172a"/>

        <!-- Bolsillo Canguro Frontal -->
        <path d="M 114 205 L 186 205 L 202 268 L 98 268 Z" 
              fill="${a}" 
              stroke="rgba(0,0,0,0.18)" 
              stroke-width="1.5"
        />
        <path d="M 114 205 L 98 268" stroke="rgba(0,0,0,0.25)" stroke-width="2"/>
        <path d="M 186 205 L 202 268" stroke="rgba(0,0,0,0.25)" stroke-width="2"/>
        <line x1="98" y1="268" x2="202" y2="268" stroke="rgba(0,0,0,0.15)" stroke-width="1" stroke-dasharray="3 2"/>

        <!-- Puños y cintura de rib elastizado -->
        <rect x="90" y="280" width="120" height="16" fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.15)" stroke-width="1"/>
        <rect x="42" y="212" width="16" height="14" rx="2" fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.15)" stroke-width="1" transform="rotate(-30 42 212)"/>
        <rect x="238" y="204" width="16" height="14" rx="2" fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.15)" stroke-width="1" transform="rotate(30 238 204)"/>

        <!-- ÁREA DEL ESTAMPADO -->
        <g class="design-canvas-layer" transform="${C}">
          ${s?`
            <image href="${s}" x="-90" y="-90" width="180" height="180" preserveAspectRatio="xMidYMid meet" style="mix-blend-mode: multiply;"/>
          `:i}

          ${r?`
            <text x="0" y="95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${n}" letter-spacing="3" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
              ${r.toUpperCase()}
            </text>
          `:""}
        </g>
      </svg>
    `:e==="tote"?`
      <svg viewBox="0 0 300 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="garment-svg">
        <defs>
          <filter id="tote-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.16"/>
          </filter>
        </defs>

        <!-- Manijas largas -->
        <path d="M 112 115 C 112 35, 125 15, 150 15 C 175 15, 188 35, 188 115" 
              fill="none" 
              stroke="${a}" 
              stroke-width="14" 
              stroke-linecap="round"
        />
        <path d="M 112 115 C 112 35, 125 15, 150 15 C 175 15, 188 35, 188 115" 
              fill="none" 
              stroke="rgba(0,0,0,0.18)" 
              stroke-width="14" 
              stroke-linecap="round"
              style="mix-blend-mode: multiply;"
        />

        <!-- Cuerpo de la bolsa de lienzo -->
        <g filter="url(#tote-shadow)">
          <path d="M 85 110 L 215 110 L 210 295 C 210 302, 205 306, 198 306 L 102 306 C 95 306, 90 302, 90 295 Z" 
                fill="${a}" 
                stroke="rgba(0,0,0,0.15)" 
                stroke-width="1.5"
          />
        </g>

        <!-- Textura y costuras del lienzo -->
        <path d="M 85 110 L 215 110 L 210 295 C 210 302, 205 306, 198 306 L 102 306 C 95 306, 90 302, 90 295 Z" 
              fill="rgba(0,0,0,0.04)"
        />
        <line x1="88" y1="125" x2="212" y2="125" stroke="rgba(0,0,0,0.15)" stroke-width="1" stroke-dasharray="3 2"/>
        <!-- Refuerzo en forma de cruz en las manijas -->
        <rect x="106" y="112" width="12" height="15" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
        <line x1="106" y1="112" x2="118" y2="127" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
        <line x1="118" y1="112" x2="106" y2="127" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>

        <rect x="182" y="112" width="12" height="15" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
        <line x1="182" y1="112" x2="194" y2="127" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>
        <line x1="194" y1="112" x2="182" y2="127" stroke="rgba(0,0,0,0.2)" stroke-width="1"/>

        <!-- ÁREA DEL ESTAMPADO -->
        <g class="design-canvas-layer" transform="translate(150, 210) scale(0.6)">
          ${s?`
            <image href="${s}" x="-90" y="-90" width="180" height="180" preserveAspectRatio="xMidYMid meet" style="mix-blend-mode: multiply;"/>
          `:i}

          ${r?`
            <text x="0" y="95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${n}" letter-spacing="3">
              ${r.toUpperCase()}
            </text>
          `:""}
        </g>
      </svg>
    `:F({type:"tshirt",colorHex:a,templateSvg:i,placement:l,customText:r,customTextColor:n,customImageSrc:s})}function Oe(){const e=P.find(i=>i.id==="wave-classic");return`
    <section class="hero-section" id="inicio">
      <div class="container hero-grid">
        <!-- Hero Text & CTA -->
        <div class="hero-content">
          <div class="hero-tag">
            <span class="hero-visual-pulse"></span>
            Showroom Necochea & Quequén • Envíos a todo el país
          </div>
          
          <h1 class="hero-title">
            INDUMENTARIA <br>
            <span class="accent-text">PARA TODOS.</span>
          </h1>

          <p class="hero-description">
            Prendas de alta calidad, cortes oversize y estampas inspiradas en la cultura de playa, surf y streetwear. Elegí nuestros modelos exclusivos o <strong>personalizá tu propia remera</strong> en vivo.
          </p>

          <div class="hero-buttons">
            <a href="#personalizador" class="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
              Personalizá Tu Prenda en Vivo
            </a>
            <a href="#catalogo" class="btn btn-secondary">
              Ver Catálogo
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>

          <!-- Trust Badges -->
          <div class="hero-badges">
            <div class="hero-badge-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>100% Algodón Peinado 24/1</span>
            </div>
            <div class="hero-badge-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Envíos a todo el país 🇦🇷</span>
            </div>
            <div class="hero-badge-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Showroom Necochea con Cita Previa</span>
            </div>
          </div>
        </div>

        <!-- Hero Visual Card Showcase -->
        <div class="hero-visual-card">
          <div class="hero-visual-floating-tag">
            <span class="hero-visual-pulse"></span>
            Drop Destacado: Endless Wave Oversize
          </div>
          
          <div class="hero-preview-stage">
            ${F({type:"tshirt",colorHex:"#111827",templateSvg:e?e.renderSvg("#ffffff","#0ea5e9"):"",placement:"pecho"})}
          </div>

          <div style="text-align: center; margin-top: 12px;">
            <p style="font-weight: 800; font-size: 0.95rem; color: #0f172a;">Corte Oversize Boxy Fit</p>
            <p style="font-size: 0.8rem; color: #64748b;">Confección pesada que mantiene la estructura</p>
          </div>
        </div>
      </div>
    </section>
  `}function le(e=null){const a=e||{garmentId:T[0].id,colorId:T[0].colors[1].id,templateId:P[0].id,placementId:"pecho",size:"L",customText:"",customImageSrc:null},i=T.find(d=>d.id===a.garmentId)||T[0],l=i.colors.find(d=>d.id===a.colorId)||i.colors[0],r=P.find(d=>d.id===a.templateId)||P[0],n=g.currency.format,s=r?r.renderSvg(l.textColor,"#0ea5e9"):"";return`
    <section class="customizer-section" id="personalizador">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">SIMULADOR EN VIVO</span>
          <h2 class="section-title">CREÁ TU PRENDA PERSONALIZADA</h2>
          <p class="section-description">
            Elegí la prenda, el color de la tela, el diseño que más te guste y la ubicación del estampado. Podés ver el resultado en tiempo real antes de pedirla.
          </p>
        </div>

        <div class="customizer-layout">
          <!-- PANEL IZQUIERDO: VISUALIZADOR INTERACTIVO (PREVIEW) -->
          <div class="customizer-preview-container">
            <div class="preview-stage" id="customizer-preview-stage">
              ${F({type:i.mockupType,colorHex:l.hex,templateSvg:s,placement:a.placementId,customText:a.customText,customTextColor:l.textColor,customImageSrc:a.customImageSrc})}
            </div>

            <!-- Barra inferior con detalles del preview -->
            <div class="preview-controls-bar">
              <div class="preview-indicator">
                <span class="preview-color-badge" style="background-color: ${l.hex};"></span>
                <span><strong>${i.name}</strong> • ${l.name}</span>
              </div>
              <div class="preview-indicator">
                <span>Estampa: <strong>${r?r.title:"Personalizada"}</strong></span>
              </div>
            </div>
          </div>

          <!-- PANEL DERECHO: CONTROLES DEL PERSONALIZADOR -->
          <div class="customizer-controls">
            <!-- PASO 1: Elegir Tipo de Prenda -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">1</span>
                  Elegí tu prenda
                </span>
                <span class="control-sublabel">${i.material}</span>
              </div>
              
              <div class="garment-selector-grid">
                ${T.map(d=>`
                  <button type="button" class="garment-option-card ${d.id===i.id?"active":""}" data-garment-id="${d.id}">
                    <div class="garment-card-title">${d.name}</div>
                    <div class="garment-card-price">${n(d.basePrice)}</div>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- PASO 2: Elegir Color de Prenda -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">2</span>
                  Color de tela
                </span>
                <span class="control-sublabel">${l.name}</span>
              </div>

              <div class="color-swatches-row">
                ${i.colors.map(d=>`
                  <button type="button" 
                    class="color-swatch-btn ${d.id===l.id?"active":""}" 
                    data-color-id="${d.id}" 
                    style="background-color: ${d.hex};" 
                    title="${d.name}">
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- PASO 3: Elegir Diseño / Template -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">3</span>
                  Diseño / Template
                </span>
                <span class="control-sublabel">${r?r.title:""}</span>
              </div>

              <div class="template-picker-grid">
                ${P.map(d=>`
                  <button type="button" class="template-card-mini ${d.id===(r==null?void 0:r.id)?"active":""}" data-template-id="${d.id}" title="${d.title}">
                    <div class="template-mini-svg">
                      <svg viewBox="0 0 300 300" width="100%" height="100%">
                        ${d.renderSvg("#ffffff","#38bdf8")}
                      </svg>
                    </div>
                    <span class="template-mini-title">${d.title}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- PASO 4: Ubicación de la Estampa -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">4</span>
                  Ubicación de la estampa
                </span>
              </div>

              <div class="placement-pills">
                ${Y.map(d=>`
                  <button type="button" class="placement-pill-btn ${d.id===a.placementId?"active":""}" data-placement-id="${d.id}">
                    ${d.name}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- PASO 5: Talle & Guía -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">5</span>
                  Talle
                </span>
                <button type="button" class="size-guide-btn" id="open-size-guide-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Guía de talles
                </button>
              </div>

              <div class="size-pills">
                ${i.sizes.map(d=>`
                  <button type="button" class="size-pill-btn ${d===a.size?"active":""}" data-size="${d}">
                    ${d}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- PASO 6: Texto Personalizado Opcional -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">6</span>
                  Texto opcional
                </span>
                <span class="control-sublabel">Agregá tu nombre o frase</span>
              </div>
              <input type="text" 
                class="custom-text-input" 
                id="customizer-text-input" 
                placeholder="Ej: NECOCHEA SURF, TU NOMBRE..." 
                value="${a.customText}"
                maxlength="24"
              />
            </div>

            <!-- ACTION BAR: PRECIO Y BOTÓN AGREGAR AL CARRITO -->
            <div class="customizer-action-bar">
              <div class="customizer-price-wrap">
                <span class="customizer-price-label">Precio Final</span>
                <span class="customizer-price-value">${n(i.basePrice)}</span>
              </div>

              <button type="button" class="btn btn-primary customizer-add-btn" id="add-custom-to-cart-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function ce(e="todos"){const a=g.currency.format,i=[{id:"todos",label:"Todos los Productos"},{id:"remeras",label:"Remeras"},{id:"buzos",label:"Buzos & Hoodies"},{id:"accesorios",label:"Accesorios"}],l=e==="todos"?X:X.filter(r=>r.category===e);return`
    <section class="catalog-section" id="catalogo">
      <div class="container">
        <!-- Header -->
        <div class="section-header">
          <span class="section-tag">COLECCIÓN EXCLUSIVA</span>
          <h2 class="section-title">NUESTROS DROPS & PRODUCTOS</h2>
          <p class="section-description">
            Prendas listas para usar confeccionadas con los más altos estándares de calidad textil. Elegí tu modelo favorito o personalizalo con tus detalles.
          </p>
        </div>

        <!-- Filtros de Categorías -->
        <div class="catalog-filter-bar">
          <div class="category-tabs">
            ${i.map(r=>`
              <button type="button" 
                class="category-tab-btn ${r.id===e?"active":""}" 
                data-category="${r.id}">
                ${r.label}
              </button>
            `).join("")}
          </div>
          <div style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
            Mostrando <strong>${l.length}</strong> modelos
          </div>
        </div>

        <!-- Grid de Productos -->
        <div class="products-grid">
          ${l.map(r=>{var C;const n=r.templateId?P.find(d=>d.id===r.templateId):null,s=F({type:r.mockupType||"tshirt",colorHex:((C=r.colors[0])==null?void 0:C.hex)||"#111827",templateSvg:n?n.renderSvg("#ffffff","#0ea5e9"):"",placement:"pecho"});return`
              <div class="product-card" data-product-id="${r.id}">
                ${r.badge?`
                  <span class="product-card-badge ${r.originalPrice?"sale":""}">
                    ${r.badge}
                  </span>
                `:""}

                <!-- Vista de Prenda / Mockup -->
                <div class="product-card-media">
                  ${s}
                  <button type="button" class="quick-view-overlay-btn" data-quick-view-id="${r.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Vista Rápida
                  </button>
                </div>

                <!-- Info del Producto -->
                <div class="product-card-content">
                  <span class="product-card-category">${r.categoryLabel}</span>
                  <h3 class="product-card-title">${r.name}</h3>

                  <div class="product-card-rating">
                    <span>★</span>
                    <strong>${r.rating}</strong>
                    <span class="rating-count">(${r.reviewsCount} reseñas)</span>
                  </div>

                  <!-- Colores disponibles -->
                  <div style="display: flex; gap: 6px; margin-bottom: 12px;">
                    ${r.colors.map(d=>`
                      <span style="width: 14px; height: 14px; border-radius: 50%; background-color: ${d.hex}; border: 1px solid #cbd5e1;" title="${d.name}"></span>
                    `).join("")}
                  </div>

                  <!-- Precio -->
                  <div class="product-card-price-row">
                    <span class="product-card-price">${a(r.price)}</span>
                    ${r.originalPrice?`
                      <span class="product-card-old-price">${a(r.originalPrice)}</span>
                    `:""}
                  </div>

                  <!-- Acciones -->
                  <div class="product-card-footer-actions">
                    <button type="button" class="btn btn-primary product-card-add-btn" data-direct-add-id="${r.id}">
                      Agregar
                    </button>
                    ${r.isCustomizable?`
                      <button type="button" class="product-card-customize-btn" data-customize-template-id="${r.templateId||"wave-classic"}" title="Personalizar este modelo en el simulador">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </button>
                    `:""}
                  </div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    </section>
  `}function Be(){return`
    <section class="templates-section" id="templates">
      <div class="container">
        <!-- Section Header -->
        <div class="section-header">
          <span class="section-tag">DISEÑOS & ESTAMPAS</span>
          <h2 class="section-title">TEMPLATES PARA TUS PRENDAS</h2>
          <p class="section-description">
            Explorá nuestra galería de artes exclusivas creadas para serigrafía e impresión textil. Elegí el diseño que más represente tu estilo y llevalo directamente al simulador.
          </p>
        </div>

        <!-- Grid de Templates -->
        <div class="templates-grid">
          ${P.map(e=>`
            <div class="template-card">
              <div class="template-card-svg-stage">
                <svg viewBox="0 0 300 300" width="100%" height="100%">
                  ${e.renderSvg("#ffffff","#38bdf8")}
                </svg>
              </div>

              <span class="template-card-category-badge">${e.category}</span>
              <h3 class="template-card-title">${e.title}</h3>
              <p class="template-card-desc">${e.description}</p>

              <button type="button" class="template-use-btn" data-use-template-id="${e.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
                Usar este diseño
              </button>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `}function Ne(e,a={},i=0){if(!e||e.length===0)return null;const l=g.contact.whatsappNumber,r=g.currency.format;let n=`🌊 *NUEVO PEDIDO - MOLOKAI TIENDA ONLINE*
`;if(n+=`━━━━━━━━━━━━━━━━━━━━━━━━━━━━

`,a.name&&(n+=`👤 *Cliente:* ${a.name}
`),a.city&&(n+=`📍 *Ubicación / Ciudad:* ${a.city}
`),a.deliveryMethod){const k=a.deliveryMethod==="showroom"?"🏬 Retiro en Showroom (Necochea - Cita Previa)":"📦 Envío a domicilio por Correo / Andreani";n+=`🚚 *Modalidad:* ${k}
`}n+=`
🛍️ *DETALLE DEL PEDIDO:*
`;let s=0;e.forEach((k,L)=>{const R=k.price*k.quantity;s+=R,n+=`
*${L+1}. ${k.name}* (x${k.quantity})
`,k.size&&(n+=`   • Talle: ${k.size}
`),k.colorName&&(n+=`   • Color: ${k.colorName}
`),k.templateTitle&&(n+=`   • Diseño: ${k.templateTitle}
`),k.placementName&&(n+=`   • Ubicación estampa: ${k.placementName}
`),k.customText&&(n+=`   • Texto personalizado: "${k.customText}"
`),n+=`   • Precio: ${r(k.price)} c/u → *${r(R)}*
`}),n+=`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`,n+=`💰 *Subtotal:* ${r(s)}
`;let C=s;if(i>0){const k=s*i;C=s-k,n+=`🏷️ *Descuento (${Math.round(i*100)}%):* -${r(k)}
`}n+=`✨ *TOTAL ESTIMADO:* *${r(C)}*

`,n+=`💳 *Método de pago preferido:* ${a.paymentMethod||"A coordinar (Transferencia / Mercado Pago / Efectivo)"}

`,n+=`📍 *Origen:* Necochea & Quequén, Bs. As. 🇦🇷
`,n+="¡Hola Molokai! Quiero confirmar este pedido y coordinar el pago/entrega. ¿Tienen disponibilidad? 🙌";const d=encodeURIComponent(n);return`https://wa.me/${l}?text=${d}`}function Re(){return`https://wa.me/${g.contact.whatsappNumber}?text=${encodeURIComponent("👋 ¡Hola Molokai! Me gustaría coordinar una cita previa para visitar el showroom en Necochea/Quequén y conocer sus prendas. ¿Qué días y horarios tienen disponibles? ✍🏻")}`}function de(e=[],a=0){const i=g.currency.format;let l=0;e.forEach(s=>{l+=s.price*s.quantity});let r=l;a>0&&(r=l-l*a);const n=e.length>0;return`
    <!-- Backdrop -->
    <div class="cart-drawer-backdrop" id="cart-drawer-backdrop"></div>

    <!-- Drawer Panel -->
    <aside class="cart-drawer" id="cart-drawer" aria-label="Carrito de compras">
      <!-- Header -->
      <div class="cart-drawer-header">
        <h2 class="cart-drawer-title">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          Tu Carrito (${e.reduce((s,C)=>s+C.quantity,0)})
        </h2>
        <button type="button" class="cart-close-btn" id="cart-close-btn" aria-label="Cerrar carrito">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Items List -->
      <div class="cart-drawer-items" id="cart-items-container">
        ${n?e.map(s=>`
          <div class="cart-item-card" data-item-id="${s.cartItemId}">
            <div class="cart-item-thumb">
              ${s.thumbnailSvg||`
                <div style="width:100%;height:100%;background:${s.colorHex||"#111827"};border-radius:4px;"></div>
              `}
            </div>

            <div class="cart-item-details">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                <h4 class="cart-item-title">${s.name}</h4>
                <button type="button" class="cart-item-remove-btn" data-remove-id="${s.cartItemId}" title="Eliminar ítem">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>

              <div class="cart-item-specs">
                ${s.size?`<span>Talle: <strong>${s.size}</strong></span> • `:""}
                ${s.colorName?`<span>Color: <strong>${s.colorName}</strong></span>`:""}
                ${s.templateTitle?`<br><span>Diseño: <em>${s.templateTitle}</em></span>`:""}
                ${s.placementName?`<br><span>Estampa: <em>${s.placementName}</em></span>`:""}
                ${s.customText?`<br><span>Texto: "<strong>${s.customText}</strong>"</span>`:""}
              </div>

              <div class="cart-item-price-row">
                <div class="cart-item-qty-controls">
                  <button type="button" class="qty-btn" data-qty-change="-1" data-cart-id="${s.cartItemId}">-</button>
                  <span class="qty-display">${s.quantity}</span>
                  <button type="button" class="qty-btn" data-qty-change="1" data-cart-id="${s.cartItemId}">+</button>
                </div>
                <span class="cart-item-price">${i(s.price*s.quantity)}</span>
              </div>
            </div>
          </div>
        `).join(""):`
          <div class="cart-empty-state">
            <svg class="cart-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <h3 style="font-family: var(--font-display); font-weight: 800; color: #0f172a;">Tu carrito está vacío</h3>
            <p style="font-size: 0.88rem;">Elegí prendas del catálogo o personalizá tu remera en el simulador para empezar.</p>
            <a href="#personalizador" class="btn btn-primary" id="empty-cart-go-customizer-btn" style="margin-top: 10px;">
              Crear mi Remera
            </a>
          </div>
        `}
      </div>

      <!-- Footer & Checkout Form -->
      ${n?`
        <div class="cart-drawer-footer">
          <!-- Cupón de Descuento -->
          <div class="discount-code-row">
            <input type="text" 
              class="discount-code-input" 
              id="cart-discount-input" 
              placeholder="Código de cupón (ej: MOLOKAI10)" 
              value="${a>0?"MOLOKAI10":""}"
            />
            <button type="button" class="discount-code-btn" id="apply-discount-btn">
              ${a>0?"Aplicado ✓":"Aplicar"}
            </button>
          </div>

          <!-- Opciones de entrega -->
          <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.82rem; background: #ffffff; padding: 12px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <label style="font-weight: 700; color: #0f172a;">Modalidad de Entrega:</label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="radio" name="cart_delivery" value="showroom" checked />
              <span>🏬 Retiro en Showroom Necochea (Gratis con Cita Previa)</span>
            </label>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="radio" name="cart_delivery" value="shipping" />
              <span>📦 Envío a todo el país vía Correo / Andreani</span>
            </label>
          </div>

          <!-- Datos de contacto rápidos -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <input type="text" id="cart-customer-name" class="form-input" placeholder="Tu Nombre" style="font-size: 0.82rem; padding: 8px 12px;" />
            <input type="text" id="cart-customer-city" class="form-input" placeholder="Ciudad (ej: Necochea)" style="font-size: 0.82rem; padding: 8px 12px;" />
          </div>

          <!-- Totales -->
          <div class="cart-totals-breakdown">
            <div class="cart-totals-row">
              <span>Subtotal:</span>
              <span>${i(l)}</span>
            </div>
            ${a>0?`
              <div class="cart-totals-row" style="color: var(--color-success); font-weight: 700;">
                <span>Descuento (${Math.round(a*100)}%):</span>
                <span>-${i(l*a)}</span>
              </div>
            `:""}
            <div class="cart-totals-row total">
              <span>Total Estimado:</span>
              <span>${i(r)}</span>
            </div>
          </div>

          <!-- Botón de WhatsApp Checkout -->
          <button type="button" class="whatsapp-checkout-btn" id="whatsapp-checkout-btn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Finalizar Pedido por WhatsApp
          </button>
        </div>
      `:""}
    </aside>
  `}function De(){const e=Re();return`
    <section class="showroom-section" id="showroom">
      <div class="container showroom-grid">
        <!-- Info del Showroom -->
        <div class="showroom-content">
          <div class="showroom-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${g.location.city}, ${g.location.province} • Argentina
          </div>

          <h2 class="showroom-title">
            NUESTRO ESPACIO EN NECOCHEA & QUEQUÉN
          </h2>

          <p class="showroom-desc">
            Nacimos en la costa argentina, rodeados de mar, dunas y la pasión por el surf. Atendemos en nuestro showroom exclusivo con cita previa para que puedas probarte los talles, ver la calidad de las telas y retirar tus pedidos en mano.
          </p>

          <div class="showroom-features-list">
            <div class="showroom-feature-item">
              <div class="showroom-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div class="showroom-feature-text">
                <h4>Atención con Cita Previa ✍🏻</h4>
                <p>Coordinamos un horario que te quede cómodo por WhatsApp para darte una atención 100% personalizada.</p>
              </div>
            </div>

            <div class="showroom-feature-item">
              <div class="showroom-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div class="showroom-feature-text">
                <h4>Retiro Gratuito en Necochea</h4>
                <p>Ahorrá el costo de envío retirando tu compra en nuestro showroom.</p>
              </div>
            </div>

            <div class="showroom-feature-item">
              <div class="showroom-feature-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div class="showroom-feature-text">
                <h4>Envíos Seguros a Todo el País 🇦🇷</h4>
                <p>Despachamos de forma ágil hacia todas las provincias a través de Andreani y Correo Argentino con código de seguimiento.</p>
              </div>
            </div>
          </div>

          <a href="${e}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: #25d366; color: #ffffff;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Coordinar Cita Previa por WhatsApp ✍🏻
          </a>
        </div>

        <!-- Tarjeta Visual del Showroom & Mapa -->
        <div class="showroom-map-card">
          <div class="showroom-card-header">
            <div class="showroom-avatar">M</div>
            <div class="showroom-header-info">
              <h3>MOLOKAI || SHOWROOM</h3>
              <p>📍 Necochea & Quequén, Buenos Aires</p>
            </div>
          </div>

          <div style="background: rgba(15, 23, 42, 0.6); border-radius: 12px; padding: 20px; border: 1px solid rgba(255,255,255,0.08); font-size: 0.9rem; line-height: 1.6;">
            <p>🌊 <strong>Punto Costero Estratégico:</strong></p>
            <p style="color: #94a3b8; margin-top: 4px;">Ubicados a minutos del Río Quequén y las playas de Necochea. Vivimos el surf, el viento y la naturaleza costera que plasmamos en cada colección.</p>
            
            <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center;">
              <div>
                <span style="display: block; font-size: 0.75rem; color: #64748b; text-transform: uppercase;">Horarios de Showroom</span>
                <span style="font-weight: 700; color: #ffffff;">Lunes a Sábados (con cita)</span>
              </div>
              <span style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-size: 0.75rem; font-weight: 800; padding: 4px 10px; border-radius: 9999px;">
                Cita Previa ✍🏻
              </span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.82rem;">
            <div style="background: rgba(255,255,255,0.04); padding: 12px; border-radius: 8px;">
              <span style="color: #38bdf8; font-weight: 700;">📦 Envíos:</span>
              <p style="color: #cbd5e1; margin-top: 2px;">Despachos en 24/48hs hábiles</p>
            </div>
            <div style="background: rgba(255,255,255,0.04); padding: 12px; border-radius: 8px;">
              <span style="color: #38bdf8; font-weight: 700;">🏬 Retiro:</span>
              <p style="color: #cbd5e1; margin-top: 2px;">Gratis en Necochea y Quequén</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Fe(){return`
    <section class="contact-section" id="contacto">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">CANALES DIRECTOS</span>
          <h2 class="section-title">CONTACTANOS</h2>
          <p class="section-description">
            ¿Tenés dudas sobre talles, estampas personalizadas o envíos? Escribinos directamente por WhatsApp, mail o nuestras redes sociales.
          </p>
        </div>

        <div class="contact-grid">
          <!-- Columna Izquierda: Tarjetas de Contacto -->
          <div>
            <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 1.3rem; margin-bottom: 8px;">
              Estamos para ayudarte
            </h3>
            <p style="color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;">
              Respondemos tus consultas de forma rápida y personalizada para que tengas la mejor experiencia de compra.
            </p>

            <div class="contact-info-cards">
              <!-- WhatsApp -->
              <a href="${`https://wa.me/${g.contact.whatsappNumber}?text=${encodeURIComponent("¡Hola Molokai! Tengo una consulta sobre sus prendas y la tienda online 🙌")}`}" target="_blank" rel="noopener noreferrer" class="contact-card-item">
                <div class="contact-card-icon" style="color: #25d366;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">WhatsApp Directo</span>
                  <div style="font-weight: 800; font-size: 1.05rem; color: var(--color-brand-primary);">${g.contact.whatsappDisplay}</div>
                  <span style="font-size: 0.8rem; color: var(--color-brand-accent);">Chatear con nosotros →</span>
                </div>
              </a>

              <!-- Email -->
              <a href="mailto:${g.contact.email}" class="contact-card-item">
                <div class="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Correo Electrónico</span>
                  <div style="font-weight: 800; font-size: 1.05rem; color: var(--color-brand-primary);">${g.contact.email}</div>
                  <span style="font-size: 0.8rem; color: var(--color-brand-accent);">Enviar mensaje →</span>
                </div>
              </a>

              <!-- Redes Sociales: Instagram & Facebook -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <a href="${g.contact.instagramUrl}" target="_blank" rel="noopener noreferrer" class="contact-card-item" style="padding: 14px;">
                  <div class="contact-card-icon" style="color: #e1306c;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <span style="font-size: 0.7rem; font-weight: 700; color: var(--color-text-muted);">INSTAGRAM</span>
                    <div style="font-weight: 800; font-size: 0.9rem; color: var(--color-brand-primary);">${g.contact.instagramHandle}</div>
                  </div>
                </a>

                <a href="${g.contact.facebookUrl}" target="_blank" rel="noopener noreferrer" class="contact-card-item" style="padding: 14px;">
                  <div class="contact-card-icon" style="color: #1877f2;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div>
                    <span style="font-size: 0.7rem; font-weight: 700; color: var(--color-text-muted);">FACEBOOK</span>
                    <div style="font-weight: 800; font-size: 0.9rem; color: var(--color-brand-primary);">${g.contact.facebookName}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: Formulario de Mensaje Rápido -->
          <div class="contact-form-card">
            <h3 style="font-family: var(--font-display); font-weight: 800; font-size: 1.25rem; margin-bottom: 6px;">
              Dejanos tu consulta
            </h3>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 20px;">
              Completá tus datos y te responderemos por WhatsApp o email a la brevedad.
            </p>

            <form id="contact-form">
              <div class="form-group">
                <label class="form-label" for="contact-name">Nombre y Apellido</label>
                <input type="text" id="contact-name" class="form-input" placeholder="Tu nombre..." required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-phone">Teléfono / WhatsApp</label>
                <input type="tel" id="contact-phone" class="form-input" placeholder="Ej: 2262 123456" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-email">Email</label>
                <input type="email" id="contact-email" class="form-input" placeholder="tucorreo@ejemplo.com" required />
              </div>

              <div class="form-group">
                <label class="form-label" for="contact-message">Mensaje o Consulta</label>
                <textarea id="contact-message" class="form-textarea" rows="4" placeholder="¿Sobre qué prenda o diseño querés consultar?" required></textarea>
              </div>

              <button type="submit" class="btn btn-primary" style="width: 100%;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                Enviar Mensaje por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `}function qe(){const e=new Date().getFullYear(),i=`https://wa.me/${g.contact.whatsappNumber}?text=${encodeURIComponent("¡Hola Molokai! Quiero consultar por sus prendas y la tienda online.")}`;return`
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Info -->
          <div class="footer-brand">
            <h2>${g.name}</h2>
            <div class="footer-tagline">${g.subtitle}</div>
            <p>
              ${g.bio} Nacidos y creados en ${g.location.city}, ${g.location.province}. Diseños exclusivos y prendas personalizables.
            </p>

            <div class="footer-social-links">
              <!-- Instagram -->
              <a href="${g.contact.instagramUrl}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <!-- Facebook -->
              <a href="${g.contact.facebookUrl}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <!-- WhatsApp -->
              <a href="${i}" target="_blank" rel="noopener noreferrer" class="footer-social-btn" aria-label="WhatsApp" style="background: #25d366;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navegación Tienda -->
          <div>
            <h4 class="footer-col-title">Explorar</h4>
            <ul class="footer-links-list">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#catalogo">Catálogo de Ropa</a></li>
              <li><a href="#personalizador">Personalizá Tu Prenda</a></li>
              <li><a href="#templates">Galería de Templates</a></li>
              <li><a href="#showroom">Showroom & Envíos</a></li>
              <li><a href="#contacto">Contacto Directo</a></li>
            </ul>
          </div>

          <!-- Ubicación & Showroom -->
          <div>
            <h4 class="footer-col-title">Ubicación</h4>
            <ul class="footer-links-list">
              <li>📍 <strong>${g.location.city}, ${g.location.province}</strong></li>
              <li>🌊 Costas de Necochea & Quequén</li>
              <li>🇦🇷 Envíos a todo el país</li>
              <li>✍🏻 Showroom: Con Cita Previa</li>
              <li>✉️ ${g.contact.email}</li>
              <li>📱 ${g.contact.whatsappDisplay}</li>
            </ul>
          </div>

          <!-- Medios de Pago & Envíos -->
          <div>
            <h4 class="footer-col-title">Compra Segura</h4>
            <p style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 16px;">
              Aboná tus pedidos de forma rápida y confiable. Obtené <strong>10% de descuento</strong> directo abonando por transferencia bancaria.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              <span class="payment-badge">Mercado Pago</span>
              <span class="payment-badge">Transferencia (10% OFF)</span>
              <span class="payment-badge">Tarjetas</span>
              <span class="payment-badge">Efectivo Showroom</span>
            </div>
          </div>
        </div>

        <!-- Barra Inferior con Copyright -->
        <div class="footer-bottom">
          <p>
            © ${e} <strong>${g.name} ${g.subtitle}</strong>. Todos los derechos reservados. ${g.location.city}, ${g.location.province}, ${g.location.country}.
          </p>

          <div class="footer-payment-methods">
            <span>Diseñado con estilo Shopify para indumentaria streetwear & surf</span>
          </div>
        </div>
      </div>

      <!-- Floating WhatsApp Button -->
      <a href="${i}" target="_blank" rel="noopener noreferrer" class="floating-whatsapp-btn" aria-label="Contactar por WhatsApp">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </footer>
  `}var ee={};(function e(a,i,l,r){var n=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL),s=typeof Path2D=="function"&&typeof DOMMatrix=="function",C=function(){if(!a.OffscreenCanvas)return!1;try{var o=new OffscreenCanvas(1,1),t=o.getContext("2d");t.fillRect(0,0,1,1);var c=o.transferToImageBitmap();t.createPattern(c,"no-repeat")}catch{return!1}return!0}();function d(){}function k(o){var t=i.exports.Promise,c=t!==void 0?t:a.Promise;return typeof c=="function"?new c(o):(o(d,d),null)}var L=function(o,t){return{transform:function(c){if(o)return c;if(t.has(c))return t.get(c);var f=new OffscreenCanvas(c.width,c.height),h=f.getContext("2d");return h.drawImage(c,0,0),t.set(c,f),f},clear:function(){t.clear()}}}(C,new Map),R=function(){var o=Math.floor(16.666666666666668),t,c,f={},h=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(t=function(v){var y=Math.random();return f[y]=requestAnimationFrame(function p(b){h===b||h+o-1<b?(h=b,delete f[y],v()):f[y]=requestAnimationFrame(p)}),y},c=function(v){f[v]&&cancelAnimationFrame(f[v])}):(t=function(v){return setTimeout(v,o)},c=function(v){return clearTimeout(v)}),{frame:t,cancel:c}}(),G=function(){var o,t,c={};function f(h){function v(y,p){h.postMessage({options:y||{},callback:p})}h.init=function(p){var b=p.transferControlToOffscreen();h.postMessage({canvas:b},[b])},h.fire=function(p,b,M){if(t)return v(p,null),t;var z=Math.random().toString(36).slice(2);return t=k(function($){function I(E){E.data.callback===z&&(delete c[z],h.removeEventListener("message",I),t=null,L.clear(),M(),$())}h.addEventListener("message",I),v(p,z),c[z]=I.bind(null,{data:{callback:z}})}),t},h.reset=function(){h.postMessage({reset:!0});for(var p in c)c[p](),delete c[p]}}return function(){if(o)return o;if(!l&&n){var h=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{o=new Worker(URL.createObjectURL(new Blob([h])))}catch(v){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",v),null}f(o)}return o}}(),V={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Q(o,t){return t?t(o):o}function W(o){return o!=null}function m(o,t,c){return Q(o&&W(o[t])?o[t]:V[t],c)}function x(o){return o<0?0:Math.floor(o)}function S(o,t){return Math.floor(Math.random()*(t-o))+o}function H(o){return parseInt(o,16)}function _(o){return o.map(ue)}function ue(o){var t=String(o).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:H(t.substring(0,2)),g:H(t.substring(2,4)),b:H(t.substring(4,6))}}function me(o){var t=m(o,"origin",Object);return t.x=m(t,"x",Number),t.y=m(t,"y",Number),t}function he(o){o.width=document.documentElement.clientWidth,o.height=document.documentElement.clientHeight}function ge(o){var t=o.getBoundingClientRect();o.width=t.width,o.height=t.height}function ve(o){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=o,t}function ye(o,t,c,f,h,v,y,p,b){o.save(),o.translate(t,c),o.rotate(v),o.scale(f,h),o.arc(0,0,1,y,p,b),o.restore()}function be(o){var t=o.angle*(Math.PI/180),c=o.spread*(Math.PI/180);return{x:o.x,y:o.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:o.startVelocity*.5+Math.random()*o.startVelocity,angle2D:-t+(.5*c-Math.random()*c),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:o.color,shape:o.shape,tick:0,totalTicks:o.ticks,decay:o.decay,drift:o.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:o.gravity*3,ovalScalar:.6,scalar:o.scalar,flat:o.flat}}function xe(o,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var c=t.tick++/t.totalTicks,f=t.x+t.random*t.tiltCos,h=t.y+t.random*t.tiltSin,v=t.wobbleX+t.random*t.tiltCos,y=t.wobbleY+t.random*t.tiltSin;if(o.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-c)+")",o.beginPath(),s&&t.shape.type==="path"&&typeof t.shape.path=="string"&&Array.isArray(t.shape.matrix))o.fill(ke(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(v-f)*.1,Math.abs(y-h)*.1,Math.PI/10*t.wobble));else if(t.shape.type==="bitmap"){var p=Math.PI/10*t.wobble,b=Math.abs(v-f)*.1,M=Math.abs(y-h)*.1,z=t.shape.bitmap.width*t.scalar,$=t.shape.bitmap.height*t.scalar,I=new DOMMatrix([Math.cos(p)*b,Math.sin(p)*b,-Math.sin(p)*M,Math.cos(p)*M,t.x,t.y]);I.multiplySelf(new DOMMatrix(t.shape.matrix));var E=o.createPattern(L.transform(t.shape.bitmap),"no-repeat");E.setTransform(I),o.globalAlpha=1-c,o.fillStyle=E,o.fillRect(t.x-z/2,t.y-$/2,z,$),o.globalAlpha=1}else if(t.shape==="circle")o.ellipse?o.ellipse(t.x,t.y,Math.abs(v-f)*t.ovalScalar,Math.abs(y-h)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):ye(o,t.x,t.y,Math.abs(v-f)*t.ovalScalar,Math.abs(y-h)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape==="star")for(var w=Math.PI/2*3,A=4*t.scalar,O=8*t.scalar,B=t.x,D=t.y,q=5,N=Math.PI/q;q--;)B=t.x+Math.cos(w)*O,D=t.y+Math.sin(w)*O,o.lineTo(B,D),w+=N,B=t.x+Math.cos(w)*A,D=t.y+Math.sin(w)*A,o.lineTo(B,D),w+=N;else o.moveTo(Math.floor(t.x),Math.floor(t.y)),o.lineTo(Math.floor(t.wobbleX),Math.floor(h)),o.lineTo(Math.floor(v),Math.floor(y)),o.lineTo(Math.floor(f),Math.floor(t.wobbleY));return o.closePath(),o.fill(),t.tick<t.totalTicks}function we(o,t,c,f,h){var v=t.slice(),y=o.getContext("2d"),p,b,M=k(function(z){function $(){p=b=null,y.clearRect(0,0,f.width,f.height),L.clear(),h(),z()}function I(){l&&!(f.width===r.width&&f.height===r.height)&&(f.width=o.width=r.width,f.height=o.height=r.height),!f.width&&!f.height&&(c(o),f.width=o.width,f.height=o.height),y.clearRect(0,0,f.width,f.height),v=v.filter(function(E){return xe(y,E)}),v.length?p=R.frame(I):$()}p=R.frame(I),b=$});return{addFettis:function(z){return v=v.concat(z),M},canvas:o,promise:M,reset:function(){p&&R.cancel(p),b&&b()}}}function te(o,t){var c=!o,f=!!m(t||{},"resize"),h=!1,v=m(t,"disableForReducedMotion",Boolean),y=n&&!!m(t||{},"useWorker"),p=y?G():null,b=c?he:ge,M=o&&p?!!o.__confetti_initialized:!1,z=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,$;function I(w,A,O){for(var B=m(w,"particleCount",x),D=m(w,"angle",Number),q=m(w,"spread",Number),N=m(w,"startVelocity",Number),$e=m(w,"decay",Number),ze=m(w,"gravity",Number),Ie=m(w,"drift",Number),oe=m(w,"colors",_),Ee=m(w,"ticks",Number),re=m(w,"shapes"),Ae=m(w,"scalar"),Le=!!m(w,"flat"),ie=me(w),se=B,J=[],Se=o.width*ie.x,Te=o.height*ie.y;se--;)J.push(be({x:Se,y:Te,angle:D,spread:q,startVelocity:N,color:oe[se%oe.length],shape:re[S(0,re.length)],ticks:Ee,decay:$e,gravity:ze,drift:Ie,scalar:Ae,flat:Le}));return $?$.addFettis(J):($=we(o,J,b,A,O),$.promise)}function E(w){var A=v||m(w,"disableForReducedMotion",Boolean),O=m(w,"zIndex",Number);if(A&&z)return k(function(N){N()});c&&$?o=$.canvas:c&&!o&&(o=ve(O),document.body.appendChild(o)),f&&!M&&b(o);var B={width:o.width,height:o.height};p&&!M&&p.init(o),M=!0,p&&(o.__confetti_initialized=!0);function D(){if(p){var N={getBoundingClientRect:function(){if(!c)return o.getBoundingClientRect()}};b(N),p.postMessage({resize:{width:N.width,height:N.height}});return}B.width=B.height=null}function q(){$=null,f&&(h=!1,a.removeEventListener("resize",D)),c&&o&&(document.body.contains(o)&&document.body.removeChild(o),o=null,M=!1)}return f&&!h&&(h=!0,a.addEventListener("resize",D,!1)),p?p.fire(w,B,q):I(w,B,q)}return E.reset=function(){p&&p.reset(),$&&$.reset()},E}var K;function ae(){return K||(K=te(null,{useWorker:!0,resize:!0})),K}function ke(o,t,c,f,h,v,y){var p=new Path2D(o),b=new Path2D;b.addPath(p,new DOMMatrix(t));var M=new Path2D;return M.addPath(b,new DOMMatrix([Math.cos(y)*h,Math.sin(y)*h,-Math.sin(y)*v,Math.cos(y)*v,c,f])),M}function Ce(o){if(!s)throw new Error("path confetti are not supported in this browser");var t,c;typeof o=="string"?t=o:(t=o.path,c=o.matrix);var f=new Path2D(t),h=document.createElement("canvas"),v=h.getContext("2d");if(!c){for(var y=1e3,p=y,b=y,M=0,z=0,$,I,E=0;E<y;E+=2)for(var w=0;w<y;w+=2)v.isPointInPath(f,E,w,"nonzero")&&(p=Math.min(p,E),b=Math.min(b,w),M=Math.max(M,E),z=Math.max(z,w));$=M-p,I=z-b;var A=10,O=Math.min(A/$,A/I);c=[O,0,0,O,-Math.round($/2+p)*O,-Math.round(I/2+b)*O]}return{type:"path",path:t,matrix:c}}function Me(o){var t,c=1,f="#000000",h='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof o=="string"?t=o:(t=o.text,c="scalar"in o?o.scalar:c,h="fontFamily"in o?o.fontFamily:h,f="color"in o?o.color:f);var v=10*c,y=""+v+"px "+h,p=new OffscreenCanvas(v,v),b=p.getContext("2d");b.font=y;var M=b.measureText(t),z=Math.ceil(M.actualBoundingBoxRight+M.actualBoundingBoxLeft),$=Math.ceil(M.actualBoundingBoxAscent+M.actualBoundingBoxDescent),I=2,E=M.actualBoundingBoxLeft+I,w=M.actualBoundingBoxAscent+I;z+=I+I,$+=I+I,p=new OffscreenCanvas(z,$),b=p.getContext("2d"),b.font=y,b.fillStyle=f,b.fillText(t,E,w);var A=1/c;return{type:"bitmap",bitmap:p.transferToImageBitmap(),matrix:[A,0,0,A,-z*A/2,-$*A/2]}}i.exports=function(){return ae().apply(this,arguments)},i.exports.reset=function(){ae().reset()},i.exports.create=te,i.exports.shapeFromPath=Ce,i.exports.shapeFromText=Me})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ee,!1);const pe=ee.exports;ee.exports.create;class Ue{constructor(){this.cart=this.loadCart(),this.discountPercent=0,this.activeCategory="todos",this.customizer={garmentId:T[0].id,colorId:T[0].colors[1].id,templateId:P[0].id,placementId:"pecho",size:"L",customText:"",customImageSrc:null},this.quickViewProduct=null,this.isSizeGuideOpen=!1}loadCart(){try{const a=localStorage.getItem("molokai_cart");return a?JSON.parse(a):[]}catch{return[]}}saveCart(){try{localStorage.setItem("molokai_cart",JSON.stringify(this.cart))}catch(a){console.error("Error saving cart:",a)}}getCartCount(){return this.cart.reduce((a,i)=>a+i.quantity,0)}addToCart(a){const i=this.cart.findIndex(l=>l.id===a.id&&l.size===a.size&&l.colorId===a.colorId&&l.templateId===a.templateId&&l.placementId===a.placementId&&l.customText===a.customText);i>-1?this.cart[i].quantity+=a.quantity||1:this.cart.push({...a,cartItemId:"item_"+Date.now()+"_"+Math.random().toString(36).substr(2,5)}),this.saveCart(),this.notifyUpdate()}updateQuantity(a,i){const l=this.cart.find(r=>r.cartItemId===a);l&&(l.quantity+=i,l.quantity<=0&&(this.cart=this.cart.filter(r=>r.cartItemId!==a)),this.saveCart(),this.notifyUpdate())}removeFromCart(a){this.cart=this.cart.filter(i=>i.cartItemId!==a),this.saveCart(),this.notifyUpdate()}notifyUpdate(){fe()}}const u=new Ue;function je(){const e=document.getElementById("app");e&&(e.innerHTML=`
    ${Pe(u.getCartCount())}
    <main>
      ${Oe()}
      <div id="customizer-mount-point">
        ${le(u.customizer)}
      </div>
      <div id="catalog-mount-point">
        ${ce(u.activeCategory)}
      </div>
      ${Be()}
      ${De()}
      ${Fe()}
    </main>
    ${qe()}

    <!-- Drawer del Carrito -->
    <div id="cart-drawer-mount-point">
      ${de(u.cart,u.discountPercent)}
    </div>

    <!-- Modal para Vista Rápida y Guía de Talles -->
    <div class="modal-backdrop" id="app-modal-backdrop">
      <div class="modal-content" id="app-modal-content"></div>
    </div>

    <!-- Notificación Toast -->
    <div class="toast-notification" id="app-toast">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span id="toast-message">Producto agregado al carrito</span>
    </div>
  `,He())}function He(){window.addEventListener("scroll",()=>{const e=document.getElementById("site-header");e&&(window.scrollY>40?e.classList.add("scrolled"):e.classList.remove("scrolled"))}),document.addEventListener("click",e=>{var V,Q,W;e.target.closest("#cart-drawer-trigger")&&(e.preventDefault(),Z()),(e.target.closest("#cart-close-btn")||e.target.closest("#cart-drawer-backdrop"))&&(e.preventDefault(),ne()),e.target.closest("#empty-cart-go-customizer-btn")&&ne();const a=e.target.closest("[data-remove-id]");if(a){e.preventDefault();const m=a.getAttribute("data-remove-id");u.removeFromCart(m)}const i=e.target.closest("[data-qty-change]");if(i){e.preventDefault();const m=parseInt(i.getAttribute("data-qty-change"),10),x=i.getAttribute("data-cart-id");u.updateQuantity(x,m)}if(e.target.closest("#apply-discount-btn")){e.preventDefault();const m=document.getElementById("cart-discount-input");if(m){const x=m.value.trim().toUpperCase();g.discounts.promoCodes[x]?(u.discountPercent=g.discounts.promoCodes[x],j(`¡Cupón ${x} aplicado (${Math.round(u.discountPercent*100)}% OFF)!`),pe({particleCount:50,spread:60,origin:{y:.7}})):j("Código inválido. Probá con: MOLOKAI10"),fe()}}e.target.closest("#whatsapp-checkout-btn")&&(e.preventDefault(),Qe());const l=e.target.closest("[data-garment-id]");if(l&&l.closest("#personalizador")){e.preventDefault();const m=l.getAttribute("data-garment-id");u.customizer.garmentId=m;const x=T.find(S=>S.id===m);x&&!x.colors.some(S=>S.id===u.customizer.colorId)&&(u.customizer.colorId=x.colors[0].id),U()}const r=e.target.closest("[data-color-id]");r&&r.closest("#personalizador")&&(e.preventDefault(),u.customizer.colorId=r.getAttribute("data-color-id"),U());const n=e.target.closest("[data-template-id]");n&&n.closest("#personalizador")&&(e.preventDefault(),u.customizer.templateId=n.getAttribute("data-template-id"),U());const s=e.target.closest("[data-placement-id]");s&&s.closest("#personalizador")&&(e.preventDefault(),u.customizer.placementId=s.getAttribute("data-placement-id"),U());const C=e.target.closest("[data-size]");C&&C.closest("#personalizador")&&(e.preventDefault(),u.customizer.size=C.getAttribute("data-size"),U()),e.target.closest("#open-size-guide-btn")&&(e.preventDefault(),Xe()),e.target.closest("#add-custom-to-cart-btn")&&(e.preventDefault(),Ve());const d=e.target.closest("[data-use-template-id]");if(d){e.preventDefault();const m=d.getAttribute("data-use-template-id");u.customizer.templateId=m,U();const x=document.getElementById("personalizador");x&&(x.scrollIntoView({behavior:"smooth"}),j("¡Diseño cargado en el simulador!"))}const k=e.target.closest("[data-category]");if(k){e.preventDefault(),u.activeCategory=k.getAttribute("data-category");const m=document.getElementById("catalog-mount-point");m&&(m.innerHTML=ce(u.activeCategory))}const L=e.target.closest("[data-direct-add-id]");if(L){e.preventDefault();const m=L.getAttribute("data-direct-add-id"),x=X.find(S=>S.id===m);if(x){const S=x.templateId?P.find(_=>_.id===x.templateId):null,H=F({type:x.mockupType||"tshirt",colorHex:((V=x.colors[0])==null?void 0:V.hex)||"#111827",templateSvg:S?S.renderSvg("#ffffff","#0ea5e9"):"",placement:"pecho"});u.addToCart({id:x.id,name:x.name,price:x.price,size:x.sizes[0]||"L",colorName:((Q=x.colors[0])==null?void 0:Q.name)||"Negro",colorHex:((W=x.colors[0])==null?void 0:W.hex)||"#111827",quantity:1,thumbnailSvg:H}),j(`${x.name} agregado al carrito`),Z()}}const R=e.target.closest("[data-customize-template-id]");if(R){e.preventDefault();const m=R.getAttribute("data-customize-template-id");u.customizer.templateId=m,U();const x=document.getElementById("personalizador");x&&x.scrollIntoView({behavior:"smooth"})}const G=e.target.closest("[data-quick-view-id]");if(G){e.preventDefault();const m=G.getAttribute("data-quick-view-id"),x=X.find(S=>S.id===m);x&&We(x)}(e.target.closest(".modal-close-btn")||e.target.classList.contains("modal-backdrop"))&&Ze()}),document.addEventListener("input",e=>{e.target.id==="customizer-text-input"&&(u.customizer.customText=e.target.value,Ge())}),document.addEventListener("submit",e=>{var a,i,l,r;if(e.target.id==="contact-form"){e.preventDefault();const n=((a=document.getElementById("contact-name"))==null?void 0:a.value)||"",s=((i=document.getElementById("contact-phone"))==null?void 0:i.value)||"",C=((l=document.getElementById("contact-email"))==null?void 0:l.value)||"",d=((r=document.getElementById("contact-message"))==null?void 0:r.value)||"",k=`👋 ¡Hola Molokai! Mi nombre es *${n}*.
📱 Tel: ${s}
✉️ Email: ${C}

*Consulta:* ${d}`,L=`https://wa.me/${g.contact.whatsappNumber}?text=${encodeURIComponent(k)}`;window.open(L,"_blank"),j("Redirigiendo a WhatsApp..."),e.target.reset()}})}function U(){const e=document.getElementById("customizer-mount-point");e&&(e.innerHTML=le(u.customizer))}function Ge(){const e=document.getElementById("customizer-preview-stage");if(!e)return;const a=T.find(r=>r.id===u.customizer.garmentId)||T[0],i=a.colors.find(r=>r.id===u.customizer.colorId)||a.colors[0],l=P.find(r=>r.id===u.customizer.templateId);e.innerHTML=F({type:a.mockupType,colorHex:i.hex,templateSvg:l?l.renderSvg(i.textColor,"#0ea5e9"):"",placement:u.customizer.placementId,customText:u.customizer.customText,customTextColor:i.textColor,customImageSrc:u.customizer.customImageSrc})}function Ve(){const e=T.find(s=>s.id===u.customizer.garmentId)||T[0],a=e.colors.find(s=>s.id===u.customizer.colorId)||e.colors[0],i=P.find(s=>s.id===u.customizer.templateId),l=Y.find(s=>s.id===u.customizer.placementId)||Y[0],r=i?i.renderSvg(a.textColor,"#0ea5e9"):"",n=F({type:e.mockupType,colorHex:a.hex,templateSvg:r,placement:u.customizer.placementId,customText:u.customizer.customText,customTextColor:a.textColor,customImageSrc:u.customizer.customImageSrc});u.addToCart({id:`custom_${e.id}`,name:`${e.name} Personalizada`,price:e.basePrice,size:u.customizer.size,colorId:a.id,colorName:a.name,colorHex:a.hex,templateId:i==null?void 0:i.id,templateTitle:(i==null?void 0:i.title)||"Diseño Exclusivo",placementId:l.id,placementName:l.name,customText:u.customizer.customText,quantity:1,thumbnailSvg:n}),pe({particleCount:70,spread:70,origin:{y:.6}}),j("¡Tu prenda personalizada fue agregada!"),Z()}function fe(){var l;const e=document.getElementById("cart-badge"),a=u.getCartCount();e&&(e.innerText=a,a>0?e.classList.add("has-items"):e.classList.remove("has-items"));const i=document.getElementById("cart-drawer-mount-point");if(i){const r=(l=document.getElementById("cart-drawer"))==null?void 0:l.classList.contains("active");i.innerHTML=de(u.cart,u.discountPercent),r&&Z()}}function Z(){const e=document.getElementById("cart-drawer"),a=document.getElementById("cart-drawer-backdrop");e&&a&&(e.classList.add("active"),a.classList.add("active"),document.body.style.overflow="hidden")}function ne(){const e=document.getElementById("cart-drawer"),a=document.getElementById("cart-drawer-backdrop");e&&a&&(e.classList.remove("active"),a.classList.remove("active"),document.body.style.overflow="")}function Qe(){var n,s;const e=(n=document.getElementById("cart-customer-name"))==null?void 0:n.value.trim(),a=(s=document.getElementById("cart-customer-city"))==null?void 0:s.value.trim(),i=document.querySelector('input[name="cart_delivery"]:checked'),l=i?i.value:"showroom",r=Ne(u.cart,{name:e,city:a,deliveryMethod:l},u.discountPercent);r&&(window.open(r,"_blank"),j("Abriendo WhatsApp con tu pedido..."))}function j(e){const a=document.getElementById("app-toast"),i=document.getElementById("toast-message");a&&i&&(i.innerText=e,a.classList.add("active"),setTimeout(()=>{a.classList.remove("active")},3200))}function We(e){var s;const a=document.getElementById("app-modal-backdrop"),i=document.getElementById("app-modal-content");if(!a||!i)return;const l=e.templateId?P.find(C=>C.id===e.templateId):null,r=F({type:e.mockupType||"tshirt",colorHex:((s=e.colors[0])==null?void 0:s.hex)||"#111827",templateSvg:l?l.renderSvg("#ffffff","#0ea5e9"):"",placement:"pecho"}),n=g.currency.format;i.innerHTML=`
    <button type="button" class="modal-close-btn" aria-label="Cerrar modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 28px; align-items: center;">
      <div style="background: radial-gradient(circle, #ffffff, #f1f5f9); border-radius: 16px; padding: 20px; border: 1px solid #e2e8f0;">
        ${r}
      </div>

      <div>
        <span style="font-size: 0.75rem; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 0.08em;">${e.categoryLabel}</span>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 900; color: #0f172a; margin: 4px 0 10px;">${e.name}</h3>

        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px;">
          <span style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 900; color: #0f172a;">${n(e.price)}</span>
          ${e.originalPrice?`<span style="color: #94a3b8; text-decoration: line-through;">${n(e.originalPrice)}</span>`:""}
        </div>

        <p style="font-size: 0.9rem; color: #64748b; line-height: 1.6; margin-bottom: 18px;">${e.description}</p>

        <ul style="list-style: none; font-size: 0.85rem; color: #334155; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
          ${e.features.map(C=>`
            <li style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #0284c7; font-weight: 800;">✓</span> ${C}
            </li>
          `).join("")}
        </ul>

        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn btn-primary" data-direct-add-id="${e.id}" style="flex: 1;">
            Agregar al Carrito
          </button>
          ${e.isCustomizable?`
            <button type="button" class="btn btn-secondary" data-customize-template-id="${e.templateId||"wave-classic"}">
              Personalizar
            </button>
          `:""}
        </div>
      </div>
    </div>
  `,a.classList.add("active"),document.body.style.overflow="hidden"}function Xe(){const e=document.getElementById("app-modal-backdrop"),a=document.getElementById("app-modal-content");!e||!a||(a.innerHTML=`
    <button type="button" class="modal-close-btn" aria-label="Cerrar modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <h3 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 900; color: #0f172a; margin-bottom: 8px;">
      GUÍA DE TALLES • MOLOKAI
    </h3>
    <p style="font-size: 0.88rem; color: #64748b; margin-bottom: 20px;">
      Medidas aproximadas en centímetros tomadas sobre la prenda extendida en una superficie plana.
    </p>

    <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 8px; color: #0f172a;">Remeras Oversize (Hombro Caído)</h4>
    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; margin-bottom: 24px;">
      <thead>
        <tr style="background: #f1f5f9; text-align: left;">
          <th style="padding: 10px; border: 1px solid #e2e8f0;">Talle</th>
          <th style="padding: 10px; border: 1px solid #e2e8f0;">Ancho (Sisa a Sisa)</th>
          <th style="padding: 10px; border: 1px solid #e2e8f0;">Largo Total</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="padding: 8px 10px; border: 1px solid #e2e8f0; font-weight: 700;">S</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">54 cm</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">72 cm</td></tr>
        <tr><td style="padding: 8px 10px; border: 1px solid #e2e8f0; font-weight: 700;">M</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">57 cm</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">74 cm</td></tr>
        <tr><td style="padding: 8px 10px; border: 1px solid #e2e8f0; font-weight: 700;">L</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">60 cm</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">76 cm</td></tr>
        <tr><td style="padding: 8px 10px; border: 1px solid #e2e8f0; font-weight: 700;">XL</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">63 cm</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">78 cm</td></tr>
        <tr><td style="padding: 8px 10px; border: 1px solid #e2e8f0; font-weight: 700;">XXL</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">66 cm</td><td style="padding: 8px 10px; border: 1px solid #e2e8f0;">80 cm</td></tr>
      </tbody>
    </table>

    <div style="background: #f8fafc; padding: 14px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 0.85rem; color: #475569;">
      💡 <strong>Tip Molokai:</strong> Si te gusta el calce bien amplio y relajado, pedí tu talle habitual. Si preferís un corte más clásico, podés elegir un talle menos.
    </div>
  `,e.classList.add("active"),document.body.style.overflow="hidden")}function Ze(){const e=document.getElementById("app-modal-backdrop");e&&(e.classList.remove("active"),document.body.style.overflow="")}document.addEventListener("DOMContentLoaded",je);
//# sourceMappingURL=index-DQ6dVcD-.js.map
