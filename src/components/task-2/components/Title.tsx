// компонент заголовков, т.к. они довольно часто встречаюся и являются однотипными,
// при этом не являются главными заголовками, так как не имеют такоговой смысловой нагрузки
import React from 'react';

type TitleProps = {
  title: string;
  className?: string;
};

function Title(props: TitleProps): React.JSX.Element {
  return <h3 className={props.className}>{props.title}</h3>;
}

export default Title;
