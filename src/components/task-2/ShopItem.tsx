import React from 'react';
import type { TProduct } from '../../types';

type ShopItemProps = {
  item: TProduct;
};

export default function ShopItem({ item }: ShopItemProps): React.JSX.Element {
  return (
    <div className="item_container">
      <img src={item.img} className="item_img" />
      <div className="item_name">{item.name}</div>
      <div className="item_color">{item.color}</div>
      <div className="price">${item.price}</div>
      <button className="button">ADD TO CART</button>
    </div>
  );
}
