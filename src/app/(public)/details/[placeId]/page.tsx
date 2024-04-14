import Title from './title';
import ImageGrid from './image-grid';

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
    ]
  };

  return (
    <>
      <Title title={place.title} city={place.city} region={place.region} />
      <ImageGrid images={place.gallery} />
    </>
  );
}
