import { STORE_CONFIG } from '../config/store-config.js';

/**
 * Genera el mensaje estructurado de WhatsApp a partir de los ítems del carrito
 * y abre el chat directamente con la tienda MOLOKAI.
 */
export function generateWhatsAppOrderUrl(cartItems, customerInfo = {}, discountPercent = 0) {
  if (!cartItems || cartItems.length === 0) return null;

  const phone = STORE_CONFIG.contact.whatsappNumber;
  const currencyFormatter = STORE_CONFIG.currency.format;

  // Encabezado
  let message = `🌊 *NUEVO PEDIDO - MOLOKAI TIENDA ONLINE*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

  // Datos del cliente si fueron provistos
  if (customerInfo.name) {
    message += `👤 *Cliente:* ${customerInfo.name}\n`;
  }
  if (customerInfo.city) {
    message += `📍 *Ubicación / Ciudad:* ${customerInfo.city}\n`;
  }
  if (customerInfo.deliveryMethod) {
    const delivery = customerInfo.deliveryMethod === 'showroom' 
      ? '🏬 Retiro en Showroom (Necochea - Cita Previa)' 
      : '📦 Envío a domicilio por Correo / Andreani';
    message += `🚚 *Modalidad:* ${delivery}\n`;
  }
  message += `\n🛍️ *DETALLE DEL PEDIDO:*\n`;

  let subtotal = 0;

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    message += `\n*${index + 1}. ${item.name}* (x${item.quantity})\n`;
    if (item.size) message += `   • Talle: ${item.size}\n`;
    if (item.colorName) message += `   • Color: ${item.colorName}\n`;
    if (item.templateTitle) message += `   • Diseño: ${item.templateTitle}\n`;
    if (item.placementName) message += `   • Ubicación estampa: ${item.placementName}\n`;
    if (item.customText) message += `   • Texto personalizado: "${item.customText}"\n`;
    message += `   • Precio: ${currencyFormatter(item.price)} c/u → *${currencyFormatter(itemTotal)}*\n`;
  });

  message += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *Subtotal:* ${currencyFormatter(subtotal)}\n`;

  let total = subtotal;
  if (discountPercent > 0) {
    const discountAmount = subtotal * discountPercent;
    total = subtotal - discountAmount;
    message += `🏷️ *Descuento (${Math.round(discountPercent * 100)}%):* -${currencyFormatter(discountAmount)}\n`;
  }

  message += `✨ *TOTAL ESTIMADO:* *${currencyFormatter(total)}*\n\n`;
  message += `💳 *Método de pago preferido:* ${customerInfo.paymentMethod || 'A coordinar (Transferencia / Mercado Pago / Efectivo)'}\n\n`;
  message += `📍 *Origen:* Necochea & Quequén, Bs. As. 🇦🇷\n`;
  message += `¡Hola Molokai! Quiero confirmar este pedido y coordinar el pago/entrega. ¿Tienen disponibilidad? 🙌`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Genera enlace para coordinar cita previa en el Showroom de Necochea
 */
export function generateShowroomBookingUrl() {
  const phone = STORE_CONFIG.contact.whatsappNumber;
  const message = `👋 ¡Hola Molokai! Me gustaría coordinar una cita previa para visitar el showroom en Necochea/Quequén y conocer sus prendas. ¿Qué días y horarios tienen disponibles? ✍🏻`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Genera enlace de consulta rápida por un producto específico
 */
export function generateProductInquiryUrl(productName) {
  const phone = STORE_CONFIG.contact.whatsappNumber;
  const message = `👋 ¡Hola Molokai! Estoy interesado/a en este producto de la tienda online: *${productName}*. ¿Tienen stock disponible?`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
