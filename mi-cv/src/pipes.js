// src/pipes.js
export function uppercase(texto) {
  return texto.toUpperCase();
}

export function formatoFecha(fecha) {
  return new Date(fecha).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}


