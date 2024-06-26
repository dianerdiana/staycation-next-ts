// ** Components
import ListCategory from './list-category';
import MainHero from './main-hero';
import MostPicked from './most-picked';
import TestimonySection from './testimony';

// Fake Data
import {
  housesWithBeautyBackyard,
  hotelsWithLargeLivingRoom,
  apartementsWithKitchenSet,
  mostPicked
} from '@/data/fake-data';

export default function Page() {
  return (
    <>
      <MainHero />
      <MostPicked mostPickedList={mostPicked} />
      <section id="section-categories" className="mb-18">
        <ListCategory title={housesWithBeautyBackyard.title} data={housesWithBeautyBackyard.data} />
        <ListCategory title={hotelsWithLargeLivingRoom.title} data={hotelsWithLargeLivingRoom.data} />
        <ListCategory title={apartementsWithKitchenSet.title} data={apartementsWithKitchenSet.data} />
      </section>
      <TestimonySection />
    </>
  );
}
