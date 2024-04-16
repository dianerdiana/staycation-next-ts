// Thirdparty
import { FiCheck } from 'react-icons/fi';

// Next
import Link from 'next/link';
import Image from 'next/image';

const Completed = ({ currentTab, onTabChange }: { currentTab: number; onTabChange: any }) => {
  return (
    <div id="tab-3" className={currentTab === 3 ? 'block' : 'hidden'}>
      <div className="flex items-center justify-center my-14">
        <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
          <FiCheck strokeWidth={2} size={30} color="white" />
        </div>
        <hr className="border-gray-200 w-14" />
        <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
          <FiCheck strokeWidth={2} size={30} color="white" />
        </div>
        <hr className="border-gray-200 w-14" />
        <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
          <FiCheck strokeWidth={2} size={30} color="white" />
        </div>
      </div>
      <div className="text-center booking-info mb-14">
        <h2 className="mb-1 text-4xl font-semibold">Yay! Completed</h2>
      </div>
      <div className="flex flex-col items-center mb-14">
        <Image src={'/images/booking/completed.jpg'} alt="Completed" priority width={362} height={350} />
        <p className="font-light text-gray-400 text-center">
          We will inform you via email later <br /> once the transaction has been accepted
        </p>
      </div>
      <div className="flex justify-center mb-16">
        <Link href={'/home'} className="py-2 w-72 btn-primary text-center shadow-xl" onClick={() => onTabChange(1)}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Completed;
