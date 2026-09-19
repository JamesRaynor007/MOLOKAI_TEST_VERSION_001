import { STORE_CONFIG } from '../config/store-config.js';

export function renderNavbar(cartCount = 0) {
  return `
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
          <span class="logo-main">${STORE_CONFIG.name}</span>
          <span class="logo-sub">${STORE_CONFIG.subtitle}</span>
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
              <span class="cart-count-badge ${cartCount > 0 ? 'has-items' : ''}" id="cart-badge">${cartCount}</span>
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
  `;
}
