import React from 'react';

// ** Next Import
import Image from 'next/image';

export default function MainHero() {
  return (
    <section className="container flex flex-col-reverse py-16 lg:flex-row">
      <div className="basis-full lg:basis-6/12">
        <h1 className="text-[2.50rem] leading-tight font-bold">
          Forget Busy Work, <br className="hidden lg:inline-block" /> Start Next Vacation
        </h1>
        <p className="my-8 font-thin text-gray-400 font-sm lg:w-96">
          We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
        </p>
        <button className="px-10 py-3 text-white delay-75 rounded-md shadow-xl bg-primary hover:bg-blue-500">
          Show Me Now
        </button>
        <ul className="flex justify-between lg:w-11/12 mt-20">
          <li>
            <Image src="/icons/ic_traveler.svg" alt="ic_traveler" width={32} height={32} />
            <p className="mt-2 font-bold">
              80,409 <span className="text-base font-light text-gray-400">travelers</span>
            </p>
          </li>
          <li>
            <Image src="/icons/ic_treasure.svg" alt="ic_treasure" width={32} height={32} />
            <p className="mt-2 font-bold">
              862 <span className="text-base font-light text-gray-400">treasures</span>
            </p>
          </li>
          <li>
            <Image src="/icons/ic_cities.svg" alt="ic_cities" width={32} height={32} />
            <p className="mt-2 font-bold">
              1,492 <span className="text-base font-light text-gray-400">cities</span>
            </p>
          </li>
        </ul>
      </div>
      <div className="relative flex justify-center flex-shrink-0 px-5 pt-5 pb-10 basis-full lg:basis-6/12">
        <div className="-mt-5 -ms-5 lg:block max-w-full lg:w-[500px] lg:h-[370px]">
          <img src="/images/img-hero.png" alt="Gambar Utama" className="rounded-tl-[100px] rounded-2xl" />
        </div>
        <div className="hidden lg:block absolute w-[480px] h-[410px] border border-gray-400 top-0 right-0 -z-10 mt-5 me-6 rounded-tl-[100px] rounded-2xl"></div>
      </div>
    </section>
  );
}
