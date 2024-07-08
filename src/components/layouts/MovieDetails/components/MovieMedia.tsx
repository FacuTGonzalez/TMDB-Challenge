import { Video } from '@/models/movies.model';
import React from 'react';

type MovieMediaProps = {
  poster: string;
};

export const MovieMedia = ({ poster }: MovieMediaProps) => {
  return (
    <div className='flex-shrink-0 w-full md:w-1/3 mb-8 md:mb-0'>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster}`}
        alt='Poster'
        className='rounded-lg mb-4 w-full'
      />
    </div>
  );
};
