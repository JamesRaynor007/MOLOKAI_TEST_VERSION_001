import { PRODUCTS } from '../data/products.js';
import { STORE_CONFIG } from '../config/store-config.js';
import { DESIGN_TEMPLATES } from '../data/templates.js';
import { renderGarmentMockup } from '../utils/mockups.js';

export function renderCatalog(activeCategory = 'todos') {
  const currencyFormatter = STORE_CONFIG.currency.format;

  const categories = [
    { id: 'todos', label: 'Todos los Productos' },
    { id: 'remeras', label: 'Remeras' },
    { id: 'buzos', label: 'Buzos & Hoodies' },
    { id: 'accesorios', label: 'Accesorios' }
  ];

  const filteredProducts = activeCategory === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return `
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
            ${categories.map(cat => `
              <button type="button" 
                class="category-tab-btn ${cat.id === activeCategory ? 'active' : ''}" 
                data-category="${cat.id}">
                ${cat.label}
              </button>
            `).join('')}
          </div>
          <div style="font-size: 0.85rem; color: #64748b; font-weight: 600;">
            Mostrando <strong>${filteredProducts.length}</strong> modelos
          </div>
        </div>

        <!-- Grid de Productos -->
        <div class="products-grid">
          ${filteredProducts.map(prod => {
            const template = prod.templateId ? DESIGN_TEMPLATES.find(t => t.id === prod.templateId) : null;
            const previewSvg = renderGarmentMockup({
              type: prod.mockupType || 'tshirt',
              colorHex: prod.colors[0]?.hex || '#111827',
              templateSvg: template ? template.renderSvg('#ffffff', '#0ea5e9') : '',
              placement: 'pecho'
            });

            return `
              <div class="product-card" data-product-id="${prod.id}">
                ${prod.badge ? `
                  <span class="product-card-badge ${prod.originalPrice ? 'sale' : ''}">
                    ${prod.badge}
                  </span>
                ` : ''}

                <!-- Vista de Prenda / Mockup -->
                <div class="product-card-media">
                  ${previewSvg}
                  <button type="button" class="quick-view-overlay-btn" data-quick-view-id="${prod.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Vista Rápida
                  </button>
                </div>

                <!-- Info del Producto -->
                <div class="product-card-content">
                  <span class="product-card-category">${prod.categoryLabel}</span>
                  <h3 class="product-card-title">${prod.name}</h3>

                  <div class="product-card-rating">
                    <span>★</span>
                    <strong>${prod.rating}</strong>
                    <span class="rating-count">(${prod.reviewsCount} reseñas)</span>
                  </div>

                  <!-- Colores disponibles -->
                  <div style="display: flex; gap: 6px; margin-bottom: 12px;">
                    ${prod.colors.map(col => `
                      <span style="width: 14px; height: 14px; border-radius: 50%; background-color: ${col.hex}; border: 1px solid #cbd5e1;" title="${col.name}"></span>
                    `).join('')}
                  </div>

                  <!-- Precio -->
                  <div class="product-card-price-row">
                    <span class="product-card-price">${currencyFormatter(prod.price)}</span>
                    ${prod.originalPrice ? `
                      <span class="product-card-old-price">${currencyFormatter(prod.originalPrice)}</span>
                    ` : ''}
                  </div>

                  <!-- Acciones -->
                  <div class="product-card-footer-actions">
                    <button type="button" class="btn btn-primary product-card-add-btn" data-direct-add-id="${prod.id}">
                      Agregar
                    </button>
                    ${prod.isCustomizable ? `
                      <button type="button" class="product-card-customize-btn" data-customize-template-id="${prod.templateId || 'wave-classic'}" title="Personalizar este modelo en el simulador">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M12 20h9"></path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                        </svg>
                      </button>
                    ` : ''}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}
