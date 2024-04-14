// Components
import Title from './title';
import ImageGrid from './image-grid';
import Description from './description';

export default function Page({ params }: { params: { placeId: number } }) {
  const place = {
    id: 1,
    imgUrl: '/images/most-picked/mp_1.jpg',
    title: 'Village Angga',
    city: 'Bogor',
    region: 'Indonesia',
    price: 50,
    isPopular: false,
    gallery: [
      { placeId: 1, imgUrl: '/images/most-picked/mp_1.jpg' },
      { placeId: 1, imgUrl: '/images/most-picked/mp_2.jpg' },
      { placeId: 1, imgUrl: '/images/most-picked/mp_3.jpg' }
    ],
    description: `Minimal techno is a minimalist subgenre of techno music. It is characterized by a stripped-down aesthetic that exploits the use of repetition and understated development. Minimal techno is thought to have been originally developed in the early 1990s by Detroit-based producers Robert Hood and Daniel Bell. 
    
    Such trends saw the demise of the soul-infused techno that typified the original Detroit sound. Robert Hood has noted that he and Daniel Bell both realized something was missing from techno in the post-rave era. 
    
    Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.`,
    features: [
      { id: 1, icon: '/images/features/ic_bedroom.svg', name: 'bedroom', quantity: 5 },
      { id: 2, icon: '/images/features/ic_livingroom.svg', name: 'living room', quantity: 1 },
      { id: 3, icon: '/images/features/ic_bathroom.svg', name: 'bathroom', quantity: 3 },
      { id: 4, icon: '/images/features/ic_diningroom.svg', name: 'dining room', quantity: 1 },
      { id: 5, icon: '/images/features/ic_wifi.svg', name: 'mbp/s', quantity: 10 },
      { id: 6, icon: '/images/features/ic_ac.svg', name: 'unit ready', quantity: 7 },
      { id: 7, icon: '/images/features/ic_refigrator.svg', name: 'refigrator', quantity: 2 },
      { id: 8, icon: '/images/features/ic_television.svg', name: 'television', quantity: 4 }
    ]
  };

  return (
    <>
      <Title title={place.title} city={place.city} region={place.region} />
      <ImageGrid images={place.gallery} />
      <Description description={place.description} features={place.features} placeId={place.id} price={place.price} />
    </>
  );
}
