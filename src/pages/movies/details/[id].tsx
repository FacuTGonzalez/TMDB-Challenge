import { MovieDetailsLayout } from '@/components/layouts/MovieDetails/MovieDetailsLayout';
import { moviesService } from '@/redux/services/moviesService/moviesService';
import { InferGetServerSidePropsType, NextPageContext } from 'next/types';
import React from 'react';

const MovieDetails = ({
  movie,
  similarMovies,
  movieVideos,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <MovieDetailsLayout
        movie={movie}
        similarMovies={similarMovies}
        movieVideos={movieVideos}
      />
    </div>
  );
};

export default MovieDetails;

export const getServerSideProps = async (context: NextPageContext) => {
  const { id } = context.query;
  const movieRes = await moviesService.getMovieById(id as string);
  const similarMovies = (await moviesService.getSimilarMovies(id as string))
    .results;
  const movieVideos = (await moviesService.getMovieVideos(id as string)).data.results;
  return {
    props: {
      movie: movieRes,
      similarMovies: similarMovies,
      movieVideos: movieVideos,
    },
  };
};
