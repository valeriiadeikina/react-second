// компонент собирается из простых компонентов не содержащих в себе состояние,
// отсюда полученные данные раздаюся последующим компонентам

/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Tab from './Tab';
import DateComponent from './DateComponent';
import News from './News';
import Ratings from './Ratings';

const mockData = [
  { title: 'Сейчас в Сми', to: '#' },
  { title: 'в Германии', to: '#' },
  { title: 'Рекомендуем', to: '#' },
];

const mockData2 = [
  {
    title: '"Под строгим запретом". Почему Святки отмечают неправильно',
    to: '#',
    imgSrc: 'https://logowik.com/content/uploads/images/ria-novosti3114.logowik.com.webp',
    imgName: 'sdbfkh',
  },
  {
    title: 'Лови чудо! Куда и когда ехать за полярным сиянием',
    to: '#',
    imgSrc: 'https://logowik.com/content/uploads/images/ria-novosti3114.logowik.com.webp',
    imgName: 'sdbfkh',
  },
  {
    title: 'Новогодние праздники в 2025 году',
    to: '#',
    imgSrc: 'https://logowik.com/content/uploads/images/ria-novosti3114.logowik.com.webp',
    imgName: 'sdbfkh',
  },
  {
    title: 'Елочные базары в Москве-2024',
    to: '#',
    imgSrc: 'https://logowik.com/content/uploads/images/ria-novosti3114.logowik.com.webp',
    imgName: 'sdbfkh',
  },
];

const mockData3 = [
  { name: 'USD MOEX', value: 63.56452, difference: '+0,09' },
  { name: 'EUR MOEX', value: 70.86, difference: '+0,19' },
  { name: 'НЕФТЬ', value: 65.56452, difference: '+1,85%' },
];

function Header(): React.JSX.Element {
  return (
    <div>
      <div className="d-flex align-center">
        {mockData.map((link, i) => (
          <Tab {...link} type='big' key={`#${i}`} />
        ))}
        <DateComponent date={new Date()} />
      </div>
      <div>
        {mockData2.map((news, i) => (
          <News {...news} key={`#${i}`} />
        ))}
      </div>
      <div className="d-flex align-center">
        {mockData3.map((rating, i) => (
          <Ratings {...rating} key={`#${i}`} />
        ))}
      </div>
    </div>
  );
}

export default Header;
