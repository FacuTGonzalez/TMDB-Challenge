import { Movie } from '@/models/movies.model';
import React from 'react';
import { SearchItem } from './components/SearchItem';
import styles from './SearchList.module.scss';

type SearchListProps = {
  movies: Movie[];
};

export const SearchList = ({ movies }: SearchListProps) => {
  return (
    <div className={`${styles.container} space-y-4 bg-gray-800`} >
      {movies.map((movie) => (
        <SearchItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
