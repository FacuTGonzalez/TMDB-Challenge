export interface Filter {
  key: string;
  value: string;
}

export interface Options {
    label: string;
    value: MovieGenres| string;
}

export enum SearchKeys{
  GENRES = 'genres',
  CAST = 'cast',
  QUERY = 'query',
  YEAR = 'year',
  COMPANIES = 'companies',
  KEYWORDS = 'keywords',
}

export enum MovieGenres {
  ACTION = 28,
  ADVENTURE = 12,
  ANIMATION = 16,
  COMEDY = 35,
  CRIME = 80,
  DOCUMENTARY = 99,
  DRAMA = 18,
  FAMILY = 10751,
  FANTASY = 14,
  HISTORY = 36,
  HORROR = 27,
  MUSIC = 10402,
  MYSTERY = 9648,
  ROMANCE = 10749,
  SCIENCE_FICTION = 878,
  TV_MOVIE = 10770,
  THRILLER = 53,
  WAR = 10752,
  WESTERN = 37,
}
