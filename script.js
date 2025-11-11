// Listas de imágenes
const listaCabezas = [
  "../cambio_personajes/assets/img/cabeza1.jpg",
  "../cambio_personajes/assets/img/cabeza2.jpg",
  "../cambio_personajes/assets/img/cabeza3.png",
  "../cambio_personajes/assets/img/cabeza 4.png",
  "../cambio_personajes/assets/img/cabeza 5.png",
  "../cambio_personajes/assets/img/cabeza 6.png",
  "../cambio_personajes/assets/img/cabeza 7.png",
  "../cambio_personajes/assets/img/cabeza 8.png",
  "../cambio_personajes/assets/img/cabeza 9.png",
  "../cambio_personajes/assets/img/cabeza 10.png",
  "../cambio_personajes/assets/img/cabeza 11.png",
];
const listaTroncos = [
 "../cambio_personajes/assets/img/tronco1.jpg",
  "../cambio_personajes/assets/img/tronco2.jpg",
  "../cambio_personajes/assets/img/tronco3.jpg",
  "../cambio_personajes/assets/img/cuerpo4.jpg",
  "../cambio_personajes/assets/img/cuerpo5.jpg",
  "../cambio_personajes/assets/img/cuerpo6.jpg",
  "../cambio_personajes/assets/img/cuerpo7.jpg",
  "../cambio_personajes/assets/img/cuerpo8.jpg",
  "../cambio_personajes/assets/img/cuerpo9.jpg",
  "../cambio_personajes/assets/img/cuerpo10.jpg",
  "../cambio_personajes/assets/img/cuerpo11.jpg",
];
const listaPatas = [
  "../cambio_personajes/assets/img/patas1.jpg",
  "../cambio_personajes/assets/img/patas2.jpg",
  "../cambio_personajes/assets/img/patas3.png",
  "../cambio_personajes/assets/img/patas4.png",
  "../cambio_personajes/assets/img/patas5.png",
  "../cambio_personajes/assets/img/patas6.png",
  "../cambio_personajes/assets/img/patas7.png",
  "../cambio_personajes/assets/img/patas8.png",
  "../cambio_personajes/assets/img/patas9.png",
  "../cambio_personajes/assets/img/patas10.png",
  "../cambio_personajes/assets/img/patas11png",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
