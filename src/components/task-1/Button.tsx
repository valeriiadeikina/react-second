import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ButtonProps = Record<string, any>;

export default function Button(props: ButtonProps): React.JSX.Element {
  return <a {...props}>Go somewhere</a>;
}
