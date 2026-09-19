# 🌊 MOLOKAI TIENDA ONLINE

Tienda online estilo **Shopify** para **MOLOKAI || INDUMENTARIA**, nacida de la migración y transformación de sus perfiles en [Instagram (@tienda.molokai)](https://www.instagram.com/tienda.molokai/) y [Facebook (Tienda Molokai)](https://www.facebook.com/profile.php?id=61565569539188).

Ubicación: **Necochea & Quequén, Buenos Aires, Argentina**.

---

## ✨ Características Principales

1. **Simulador de Prendas en Vivo (Live Product Preview & Customizer)**:
   - Permite al cliente seleccionar prendas (*Remera Oversize, Remera Clásica, Buzo Hoodie, Tote Bag*).
   - Cambiar el color de la tela en tiempo real con sombras y volumen textil realista.
   - Elegir entre una galería de templates y artes de autor (Surf, Streetwear, Náutico, Minimal).
   - Definir la ubicación de la estampa (*Frente Pecho Grande, Bolsillo Izquierdo, Espalda Completa*).
   - Agregar texto personalizado en vivo y seleccionar talle con Guía de Talles interactiva.

2. **Carrito de Compras Estilo Shopify (Cart Drawer)**:
   - Panel lateral deslizable con animación fluida y contador en el navbar.
   - Detalle completo de cada prenda personalizada (talle, color, diseño, ubicación, texto, subtotal).
   - Modificador de cantidades (+ / -) y eliminación de ítems.
   - Sistema de cupones de descuento (ej: `MOLOKAI10` para 10% OFF, `NECOCHEA` para 15% OFF).
   - Selector de modalidad de entrega: **Retiro gratis en Showroom Necochea** o **Envío a todo el país**.

3. **Checkout Directo por WhatsApp**:
   - Compila el pedido de forma ordenada con emojis y formato profesional.
   - Envía el detalle exacto al WhatsApp de Molokai con un solo clic.

4. **Catálogo de Colección & Vista Rápida (Quick View)**:
   - Grilla responsive con filtros de categorías (*Remeras, Buzos, Accesorios*).
   - Modal de vista rápida con especificaciones de tejido (algodón peinado 24/1 pesado, frisa invisible).

5. **Showroom & Identidad de Necochea**:
   - Sección dedicada al showroom con cita previa en Necochea y Quequén.
   - Enlace directo de WhatsApp para agendar visita.

6. **Footer Legal & Medios de Pago**:
   - Copyright: `© 2026 MOLOKAI INDUMENTARIA. Todos los derechos reservados. Necochea, Buenos Aires, Argentina.`
   - Badges de Mercado Pago, Transferencia (10% OFF), Tarjetas y Efectivo.

---

## 🚀 Cómo Ejecutar en Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abrí en tu navegador: [http://localhost:3000](http://localhost:3000)

3. Generar bundle de producción:
   ```bash
   npm run build
   ```

---

## ⚙️ Configuración de Contacto (WhatsApp & Email)

Podés personalizar el número de WhatsApp, correo o redes en el archivo:
[`src/config/store-config.js`](./src/config/store-config.js)

```javascript
contact: {
  whatsappNumber: "5492262551234", // Tu número con código de país sin '+'
  whatsappDisplay: "+54 9 2262 55-1234",
  email: "tienda.molokai@gmail.com",
  instagramUrl: "https://www.instagram.com/tienda.molokai/",
  facebookUrl: "https://www.facebook.com/profile.php?id=61565569539188"
}
```

---

## 📦 Cómo Subir a GitHub

El proyecto ya cuenta con repositorio Git local inicializado. Para publicarlo en tu cuenta de GitHub:

1. Creá un nuevo repositorio vacío en GitHub (ej: `molokai-tienda-online`).
2. En la terminal dentro de esta carpeta, ejecutá:
   ```bash
   git remote add origin https://github.com/TU_USUARIO/molokai-tienda-online.git
   git branch -M main
   git push -u origin main
   ```
