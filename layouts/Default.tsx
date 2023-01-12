import BlueBox from 'components/BlueBox';
import BlueBoxSkeleton from 'components/BlueBoxSkeleton';
import Header from 'components/Header';
import MainPageSkeleton from 'components/MainPageSkeleton';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import SidebarSkeleton from 'components/SidebarSkeleton';
// liblary
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import Footer from 'components/Footer';

type DefaultPropType = {
  children: React.ReactNode;
};

const fetcher = async () => {
  const res = await axios.get('/posts');
  return res.data.slice(0, 5);
};

const Default = ({ children }: DefaultPropType) => {
  const { data, error } = useSWR('/posts', fetcher);

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <div className="bg-white max-w-5xl mx-auto">
      <Header />
      <Navbar />

      <main className="flex min-h-screen">
        {loading ? (
          <MainPageSkeleton />
        ) : (
          <section className="flex-1 border-r border-gray-300 p-4">
            {children}
          </section>
        )}

        {/* sidebar */}
        {error ? (
          <nav className="w-[350px] min-w-[350px] max-w-[350px] p-4">
            <p className="text-red-500">An error occurred</p>
          </nav>
        ) : !data ? (
          <SidebarSkeleton />
        ) : (
          <Sidebar posts={data} />
        )}
      </main>

      {/* bluebox  */}
      {error ? (
        <nav className="bg-blue-500 text-white p-8">
          <p className="text-white">An error occurred</p>
        </nav>
      ) : !data ? (
        <BlueBoxSkeleton />
      ) : (
        <BlueBox posts={data} />
      )}

      <Footer />
    </div>
  );
};

export default Default;
