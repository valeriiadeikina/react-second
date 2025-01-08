// кнопка может быть переиспользована, без состояния, 
// функция онклик передается извне, что позволяет ей задать различное поведение, в зависимости он наздачения
import React from 'react';

type ButtonProps = {
  title: string;
  className?: string;
  onClick: () => void;
};

function ButtonComponent(props: ButtonProps): React.JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.title}
    </button>
  );
}

export default ButtonComponent;
