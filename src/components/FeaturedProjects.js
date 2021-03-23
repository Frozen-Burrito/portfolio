import React from 'react';

import ProjectCard from './ProjectCard';

export default function FeaturedProjects() {

  const projects = [
    {title: 'A Cool Website', stack: 'Flask, PostgreSQL', description: 'lorem ipsum dolo sic amet.'},
    {title: 'Some Videogame', stack: 'Unity, C#, Blender', description: 'lorem ipsum dolo sic amet.'},
    {title: 'Steam API', stack: 'NodeJs, MongoDB, JavaScript', description: 'lorem ipsum dolo sic amet.'},
  ];

  const projectList = projects.map(project => (
    <ProjectCard project={project} size="tall"/>
  ));

  return (
    <div>
      { projectList }
    </div>
  );
}