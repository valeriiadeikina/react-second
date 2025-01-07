import React from 'react';
import Star from './Star';

type StarsProps = {
  count: number;
};

export default function Stars({ count }: StarsProps): React.JSX.Element {
  return (
    <ul className="card-body-stars">
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
}
