document.addEventListener('DOMContentLoaded', function () {
    // Obtener todas las cards
    var cards = document.querySelectorAll('.cards');

    // Obtener el contenedor de la película principal
    var peliculaPrincipal = document.querySelector('.pelicula-principal');

    // Agregar un evento de clic a cada card
    cards.forEach(function (card, index) {
        card.addEventListener('click', function () {
           
            var peliculaInfo = obtenerInformacionPelicula(index + 1); 

            peliculaPrincipal.querySelector('.titulo').innerText = peliculaInfo.titulo;

            peliculaPrincipal.style.backgroundImage = 'url(' + peliculaInfo.imagenSrc + ')';

            peliculaPrincipal.querySelector('.descripcion').innerText = peliculaInfo.descripcion;
        });
    });

    
    function obtenerInformacionPelicula(id) {

        var peliculas = [
            {
                titulo: 'The Trolls 3',
                imagenSrc: './img/8.jpg',
                descripcion: 'Descripción de la Película 1',
                fechaLanzamiento: '01/01/2023',
                reviews: 'Buenas críticas'
                // Agrega más propiedades según sea necesario
            },
            {
                titulo: 'Rapido y furioso 9',
                imagenSrc: './img/9.jpg',
                descripcion: 'Descripción de la Película 2',
                fecha: '02/01/2023',
                reviews: 'Críticas mixtas'
                
            },
            {
                titulo: 'Top Gun',
                imagenSrc: './img/4.png',
                descripcion: 'Descripción de la Película 2',
                fecha: '02/01/2023',
                reviews: 'Críticas mixtas'
                
            },
            {
                titulo: 'Tron Lefacy ',
                imagenSrc: './img/5.png',
                descripcion: 'Descripción de la Película 2',
                fecha: '02/01/2023',
                reviews: 'Críticas mixtas'
                
            },
            {
                titulo: 'Batmal en caballero de la noche',
                imagenSrc: './img/6.png',
                descripcion: 'Descripción de la Película 2',
                fecha: '02/02/2023',
                reviews: 'Críticas mixtas'
                
            },
            {
                titulo: 'Toy Story 4',
                imagenSrc: './img/10.jpg',
                descripcion: 'Descripción de la Película 2',
                fecha: '02/01/2023',
                reviews: 'Críticas mixtas'
               
            },
            // Agrega más objetos para más películas
        ];

        return peliculas[id - 1]; // Restamos 1 ya que los índices del arreglo comienzan desde 0
    }
});