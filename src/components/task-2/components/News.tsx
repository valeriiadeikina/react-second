// Отвечает за отображение заголовков новостей, которые являются ссылками на первоисточник

import React from 'react';
import { Link } from 'react-router-dom';

type NewsProps = {
  title: string;
  className?: string;
  to: string;
  imgSrc: string;
  imgName: string;
};

function News(props: NewsProps): React.JSX.Element {
  return (
    <div className={`${props.className ?? ''} d-flex`}>
      <img src={props.imgSrc} alt={props.imgName} width={30} height={30} />
      <Link to={props.to}>{props.title}</Link>
    </div>
  );
}

export default News;
