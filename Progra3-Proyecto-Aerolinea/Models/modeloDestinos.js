 // modeloDestinos.js

 //Lista de tarjetas 
const listaDestinos = [
    {
    id: 1,
    nombre: "París, Francia",
    descripcion: "Camina por los Campos Elíseos, admira la Torre Eiffel iluminada y vive la experiencia europea.",
    precio: "599",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/paris.jpg",
    },
    {
    id: 2,
    nombre: "Tokio, Japón",
    descripcion: "Fusión asombrosa de santuarios antiguos y rascacielos tecnológicos llenos de luces de neón.",
    precio: "899",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/tokio.jpg",
    },
    {
    id: 3,
    nombre: "Río de Janeiro, Brasil",
    descripcion: "Disfruta de las costas doradas de Copacabana, explora el Cristo Redentor y vive el ritmo tropical.",
    precio: "420",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/riodejaneiro.jpg",
    },
    {
    id: 4,
    nombre: "San José, Costa Rica",
    descripcion: "Descubre exuberantes bosques tropicales, volcanes imponentes y la calidez del estilo de vida Pura Vida.",
    precio: "150",
    categoria: "nacional",
    imagen: "Assets/img/fotosDestinos/costarica.jpg",
    },
    {
    id: 5,
    nombre: "Cusco, Perú",
    descripcion: "Explora la histórica capital del Imperio Inca y maravíllate con los misterios arqueológicos de Machu Picchu.",
    precio: "380",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/peru.jpg",
    },
    {
    id: 6,
    nombre: "Ilulissat, Groenlandia",
    descripcion: "Una aventura única entre icebergs gigantescos, auroras boreales espectaculares y paisajes árticos.",
    precio: "1,250",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/groenlandia.jpg",
    },
    {
    id: 7,
    nombre: "Londres, Reino Unido",
    descripcion: "Pasea junto al río Támesis, admira el emblemático Big Ben y descubre la rica historia de la capital británica.",
    precio: "650",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/londres.jpg",
    },
    {
    id: 8,
    nombre: "Nueva York, Estados Unidos",
    descripcion: "Explora el bullicioso entorno de Manhattan, admira el Empire State Building y vive la energía de la ciudad que nunca duerme.",
    precio: "750",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/nuevayork.jpg",
    },
    {
    id: 9,
    nombre: "Roma, Italia",
    descripcion: "Recorre las calles históricas de la ciudad eterna, admira el Coliseo y disfruta de la deliciosa cocina italiana.",
    precio: "500",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/roma.jpg",
    },
    {
    id: 10,
    nombre: "Cancún, México",
    descripcion: "Relájate en playas de arena blanca, explora arrecifes de coral y disfruta de la vibrante vida nocturna.",
    precio: "400",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/cancun.jpg",
    },
    {
    id: 11,
    nombre: "El Cairo, Egipto",
    descripcion: "Descubre las majestuosas pirámides de Giza, navega por el río Nilo y explora la rica historia del Antiguo Egipto.",
    precio: "600",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/elcairo.jpg",
    },
    {
    id: 12,
    nombre: "Sídney, Australia",
    descripcion: "Explora la ciudad de Sídney con su icónico puente, disfruta de sus hermosas playas y descubre la naturaleza exuberante.",
    precio: "900",
    categoria: "internacional",
    imagen: "Assets/img/fotosDestinos/sidney.jpg",
    },
    ];
// Función para obtener y filtrar destinos
export const obtenerDestinos = (categoria = 'todos') => {
    if (categoria === "todos") {
        return listaDestinos;
    } 
    return listaDestinos.filter(destino => destino.categoria === categoria);
};