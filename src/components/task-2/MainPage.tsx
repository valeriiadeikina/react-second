// компонент собирает все бизнес модули

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';

export default function MainPage(): React.JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <footer>footer не видно на макете, но пусть будет</footer>
    </>
  );
}
