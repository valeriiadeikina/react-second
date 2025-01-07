import React from 'react';
import { dataMovies } from '../../data';
import Stars from './Stars';

export default function MovieRating(): React.JSX.Element {
  return (
    <div>
      {dataMovies.map((movie) => (
        <div key={movie.movieId} className='movie_card'>
          <div>{movie.movieName}</div>
          <Stars count={movie.stars} />
          <button>{movie.price}$ BUY NOW</button>
        </div>
      ))}
    </div>
  );
}
