import { Navbar } from '@/components/modules/Navbar/Navbar';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className='flex min-h-screen flex-col items-center justify-between p-10'>
        {children}
      </div>
    </div>
  );
};
