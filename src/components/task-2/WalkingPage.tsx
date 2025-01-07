import React, { useState } from 'react';
import WalkingForm from './WalkingForm';
import Listing from './Listing';

export type ItemType = {
  date: string;
  distance: number;
};

export default function WalkingPage(): React.JSX.Element {
  const [items, setItems] = useState<ItemType[]>([]);
  const [formValues, setFormValues] = useState<ItemType>({ date: '', distance: 0 });

  const addItem = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (formValues.date && formValues.distance > 0) {
      setItems((prev) => {
        const existingItemIndex = prev.findIndex((item) => item.date === formValues.date);

        if (existingItemIndex !== -1) {
          const updatedItems = [...prev];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            distance: updatedItems[existingItemIndex].distance + formValues.distance, 
          };
          return updatedItems;
        }
        return [...prev, formValues];
      });
      setFormValues({ date: '', distance: 0 });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: name === 'distance' ? Number(value) : value,
    }));
  };

  const handleDelete = (date: string): void => {
    setItems(items.filter((item) => item.date !== date));
  };

  return (
    <>
      <WalkingForm addItem={addItem} formValues={formValues} handleChange={handleChange} />
      <Listing items={items} handleDelete={handleDelete} />
    </>
  );
}
