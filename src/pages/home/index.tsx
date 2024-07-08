// pages/index.tsx
import React from 'react';
import { InferGetServerSidePropsType, NextPageContext } from 'next/types';
import { moviesService } from '@/redux/services/moviesService/moviesService';
import { HomeLayout } from '@/components/layouts/Home/HomeLayout';

const Home = ({
  popularMovies,
  topRatedMovies,
  nowPlayingMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <HomeLayout
        popularMovies={popularMovies?.results!}
        topRatedMovies={topRatedMovies?.results!}
        nowPlayingMovies={nowPlayingMovies?.results!}
      />
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const popularRes = await moviesService.getPopular();
    const topRatedRes = await moviesService.getTopRated();
    const nowPlayingRes = await moviesService.getNowPlaying();

    return {
      props: {
        popularMovies: popularRes,
        topRatedMovies: topRatedRes,
        nowPlayingMovies: nowPlayingRes,
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};

export default Home;
