// компонент даты, можно усложнить задав тип даты, тем самым упрявлять вилом отображения,
// например ДД.ММ.ГГГГ или ДД мммм ГГГГ

import React from 'react';
import LightText from './LightText';

type DateProps = {
  date: Date;
};

function DateComponent(props: DateProps): React.JSX.Element {
  return <LightText text={props.date.toLocaleDateString()} />;
}

export default DateComponent;
