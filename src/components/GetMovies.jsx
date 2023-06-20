import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteMovie, fetchMovies } from "./fetchMovies.jsx";
import MovieCard from "./MovieCard.jsx";


const GetMovies = () => {
    const queryClient = useQueryClient();
    const { data:movies, isLoading } = useQuery({
        queryKey: ['movies'],
        queryFn: () => fetchMovies(),
      });

      const deleteMutation = useMutation(
        (id) => deleteMovie(id),
        {
          onSuccess: () => {
            queryClient.invalidateQueries(['movies'])
          },
          onError: (err) => {
            console.error(err)
          }
        }
      )

      if (isLoading || !movies) {
        return <div>Loading...</div>;
      }
    return (
      <>
      {movies.map((movie) => (
        <div  className='flex flex-row p-2 m-2 bg-slate-500' key={movie.id}>
          <h2 className='px-1'>{movie.title}</h2>
          <p className='px-1'>{movie.category}</p>
          <p className='px-1'>{movie.likes}</p><p className='px-1'>{movie.dislikes}</p>
          <button className='text-red-600' onClick={() => deleteMutation.mutate(movie.id)}>X</button>
        </div>
      ))}
        {/* <MovieCard movies={movies} /> */}
      </>
    );
  };

export default GetMovies;
