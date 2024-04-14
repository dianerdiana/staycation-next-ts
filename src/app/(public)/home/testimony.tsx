import React from 'react';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          className={`text-3xl ${value <= rating ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
        >
          {value <= rating ? '\u2605' : '\u2606'}
        </button>
      ))}
    </div>
  );
};

const TestimonySection = () => {
  const text = 'What a great trip with my family and I should try again next time soon apa aja';

  return (
    <section className="grid grid-cols-12 lg:gap-14">
      <div className="relative flex flex-shrink-0 col-span-12 pt-5 pb-10 md:col-span-5">
        <div className="max-w-full lg:mt-10 lg:ms-10">
          <img
            src="/images/testimony/1.jpg"
            alt="Gambar Testimony"
            className="rounded-br-[100px] rounded-2xl w-full h-auto"
          />
        </div>
        <div className="hidden xl:block absolute w-[366px] h-[500px] border-2 border-gray-200 top-0 left-0 -z-10 mt-5 me-6 rounded-br-[100px] rounded-2xl"></div>
      </div>
      <div className="col-span-12 md:col-span-6 place-content-center">
        <h4 className="mb-10 text-2xl font-medium">Happy Family</h4>
        <div className="mb-2">
          <Rating rating={5} />
        </div>
        <p className="mb-2 text-3xl">{text.length > 71 ? text.substring(0, 71) + '...' : text}</p>
        <div className="flex flex-col mb-12">
          <span className="text-sm text-gray-300">Angga, Product Designer</span>
        </div>
        <button className="w-full px-10 py-3 text-white delay-75 rounded-md shadow-xl lg:w-auto bg-primary hover:bg-blue-500">
          Read Their Story
        </button>
      </div>
    </section>
  );
};

export default TestimonySection;
