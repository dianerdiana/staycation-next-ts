import { VacationPlace, ListCategoryProps } from './home.interface';

export const mostPickedList: VacationPlace[] = [
  {
    imgUrl: '/images/most-picked/mp_1.jpg',
    title: 'Blue Origin Fams',
    city: 'Jakarta',
    region: 'Indonesia',
    price: 50,
    isPopular: false
  },
  {
    imgUrl: '/images/most-picked/mp_2.jpg',
    title: 'Oceand Land',
    city: 'Bandung',
    region: 'Indonesia',
    price: 22,
    isPopular: false
  },
  {
    imgUrl: '/images/most-picked/mp_3.jpg',
    title: 'Stark House',
    city: 'Malang',
    region: 'Indonesia',
    price: 858,
    isPopular: false
  },
  {
    imgUrl: '/images/most-picked/mp_4.jpg',
    title: 'Vinnavill',
    city: 'Malang',
    region: 'Indonesia',
    price: 62,
    isPopular: false
  },
  {
    imgUrl: '/images/most-picked/mp_5.jpg',
    title: 'Bobox',
    city: 'Medan',
    region: 'Indonesia',
    price: 72,
    isPopular: false
  }
];

export const listCategories: ListCategoryProps[] = [
  {
    title: 'Houses with beauty backyard',
    data: [
      {
        city: 'Gunung Batu',
        imgUrl: '/images/beauty-backyard/bb_1.jpg',
        isPopular: true,
        price: 0,
        region: 'Indonesia',
        title: 'Tabby Town'
      },
      {
        city: 'Bogor',
        imgUrl: '/images/beauty-backyard/bb_2.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'Anggana'
      },
      {
        city: 'Jakarta',
        imgUrl: '/images/beauty-backyard/bb_3.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'Seattle Rain'
      },
      {
        city: 'Wonosobo',
        imgUrl: '/images/beauty-backyard/bb_4.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'Wodden Pit'
      }
    ]
  },
  {
    title: 'Hotels with large living room',
    data: [
      {
        city: 'Tangerang',
        imgUrl: '/images/large-living-room/living_room_1.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'Green Park'
      },
      {
        city: 'Madiun',
        imgUrl: '/images/large-living-room/living_room_2.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'Podo Wae'
      },
      {
        city: 'Bandung',
        imgUrl: '/images/large-living-room/living_room_3.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'Silver Rain'
      },
      {
        city: 'Kemang',
        imgUrl: '/images/large-living-room/living_room_4.jpg',
        isPopular: true,
        price: 0,
        region: 'Indonesia',
        title: 'Cashville'
      }
    ]
  },
  {
    title: 'Apartements with kitchen set',
    data: [
      {
        city: 'Depok',
        imgUrl: '/images/kitchen-set/kitchen_set_1.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'PS Wood'
      },
      {
        city: 'Jakarta',
        imgUrl: '/images/kitchen-set/kitchen_set_2.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'One Five'
      },
      {
        city: 'Bogor',
        imgUrl: '/images/kitchen-set/kitchen_set_3.jpg',
        isPopular: true,
        price: 0,
        region: 'Indonesia',
        title: 'Minimal'
      },
      {
        city: 'Wonosobo',
        imgUrl: '/images/kitchen-set/kitchen_set_4.jpg',
        isPopular: false,
        price: 0,
        region: 'Indonesia',
        title: 'Stays Home'
      }
    ]
  }
];
