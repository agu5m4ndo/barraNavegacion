//Event listener
// const boton = document.getElementById("click-me");

// const clases = ["version-1", "version-2", "version-3"];

// let i = 0;
// boton.addEventListener("click", () => {
//   boton.classList.remove(clases[i]);
//   i++;
//   if (i >= clases.length) {
//     i = 0;
//   }
//   boton.classList.add(clases[i]);
// });

// let boton = document.querySelector("#click-me");
// boton.addEventListener("mousedown", (evento) => {
//   if (evento.button == 0) {
//     console.log("Botón izquierdo");
//   } else if (evento.button == 1) {
//     console.log("Botón central");
//   } else if (evento.button == 2) {
//     console.log("Botón derecho");
//   }
// });

// document.addEventListener("visibilitychange", () => {
//   document.body.style.backgroundColor = "#f00";
// });

// const contenedorUno = document.querySelector("#contenedor-1");
// contenedorUno.style.backgroundColor = "#f00";
// contenedorUno.style.width = "100px";
// contenedorUno.style.height = "100px";

const menuLinks = document.querySelector("#menu-links");
const checkbox = document.querySelector("#check");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    menuLinks.style.maxHeight = "180px";
  } else {
    menuLinks.style.maxHeight = "0px";
  }
});
