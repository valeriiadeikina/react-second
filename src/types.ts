export type TMovies = {
  movieName: string;
  movieId: number;
  price: number;
  stars: number;
};

export type TProduct = {
  listing_id: number;
  url: string;
  mainImage: { url_570xN?: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
};
