import axios from 'axios';
import { moviesRoutes } from './moviesRoutes';
import api from '../apiConfig';
import { GetMoviesResponse, Movie, Video } from '@/models/movies.model';
import { Filter } from '@/models/search.model';
import { filtersToString } from '@/utils/parseFilters';

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
  getAdvanceSearch: async (filters: Filter[]): Promise<GetMoviesResponse> => {
    const filterParsed = filtersToString(filters);
    return (await api.get(moviesRoutes.advanceSearchMovie(filterParsed))).data;
  },
  getPerson: async (person: string): Promise<GetMoviesResponse> => {
    const params = {
      query: person,
    };
    return (await api.get(moviesRoutes.getPerson(), { params })).data;
  },
  getCompany: async (company: string): Promise<GetMoviesResponse> => {
    const params = {
      query: company,
    };
    return (await api.get(moviesRoutes.getCompany(), { params })).data;
  },
  getKeyword: async (keyword: string): Promise<GetMoviesResponse> => {
    const params = {
      query: keyword,
    };
    return (await api.get(moviesRoutes.getKeyword(), { params })).data;
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
