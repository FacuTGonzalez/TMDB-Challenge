import { Movie } from '@/models/movies.model';
import { IoIosStar } from 'react-icons/io';
import React from 'react';
import Link from 'next/link';

type MovieCardProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className='card bg-gray-800 text-white rounded-lg h-auto'>
      <Link href={`/movies/details/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='w-full h-60 object-cover rounded-t-lg'
        />
        <div className='p-4'>
          <div className='h-16'>
            <h2 className='text-lg font-bold'>{movie.title}</h2>
          </div>
          <div className='flex items-center'>
            <IoIosStar color='#ecbe1c' className='mr-2' />
            <p className='text-sm m-0'>
              Rating: {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
