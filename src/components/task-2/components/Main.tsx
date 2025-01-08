// компонент собирается из простых компонентов не содержащих в себе состояние,
// отсюда полученные данные раздаюся последующим компонентам

/* eslint-disable react/no-array-index-key */
import React from 'react';
import Tab from './Tab';
import Searching from './Searching';
import LightText from './LightText';

const mockTabs = [
  { title: 'Видео', to: '#' },
  { title: 'Картинки', to: '#' },
  { title: 'Новости', to: '#' },
  { title: 'Карты', to: '#' },
  { title: 'Маркет', to: '#' },
  { title: 'Переводчик', to: '#' },
  { title: 'Эфир', to: '#' },
  { title: 'ещё', to: '#' },
];

const mockSearch = 'фаза луны сегодня';
function Main(): React.JSX.Element {
  return (
    <div>
      <div className="d-flex">
        {mockTabs.map((tab, i) => (
          <Tab {...tab} key={i} type="small" />
        ))}
      </div>
      <Searching />
      <div className="d-flex">
        <span>Найдется всё. Например,</span>
        <LightText text={mockSearch} />
      </div>
      <div>тут 5 виджетов</div>
    </div>
  );
}

export default Main;
