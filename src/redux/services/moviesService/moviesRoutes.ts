const BASE_URL = 'https://api.themoviedb.org';

export const moviesRoutes = {
  getTopRated: () => `${BASE_URL}/3/movie/top_rated`,
  getPopular: () => `${BASE_URL}/3/movie/popular`,
  getNowPlaying: () => `${BASE_URL}/3/movie/now_playing`,
  searchMovie: (key: string) => `${BASE_URL}/3/search/${key}`,
  searchMovieByGenre: (gender: string) => `${BASE_URL}/3/discover/movie?with_genres=${gender}`,
  getMovieById: (id: string) => `${BASE_URL}/3/movie/${id}`,
  getSimilarMovies: (id: string) => `${BASE_URL}/3/movie/${id}/similar`,
  getMovieVideos: (id: string) => `${BASE_URL}/3/movie/${id}/videos`,
};
