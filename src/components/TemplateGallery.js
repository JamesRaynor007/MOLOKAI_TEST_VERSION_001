import { DESIGN_TEMPLATES } from '../data/templates.js';

export function renderTemplateGallery() {
  return `
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
          ${DESIGN_TEMPLATES.map(tmpl => `
            <div class="template-card">
              <div class="template-card-svg-stage">
                <svg viewBox="0 0 300 300" width="100%" height="100%">
                  ${tmpl.renderSvg('#ffffff', '#38bdf8')}
                </svg>
              </div>

              <span class="template-card-category-badge">${tmpl.category}</span>
              <h3 class="template-card-title">${tmpl.title}</h3>
              <p class="template-card-desc">${tmpl.description}</p>

              <button type="button" class="template-use-btn" data-use-template-id="${tmpl.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
                Usar este diseño
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}
