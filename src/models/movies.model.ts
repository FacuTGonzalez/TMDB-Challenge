export interface GetMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres?: {id: string, name: string}[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_companies?: ProductCompanies[];
}

export interface MoviesState {
  searched: Movie[];
  advanceSearch: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export interface ProductCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Video {
  iso_639_1: string,
  iso_3166_1: string,
  name: string,
  key: string,
  site: string,
  size: number,
  type: string,
  official: boolean,
  published_at: string,
  id: string
}
