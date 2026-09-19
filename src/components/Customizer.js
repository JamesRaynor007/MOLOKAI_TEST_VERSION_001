import { CUSTOMIZABLE_GARMENTS, DESIGN_TEMPLATES, PLACEMENT_OPTIONS } from '../data/templates.js';
import { STORE_CONFIG } from '../config/store-config.js';
import { renderGarmentMockup } from '../utils/mockups.js';

export function renderCustomizer(currentState = null) {
  // Estado por defecto
  const state = currentState || {
    garmentId: CUSTOMIZABLE_GARMENTS[0].id,
    colorId: CUSTOMIZABLE_GARMENTS[0].colors[1].id, // Negro por defecto
    templateId: DESIGN_TEMPLATES[0].id,
    placementId: 'pecho',
    size: 'L',
    customText: '',
    customImageSrc: null
  };

  const selectedGarment = CUSTOMIZABLE_GARMENTS.find(g => g.id === state.garmentId) || CUSTOMIZABLE_GARMENTS[0];
  const selectedColor = selectedGarment.colors.find(c => c.id === state.colorId) || selectedGarment.colors[0];
  const selectedTemplate = DESIGN_TEMPLATES.find(t => t.id === state.templateId) || DESIGN_TEMPLATES[0];
  const currencyFormatter = STORE_CONFIG.currency.format;

  // Renderizado del Mockup SVG dinámico
  const templateSvg = selectedTemplate ? selectedTemplate.renderSvg(selectedColor.textColor, '#0ea5e9') : '';
  const garmentSvg = renderGarmentMockup({
    type: selectedGarment.mockupType,
    colorHex: selectedColor.hex,
    templateSvg: templateSvg,
    placement: state.placementId,
    customText: state.customText,
    customTextColor: selectedColor.textColor,
    customImageSrc: state.customImageSrc
  });

  return `
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
              ${garmentSvg}
            </div>

            <!-- Barra inferior con detalles del preview -->
            <div class="preview-controls-bar">
              <div class="preview-indicator">
                <span class="preview-color-badge" style="background-color: ${selectedColor.hex};"></span>
                <span><strong>${selectedGarment.name}</strong> • ${selectedColor.name}</span>
              </div>
              <div class="preview-indicator">
                <span>Estampa: <strong>${selectedTemplate ? selectedTemplate.title : 'Personalizada'}</strong></span>
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
                <span class="control-sublabel">${selectedGarment.material}</span>
              </div>
              
              <div class="garment-selector-grid">
                ${CUSTOMIZABLE_GARMENTS.map(g => `
                  <button type="button" class="garment-option-card ${g.id === selectedGarment.id ? 'active' : ''}" data-garment-id="${g.id}">
                    <div class="garment-card-title">${g.name}</div>
                    <div class="garment-card-price">${currencyFormatter(g.basePrice)}</div>
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- PASO 2: Elegir Color de Prenda -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">2</span>
                  Color de tela
                </span>
                <span class="control-sublabel">${selectedColor.name}</span>
              </div>

              <div class="color-swatches-row">
                ${selectedGarment.colors.map(c => `
                  <button type="button" 
                    class="color-swatch-btn ${c.id === selectedColor.id ? 'active' : ''}" 
                    data-color-id="${c.id}" 
                    style="background-color: ${c.hex};" 
                    title="${c.name}">
                  </button>
                `).join('')}
              </div>
            </div>

            <!-- PASO 3: Elegir Diseño / Template -->
            <div class="control-group">
              <div class="control-header">
                <span class="control-label">
                  <span class="control-step-badge">3</span>
                  Diseño / Template
                </span>
                <span class="control-sublabel">${selectedTemplate ? selectedTemplate.title : ''}</span>
              </div>

              <div class="template-picker-grid">
                ${DESIGN_TEMPLATES.map(t => `
                  <button type="button" class="template-card-mini ${t.id === selectedTemplate?.id ? 'active' : ''}" data-template-id="${t.id}" title="${t.title}">
                    <div class="template-mini-svg">
                      <svg viewBox="0 0 300 300" width="100%" height="100%">
                        ${t.renderSvg('#ffffff', '#38bdf8')}
                      </svg>
                    </div>
                    <span class="template-mini-title">${t.title}</span>
                  </button>
                `).join('')}
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
                ${PLACEMENT_OPTIONS.map(p => `
                  <button type="button" class="placement-pill-btn ${p.id === state.placementId ? 'active' : ''}" data-placement-id="${p.id}">
                    ${p.name}
                  </button>
                `).join('')}
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
                ${selectedGarment.sizes.map(s => `
                  <button type="button" class="size-pill-btn ${s === state.size ? 'active' : ''}" data-size="${s}">
                    ${s}
                  </button>
                `).join('')}
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
                value="${state.customText}"
                maxlength="24"
              />
            </div>

            <!-- ACTION BAR: PRECIO Y BOTÓN AGREGAR AL CARRITO -->
            <div class="customizer-action-bar">
              <div class="customizer-price-wrap">
                <span class="customizer-price-label">Precio Final</span>
                <span class="customizer-price-value">${currencyFormatter(selectedGarment.basePrice)}</span>
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
  `;
}
