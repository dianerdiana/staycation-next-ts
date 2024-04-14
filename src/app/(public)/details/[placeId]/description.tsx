import React from 'react';

// Components
import DescAbout from './desc-about';
import DescBooking from './desc-booking';
import DescFeatures from './desc-features';

// Type
import { Feature } from '@/types/features';

interface DescriptionProps {
  description: string;
  features: Feature[];
  placeId: number;
  price: string | number;
}

const Description: React.FC<DescriptionProps> = ({ placeId, description, features, price }) => {
  return (
    <div className="grid grid-cols-5 gap-3 mt-12 mb-18">
      <div className="col-span-3 pe-11">
        <DescAbout description={description} />
        <DescFeatures features={features} />
      </div>
      <div className="col-span-2">
        <DescBooking price={price} placeId={placeId} />
      </div>
    </div>
  );
};

export default Description;
