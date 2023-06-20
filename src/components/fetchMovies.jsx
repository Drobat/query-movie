import { movies$ } from "../movies";

export const fetchMovies = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(movies$);
    }, 100)
  );

  export const deleteMovie = async (id) =>
  {
    const movie = await movies$;
    console.log(movie)
    const movieUpdate = movie.filter((movie) => movie.id !== id);
    console.log(movieUpdate)
    return (movieUpdate)
  }