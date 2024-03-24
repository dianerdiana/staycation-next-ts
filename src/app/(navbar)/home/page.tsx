// ** React Import
import React from 'react';

// ** Components
import MainHero from './MainHero';
import MostPicked from './MostPicked';

export default function Page() {
  return (
    <main className="px-2 mx-auto max-w-7xl md:px-6 lg:px-10 text-secondary">
      <MainHero />
      <MostPicked />
    </main>
  );
}
