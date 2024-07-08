import { Movie } from '@/models/movies.model';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import React from 'react';
import { MovieCard } from '../MovieCard/MovieCard';

type CarrouselMoviesProps = {
  movies: Movie[];
  title: string;
  slidesPerView?: number;
};

export const CarrouselMovies = ({
  movies,
  title,
  slidesPerView = 5,
}: CarrouselMoviesProps) => {
  return (
    <div className='container mx-auto px-4'>
      <p className='text-2xl font-bold my-4'>{title}</p>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation]}
        className='p-3'
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: slidesPerView,
          },
        }}
      >
        {movies.length > 0 &&
          movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
