import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import { products } from '../../data';
import CardsView from './CardsView';

export default function Store(): React.JSX.Element {
  const [icon, setIcon] = useState('list');

  const switchHandler = (typeIcon: string): void => {
    if (typeIcon === 'list') {
      setIcon('view_comfy');
    } else {
      setIcon('list');
    }
  };

  return (
    <div>
      <IconSwitch icon={icon} onSwitch={switchHandler} />
      {icon === 'list' && <ListView items={products} />}
      {icon === 'view_comfy' && <CardsView cards={products} />}
    </div>
  );
}
