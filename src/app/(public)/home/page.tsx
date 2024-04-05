// ** Components
import ListCategory from './ListCategory';
import MainHero from './MainHero';
import MostPicked from './MostPicked';
import TestimonySection from './TestimonySection';

// ** Fake Data
import { listCategories } from './fake-data';

export default function Page() {
  return (
    <main className="px-2 mx-auto max-w-7xl md:px-6 lg:px-10 text-secondary">
      <MainHero />
      <MostPicked />
      <section id="section-categories" className="mb-18">
        {listCategories.map((listCategory) => {
          return <ListCategory key={listCategory.title} title={listCategory.title} data={listCategory.data} />;
        })}
      </section>
      <TestimonySection />
    </main>
  );
}
