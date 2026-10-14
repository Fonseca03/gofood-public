// ===== DATOS DE CONTACTO DE UBIK =====
// Estos son datos de PRUEBA. Cuando tengas los reales, cambialos SOLO aca
// y se actualizan en todas las paginas.
const UBIK = {
  email: "contacto@ejemplo.com",
  whatsapp: "584140000000",          // solo numeros, con codigo de pais
  whatsappVisible: "+58 414 000 0000"
};

// Tema (claro/oscuro) igual que en la pagina principal
try {
  document.documentElement.setAttribute("data-tema", localStorage.getItem("tema") || "claro");
} catch (e) {}

// Rellena los datos de contacto en cualquier parte que los pida
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-ubik='email']").forEach(el => {
    el.textContent = UBIK.email;
    if (el.tagName === "A") el.href = "mailto:" + UBIK.email;
  });
  document.querySelectorAll("[data-ubik='whatsapp']").forEach(el => {
    el.textContent = UBIK.whatsappVisible;
    if (el.tagName === "A") el.href = "https://wa.me/" + UBIK.whatsapp;
  });
});
