import React from 'react';
import HomePage from '@/pages/home';
import './globals.css';
import Head from 'next/head';

const Page = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Page;
