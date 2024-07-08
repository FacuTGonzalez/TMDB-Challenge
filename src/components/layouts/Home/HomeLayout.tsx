// src/components/HomeLayout.tsx
import React, { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Movie } from '@/models/movies.model';
import { CarrouselMovies } from '@/components/modules/CarrouselMovies/CarrouselMovies';

type HomeLayoutProps = {
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  nowPlayingMovies: Movie[];
};

export const HomeLayout = ({
  popularMovies,
  topRatedMovies,
  nowPlayingMovies,
}: HomeLayoutProps) => {
  return (
    <div className='flex flex-col justify-center container mx-auto px-4'>
      <div className='max-w-6xl'>
        <CarrouselMovies title='Más Populares' movies={popularMovies} />
      </div>
      <div className='max-w-6xl'>
        <CarrouselMovies title='Ahora en cines' movies={nowPlayingMovies} />
      </div>
      <div className='max-w-6xl'>
        <CarrouselMovies title='Los mas valorados' movies={topRatedMovies} />
      </div>
    </div>
  );
};
