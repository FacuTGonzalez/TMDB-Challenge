import { getSearchMovies } from '@/redux/features/moviesSlices';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useEffect, useState } from 'react';
import { SearchList } from '../SearchList/SearchList';
import styles from './Navbar.module.scss';
import { Movie } from '@/models/movies.model';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoSearch } from 'react-icons/io5';

export const Navbar = () => {
  const [search, setSearch] = useState<string>('');
  const [searched, setSearched] = useState<Movie[]>([]);
  const [debouncedSearch, setDebouncedSearch] = useState<string>(search);
  const router = useRouter();
  const searchedMovies = useAppSelector((store) => store.movies.searched);

  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    if (debouncedSearch) {
      dispatch(getSearchMovies({ query: debouncedSearch, key: 'movie' }));
    } else {
      onCloseList();
    }
  }, [debouncedSearch, dispatch]);

  useEffect(() => {
    setSearched(searchedMovies);
  }, [searchedMovies]);

  useEffect(() => {
    onCloseList();
  }, [router.query]);

  const onCloseList = () => {
    setSearched([]);
    setSearch('');
  };

  return (
    <nav className='bg-black text-white p-4 flex items-center justify-between'>
      <div className='flex items-center space-x-4'>
        <Link href={'/home'}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg'
            alt='IMDb Logo'
            className='h-8'
          />
        </Link>
        <Link href={'/advance-search'}>
          <button
            className=' flex items-center text-white focus:outline-none hover:bg-gray-800 text-white rounded-lg p-2'
          >
            <span>Búsqueda avanzada</span>
          </button>
        </Link>
        <div className={styles.inputSearch}>
          <input
            type='text'
            placeholder='Buscar por nombre'
            className='p-1 bg-gray-800 rounded focus:outline-none w-full'
            value={search}
            onChange={handleSearch}
          />
          {searched.length > 0 && search !== '' && (
            <SearchList movies={searched} />
          )}
        </div>
      </div>
    </nav>
  );
};
