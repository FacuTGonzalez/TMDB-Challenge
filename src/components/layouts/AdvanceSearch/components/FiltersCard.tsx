import { Chip } from '@/components/elements/Chip';
import { Input } from '@/components/elements/Input';
import { Select } from '@/components/elements/Select';
import {
  Filter,
  MovieGenres,
  Options,
  SearchKeys,
} from '@/models/search.model';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

type FiltersCardProps = {
  onChangeFilter({ key, value }: Filter): void;
  onSearch(): void;
};

export const FiltersCard = ({ onChangeFilter, onSearch }: FiltersCardProps) => {
  const movieGenresOptions: Options[] = [
    { value: '', label: 'Todos' },
    { value: MovieGenres.ACTION, label: 'Action' },
    { value: MovieGenres.ADVENTURE, label: 'Adventure' },
    { value: MovieGenres.ANIMATION, label: 'Animation' },
    { value: MovieGenres.COMEDY, label: 'Comedy' },
    { value: MovieGenres.CRIME, label: 'Crime' },
    { value: MovieGenres.DOCUMENTARY, label: 'Documentary' },
    { value: MovieGenres.DRAMA, label: 'Drama' },
    { value: MovieGenres.FAMILY, label: 'Family' },
    { value: MovieGenres.FANTASY, label: 'Fantasy' },
    { value: MovieGenres.HISTORY, label: 'History' },
    { value: MovieGenres.HORROR, label: 'Horror' },
    { value: MovieGenres.MUSIC, label: 'Music' },
    { value: MovieGenres.MYSTERY, label: 'Mystery' },
    { value: MovieGenres.ROMANCE, label: 'Romance' },
    { value: MovieGenres.SCIENCE_FICTION, label: 'Science Fiction' },
    { value: MovieGenres.TV_MOVIE, label: 'TV Movie' },
    { value: MovieGenres.THRILLER, label: 'Thriller' },
    { value: MovieGenres.WAR, label: 'War' },
    { value: MovieGenres.WESTERN, label: 'Western' },
  ];

  return (
    <div className='p-4 border rounded-lg shadow-sm'>
      <h2 className='text-xl font-bold mb-4'>Filtros de búsqueda</h2>

      <div className='mb-4'>
        <label className='block font-medium mb-2'>Búsqueda por actor</label>
        <div className='flex justify-between w-full'>
          <Input
            placeholder='Por ejemplo, Will Smith'
            onChange={(e) =>
              onChangeFilter({ key: SearchKeys.CAST, value: e.target.value })
            }
          />
        </div>
      </div>
      <div className='mb-4'>
        <label className='block font-medium mb-2'>
          Búsqueda por productora
        </label>
        <div className='flex justify-between w-full'>
          <Input
            placeholder='Por ejemplo, Disney'
            onChange={(e) =>
              onChangeFilter({
                key: SearchKeys.COMPANIES,
                value: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className='my-4'>
        <label className='block font-medium mb-2'>
          Búsqueda por palabra clave
        </label>
        <div className='flex justify-between w-full'>
          <Input
            placeholder='Por ejemplo, space'
            onChange={(e) =>
              onChangeFilter({
                key: SearchKeys.KEYWORDS,
                value: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div>
        <label className='block font-medium mb-2'>Género</label>
        <div className='flex justify-between w-full'>
          <Select
            onSelect={(e) =>
              onChangeFilter({ key: SearchKeys.GENRES, value: e.target.value })
            }
            options={movieGenresOptions}
          />
        </div>
      </div>
      <div className='my-3 flex justify-center'>
        <button
          onClick={onSearch}
          className='flex items-center rounded-lg p-2 bg-blue-800 border-gray-800 border-gray-800'
        >
          Buscar
          <IoSearch className='ml-3 mt-1' />
        </button>
      </div>
    </div>
  );
};
