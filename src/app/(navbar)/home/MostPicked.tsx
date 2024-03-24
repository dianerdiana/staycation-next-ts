import React from 'react';

import { MostPick, MostPickedList } from './home.interface';
import Image from 'next/image';

interface DetailMostPickedProps {
  index: number;
  mostPicked: MostPick;
}

const DetailMostPicked: React.FC<DetailMostPickedProps> = ({ index, mostPicked }) => {
  const imgHeightClass = index === 0 ? 'h-52 md:h-[449px]' : 'h-52';
  const imgRowSpan = index === 0 ? 'row-span-2' : 'row-span-1';

  return (
    <div className={`relative ${imgRowSpan} ${imgHeightClass} col-span-3 md:col-span-1 bg-center bg-cover rounded-2xl`}>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        src={mostPicked.imgUrl}
        alt={mostPicked.title}
        className="rounded-2xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black from-10% opacity-40 to-transparent to-60% flex items-end rounded-2xl"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between text-white rounded-2xl">
        <div className="flex justify-end">
          <span className="bg-pinky px-9 py-2 rounded-bl-2xl rounded-tr-2xl">
            <span className="font-bold">${mostPicked.price}</span> per night
          </span>
        </div>
        <div className="p-4 flex flex-col">
          <span className="font-medium">{mostPicked.title}</span>
          <span className="text-sm font-light">
            {mostPicked.city}, {mostPicked.region}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function MostPicked() {
  const mostPickedList: MostPickedList = [
    {
      imgUrl: '/images/most-picked/mp_1.jpg',
      title: 'Blue Origin Fams',
      city: 'Jakarta',
      region: 'Indonesia',
      price: 50
    },
    {
      imgUrl: '/images/most-picked/mp_2.jpg',
      title: 'Oceand Land',
      city: 'Bandung',
      region: 'Indonesia',
      price: 22
    },
    {
      imgUrl: '/images/most-picked/mp_3.jpg',
      title: 'Stark House',
      city: 'Malang',
      region: 'Indonesia',
      price: 858
    },
    {
      imgUrl: '/images/most-picked/mp_4.jpg',
      title: 'Vinnavill',
      city: 'Malang',
      region: 'Indonesia',
      price: 62
    },
    {
      imgUrl: '/images/most-picked/mp_5.jpg',
      title: 'Bobox',
      city: 'Medan',
      region: 'Indonesia',
      price: 72
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Most Picked</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {mostPickedList.map((mostPicked: MostPick, idx: number): React.ReactNode => {
          return <DetailMostPicked key={mostPicked.title} index={idx} mostPicked={mostPicked} />;
        })}
      </div>
    </section>
  );
}
