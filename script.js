const titulo = document.createElement("h1");
titulo.textContent = "Consejos para Clases";
titulo.style.textAlign = "center";
titulo.style.color = "#4CAF50";
document.body.appendChild(titulo);
 
// Crear un contenedor para los consejos
const container = document.createElement("div");
container.id = "consejosContainer";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
document.body.appendChild(container);
 
// Lista de consejos predefinidos
const consejos = [
    "1.Organiza tu tiempo: Planifica y asigna tiempo para estudiar.",
    "2.Mantén un ambiente de estudio libre de distracciones.",
    "3.Haz pausas cortas entre sesiones de estudio para mantener la concentración.",
    "4.Toma notas durante las clases para una mejor comprensión.",
    "5.Revisa tus notas al final de cada semana.",
    "6.No temas pedir ayuda si no entiendes algo en clase."
];
// Función para mostrar un consejo en el contenedor
function mostrarConsejo(consejo) {
    const consejoElemento = document.createElement("div");
    consejoElemento.classList.add("consejo");
    consejoElemento.textContent = consejo;
    container.appendChild(consejoElemento);
}
 
// Mostrar los consejos iniciales
consejos.forEach(mostrarConsejo);
 
 
// Evento para agregar un nuevo consejo
botonNuevoConsejo.addEventListener("click", function() {
    const nuevoConsejo = prompt("Escribe tu consejo para las clases:");
    if (nuevoConsejo) {
        mostrarConsejo(nuevoConsejo);
    }
});
 
// Agregar el botón a la página
document.body.appendChild(botonNuevoConsejo);