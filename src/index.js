const init = () => {
    const movieList = document.querySelector('ul');
    const searchForm = document.querySelector('form');
    const movieDetails = document.querySelector('#movieDetails');
  
   
    movieList.addEventListener('click', (event) => {

      if (event.target.nodeName === 'LI') {
      
        const title = event.target.querySelector('h3').textContent;
        const id = event.target.querySelector('div').textContent.split(':')[1].trim();
  
    
        movieDetails.querySelector('h4').textContent = title;
        movieDetails.querySelector('p').textContent = getMovieSummary(id);
      }
    });

    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchInput = event.target.querySelector('input[type="text"]');
      const searchId = parseInt(searchInput.value);

      searchInput.value = '';
  

      const movieListItem = findMovieById(searchId);
      if (movieListItem) {

        movieListItem.click();
      } else {

        movieDetails.querySelector('h4').textContent = 'Error';
        movieDetails.querySelector('p').textContent = 'Movie not found';
      }
    });
  };
  

  const getMovieSummary = (id) => {

    switch (id) {
      case '1':
        return 'A group of household appliances embark on a journey to find their owner.';
      case '2':
        return 'A classic tale of true love and high adventure.';
      case '3':
        return 'A young girl must navigate a magical world to save her parents from a curse.';
      default:
        return 'Movie summary not available';
    }
  };

  const findMovieById = (id) => {
    const movieList = document.querySelectorAll('ul li');
    for (let i = 0; i < movieList.length; i++) {
      const movieId = movieList[i].querySelector('div').textContent.split(':')[1].trim();
      if (parseInt(movieId) === id) {
        return movieList[i];
      }
    }
    return null;
  };
  
  document.addEventListener('DOMContentLoaded', init);
  