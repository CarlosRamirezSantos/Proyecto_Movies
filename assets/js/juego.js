/**
 * Vamos a crear dos montones de tarjetas, uno de películas y otro de recursos relacionados:
 */

const NMOVIES = 5;
const NELEMENTSPMOVIE = 3;

// Crea y mezcla el deck de películas
const getMoviesDeck = () => {
    let movieDeck = [];
    for(let i = 1; i <= NMOVIES; i++) {
        movieDeck.push("0" + i + "M");
    }
    movieDeck = _.shuffle(movieDeck);
    return movieDeck;
}

// Crea y mezcla el deck de elementos (recursos)
const getElementsDeck = () => {
    let elementDeck = [];
    for(let i = 1; i <= NMOVIES; i++) {
        for(let j = 1; j <= NELEMENTSPMOVIE; j++) {
            elementDeck.push("0" + i + "C" + j);
        }
    }
    elementDeck = _.shuffle(elementDeck);
    return elementDeck;
}

// Inicializamos los decks mezclados
let movieDeck = getMoviesDeck();
let elementDeck = getElementsDeck();

// Función para sacar una película del deck (el último)
const removeMovieDeck = (deck) => {
    if (deck.length === 0) return null;
    return deck.pop();
};

// Escuchar el evento click del botón "Mostrar película"
document.addEventListener('DOMContentLoaded', () => {
   
    const btnMostrarPelicula = document.getElementById('btnMostrarPelicula');
    const peliculaCaratula = document.getElementById('pelicula-caratula');

    btnMostrarPelicula.addEventListener('click', () => {
        const pelicula = removeMovieDeck(movieDeck);
        if (pelicula) {
            // Actualiza la imagen con la película seleccionada
            peliculaCaratula.innerHTML = `<img class="elemento" src="assets/movies/${pelicula}.jpg" alt="">`;
        } else {
            alert('No quedan más películas disponibles');
        }
    });
});

