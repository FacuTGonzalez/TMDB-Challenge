import React, { useState } from 'react';
import { HeaderAdvanceSearch } from './components/HeaderAdvanceSearch';
import { FiltersCard } from './components/FiltersCard';
import { Filter } from '@/models/search.model';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getSearchAdvanceMovies } from '@/redux/features/moviesSlices';
import { SearchItem } from '@/components/modules/SearchList/components/SearchItem';

export const AdvanceSearchLayout = () => {
  const [filter, setFilter] = useState<Filter>({ key: '', value: '' });
  const dispatch = useAppDispatch();
  const searchedMovies = useAppSelector((state) => state.movies.advanceSearch);

  const onChangeFilter = ({ key, value }: Filter) => {
    setFilter({ key, value });
  };

  const onSearch = () => {
    if (filter.key && filter.value) {
      dispatch(getSearchAdvanceMovies({ query: filter.value, key: filter.key }));
    }
  };

  return (
    <div>
      <HeaderAdvanceSearch />
      <div className='flex w-full'>
        <div className='w-2/5'>
          <FiltersCard onSearch={onSearch} onChangeFilter={onChangeFilter} />
        </div>
        <div className='w-3/5 bg-gray-800 mt-3 ml-3 rounded-lg'>
          {searchedMovies.length > 0 && searchedMovies.map((movie) => (
            <SearchItem key={movie.id} movie={movie} showOverview />
          ))}
        </div>
      </div>
    </div>
  );
};
