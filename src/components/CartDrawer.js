import { STORE_CONFIG } from '../config/store-config.js';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp.js';

export function renderCartDrawer(cartItems = [], discountPercent = 0) {
  const currencyFormatter = STORE_CONFIG.currency.format;

  let subtotal = 0;
  cartItems.forEach(item => {
    subtotal += item.price * item.quantity;
  });

  let total = subtotal;
  if (discountPercent > 0) {
    total = subtotal - (subtotal * discountPercent);
  }

  const hasItems = cartItems.length > 0;

  return `
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
          Tu Carrito (${cartItems.reduce((acc, item) => acc + item.quantity, 0)})
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
        ${!hasItems ? `
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
        ` : cartItems.map(item => `
          <div class="cart-item-card" data-item-id="${item.cartItemId}">
            <div class="cart-item-thumb">
              ${item.thumbnailSvg || `
                <div style="width:100%;height:100%;background:${item.colorHex || '#111827'};border-radius:4px;"></div>
              `}
            </div>

            <div class="cart-item-details">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                <h4 class="cart-item-title">${item.name}</h4>
                <button type="button" class="cart-item-remove-btn" data-remove-id="${item.cartItemId}" title="Eliminar ítem">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  </svg>
                </button>
              </div>

              <div class="cart-item-specs">
                ${item.size ? `<span>Talle: <strong>${item.size}</strong></span> • ` : ''}
                ${item.colorName ? `<span>Color: <strong>${item.colorName}</strong></span>` : ''}
                ${item.templateTitle ? `<br><span>Diseño: <em>${item.templateTitle}</em></span>` : ''}
                ${item.placementName ? `<br><span>Estampa: <em>${item.placementName}</em></span>` : ''}
                ${item.customText ? `<br><span>Texto: "<strong>${item.customText}</strong>"</span>` : ''}
              </div>

              <div class="cart-item-price-row">
                <div class="cart-item-qty-controls">
                  <button type="button" class="qty-btn" data-qty-change="-1" data-cart-id="${item.cartItemId}">-</button>
                  <span class="qty-display">${item.quantity}</span>
                  <button type="button" class="qty-btn" data-qty-change="1" data-cart-id="${item.cartItemId}">+</button>
                </div>
                <span class="cart-item-price">${currencyFormatter(item.price * item.quantity)}</span>
              </div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Footer & Checkout Form -->
      ${hasItems ? `
        <div class="cart-drawer-footer">
          <!-- Cupón de Descuento -->
          <div class="discount-code-row">
            <input type="text" 
              class="discount-code-input" 
              id="cart-discount-input" 
              placeholder="Código de cupón (ej: MOLOKAI10)" 
              value="${discountPercent > 0 ? 'MOLOKAI10' : ''}"
            />
            <button type="button" class="discount-code-btn" id="apply-discount-btn">
              ${discountPercent > 0 ? 'Aplicado ✓' : 'Aplicar'}
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
              <span>${currencyFormatter(subtotal)}</span>
            </div>
            ${discountPercent > 0 ? `
              <div class="cart-totals-row" style="color: var(--color-success); font-weight: 700;">
                <span>Descuento (${Math.round(discountPercent * 100)}%):</span>
                <span>-${currencyFormatter(subtotal * discountPercent)}</span>
              </div>
            ` : ''}
            <div class="cart-totals-row total">
              <span>Total Estimado:</span>
              <span>${currencyFormatter(total)}</span>
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
      ` : ''}
    </aside>
  `;
}
