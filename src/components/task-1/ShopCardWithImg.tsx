import React from 'react';
import Card from './Card';
import Button from './Button';
import type { TProduct } from '../../types';

type ShopCardProps = {
  card: TProduct
}

export default function ShopCard({card}: ShopCardProps): React.JSX.Element {
  return (
    <Card>
      <img src={card.mainImage.url_570xN} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{card.currency_code} {card.price}, {card.quantity} left</h5>
        <p className="card-text">
        {card.title}

        </p>
        <Button href="#" className="btn btn-primary" />
      </div>
    </Card>
  );
}
