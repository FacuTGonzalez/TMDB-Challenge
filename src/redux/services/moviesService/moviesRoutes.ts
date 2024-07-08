const BASE_URL = 'https://api.themoviedb.org';

export const moviesRoutes = {
  getTopRated: () => `${BASE_URL}/3/movie/top_rated`,
  getPopular: () => `${BASE_URL}/3/movie/popular`,
  getNowPlaying: () => `${BASE_URL}/3/movie/now_playing`,
  searchMovie: (key: string) => `${BASE_URL}/3/search/${key}`,
  advanceSearchMovie: (filters: string) => `${BASE_URL}/3/discover/movie?${filters}`,
  getMovieById: (id: string) => `${BASE_URL}/3/movie/${id}`,
  getSimilarMovies: (id: string) => `${BASE_URL}/3/movie/${id}/similar`,
  getMovieVideos: (id: string) => `${BASE_URL}/3/movie/${id}/videos`,
  getPerson: () => `${BASE_URL}/3/search/person`,
  getCompany: () => `${BASE_URL}/3/search/company`,
  getKeyword: () => `${BASE_URL}/3/search/keyword`,
};
