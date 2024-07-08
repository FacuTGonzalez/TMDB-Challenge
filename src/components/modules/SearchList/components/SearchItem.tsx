import { Movie } from '@/models/movies.model';
import Link from 'next/link';
import React from 'react';

type SearchItemProps = {
  movie: Movie;
  showOverview?: boolean;
};

export const SearchItem = ({
  movie,
  showOverview = false,
}: SearchItemProps) => {
  const { title, release_date, poster_path, overview } = movie;
  return (
    <div className='flex items-center p-4 bg-gray-800 rounded-lg border-gray-900 border-solid border-b'>
      <Link href={`/movies/details/${movie.id}`} className='flex'>
        <img
          src={`https://image.tmdb.org/t/p/w200${poster_path}`}
          alt={title}
          className='w-16 h-24 rounded-lg object-cover'
        />
        <div className='ml-4'>
          <p className='text-lg font-bold text-white'>{title}</p>
          <p className='text-gray-400'>
            {release_date ? release_date.substring(0, 4) : 'N/A'}
          </p>
        {showOverview && (
          <div>
            <p>{overview}</p>
          </div>
        )}
        </div>
      </Link>
    </div>
  );
};