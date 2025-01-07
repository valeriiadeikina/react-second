import React from 'react';
import data from '../../raw-data.json';
import type { TProduct } from '../../types';
import Listing from './Listing';

type TRawData = {
  listing_id: number;
  url: string;
  MainImage?: { url_570xN: string };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  [key: string]: unknown;
};

export default function Store(): React.JSX.Element {
  const parsedData = data as TRawData[];

  parsedData.map((item, i, arr) => console.log(item.MainImage, i, arr.length));
  const products: TProduct[] = parsedData.map((item: TRawData) => ({
    listing_id: item.listing_id,
    url: item.url,
    mainImage: { url_570xN: item.MainImage?.url_570xN ?? '' },
    title: item.title,
    currency_code: item.currency_code,
    price: item.price,
    quantity: item.quantity,
  }));

  return <Listing items={products} />;
}
