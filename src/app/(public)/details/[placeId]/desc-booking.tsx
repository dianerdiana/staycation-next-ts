'use client';

// React
import { useEffect, useRef, useState } from 'react';

// Thirdparty
import { FiMinus, FiPlus } from 'react-icons/fi';
import Flatpickr from 'react-flatpickr';

// Style
import 'flatpickr/dist/flatpickr.css';

const today = new Date();
const oneDayLater = new Date(today.getTime() + 1 * 24 * 60 * 60 * 1000);
const twoDaysLater = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000);

const DescBooking = ({ placeId, price }: { placeId: number; price: number }) => {
  // Hook
  const durationRef = useRef<HTMLInputElement>(null);

  // State
  const [duration, setDuration] = useState<number>(2);
  const [startDate, setStartDate] = useState<Date>(oneDayLater);
  const [endDate, setEndDate] = useState<Date>(twoDaysLater);

  const handleReduceDuration = () => {
    const currentValue = durationRef.current?.value;
    if (currentValue !== null && currentValue !== undefined) {
      const parsedValue = parseInt(currentValue, 10);
      if (!isNaN(parsedValue) && parsedValue !== 1) {
        setDuration(parsedValue - 1);
      }
    }
  };

  const handleAddDuration = () => {
    const currentValue = durationRef.current?.value;
    if (currentValue !== null && currentValue !== undefined) {
      const parsedValue = parseInt(currentValue, 10);
      if (!isNaN(parsedValue)) {
        setDuration(parsedValue + 1);
      }
    }
  };

  const handleChangeDate = (date: Date[]) => {
    setStartDate(date[0]);
    setEndDate(date[1]);
  };

  useEffect(() => {
    if (startDate !== undefined && endDate !== undefined) {
      const countDuration: number = new Date(endDate.getTime() - startDate.getTime()).getDate();

      setDuration(countDuration);
    }
  }, [startDate, endDate]);

  useEffect(() => {
    const startDateDuration = new Date(startDate);
    const endDateDuration = new Date(startDateDuration.setDate(startDateDuration.getDate() + duration - 1));

    setEndDate(endDateDuration);
  }, [duration]);

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
              <button
                className="flex items-center justify-center bg-red-500 rounded-md w-11 h-11"
                onClick={handleReduceDuration}
              >
                <FiMinus width={45} height={45} strokeWidth={4} className="text-white" />
              </button>
            </div>
            <input
              readOnly
              ref={durationRef}
              id="date-number"
              className="w-full text-center text-secondary bg-gray-50 focus:outline-none ps-4 arrow-hide"
              placeholder="2 nights"
              value={duration > 1 ? `${duration} nights` : `${duration} night`}
            />
            <div className="bg-gray-50 w-11 h-11">
              <button
                className="flex items-center justify-center bg-green-400 rounded-md w-11 h-11"
                onClick={handleAddDuration}
              >
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
            <Flatpickr
              id="date-picker"
              className="w-full text-center text-secondary bg-gray-50 focus:outline-none ps-4 rounded-e-md"
              value={[startDate, endDate]}
              onChange={handleChangeDate}
              options={{
                mode: 'range',
                minDate: 'today',
                dateFormat: 'd M',
                defaultDate: [startDate, endDate],
                locale: {
                  rangeSeparator: ' - '
                }
              }}
            />
          </div>
        </div>
        <p className="mb-10 font-light text-gray-400">
          You will pay
          <span className="font-semibold text-secondary"> ${price * duration}</span> USD per
          <span className="font-semibold text-secondary">
            {' '}
            {duration} night{duration > 1 ? 's' : ''}
          </span>
        </p>
        <button className="block min-w-full px-10 py-3 text-white delay-75 rounded-md shadow-xl lg:w-auto bg-primary hover:bg-blue-500">
          Continue to Book
        </button>
      </div>
    </div>
  );
};

export default DescBooking;
