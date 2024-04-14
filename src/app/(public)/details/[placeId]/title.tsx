// React
import React from 'react';

import Breadcrumb from '@/components/breadcrumb';

interface TitleProps {
  title: string;
  city: string;
  region: string;
}

const Title: React.FC<TitleProps> = ({ title, city, region }) => {
  const breadcrumbItems = [{ title: 'House Details', active: true }];

  return (
    <div className="flex flex-col items-center gap-2 my-12 md:flex-row md:gap-0">
      <div className="w-full text-base md:w-1/4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <div className="w-full md:w-2/4">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <p className="font-light text-center text-gray-300">
          {city}, {region}
        </p>
      </div>
    </div>
  );
};

export default Title;
