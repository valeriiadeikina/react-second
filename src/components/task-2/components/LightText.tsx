// светло серый текст, который часто встречается на странице и является некоторым уточнением к контенту

import React from 'react';

type LightTextProps = {
  text: string;
  fontSize?: string;
};

function LightText(props: LightTextProps): React.JSX.Element {
  return <p style={{ fontSize: props.fontSize ?? '16px', color: 'lightgray' }}>{props.text}</p>;
}

export default LightText;
