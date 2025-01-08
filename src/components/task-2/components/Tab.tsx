// Здесь формируются табы, которые представляют из себя ссылки на какой то контент, табы используют компонент Title 
import React from 'react';
import Title from './Title';

type TabProps = {
  title: string;
  className?: string;
  to: string;
  type?: 'big' | 'medium' | 'small';
};

function Tab(props: TabProps): React.JSX.Element {
  return (
    <a href={props.to} className={`${props.className ?? ''} ${props.type ?? 'medium'}-title me-4`}>
      <Title title={props.title} />
    </a>
  );
}

export default Tab;
