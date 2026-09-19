import { STORE_CONFIG } from '../config/store-config.js';

export function renderContactSection() {
  const phone = STORE_CONFIG.contact.whatsappNumber;
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent('¡Hola Molokai! Tengo una consulta sobre sus prendas y la tienda online 🙌')}`;

  return `
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
              <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="contact-card-item">
                <div class="contact-card-icon" style="color: #25d366;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">WhatsApp Directo</span>
                  <div style="font-weight: 800; font-size: 1.05rem; color: var(--color-brand-primary);">${STORE_CONFIG.contact.whatsappDisplay}</div>
                  <span style="font-size: 0.8rem; color: var(--color-brand-accent);">Chatear con nosotros →</span>
                </div>
              </a>

              <!-- Email -->
              <a href="mailto:${STORE_CONFIG.contact.email}" class="contact-card-item">
                <div class="contact-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Correo Electrónico</span>
                  <div style="font-weight: 800; font-size: 1.05rem; color: var(--color-brand-primary);">${STORE_CONFIG.contact.email}</div>
                  <span style="font-size: 0.8rem; color: var(--color-brand-accent);">Enviar mensaje →</span>
                </div>
              </a>

              <!-- Redes Sociales: Instagram & Facebook -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <a href="${STORE_CONFIG.contact.instagramUrl}" target="_blank" rel="noopener noreferrer" class="contact-card-item" style="padding: 14px;">
                  <div class="contact-card-icon" style="color: #e1306c;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <span style="font-size: 0.7rem; font-weight: 700; color: var(--color-text-muted);">INSTAGRAM</span>
                    <div style="font-weight: 800; font-size: 0.9rem; color: var(--color-brand-primary);">${STORE_CONFIG.contact.instagramHandle}</div>
                  </div>
                </a>

                <a href="${STORE_CONFIG.contact.facebookUrl}" target="_blank" rel="noopener noreferrer" class="contact-card-item" style="padding: 14px;">
                  <div class="contact-card-icon" style="color: #1877f2;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                  <div>
                    <span style="font-size: 0.7rem; font-weight: 700; color: var(--color-text-muted);">FACEBOOK</span>
                    <div style="font-weight: 800; font-size: 0.9rem; color: var(--color-brand-primary);">${STORE_CONFIG.contact.facebookName}</div>
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
  `;
}
