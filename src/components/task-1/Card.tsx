import type { PropsWithChildren } from 'react';
import React from 'react';

export default function Card({ children }: PropsWithChildren): React.JSX.Element {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">{children}</div>
    </div>
  );
}
