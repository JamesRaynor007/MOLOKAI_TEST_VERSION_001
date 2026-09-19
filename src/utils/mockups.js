/**
 * Generador de Mockups Vectoriales de Indumentaria para el Simulador en Vivo
 * Permite cambiar dinámicamente el color de la prenda, superponer diseños,
 * ajustar posiciones y exportar o previsualizar con sombras realistas.
 */

export function renderGarmentMockup({
  type = 'tshirt',
  colorHex = '#ffffff',
  templateSvg = '',
  placement = 'pecho', // 'pecho', 'bolsillo', 'espalda'
  customText = '',
  customTextColor = '#ffffff',
  customImageSrc = null
}) {
  // Configuración de posición y escala del estampado
  let transform = 'translate(150, 160) scale(0.65)';
  
  if (placement === 'bolsillo') {
    transform = 'translate(195, 135) scale(0.32)';
  } else if (placement === 'espalda') {
    transform = 'translate(150, 170) scale(0.8)';
  }

  // Prenda: Remera (Frente o Espalda)
  if (type === 'tshirt') {
    const isBack = placement === 'espalda';
    
    return `
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
                fill="${colorHex}" 
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
        ${isBack ? `
          <!-- Espalda: cuello alto recto -->
          <path d="M 98 48 C 112 43, 130 40, 150 40 C 170 40, 188 43, 202 48 C 188 54, 170 57, 150 57 C 130 57, 112 54, 98 48 Z" 
                fill="${colorHex}" 
                stroke="rgba(0,0,0,0.2)" 
                stroke-width="1.5"
          />
          <path d="M 100 49 C 115 44, 132 42, 150 42 C 168 42, 185 44, 200 49" 
                fill="none" 
                stroke="rgba(0,0,0,0.15)" 
                stroke-width="1" 
                stroke-dasharray="2 2"
          />
        ` : `
          <!-- Frente: cuello escote redondo cerrado con rib de 2.5cm -->
          <path d="M 98 48 C 112 72, 130 82, 150 82 C 170 82, 188 72, 202 48 C 188 62, 170 70, 150 70 C 130 70, 112 62, 98 48 Z" 
                fill="${colorHex}" 
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
        <g class="design-canvas-layer" transform="${transform}">
          ${customImageSrc ? `
            <image href="${customImageSrc}" x="-90" y="-90" width="180" height="180" preserveAspectRatio="xMidYMid meet" style="mix-blend-mode: multiply;"/>
          ` : templateSvg}

          ${customText ? `
            <text x="0" y="95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${customTextColor}" letter-spacing="3" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
              ${customText.toUpperCase()}
            </text>
          ` : ''}
        </g>

        <!-- Etiqueta Molokai en la parte inferior o interior -->
        <g transform="translate(86, 280)">
          <rect x="0" y="0" width="12" height="15" fill="#0f172a" rx="1"/>
          <text x="6" y="11" font-family="'Outfit', sans-serif" font-weight="900" font-size="7" fill="#ffffff" text-anchor="middle">M</text>
        </g>
      </svg>
    `;
  }

  // Prenda: Hoodie / Buzo con Capucha
  if (type === 'hoodie') {
    return `
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
                fill="${colorHex}" 
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
              fill="${colorHex}" 
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
              fill="${colorHex}" 
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
        <g class="design-canvas-layer" transform="${transform}">
          ${customImageSrc ? `
            <image href="${customImageSrc}" x="-90" y="-90" width="180" height="180" preserveAspectRatio="xMidYMid meet" style="mix-blend-mode: multiply;"/>
          ` : templateSvg}

          ${customText ? `
            <text x="0" y="95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${customTextColor}" letter-spacing="3" style="text-shadow: 0 1px 2px rgba(0,0,0,0.3);">
              ${customText.toUpperCase()}
            </text>
          ` : ''}
        </g>
      </svg>
    `;
  }

  // Prenda: Tote Bag
  if (type === 'tote') {
    return `
      <svg viewBox="0 0 300 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" class="garment-svg">
        <defs>
          <filter id="tote-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.16"/>
          </filter>
        </defs>

        <!-- Manijas largas -->
        <path d="M 112 115 C 112 35, 125 15, 150 15 C 175 15, 188 35, 188 115" 
              fill="none" 
              stroke="${colorHex}" 
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
                fill="${colorHex}" 
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
          ${customImageSrc ? `
            <image href="${customImageSrc}" x="-90" y="-90" width="180" height="180" preserveAspectRatio="xMidYMid meet" style="mix-blend-mode: multiply;"/>
          ` : templateSvg}

          ${customText ? `
            <text x="0" y="95" text-anchor="middle" font-family="'Outfit', sans-serif" font-weight="900" font-size="16" fill="${customTextColor}" letter-spacing="3">
              ${customText.toUpperCase()}
            </text>
          ` : ''}
        </g>
      </svg>
    `;
  }

  // Default fallback (tshirt)
  return renderGarmentMockup({ type: 'tshirt', colorHex, templateSvg, placement, customText, customTextColor, customImageSrc });
}
