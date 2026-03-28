function enviarWhatsApp() {

  // Tomar datos del HTML automáticamente
  const nombre = document.querySelector(".product-title").innerText;
  const precio = document.querySelector(".product-price").innerText;

  const numero = "50687876656";

  const mensaje = `Hola, me interesa el mueble ${nombre}.
Precio visto en la web: ${precio}.
¿Podría brindarme más información?`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}