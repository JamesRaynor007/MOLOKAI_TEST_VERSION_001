import { STORE_CONFIG } from '../config/store-config.js';
import { generateShowroomBookingUrl } from '../utils/whatsapp.js';

export function renderLocationShowroom() {
  const bookingUrl = generateShowroomBookingUrl();

  return `
    <section class="showroom-section" id="showroom">
      <div class="container showroom-grid">
        <!-- Info del Showroom -->
        <div class="showroom-content">
          <div class="showroom-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            ${STORE_CONFIG.location.city}, ${STORE_CONFIG.location.province} • Argentina
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

          <a href="${bookingUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="background: #25d366; color: #ffffff;">
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
  `;
}
