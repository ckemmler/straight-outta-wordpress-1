import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main className='flex h-screen flex-col justify-center space-y-4 overflow-hidden bg-black text-2xl text-white'>
        <section className='absolute top-0 right-0 left-0'>
          <div className='flex w-screen items-center justify-between px-8 py-12'>
            <Image
              src='/images/logo.jpg'
              alt='Logo SOS Faim'
              width={90}
              height={84}
            ></Image>
            <span className='text-2xl font-bold uppercase'>Pourquoi agir?</span>
          </div>
        </section>
        <div className='flex flex-col space-y-8'>
          <section className='flex justify-center'>
            <video
              autoPlay={true}
              className='max-w-4xl'
              muted={true}
              loop={true}
              src='/videos/bali.mp4'
            ></video>
          </section>
          <section className='flex justify-center'>
            <span className='max-w-3xl text-center font-semibold'>
              Il avait plu le matin de bonne heure, mais Dieu merci il faisait
              presque beau depuis neuf heures, c&apos;est-à-dire qu&apos;il
              faisait ignoble mais qu&apos;on ne pataugeait pas.
            </span>
          </section>
        </div>
      </main>
    </Layout>
  );
}
