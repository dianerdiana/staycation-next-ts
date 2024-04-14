// ** React Import
import React from 'react';

// Type
import { VacationPlace } from '@/types/vacation-place';

// Next
import Image from 'next/image';

// Interfaces
interface ListCategoryProps {
  title: string;
  data: VacationPlace[];
}

interface DetailListCategoryProps {
  detail: VacationPlace;
}

const DetailListCategory: React.FC<DetailListCategoryProps> = ({ detail }) => {
  const isPopularClass = detail.isPopular ? 'flex flex-col' : 'hidden';

  return (
    <div className="col-span-8 md:col-span-4 lg:col-span-2">
      <div className="relative bg-center bg-cover rounded-2xl h-44 mb-4">
        <Image
          fill={true}
          src={detail.imgUrl}
          alt={detail.title}
          className="rounded-2xl object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
    <div className="mb-18">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-8 gap-8">
        {data.map((detail) => (
          <DetailListCategory key={detail.id} detail={detail} />
        ))}
      </div>
    </div>
  );
};

export default ListCategory;
