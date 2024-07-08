import React from 'react';

type MovieHeaderProps = {
  title: string;
  rating: number | string;
  voteCount: number;
};

export const MovieHeader = ({ title, rating, voteCount }: MovieHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-400">Serie de TV • 2011–2019 • C • 1h</p>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <span className="text-yellow-400 text-2xl">★</span>
            <span className="text-2xl ml-2">{rating}/10</span>
          </div>
          <span className="text-gray-400">({voteCount})</span>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded ml-4">Calificar</button>
      </div>
    </div>
  );
};
