import { FiCheck } from 'react-icons/fi';

const Payment = () => {
  return (
    <>
      <div className="flex items-center justify-center my-14">
        <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full">
          <FiCheck strokeWidth={2} size={30} color="white" />
        </div>
        <hr className="border-gray-200 w-14" />
        <div className="flex items-center justify-center border rounded-full rounded-wrapper w-14 h-14">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
            <span className="text-2xl font-light text-gray-400">2</span>
          </div>
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
        <div className="w-full px-5 py-8 border-r-2 md:w-2/5 lg:px-20 md:px-10">
          <ol className="mb-5">
            <li className="mb-5">Transfer Pembayaran:</li>
            <li className="mb-3">Tax: 10%</li>
            <li className="mb-3">Sub total: $480 USD</li>
            <li className="mb-3">Total: $580 USD</li>
          </ol>
          <div>
            <div className="flex mb-5">
              <img src="/images/booking/bca.png" alt="bank bca" className="w-14 h-10 me-2" />
              <div>
                <p>Bank Central Asia</p>
                <p>2208 1996</p>
                <p>Staycation BCA</p>
              </div>
            </div>
            <div className="flex mb-5">
              <img src="/images/booking/mandiri.png" alt="bank mandiri" className="w-14 h-10 me-2" />
              <div>
                <p>Bank Mandiri</p>
                <p>2208 1996</p>
                <p>Staycation Mandiri</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-5 py-8 md:w-2/5 lg:px-20 md:px-10">
          <div className="flex flex-col mb-5 input-group">
            <label htmlFor="transfer-approve" className="mb-2">
              Upload Bukti Transfer
            </label>
            <input
              id="transfer-approve"
              type="file"
              className="px-4 py-2 bg-gray-100 rounded text-secondary focus:outline-none arrow-hide"
              placeholder="Browse a file..."
            />
          </div>
          <div className="flex flex-col mb-5 input-group">
            <label htmlFor="bank" className="mb-2">
              Asal Bank
            </label>
            <input
              id="bank"
              className="px-4 py-2 bg-gray-100 rounded text-secondary focus:outline-none arrow-hide"
              placeholder="Please type here..."
            />
          </div>
          <div className="flex flex-col mb-5 input-group">
            <label htmlFor="name" className="mb-2">
              Nama Pengirim
            </label>
            <input
              id="name"
              className="px-4 py-2 bg-gray-100 rounded text-secondary focus:outline-none arrow-hide"
              placeholder="Please type here..."
            />
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

export default Payment;
