import React from 'react';
import type { TProduct } from '../../types';

type ShopCardProps = {
  card: TProduct;
};

export default function ShopCard({ card }: ShopCardProps): React.JSX.Element {
  return (
    <div className="card_container">
      <img src={card.img} className="card_img" />
      <div className="card_content_container">
        <div>
          <div className="card_name">{card.name}</div>
          <div className="card_color">{card.color}</div>
        </div>
        <div className="card_button_container">
          <div className="price">${card.price}</div>
          <button className="button">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
