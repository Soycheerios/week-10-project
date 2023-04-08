class MovieList {
    constructor() {       
      this.movieList = [];   
      this.movieListElement = document.getElementById("movie-list"); 
      this.newMovieButton = document.getElementById("new-movie");
      this.newMovieTitle = document.getElementById("new-movie-title");
      this.newMovieDirector = document.getElementById("new-movie-director");
      this.newMovieButton.addEventListener("click", () => this.addMovieToList());
    }
  
    addMovieToList() {
      const movieTitle = this.newMovieTitle.value;
      const movieDirector = this.newMovieDirector.value;
  
      if (movieTitle === "" || movieDirector === "") {
        alert("Please enter a title and/or director for the movie.");
        return;
      }
  
      const newMovie = {
        title: movieTitle,
        director: movieDirector
      };
  
      this.movieList.push(newMovie);
      this.renderMovieList();
      this.newMovieTitle.value = "";
      this.newMovieDirector.value = "";
    }
  
    renderMovieList() {
        this.movieListElement.innerHTML = "";
    
        for (let i = 0; i < this.movieList.length; i++) {
          const movie = this.movieList[i];
          const movieElement = document.createElement("div");
          movieElement.className = "mb-3";
          movieElement.className = "card";
    
          const movieBody = document.createElement("div");
          movieBody.className = "card-body";
    
          const movieTitle = document.createElement("h5");
          movieTitle.className = "card-title";
          movieTitle.textContent = movie.title;
    
          const movieDirector = document.createElement("p");
          movieDirector.classList.add("card-text");
          movieDirector.textContent = `Directed by: ${movie.director}`;
    
          const deleteButton = document.createElement("button");
          deleteButton.className = "btn btn-primary";
          deleteButton.innerHTML = "Delete";
          deleteButton.addEventListener("click", () => {
            this.movieList.splice(i, 1);
            this.renderMovieList();
          });
  
        movieBody.appendChild(movieTitle);
        movieBody.appendChild(movieDirector);
        movieBody.appendChild(deleteButton);
        movieElement.appendChild(movieBody);
        this.movieListElement.appendChild(movieElement);
      }
    }
  }
  
  const movieList = new MovieList();