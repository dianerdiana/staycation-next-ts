// Thirdparty
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12 mt-24 border-t-2 border-gray-200">
      <div className="grid grid-cols-12 px-2 mx-auto max-w-7xl md:px-6 lg:px-10">
        <div className="flex flex-col justify-center col-span-12 py-8 mb-10 lg:col-span-4">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-primary">Stay</span>
              <span className="text-2xl font-bold text-secondary">cation.</span>
            </Link>
          </div>
          <p className="text-gray-300 lg:w-72">We kaboom your beauty holiday instantly and memorable.</p>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-8 lg:col-span-4">
              <h4 className="mb-6 text-base font-semibold">For Beginners</h4>
              <ul className="text-base text-gray-300">
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    New Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    Start Booking a Room
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    Use Payments
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-4">
              <h4 className="mb-6 text-base font-semibold">Explore Us</h4>
              <ul className="text-base text-gray-300">
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    Our Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    Privacy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-4">
              <h4 className="mb-6 text-base font-semibold">Connect Us</h4>
              <ul className="text-base text-gray-300">
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    support@staycation.id
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    021 - 2208 - 1996
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/" className="hover:text-primary">
                    Staycation, Kemang, Jakarta
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <p className="text-center text-gray-300">Copyright 2024 • All rights reserved • Staycation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
