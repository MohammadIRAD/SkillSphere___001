
import React from 'react';
import Card from '../components/Card';
import { getPortfolioProjects } from '../services/api';
import type { Project } from '../types';
import { useAuth } from '../hooks/useAuth';

const PortfolioPage: React.FC = () => {
  const projects = getPortfolioProjects();
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-4xl font-bold">{user?.name}'s Portfolio</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">A collection of my best work and projects.</p>
        </div>
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors">
            Add New Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: Project) => (
          <Card key={project.id} title={project.title} imageUrl={project.imageUrl} footerContent={
             <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                View Project
             </a>
          }>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2.5 py-0.5 rounded-full">{tag}</span>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
