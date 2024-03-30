export interface VacationPlace {
  city: string;
  imgUrl: string;
  isPopular: boolean;
  price: number;
  region: string;
  title: string;
}

export interface ListCategoryProps {
  title: string;
  data: VacationPlace[];
}

export interface DetailListCategoryProps {
  detail: VacationPlace;
}
