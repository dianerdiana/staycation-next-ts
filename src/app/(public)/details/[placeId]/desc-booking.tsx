import { FiMinus, FiPlus } from 'react-icons/fi';

const DescBooking = ({ placeId, price }: { placeId: number; price: number | string }) => {
  return (
    <div className="flex items-center px-20 border border-gray-200 rounded-2xl py-14">
      <div>
        <h4 className="mb-4 font-semibold">Start Booking</h4>
        <p className="mb-4 text-4xl">
          <span className="font-semibold text-green-400">${price}</span>{' '}
          <span className="font-light text-gray-400">per night</span>
        </p>
        <div className="mb-4">
          <label htmlFor="date-number">How long you will stay?</label>
          <div className="flex flex-row mt-2">
            <div className=" bg-gray-50 w-11 h-11">
              <button className="flex items-center justify-center bg-red-500 rounded-md w-11 h-11">
                <FiMinus width={45} height={45} strokeWidth={4} className="text-white" />
              </button>
            </div>
            <input
              id="date-number"
              type="number"
              className="w-full text-center text-secondary bg-gray-50 focus:outline-none ps-4 arrow-hide"
              placeholder="2 nights"
              prefix="night"
            />
            <div className="bg-gray-50 w-11 h-11">
              <button className="flex items-center justify-center bg-green-400 rounded-md w-11 h-11">
                <FiPlus width={45} height={45} strokeWidth={4} className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="date-picker">Pick a Date</label>
          <div className="flex flex-row mt-2">
            <div className=" bg-gray-50 w-11 h-11">
              <button className="flex items-center justify-center rounded-md bg-secondary w-11 h-11">
                <img src={'/images/icons/ic_calendar.svg'} alt="ic_calendar" width={25} height={25} />
              </button>
            </div>
            <input
              id="date-picker"
              type="date"
              className="w-full text-center text-secondary bg-gray-50 focus:outline-none ps-4 rounded-e-md"
            />
          </div>
        </div>
        <p className="mb-10 font-light text-gray-400">
          You will pay
          <span className="font-semibold text-secondary"> $480</span> USD per
          <span className="font-semibold text-secondary"> 2 nights</span>
        </p>
        <button className="block min-w-full px-10 py-3 text-white delay-75 rounded-md shadow-xl lg:w-auto bg-primary hover:bg-blue-500">
          Continue to Book
        </button>
      </div>
    </div>
  );
};

export default DescBooking;
