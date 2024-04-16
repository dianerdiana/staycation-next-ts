import BookingInformation from './booking-information';
import Payment from './payment';

const Page = ({ params }: { params: { placeId: number } }) => {
  return (
    <div>
      <Payment />
    </div>
  );
};

export default Page;
