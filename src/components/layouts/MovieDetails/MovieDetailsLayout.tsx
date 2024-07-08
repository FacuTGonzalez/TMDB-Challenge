import React from 'react';

import { Movie } from '@/models/movies.model';
import { MovieHeader } from './components/MovieHeader';
import { MovieMedia } from './components/MovieMedia';
import { MovieInfo } from './components/MovieInfo';
import { CarrouselMovies } from '@/components/modules/CarrouselMovies/CarrouselMovies';
import { MovieTrailer } from './components/MovieTrailer';

type MovieDetailProps = {
  movie: Movie;
  similarMovies: Movie[];
  movieVideos: any[];
};

export const MovieDetailsLayout = ({
  movie,
  similarMovies,
  movieVideos,
}: MovieDetailProps) => {
  return (
    <div className='flex flex-col justify-center container mx-auto px-4'>
      <div className='bg-gray-900 text-white min-h-screen p-8'>
        <div className='container mx-auto'>
          <MovieHeader
            title={movie.title}
            rating={movie.vote_average.toFixed(1)}
            voteCount={movie.vote_count}
          />
          <div className='flex flex-col md:flex-row'>
            <MovieMedia poster={movie.poster_path} />
            <MovieInfo
              synopsis={movie.overview}
              creators={movie.production_companies!}
              genres={movie.genres!}
            />
          </div>
        </div>
      </div>
      <div className='bg-gray-900 text-white min-h-screen p-8 mt-4'>
        <MovieTrailer videos={movieVideos} />
      </div>
      <div className='max-w-7xl'>
        <CarrouselMovies title='Títulos similares' movies={similarMovies} />
      </div>
    </div>
  );
};
