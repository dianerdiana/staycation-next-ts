import React from 'react';

// Type
import { Feature } from '@/types/features';

// Interface
interface DescFeaturesProps {
  features: Feature[];
}

const DescFeatures: React.FC<DescFeaturesProps> = ({ features }) => {
  return (
    <div className="grid grid-cols-4 gap-x-12 gap-y-5">
      {features.map((feature) => (
        <div key={feature.id}>
          <img src={feature.icon} alt={feature.name} className="w-9 h-9 mb-2" />
          <span className="block text-base text-gray-400">
            <span className="text-secondary">{feature.quantity} </span>
            {feature.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default DescFeatures;
