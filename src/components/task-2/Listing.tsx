import React from 'react';
import ShopCard from './ShopCard';
import type { TProduct } from '../../types';

type ListingProps = {
  items: TProduct[];
};

export default function Listing({ items }: ListingProps): React.JSX.Element {
  return (
    <div className='item-list'>
      {items.map((card) => (
        <ShopCard card={card} key={card.listing_id} />
      ))}
    </div>
  );
}
