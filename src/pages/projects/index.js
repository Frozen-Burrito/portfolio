import React from 'react';

import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage() {

  const projects = [
    {title: 'A Cool Website', stack: 'Flask, PostgreSQL', description: 'lorem ipsum dolo sic amet.'},
    {title: 'Some Videogame', stack: 'Unity, C#, Blender', description: 'lorem ipsum dolo sic amet.'},
    {title: 'Steam API', stack: 'NodeJs, MongoDB, JavaScript', description: 'lorem ipsum dolo sic amet.'},
  ];

  const projectList = projects.map(project => (
    <ProjectCard project={project} size="medium"/>
  ));

  return (
    <Layout>
      <section>
        <h2>My Projects</h2>
        { projectList }
      </section>
    </Layout>
  );
}