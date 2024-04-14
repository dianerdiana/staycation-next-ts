import Image from 'next/image';
import { FiCalendar, FiMinus, FiPlus } from 'react-icons/fi';

const Description = () => {
  return (
    <div className="grid grid-cols-5 gap-3 mt-12">
      <div className="col-span-3 pe-11">
        <h4 className="mb-4 font-semibold">About the place</h4>
        <p className="text-gray-400">
          Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that
          exploits the use of repetition and understated development. Minimal techno is thought to have been originally
          developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell.
          <br />
          <br />
          Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood
          has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era.
          <br />
          <br />
          Design is a plan or specification for the construction of an object or system or for the implementation of an
          activity or process, or the result of that plan or specification in the form of a prototype, product or
          process. The national agency for design: enabling Singapore to use design for economic growth and to make
          lives better.
        </p>
      </div>
      <div className="col-span-2">
        <div className="flex items-center px-20 border border-gray-200 rounded-2xl py-14">
          <div>
            <h4 className="mb-4 font-semibold">Start Booking</h4>
            <p className="mb-4 text-4xl">
              <span className="font-semibold text-green-400">$280</span>
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
              <span className="font-semibold text-secondary">$480</span> USD per{' '}
              <span className="font-semibold text-secondary">2 nights</span>
            </p>
            <button className="block min-w-full px-10 py-3 text-white delay-75 rounded-md shadow-xl lg:w-auto bg-primary hover:bg-blue-500">
              Continue to Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
