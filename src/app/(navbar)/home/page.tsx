// ** React Import
import React from 'react';

// ** Next Import
import Image from 'next/image';

export default function Page() {
  return (
    <main className="max-w-7xl mx-auto px-2 md:px-6 lg:px-10 text-secondary">
      <div className="container flex flex-col-reverse lg:flex-row py-16">
        <div className="basis-full lg:basis-6/12">
          <h1 className="text-[2.50rem] leading-tight font-bold">
            Forget Busy Work, <br className="hidden lg:inline-block" /> Start Next Vacation
          </h1>
          <p className="my-8 font-sm w-96 text-gray-400 font-thin">
            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
          </p>
          <button className="bg-primary hover:bg-blue-500 delay-75 py-3 px-10 text-white rounded-md shadow-xl">
            Show Me Now
          </button>
          <ul className="mt-20 flex justify-between w-11/12">
            <li>
              <Image src="/icons/ic_traveler.svg" alt="ic_traveler" width={32} height={32} />
              <p className="font-bold mt-2">
                80,409 <span className="text-gray-400 text-base font-light">travelers</span>
              </p>
            </li>
            <li>
              <Image src="/icons/ic_treasure.svg" alt="ic_treasure" width={32} height={32} />
              <p className="font-bold mt-2">
                862 <span className="text-gray-400 text-base font-light">treasures</span>
              </p>
            </li>
            <li>
              <Image src="/icons/ic_cities.svg" alt="ic_cities" width={32} height={32} />
              <p className="font-bold mt-2">
                1,492 <span className="text-gray-400 text-base font-light">cities</span>
              </p>
            </li>
          </ul>
        </div>
        <div className="px-5 pt-5 pb-10 relative flex-shrink-0 basis-full lg:basis-6/12 flex justify-center">
          <div className="-mt-5 -ms-5 lg:block max-w-full lg:w-[500px] lg:h-[370px]">
            <img src="/images/img-hero.png" alt="Gambar Utama" className="rounded-tl-[100px] rounded-2xl" />
          </div>
          <div className="hidden lg:block absolute w-[480px] h-[410px] border border-gray-400 top-0 right-0 -z-10 mt-5 me-6 rounded-tl-[100px] rounded-2xl"></div>
        </div>
      </div>
    </main>
  );
}
