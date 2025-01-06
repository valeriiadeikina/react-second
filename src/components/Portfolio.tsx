import React, { useState } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { data } from '../data';

export default function Portfolio(): React.JSX.Element {
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [projects, setProjects] = useState(data);

  const onSelectFilterHandler = (filter: string): void => {
    setSelectedFilter(filter);

    if (filter === 'All') {
      setProjects(data);
    } else {
      setProjects(data.filter((item) => item.category === filter));
    }
  };

  return (
    <div>
      <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={onSelectFilterHandler} />
      <ProjectList projects={projects} />
    </div>
  );
}
