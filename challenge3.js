//initialize json database
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        const films = data.films;
        const items = document.querySelector('#films');

        //fucntioon to calculate available tickets
        function buyTicket(){
        const availableTickets = films.capacity - films.tickets_sold;
            if (availableTickets > 0) {
                --availableTickets;
        }
    }
        

        //creating a list for movie titles
        for (let i = 0; i < films.length; i++) {
            const movie = films[i];
            const listItem = document.createElement('li');
            listItem.textContent = movie.title;
            items.appendChild(listItem);

            // This displays a movies details when clicked
            listItem.addEventListener('click', () => {
                movieDetails(movie);
            });
        }
        

        // first movie on the list
        movieDetails(films[0]);
    })

// function to display the movie details
function movieDetails(movie) {



    const poster = document.querySelector('#poster');
    const description = document.querySelector('description');
    const title = document.querySelector('#title');
    const runtime = document.querySelector('#runtime');
    const showtime = document.querySelector('#showtime');
    const availableTickets = document.querySelector('#available-tickets');
    
    

    // update the movie details 
    poster.src = movie.poster;
    title.textContent = movie.title;
    runtime.textContent = `Runtime: ${movie.runtime} Min`;
    showtime.textContent = `Showtime: ${movie.showtime}`;
    availableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;
    description.textContent = movie.description;

    console.log(movie);
}
