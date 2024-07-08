import React, { useState } from 'react';
import { HeaderAdvanceSearch } from './components/HeaderAdvanceSearch';
import { FiltersCard } from './components/FiltersCard';
import { Filter } from '@/models/search.model';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSearchAdvanceMovies } from '@/redux/features/moviesSlices';
import { SearchItem } from '@/components/modules/SearchList/components/SearchItem';
import styles from './AdvanceSearchLayout.module.scss'

export const AdvanceSearchLayout = () => {
  const [filter, setFilter] = useState<Filter[]>([]);
  const dispatch = useAppDispatch();
  const searchedMovies = useAppSelector((state) => state.movies.advanceSearch);

  const onChangeFilter = ({ key, value }: Filter) => {
    setFilter((state) => {
      const findState = state.find((s) => s.key === key);
      if (findState) {
        return state.map((s) => {
          if (s.key === key) s.value = value;
          return s;
        });
      } else {
        return [...state, { key, value }];
      }
    });
  };

  const onSearch = () => {
    if (filter.length > 0) {
      dispatch(getSearchAdvanceMovies(filter));
    }
  };

  return (
    <div className="p-4">
      <HeaderAdvanceSearch />
      <div className={`${styles.containerSearch} flex flex-col md:flex-row w-full`}>
        <div className="w-full md:w-2/5">
          <FiltersCard onSearch={onSearch} onChangeFilter={onChangeFilter} />
        </div>
        <div className="w-full md:w-3/5 bg-gray-800 mt-3 md:mt-0 md:ml-3 rounded-lg">
          {searchedMovies.length > 0 &&
            searchedMovies.map((movie) => (
              <SearchItem key={movie.id} movie={movie} showOverview />
            ))}
        </div>
      </div>
    </div>
  );
};
