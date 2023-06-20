import React from 'react'
import { QueryClient, useMutation, useQueryClient } from 'react-query'

export default function MovieCard({movies}) {
    


  return (
    <div>
    {movies.map((movie) => (
        <div  className='flex flex-row p-2 m-2 bg-slate-500' key={movie.id}>
          <h2 className='px-1'>{movie.title}</h2>
          <p className='px-1'>{movie.category}</p>
          <p className='px-1'>{movie.likes}</p><p className='px-1'>{movie.dislikes}</p>
          <button className='text-red-600' onClick={() => deleteMovie.mutate(movie.id)}>X</button>
        </div>
      ))}
      </div>
  )
}
