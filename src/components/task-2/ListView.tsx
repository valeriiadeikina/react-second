import React from 'react';
import type { TProduct } from '../../types';
import ShopItem from './ShopItem';

type ListViewProps = {
  items: TProduct[];
};

export default function ListView({ items }: ListViewProps): React.JSX.Element {
  return (
    <div>
      {items.map((item) => (
        <ShopItem item={item} key={item.name + item.color} />
      ))}
    </div>
  );
}
