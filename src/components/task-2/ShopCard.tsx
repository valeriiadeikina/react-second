import React from 'react';
import type { TProduct } from '../../types';

type ShopCardProps = {
  card: TProduct;
};

export default function ShopCard({ card }: ShopCardProps): React.JSX.Element {
  const defineCurrency = (currencyCode: string): string => {
    if (currencyCode === 'USD') {
      return '$';
    }
    if (currencyCode === 'EUR') {
      return '€';
    }
    return currencyCode;
  };

  const defineQuantityLevel = (quantity: number): string => {
    let result = 'level-';
    if (quantity > 20) {
      result += 'high';
    }
    if (quantity > 10 && quantity < 20) {
      result += 'medium';
    }
    if (quantity < 10) {
      result += 'low';
    }
    return result;
  };

  return (
    <div className="item">
      <div className="item-image">
        <a href={card.url}>
          <img src={card.mainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{card.title}</p>
        <p className="item-price">
          {defineCurrency(card.currency_code)}
          {card.price}
        </p>
        <p className={`item-quantity ${defineQuantityLevel(card.quantity)}`}>{card.quantity} left</p>
      </div>
    </div>
  );
}
