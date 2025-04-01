import { recetas } from "./recetas.js";

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = recetas[id];

if (data) {
    const container = document.getElementById("detalle-container");
    container.innerHTML = 
    `
        <div class="detalle-container-js">
            <h1 class="detalle-titulo">${data.titulo}</h1>
            <img class="detalle-img" src="${data.imagenDestacada[0]}" alt="Bol Ramen">
            <p class="detalle-cap-p"><caption class="detalle-cap">Imagen de ${data.imagenDestacada[1]}</caption></p>
            <p class="detalle-p">${data.descripcion[0]}</p>
            <img class="detalle-img" src="${data.imagenes[0][0]}" alt="Fukuoka">
            <p class="detalle-cap-p"><caption class="detalle-cap">Imagen de ${data.imagenes[0][1]}</caption></p>
            <p class="detalle-p">${data.descripcion[1]}</p>
            <img class="detalle-img" src="${data.imagenes[1][0]}" alt="Ingredientes Ramen">
            <p class="detalle-cap-p"><caption class="detalle-cap">Imagen de ${data.imagenes[1][1]}</caption></p>
            <p class="detalle-p">${data.descripcion[2]}</p>
            <img class="detalle-img" src="${data.imagenes[2][0]}" alt="Bol Ramen">
            <p class="detalle-cap-p"><caption class="detalle-cap">Imagen de ${data.imagenes[2][1]}</caption></p>
            <p class="detalle-p">A continuación se puede ver un vídeo tutorial de la preparación del ${data.titulo}</p>
            <iframe class="detalle-vid" width="560" height="315" src="${data.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    `;
} else {
    document.getElementById("detalle-container").innerHTML = "<p>Receta no encontrada.</p>";
}
// console.log("Ruta de la imagen:", data.imagenDestacada);
// console.log(import.meta.url);
// console.log(new URL('../assets/images/detalle-tonkotsu-1.jpg', import.meta.url));

