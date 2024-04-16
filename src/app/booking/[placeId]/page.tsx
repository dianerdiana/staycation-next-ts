'use client';

// React
import { useState } from 'react';

// Components
import BookingInformation from './booking-information';
import Completed from './completed';
import Payment from './payment';

const Page = ({ params }: { params: { placeId: number } }) => {
  const [currentTab, setCurrentTab] = useState<number>(1);

  const onTabChange = (tabId: number) => {
    setCurrentTab(tabId);
  };

  return (
    <div>
      <BookingInformation currentTab={currentTab} onTabChange={onTabChange} />
      <Payment currentTab={currentTab} onTabChange={onTabChange} />
      <Completed currentTab={currentTab} onTabChange={onTabChange} />
    </div>
  );
};

export default Page;
