import axios from 'axios';
import { moviesRoutes } from './moviesRoutes';
import api from '../apiConfig';
import { GetMoviesResponse, Movie, Video } from '@/models/movies.model';

export const moviesService = {
  getPopular: async (): Promise<GetMoviesResponse> => {
    return (await api.get(moviesRoutes.getPopular())).data;
  },
  getTopRated: async (): Promise<GetMoviesResponse> => {
    return (await api.get(moviesRoutes.getTopRated())).data;
  },
  getNowPlaying: async (): Promise<GetMoviesResponse> => {
    return (await api.get(moviesRoutes.getNowPlaying())).data;
  },
  getSearch: async (query: string, key: string): Promise<GetMoviesResponse> => {
    const params = {
      query,
    };
    return (await api.get(moviesRoutes.searchMovie(key), { params })).data;
  },
  getSearchByGenre: async (id: string): Promise<GetMoviesResponse> => {
    return (await api.get(moviesRoutes.searchMovieByGenre(id))).data;
  },
  getMovieById: async (id: string): Promise<Movie> => {
    return (await api.get(moviesRoutes.getMovieById(id))).data;
  },
  getSimilarMovies: async (id: string): Promise<GetMoviesResponse> => {
    return (await api.get(moviesRoutes.getSimilarMovies(id))).data;
  },
  getMovieVideos: async (
    id: string
  ): Promise<{ data: { id: number; results: Video[] } }> => {
    return api.get(moviesRoutes.getMovieVideos(id));
  },
};
