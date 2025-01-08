// поисковая строка, содержит в себе логотип, инпут и кнопку поиска

import React from 'react';
import Logo from './Logo';
import ButtonComponent from './ButtonComponent';

function Searching(): React.JSX.Element {
  return (
    <div className="d-flex">
      <Logo width={'100'} height={'80'} />
      <input style={{ height: '80px', width: '100%' }} type="text" />
      <ButtonComponent
        title="Найти"
        onClick={() => {
          console.log('clicked');
        }}
      />
    </div>
  );
}

export default Searching;
