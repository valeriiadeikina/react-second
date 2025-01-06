import React from 'react';

type IconSwitchProps = {
  icon: string;
  onSwitch: (typeIcon: string) => void;
};

export default function IconSwitch({ icon, onSwitch }: IconSwitchProps): React.JSX.Element {
  return (
    <div className='icon_container'>
      <i className="material-icons icon" onClick={() => onSwitch(icon)}>
        {icon}
      </i>
    </div>
  );
}

