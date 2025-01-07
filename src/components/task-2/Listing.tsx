import React from 'react';
import type { ItemType } from './WalkingPage';
import styles from './style.module.css';

type ListingProps = {
  items: ItemType[];
  handleDelete: (date: string) => void;
};

export default function Listing({ items, handleDelete }: ListingProps): React.JSX.Element {
  return (
    <div className={items.length ? styles.item_list : ''}>
      {items
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((card) => (
          <div key={card.date} className={styles.card_container}>
            <div>{card.date}</div>
            <div>{card.distance}км</div>
            <button onClick={() => handleDelete(card.date)} className={styles.delete_button}>
              X
            </button>
          </div>
        ))}
    </div>
  );
}
