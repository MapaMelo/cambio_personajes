// Listas de imágenes
const listaCabezas = [
  
"../cambio_personajes/assets/img/cabeza 4.jpg",
  "../cambio_personajes/assets/img/cabeza 5.jpg",
  "../cambio_personajes/assets/img/cabeza 6.jpg",
  "../cambio_personajes/assets/img/cabeza 7.jpg",
  "../cambio_personajes/assets/img/cabeza 9.jpg",
  "../cambio_personajes/assets/img/cabeza 10.jpg",
  "../cambio_personajes/assets/img/cabeza 11.jpg",
];
const listaTroncos = [

  "../cambio_personajes/assets/img/cuerpo4.jpg",
  "../cambio_personajes/assets/img/cuerpo5.jpg",
  "../cambio_personajes/assets/img/cuerpo6.jpg",
  "../cambio_personajes/assets/img/cuerpo7.jpg",
  "../cambio_personajes/assets/img/cuerpo8.jpg",
  "../cambio_personajes/assets/img/cuerpo9.jpg",
  "../cambio_personajes/assets/img/cuerpo11.jpg",
];
const listaPatas = [

  "../cambio_personajes/assets/img/patas4.jpg",
  "../cambio_personajes/assets/img/patas5.jpg",
  "../cambio_personajes/assets/img/patas6.jpg",
  "../cambio_personajes/assets/img/patas7.jpg",
  "../cambio_personajes/assets/img/patas8.jpg",
  "../cambio_personajes/assets/img/patas9.jpg",
  "../cambio_personajes/assets/img/patas11.jpg",
];

const listaMascotas = [

  "../cambio_personajes/assets/img/mascota1.jpg",
  "../cambio_personajes/assets/img/mascota2.jpg",
  "../cambio_personajes/assets/img/mascota3.jpg",
  "../cambio_personajes/assets/img/mascota4.jpg",
  "../cambio_personajes/assets/img/mascota5.jpg",
  "../cambio_personajes/assets/img/mascota6.jpg",
  "../cambio_personajes/assets/img/mascota7.jpg",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const cabeza = document.getElementById("cabeza");
const tronco = document.getElementById("tronco");
const patas = document.getElementById("patas");
const boton = document.getElementById("boton");
const mascota = document.getElementById("mascota"); 

// Inicializamos las variables de los números aleatorios
let cabezaAleatorio = 0;
let troncoAleatorio = 0;
let patasAleatorio = 0;
let mascotaAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  cabezaAleatorio = numeroAleatorio(0, listaCabezas.length);
  troncoAleatorio = numeroAleatorio(0, listaTroncos.length);
  patasAleatorio = numeroAleatorio(0, listaPatas.length);
  mascotaAleatorio = numeroAleatorio(0, listaMascotas.length);

  // Asignamos la nueva fuente (source) a cada imagen
  cabeza.src = `${listaCabezas[cabezaAleatorio]}`; //ruta + listaCabezas[cabezaAleatorio];
  tronco.src = `${listaTroncos[troncoAleatorio]}`;
  patas.src = `${listaPatas[patasAleatorio]}`;
  mascota.src = `${listaMascotas[mascotaAleatorio]}`;

  console.log(cabezaAleatorio, troncoAleatorio, patasAleatorio, mascotaAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
