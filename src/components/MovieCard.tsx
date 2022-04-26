import React from 'react';
import { Movie } from '../pages/HomePage';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard: React.FC<MovieCardProps> = ({movie}) => {
  return (
    <div className="flex flex-row space-x-4">
      <img
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt=""
        className="w-28 object-cover rounded-2xl"
      />
      <div className="space-y-1">
        <div className="text-lg font-bold">{movie.title}</div>
        <div className="space-y-0">
          <div className="text-base font-normal text-gray-600 truncate-2-lines">{movie.overview}</div>
        </div>
        <div className="text-base font-normal text-gray-300">
          {`평점 : ${movie.vote_average}`}
        </div>
      </div>
    </div>
  );
};
