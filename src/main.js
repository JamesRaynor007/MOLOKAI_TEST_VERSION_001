import './style.css';
import { STORE_CONFIG } from './config/store-config.js';
import { PRODUCTS } from './data/products.js';
import { CUSTOMIZABLE_GARMENTS, DESIGN_TEMPLATES, PLACEMENT_OPTIONS } from './data/templates.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderCustomizer } from './components/Customizer.js';
import { renderCatalog } from './components/Catalog.js';
import { renderTemplateGallery } from './components/TemplateGallery.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderLocationShowroom } from './components/LocationShowroom.js';
import { renderContactSection } from './components/ContactSection.js';
import { renderFooter } from './components/Footer.js';
import { renderGarmentMockup } from './utils/mockups.js';
import { generateWhatsAppOrderUrl } from './utils/whatsapp.js';
import confetti from 'canvas-confetti';

// ==========================================================================
// ESTADO GLOBAL DE LA APLICACIÓN
// ==========================================================================
class StoreState {
  constructor() {
    this.cart = this.loadCart();
    this.discountPercent = 0;
    this.activeCategory = 'todos';
    this.customizer = {
      garmentId: CUSTOMIZABLE_GARMENTS[0].id,
      colorId: CUSTOMIZABLE_GARMENTS[0].colors[1].id, // Negro
      templateId: DESIGN_TEMPLATES[0].id,
      placementId: 'pecho',
      size: 'L',
      customText: '',
      customImageSrc: null
    };
    this.quickViewProduct = null;
    this.isSizeGuideOpen = false;
  }

  loadCart() {
    try {
      const stored = localStorage.getItem('molokai_cart');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('molokai_cart', JSON.stringify(this.cart));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }

  getCartCount() {
    return this.cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  addToCart(item) {
    const existingIndex = this.cart.findIndex(i => 
      i.id === item.id && 
      i.size === item.size && 
      i.colorId === item.colorId && 
      i.templateId === item.templateId && 
      i.placementId === item.placementId &&
      i.customText === item.customText
    );

    if (existingIndex > -1) {
      this.cart[existingIndex].quantity += item.quantity || 1;
    } else {
      this.cart.push({
        ...item,
        cartItemId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5)
      });
    }

    this.saveCart();
    this.notifyUpdate();
  }

  updateQuantity(cartItemId, delta) {
    const item = this.cart.find(i => i.cartItemId === cartItemId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter(i => i.cartItemId !== cartItemId);
    }

    this.saveCart();
    this.notifyUpdate();
  }

  removeFromCart(cartItemId) {
    this.cart = this.cart.filter(i => i.cartItemId !== cartItemId);
    this.saveCart();
    this.notifyUpdate();
  }

  notifyUpdate() {
    updateCartUI();
  }
}

export const state = new StoreState();

// ==========================================================================
// RENDERIZADO INICIAL DE LA PÁGINA
// ==========================================================================
function initApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    ${renderNavbar(state.getCartCount())}
    <main>
      ${renderHero()}
      <div id="customizer-mount-point">
        ${renderCustomizer(state.customizer)}
      </div>
      <div id="catalog-mount-point">
        ${renderCatalog(state.activeCategory)}
      </div>
      ${renderTemplateGallery()}
      ${renderLocationShowroom()}
      ${renderContactSection()}
    </main>
    ${renderFooter()}

    <!-- Drawer del Carrito -->
    <div id="cart-drawer-mount-point">
      ${renderCartDrawer(state.cart, state.discountPercent)}
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
  `;

  setupEventListeners();
}

// ==========================================================================
// CONTROLADORES DE EVENTOS
// ==========================================================================
function setupEventListeners() {
  // Sticky Header Scroll
  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Carrito: Abrir & Cerrar
  document.addEventListener('click', (e) => {
    // Abrir Carrito
    if (e.target.closest('#cart-drawer-trigger')) {
      e.preventDefault();
      openCartDrawer();
    }

    // Cerrar Carrito
    if (e.target.closest('#cart-close-btn') || e.target.closest('#cart-drawer-backdrop')) {
      e.preventDefault();
      closeCartDrawer();
    }

    // Ir al Customizer desde Carrito Vacío
    if (e.target.closest('#empty-cart-go-customizer-btn')) {
      closeCartDrawer();
    }

    // Eliminar producto del carrito
    const removeBtn = e.target.closest('[data-remove-id]');
    if (removeBtn) {
      e.preventDefault();
      const id = removeBtn.getAttribute('data-remove-id');
      state.removeFromCart(id);
    }

    // Modificar cantidad en carrito
    const qtyBtn = e.target.closest('[data-qty-change]');
    if (qtyBtn) {
      e.preventDefault();
      const delta = parseInt(qtyBtn.getAttribute('data-qty-change'), 10);
      const id = qtyBtn.getAttribute('data-cart-id');
      state.updateQuantity(id, delta);
    }

    // Aplicar cupón de descuento
    if (e.target.closest('#apply-discount-btn')) {
      e.preventDefault();
      const input = document.getElementById('cart-discount-input');
      if (input) {
        const code = input.value.trim().toUpperCase();
        if (STORE_CONFIG.discounts.promoCodes[code]) {
          state.discountPercent = STORE_CONFIG.discounts.promoCodes[code];
          showToast(`¡Cupón ${code} aplicado (${Math.round(state.discountPercent * 100)}% OFF)!`);
          confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        } else {
          showToast('Código inválido. Probá con: MOLOKAI10');
        }
        updateCartUI();
      }
    }

    // WhatsApp Checkout
    if (e.target.closest('#whatsapp-checkout-btn')) {
      e.preventDefault();
      handleWhatsAppCheckout();
    }

    // ----------------------------------------------------------------------
    // CONTROLES DEL CUSTOMIZER (SIMULADOR EN VIVO)
    // ----------------------------------------------------------------------
    // 1. Prenda
    const garmentBtn = e.target.closest('[data-garment-id]');
    if (garmentBtn && garmentBtn.closest('#personalizador')) {
      e.preventDefault();
      const gId = garmentBtn.getAttribute('data-garment-id');
      state.customizer.garmentId = gId;
      // Ajustar color por defecto si la prenda actual no lo tiene
      const garment = CUSTOMIZABLE_GARMENTS.find(g => g.id === gId);
      if (garment && !garment.colors.some(c => c.id === state.customizer.colorId)) {
        state.customizer.colorId = garment.colors[0].id;
      }
      refreshCustomizerUI();
    }

    // 2. Color
    const colorBtn = e.target.closest('[data-color-id]');
    if (colorBtn && colorBtn.closest('#personalizador')) {
      e.preventDefault();
      state.customizer.colorId = colorBtn.getAttribute('data-color-id');
      refreshCustomizerUI();
    }

    // 3. Template de Diseño
    const tmplBtn = e.target.closest('[data-template-id]');
    if (tmplBtn && tmplBtn.closest('#personalizador')) {
      e.preventDefault();
      state.customizer.templateId = tmplBtn.getAttribute('data-template-id');
      refreshCustomizerUI();
    }

    // 4. Ubicación de Estampa (Placement)
    const placeBtn = e.target.closest('[data-placement-id]');
    if (placeBtn && placeBtn.closest('#personalizador')) {
      e.preventDefault();
      state.customizer.placementId = placeBtn.getAttribute('data-placement-id');
      refreshCustomizerUI();
    }

    // 5. Talle
    const sizeBtn = e.target.closest('[data-size]');
    if (sizeBtn && sizeBtn.closest('#personalizador')) {
      e.preventDefault();
      state.customizer.size = sizeBtn.getAttribute('data-size');
      refreshCustomizerUI();
    }

    // 6. Guía de Talles Modal
    if (e.target.closest('#open-size-guide-btn')) {
      e.preventDefault();
      openSizeGuideModal();
    }

    // 7. Botón "Agregar al Carrito" de prenda personalizada
    if (e.target.closest('#add-custom-to-cart-btn')) {
      e.preventDefault();
      addCustomizedItemToCart();
    }

    // ----------------------------------------------------------------------
    // CONTROLES DE LA GALERÍA DE TEMPLATES
    // ----------------------------------------------------------------------
    const useTmplBtn = e.target.closest('[data-use-template-id]');
    if (useTmplBtn) {
      e.preventDefault();
      const tmplId = useTmplBtn.getAttribute('data-use-template-id');
      state.customizer.templateId = tmplId;
      refreshCustomizerUI();

      // Scroll suave hacia el personalizador
      const customizerEl = document.getElementById('personalizador');
      if (customizerEl) {
        customizerEl.scrollIntoView({ behavior: 'smooth' });
        showToast('¡Diseño cargado en el simulador!');
      }
    }

    // ----------------------------------------------------------------------
    // CONTROLES DEL CATÁLOGO
    // ----------------------------------------------------------------------
    // Filtro de categorías
    const catBtn = e.target.closest('[data-category]');
    if (catBtn) {
      e.preventDefault();
      state.activeCategory = catBtn.getAttribute('data-category');
      const mount = document.getElementById('catalog-mount-point');
      if (mount) mount.innerHTML = renderCatalog(state.activeCategory);
    }

    // Agregar producto directo del catálogo
    const directAddBtn = e.target.closest('[data-direct-add-id]');
    if (directAddBtn) {
      e.preventDefault();
      const prodId = directAddBtn.getAttribute('data-direct-add-id');
      const prod = PRODUCTS.find(p => p.id === prodId);
      if (prod) {
        const template = prod.templateId ? DESIGN_TEMPLATES.find(t => t.id === prod.templateId) : null;
        const thumbnailSvg = renderGarmentMockup({
          type: prod.mockupType || 'tshirt',
          colorHex: prod.colors[0]?.hex || '#111827',
          templateSvg: template ? template.renderSvg('#ffffff', '#0ea5e9') : '',
          placement: 'pecho'
        });

        state.addToCart({
          id: prod.id,
          name: prod.name,
          price: prod.price,
          size: prod.sizes[0] || 'L',
          colorName: prod.colors[0]?.name || 'Negro',
          colorHex: prod.colors[0]?.hex || '#111827',
          quantity: 1,
          thumbnailSvg: thumbnailSvg
        });

        showToast(`${prod.name} agregado al carrito`);
        openCartDrawer();
      }
    }

    // Personalizar producto del catálogo en el simulador
    const customizeTemplateBtn = e.target.closest('[data-customize-template-id]');
    if (customizeTemplateBtn) {
      e.preventDefault();
      const tId = customizeTemplateBtn.getAttribute('data-customize-template-id');
      state.customizer.templateId = tId;
      refreshCustomizerUI();
      const customizerEl = document.getElementById('personalizador');
      if (customizerEl) {
        customizerEl.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Vista Rápida (Quick View)
    const quickViewBtn = e.target.closest('[data-quick-view-id]');
    if (quickViewBtn) {
      e.preventDefault();
      const pId = quickViewBtn.getAttribute('data-quick-view-id');
      const prod = PRODUCTS.find(p => p.id === pId);
      if (prod) openQuickViewModal(prod);
    }

    // Cerrar Modales
    if (e.target.closest('.modal-close-btn') || e.target.classList.contains('modal-backdrop')) {
      closeModal();
    }
  });

  // Input de texto personalizado en vivo
  document.addEventListener('input', (e) => {
    if (e.target.id === 'customizer-text-input') {
      state.customizer.customText = e.target.value;
      // Actualizar solo el preview en el DOM para máximo rendimiento sin perder foco
      updatePreviewStageOnly();
    }
  });

  // Formulario de Contacto
  document.addEventListener('submit', (e) => {
    if (e.target.id === 'contact-form') {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || '';
      const phone = document.getElementById('contact-phone')?.value || '';
      const email = document.getElementById('contact-email')?.value || '';
      const msg = document.getElementById('contact-message')?.value || '';

      const fullMessage = `👋 ¡Hola Molokai! Mi nombre es *${name}*.\n📱 Tel: ${phone}\n✉️ Email: ${email}\n\n*Consulta:* ${msg}`;
      const url = `https://wa.me/${STORE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
      
      window.open(url, '_blank');
      showToast('Redirigiendo a WhatsApp...');
      e.target.reset();
    }
  });
}

// ==========================================================================
// ACTUALIZADORES DE UI Y HELPERS
// ==========================================================================
function refreshCustomizerUI() {
  const mount = document.getElementById('customizer-mount-point');
  if (mount) {
    mount.innerHTML = renderCustomizer(state.customizer);
  }
}

function updatePreviewStageOnly() {
  const stage = document.getElementById('customizer-preview-stage');
  if (!stage) return;

  const garment = CUSTOMIZABLE_GARMENTS.find(g => g.id === state.customizer.garmentId) || CUSTOMIZABLE_GARMENTS[0];
  const color = garment.colors.find(c => c.id === state.customizer.colorId) || garment.colors[0];
  const template = DESIGN_TEMPLATES.find(t => t.id === state.customizer.templateId);

  stage.innerHTML = renderGarmentMockup({
    type: garment.mockupType,
    colorHex: color.hex,
    templateSvg: template ? template.renderSvg(color.textColor, '#0ea5e9') : '',
    placement: state.customizer.placementId,
    customText: state.customizer.customText,
    customTextColor: color.textColor,
    customImageSrc: state.customizer.customImageSrc
  });
}

function addCustomizedItemToCart() {
  const garment = CUSTOMIZABLE_GARMENTS.find(g => g.id === state.customizer.garmentId) || CUSTOMIZABLE_GARMENTS[0];
  const color = garment.colors.find(c => c.id === state.customizer.colorId) || garment.colors[0];
  const template = DESIGN_TEMPLATES.find(t => t.id === state.customizer.templateId);
  const placement = PLACEMENT_OPTIONS.find(p => p.id === state.customizer.placementId) || PLACEMENT_OPTIONS[0];

  const templateSvg = template ? template.renderSvg(color.textColor, '#0ea5e9') : '';
  const thumbnailSvg = renderGarmentMockup({
    type: garment.mockupType,
    colorHex: color.hex,
    templateSvg: templateSvg,
    placement: state.customizer.placementId,
    customText: state.customizer.customText,
    customTextColor: color.textColor,
    customImageSrc: state.customizer.customImageSrc
  });

  state.addToCart({
    id: `custom_${garment.id}`,
    name: `${garment.name} Personalizada`,
    price: garment.basePrice,
    size: state.customizer.size,
    colorId: color.id,
    colorName: color.name,
    colorHex: color.hex,
    templateId: template?.id,
    templateTitle: template?.title || 'Diseño Exclusivo',
    placementId: placement.id,
    placementName: placement.name,
    customText: state.customizer.customText,
    quantity: 1,
    thumbnailSvg: thumbnailSvg
  });

  // Efecto visual de confetti para feedback satisfactorio
  confetti({
    particleCount: 70,
    spread: 70,
    origin: { y: 0.6 }
  });

  showToast('¡Tu prenda personalizada fue agregada!');
  openCartDrawer();
}

function updateCartUI() {
  // 1. Actualizar Badge en el Header
  const badge = document.getElementById('cart-badge');
  const count = state.getCartCount();
  if (badge) {
    badge.innerText = count;
    if (count > 0) {
      badge.classList.add('has-items');
    } else {
      badge.classList.remove('has-items');
    }
  }

  // 2. Re-renderizar Drawer del Carrito
  const mount = document.getElementById('cart-drawer-mount-point');
  if (mount) {
    const wasOpen = document.getElementById('cart-drawer')?.classList.contains('active');
    mount.innerHTML = renderCartDrawer(state.cart, state.discountPercent);
    if (wasOpen) {
      openCartDrawer();
    }
  }
}

function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('cart-drawer-backdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function handleWhatsAppCheckout() {
  const customerName = document.getElementById('cart-customer-name')?.value.trim();
  const customerCity = document.getElementById('cart-customer-city')?.value.trim();
  const deliveryRadio = document.querySelector('input[name="cart_delivery"]:checked');
  const deliveryMethod = deliveryRadio ? deliveryRadio.value : 'showroom';

  const orderUrl = generateWhatsAppOrderUrl(state.cart, {
    name: customerName,
    city: customerCity,
    deliveryMethod: deliveryMethod
  }, state.discountPercent);

  if (orderUrl) {
    window.open(orderUrl, '_blank');
    showToast('Abriendo WhatsApp con tu pedido...');
  }
}

function showToast(message) {
  const toast = document.getElementById('app-toast');
  const msgEl = document.getElementById('toast-message');
  if (toast && msgEl) {
    msgEl.innerText = message;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3200);
  }
}

// Modales
function openQuickViewModal(prod) {
  const backdrop = document.getElementById('app-modal-backdrop');
  const content = document.getElementById('app-modal-content');
  if (!backdrop || !content) return;

  const template = prod.templateId ? DESIGN_TEMPLATES.find(t => t.id === prod.templateId) : null;
  const previewSvg = renderGarmentMockup({
    type: prod.mockupType || 'tshirt',
    colorHex: prod.colors[0]?.hex || '#111827',
    templateSvg: template ? template.renderSvg('#ffffff', '#0ea5e9') : '',
    placement: 'pecho'
  });

  const currencyFormatter = STORE_CONFIG.currency.format;

  content.innerHTML = `
    <button type="button" class="modal-close-btn" aria-label="Cerrar modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>

    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 28px; align-items: center;">
      <div style="background: radial-gradient(circle, #ffffff, #f1f5f9); border-radius: 16px; padding: 20px; border: 1px solid #e2e8f0;">
        ${previewSvg}
      </div>

      <div>
        <span style="font-size: 0.75rem; font-weight: 700; color: #0284c7; text-transform: uppercase; letter-spacing: 0.08em;">${prod.categoryLabel}</span>
        <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 900; color: #0f172a; margin: 4px 0 10px;">${prod.name}</h3>

        <div style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px;">
          <span style="font-family: var(--font-display); font-size: 1.6rem; font-weight: 900; color: #0f172a;">${currencyFormatter(prod.price)}</span>
          ${prod.originalPrice ? `<span style="color: #94a3b8; text-decoration: line-through;">${currencyFormatter(prod.originalPrice)}</span>` : ''}
        </div>

        <p style="font-size: 0.9rem; color: #64748b; line-height: 1.6; margin-bottom: 18px;">${prod.description}</p>

        <ul style="list-style: none; font-size: 0.85rem; color: #334155; margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px;">
          ${prod.features.map(f => `
            <li style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #0284c7; font-weight: 800;">✓</span> ${f}
            </li>
          `).join('')}
        </ul>

        <div style="display: flex; gap: 10px;">
          <button type="button" class="btn btn-primary" data-direct-add-id="${prod.id}" style="flex: 1;">
            Agregar al Carrito
          </button>
          ${prod.isCustomizable ? `
            <button type="button" class="btn btn-secondary" data-customize-template-id="${prod.templateId || 'wave-classic'}">
              Personalizar
            </button>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openSizeGuideModal() {
  const backdrop = document.getElementById('app-modal-backdrop');
  const content = document.getElementById('app-modal-content');
  if (!backdrop || !content) return;

  content.innerHTML = `
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
  `;

  backdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const backdrop = document.getElementById('app-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Iniciar aplicación al cargar el DOM
document.addEventListener('DOMContentLoaded', initApp);
