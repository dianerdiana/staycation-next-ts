// ** React Import
import React from 'react';

// ** Interface
import { VacationPlace, ListCategoryProps, DetailListCategoryProps } from './home.interface';

// ** Next
import Image from 'next/image';

const DetailListCategory: React.FC<DetailListCategoryProps> = ({ detail }) => {
  const isPopularClass = detail.isPopular ? 'flex flex-col' : 'hidden';

  return (
    <div className="basis-3/12">
      <div className="relative bg-center bg-cover rounded-2xl h-44 mb-4">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={detail.imgUrl}
          alt={detail.title}
          className="rounded-2xl"
        />

        {/* Content */}
        <div className={`absolute inset-0 ${isPopularClass} text-white rounded-2xl`}>
          <div className="flex justify-end">
            <span className="bg-pinky px-8 py-2 rounded-bl-2xl rounded-tr-2xl text-sm">
              <span className="font-bold">Popular</span> <span className="font-light">Choice</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h4 className="text-base font-semibold">{detail.title}</h4>
        <span className="text-sm text-gray-400">
          {detail.city}, {detail.region}
        </span>
      </div>
    </div>
  );
};

const ListCategory: React.FC<ListCategoryProps> = ({ title, data }) => {
  return (
    <section className="mb-18">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="flex flex-row gap-8">
        {data.map(
          (detail: VacationPlace): React.ReactNode => (
            <DetailListCategory key={detail.title} detail={detail} />
          )
        )}
      </div>
    </section>
  );
};

export default ListCategory;