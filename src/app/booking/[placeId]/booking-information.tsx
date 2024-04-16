import Image from 'next/image';

const BookingInformation = () => {
  return (
    <>
      <div className="flex items-center justify-center my-14">
        <div className="flex items-center justify-center border rounded-full rounded-wrapper w-14 h-14">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
            <span className="text-2xl font-medium text-gray-400">1</span>
          </div>
        </div>
        <hr className="border-gray-200 w-14" />
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
          <span className="text-2xl font-light text-gray-400">2</span>
        </div>
        <hr className="border-gray-200 w-14" />
        <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
          <span className="text-2xl font-light text-gray-400">3</span>
        </div>
      </div>
      <div className="text-center booking-info mb-14">
        <h2 className="mb-1 text-4xl font-semibold">Booking Information</h2>
        <p className="font-light text-gray-400">Please fill up the blank fields below</p>
      </div>
      <div className="flex flex-col justify-center md:flex-row mb-14">
        <div className="w-full px-5 py-8 border-r-2 md:w-3/6 lg:px-20 md:px-10">
          <Image priority src={'/images/booking/1.jpg'} alt="booking cover" width={420} height={270} />
          <div className="flex justify-between mt-4">
            <div>
              <h2 className="text-xl">Podo Wae</h2>
              <p className="text-base text-gray-400">Madiun, Indonesia</p>
            </div>

            <div className="flex items-center">
              <p className="font-semibold">
                $480 USD <span className="font-normal text-gray-400"> per </span> 2 nights
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-5 py-8 md:w-3/6 lg:px-20 md:px-10">
          <div className="w-full md:w-3/4">
            <div className="flex flex-col mb-5 input-group">
              <label htmlFor="firstname" className="mb-2">
                First Name
              </label>
              <input
                id="firstname"
                className="px-4 py-2 bg-gray-100 rounded text-secondary focus:outline-none arrow-hide"
                placeholder="Please type here..."
              />
            </div>
            <div className="flex flex-col mb-5 input-group">
              <label htmlFor="lastname" className="mb-2">
                Last Name
              </label>
              <input
                id="lastname"
                className="px-4 py-2 bg-gray-100 rounded text-secondary focus:outline-none arrow-hide"
                placeholder="Please type here..."
              />
            </div>
            <div className="flex flex-col mb-5 input-group">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <input
                id="email"
                className="px-4 py-2 bg-gray-100 rounded text-secondary focus:outline-none arrow-hide"
                placeholder="Please type here..."
              />
            </div>
            <div className="flex flex-col mb-5 input-group">
              <label htmlFor="phone" className="mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                className="px-4 py-2 bg-gray-100 rounded text-secondary focus:outline-none arrow-hide"
                placeholder="Please type here..."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <button className="py-2 w-72 btn-primary">Continue to Book</button>
      </div>
      <div className="flex justify-center mb-16">
        <button className="py-2 w-72 btn-secondary">Cancel</button>
      </div>
    </>
  );
};

export default BookingInformation;
