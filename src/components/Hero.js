import { renderGarmentMockup } from '../utils/mockups.js';
import { DESIGN_TEMPLATES } from '../data/templates.js';

export function renderHero() {
  const waveTemplate = DESIGN_TEMPLATES.find(t => t.id === 'wave-classic');
  const previewSvg = renderGarmentMockup({
    type: 'tshirt',
    colorHex: '#111827',
    templateSvg: waveTemplate ? waveTemplate.renderSvg('#ffffff', '#0ea5e9') : '',
    placement: 'pecho'
  });

  return `
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
            ${previewSvg}
          </div>

          <div style="text-align: center; margin-top: 12px;">
            <p style="font-weight: 800; font-size: 0.95rem; color: #0f172a;">Corte Oversize Boxy Fit</p>
            <p style="font-size: 0.8rem; color: #64748b;">Confección pesada que mantiene la estructura</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
