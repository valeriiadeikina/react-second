import React from 'react';

type ToolbarProps = {
  filters: string[];
  selected: string;
  onSelectFilter: (filter: string) => void;
};

export default function Toolbar({
  filters,
  selected,
  onSelectFilter,
}: ToolbarProps): React.JSX.Element {
  return (
    <div>
      {filters.map((item) => (
        <button
          key={item}
          className={`${selected === item ? 'selected' : ''} filter_style`}
          onClick={() => onSelectFilter(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
