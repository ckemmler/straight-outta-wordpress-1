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

      <main className='bg-black text-2xl text-white'>
        <section className='absolute top-0 right-0 left-0'>
          <div className='flex w-screen items-center justify-between px-8 py-12'>
            <Image
              src='/images/Logo_SOS-faim.png'
              alt='Logo SOS Faim'
              width={90}
              height={84}
            ></Image>
            <span className='text-2xl font-bold uppercase'>Pourquoi agir?</span>
          </div>
        </section>
        <section>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            src='https://stop-pesticides.be/wp-content/uploads/2022/09/SosFaim_Pesticides_SIteWeb.mp4'
            style={{}}
          ></video>
        </section>
        <section className='flex justify-center'>
          <span className='max-w-3xl text-center font-semibold'>
            Chaque année, la Belgique exporte des milliers de pesticides vers
            les pays du Sud global, alors qu&apos;elle les interdit à
            l&apos;usage sur son territoire.
          </span>
        </section>
      </main>
    </Layout>
  );
}
