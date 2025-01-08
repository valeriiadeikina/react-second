// компонент отрисовывает котировки, переиспользует компонент бледного цвета текста, который часто встречается

import React from 'react';
import LightText from './LightText';

type RatingsProps = {
  name: string;
  className?: string;
  difference: string;
  value: number;
};

function Ratings(props: RatingsProps): React.JSX.Element {
  return (
    <div className={`${props.className ?? ''} d-flex me-3`}>
      <span className='me-1'>
        {props.name} {props.value.toFixed(2)}
      </span>
      <LightText text={props.difference} fontSize='14px'/>
    </div>
  );
}

export default Ratings;
