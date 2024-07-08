import { Options } from '@/models/search.model';
import React from 'react';

type SelectProps = {
  options: Options[];
  onSelect(e: React.ChangeEvent<HTMLSelectElement>): void;
};

export const Select = ({ options, onSelect }: SelectProps) => {
  return (
    <div className='w-full'>
      <select onChange={onSelect} className='w-full bg-gray-800 rounded-lg p-3'>
        {options &&
          options.map((option) => (
            <option
              key={option.value}
              className='bg-gray-800'
              value={option.value}
            >
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
};
