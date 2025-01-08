import React from 'react';
import Card from './Card';
import Button from './Button';

export default function ShopCard(): React.JSX.Element {
  return (
    <Card>
      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk of the cards
        content.
      </p>
      <Button href='#'></Button>
    </Card>
  );
}
