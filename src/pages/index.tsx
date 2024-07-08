'use client';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push('/home');
  }, []);
  return <></>;
}
