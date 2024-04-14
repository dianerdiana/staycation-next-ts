// React
import React from 'react';

// Types
import { VacationPlace } from '@/types/vacation-place';

// Next
import Image from 'next/image';
import Link from 'next/link';

interface DetailMostPickedProps {
  index: number;
  mostPicked: VacationPlace;
}

const DetailMostPicked: React.FC<DetailMostPickedProps> = ({ index, mostPicked }) => {
  const imgHeightClass = index === 0 ? 'h-52 md:h-[449px]' : 'h-52';
  const imgRowSpan = index === 0 ? 'row-span-2' : 'row-span-1';

  return (
    <Link
      href={`/details/${mostPicked.id}`}
      className={`relative ${imgRowSpan} ${imgHeightClass} col-span-3 md:col-span-1 bg-center bg-cover rounded-2xl`}
    >
      <Image
        fill
        src={mostPicked.imgUrl}
        alt={mostPicked.title}
        className="rounded-2xl object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    </Link>
  );
};

export default function MostPicked({ mostPickedList }: { mostPickedList: VacationPlace[] }) {
  return (
    <section className="mb-18">
      <h2 className="text-xl font-bold mb-4">Most Picked</h2>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {mostPickedList.map((mostPicked: VacationPlace, idx: number): React.ReactNode => {
          return <DetailMostPicked key={mostPicked.title} index={idx} mostPicked={mostPicked} />;
        })}
      </div>
    </section>
  );
}
