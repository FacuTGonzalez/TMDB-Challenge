import { Video } from '@/models/movies.model';
import React from 'react';

type MovieTrailerProps = {
  videos: Video[];
};

export const MovieTrailer = ({ videos }: MovieTrailerProps) => {
  const trailerEn = videos.find((v) => v.type === 'Trailer');

  return (
    <div>
      <div className='video-player mb-4'>
        <h2 className='text-xl font-bold mb-2'>Trailer</h2>
        <iframe
          width='100%'
          height='700'
          src={`https://www.youtube.com/embed/${trailerEn?.key}`}
          title={trailerEn?.name}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
