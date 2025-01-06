import React from 'react';
import ShopCard from './ShopCard';
import type { TProduct } from '../../types';

type CardsViewProps = {
  cards: TProduct[];
};

export default function CardsView({ cards }: CardsViewProps): React.JSX.Element {
  return (
    <div className="gallery">
      {cards.map((card) => (
        <ShopCard card={card} key={card.name + card.color} />
      ))}
    </div>
  );
}
