import { Chip } from '@/components/elements/Chip';
import { Input } from '@/components/elements/Input';
import { Select } from '@/components/elements/Select';
import { Filter, MovieGenres, Options } from '@/models/search.model';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

type FiltersCardProps = {
  onChangeFilter({ key, value }: Filter): void;
  onSearch(): void;
};

export const FiltersCard = ({ onChangeFilter, onSearch }: FiltersCardProps) => {
  const movieGenresOptions: Options[] = [
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
    <div className='p-4 border rounded-lg shadow-sm mt-3'>
      <h2 className='text-xl font-bold mb-4'>Filtros de búsqueda</h2>

      <div className='mb-4'>
        <label className='block font-medium mb-2'>Nombre del título</label>
        <div className='flex justify-between w-full'>
          <Input
            placeholder='Por ejemplo, inside out'
            onChange={(e) =>
              onChangeFilter({ key: 'movie', value: e.target.value })
            }
          />
          <button
            onClick={onSearch}
            className='rounded-lg p-2 border-gray-800 border-gray-800'
          >
            <IoSearch />
          </button>
        </div>
      </div>

      <div className='mb-4'>
        <label className='block font-medium mb-2'>Búsqueda por actor</label>
        <div className='flex justify-between w-full'>
          <Input
            placeholder='Por ejemplo, Will Smith'
            onChange={(e) =>
              onChangeFilter({ key: 'person', value: e.target.value })
            }
          />
          <button
            onClick={onSearch}
            className='rounded-lg p-2 border-gray-800 border-gray-800'
          >
            <IoSearch />
          </button>
        </div>
      </div>

      <div>
        <label className='block font-medium mb-2'>Género</label>
        <div className='flex justify-between w-full'>
          <Select
            onSelect={(e) =>
              onChangeFilter({ key: 'genre', value: e.target.value })
            }
            options={movieGenresOptions}
          />
          <button
            onClick={onSearch}
            className='rounded-lg p-2 border-gray-800 border-gray-800'
          >
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
