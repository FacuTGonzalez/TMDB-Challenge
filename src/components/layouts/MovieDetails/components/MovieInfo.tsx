import { ProductCompanies } from '@/models/movies.model';
import React from 'react';
import Image from 'next/image';

type MovieInfoProps = {
  synopsis: string;
  creators: ProductCompanies[];
  genres: { id: string; name: string }[];
};

export const MovieInfo = ({
  synopsis,
  creators,
  genres,
}: MovieInfoProps) => {
  return (
    <div className='flex-grow md:ml-8'>
      <div className='mb-4'>
        <h2 className='text-2xl font-bold mb-2'>Sinopsis</h2>
        <p className='text-gray-400'>{synopsis}</p>
      </div>
      <h3 className='text-xl font-bold mb-2'>Géneros</h3>
      <div className='flex mb-4'>
        {genres && genres.map((g) => <p key={g.id} className='mr-3'>{g.name}</p>)}
      </div>
      <div className='mb-4'>
        <h3 className='text-xl font-bold mb-2'>Creación</h3>
        <div className='flex flex-wrap'>
          {creators &&
            creators.map((creator) => (
              creator.logo_path && (
                <div
                  key={creator.id}
                  className='flex flex-col items-center m-3'
                >
                  <div className='relative w-48 h-48'>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${creator.logo_path}`}
                      alt={creator.name}
                      layout='fill'
                      objectFit='contain'
                      className='rounded-lg'
                    />
                  </div>
                  <p className='text-gray-400 mt-2 text-center'>{creator.name}</p>
                </div>
              )
            ))}
        </div>
      </div>
    </div>
  );
};
