import React from 'react';
import type { TProject } from '../types';

type ProjectListProps = {
  projects: TProject[];
};

export default function ProjectList({ projects }: ProjectListProps): React.JSX.Element {
  return (
    <div className="gallery">
      {projects.map((project, i) => (
        <img
          key={project.img + i.toString()}
          src={project.img}
          alt={`картиночка ${i.toString()}`}
          data-category={project.category}
          className="gallery-item"
        />
      ))}
    </div>
  );
}
