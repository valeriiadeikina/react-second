import React from 'react';
import styles from './style.module.css';
import type { ItemType } from './WalkingPage';

type WalkingFormProps = {
  addItem: (e: React.FormEvent<HTMLFormElement>) => void;
  formValues: ItemType;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function WalkingForm({
  addItem,
  formValues,
  handleChange,
}: WalkingFormProps): React.JSX.Element {
  return (
    <form onSubmit={addItem} className={styles.form_container}>
      <div className={styles.input_container}>
        <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input
          value={formValues.date}
          type="date"
          id="date"
          name="date"
          onChange={handleChange}
          className={styles.input_style}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="distance">Пройдено км</label>
        <input
          value={formValues.distance}
          type="number"
          id="distance"
          name="distance"
          onChange={handleChange}
          className={styles.input_style}
        />
      </div>
      <button type="submit" className={styles.button_style}>
        ОК
      </button>
    </form>
  );
}
