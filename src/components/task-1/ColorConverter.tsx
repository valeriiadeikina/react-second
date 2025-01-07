import React, { useState } from 'react';

const hexToRgb = (hex: string): string => {
  hex = hex.replace(/^#/, '');

  if (hex.length !== 6) {
    return '';
  }

  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);

  return `rgb(${r.toString()}, ${g.toString()}, ${b.toString()})`;
};

export default function ColorConverter(): React.JSX.Element {
  const [background, setBackground] = useState('#');
  const [error, setError] = useState(false);
  const [rgbValue, setRgbValue] = useState('');

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setError(false);
    setBackground(value);
    
    if (value.length === 7) {
      if (value.startsWith('#') && /^[0-9A-Fa-f]{6}$/.test(value.slice(1))) {
        const rgbValue2 = hexToRgb(value);

        if (rgbValue2) {
          setError(false); 
          setRgbValue(rgbValue2); 
        }
      } else {
        setError(true);
        setRgbValue(''); 
      }
    } else {
      setRgbValue('');
    }
  };

  return (
    <div style={{ backgroundColor: rgbValue || 'transparent', height: '100vh', padding: '20px' }}>
      <input
        style={{ width: '320px', padding: '10px', fontSize: '16px' }}
        type="text"
        value={background}
        onChange={inputChangeHandler}
        placeholder="Введите код цвета начинающийся с #"
        maxLength={7}
      />
      <div
        style={{
          width: '320px',
          backgroundColor: 'lightgrey',
          height: '30px',
          border: 'solid 2px black',
          padding: '3px',
          marginTop: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {error ? 'Ошибка!' : rgbValue || 'Введите HEX-код'}
      </div>
    </div>
  );
}
