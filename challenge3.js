//initialize json database
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const films = data.films;
        const items = document.querySelector('#films');

        //creating a list for movie titles
        for (let i = 0; i < films.length; i++) {
            const movie = films[i];
            const listItem = document.createElement('li');
            listItem.textContent = movie.title;
            items.appendChild(listItem);

            // add an event listener to display the movie details when the movie title is clicked
            listItem.addEventListener('click', () => {
                movieDetails(movie);
            });
        }

        // display the details of the first movie by default
        movieDetails(films[0]);
    })

// function to display the movie details
function movieDetails(movie) {
    const poster = document.querySelector('#poster');
    const title = document.querySelector('#title');
    const runtime = document.querySelector('#runtime');
    const showtime = document.querySelector('#showtime');
    const availableTickets = document.querySelector('#available-tickets');
    const description = document.querySelector('#movie-details p:last-of-type');

    // update the movie details in the DOM with the data from the movie object
    poster.src = movie.poster;
    title.textContent = movie.title;
    runtime.textContent = `Runtime: ${movie.runtime} Min`;
    showtime.textContent = `Showtime: ${movie.showtime}`;
    availableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
    description.textContent = movie.description;

    console.log(movie);
}