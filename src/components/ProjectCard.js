import React from 'react';

export default function ProjectCard({ project={}, size }) {
  return (
    <div>
      <h4>{project.title}</h4>
      <h5>{project.stack}</h5>

      <p>{project.description}</p>
    </div>
  )
}