
import React from 'react';
import { PROJECTS } from '../constants';
import ProfileHeader from '../components/ProfileHeader';

const Projects: React.FC = () => {
  return (
    <div className="pt-24 pb-12 px-6 max-w-md mx-auto animate-in slide-in-from-bottom-4 duration-700">
      <ProfileHeader />
      
      <h1 className="text-4xl font-extrabold tracking-tight text-blue-600 mb-10">
        Projects
      </h1>
      
      <div className="space-y-16">
        {PROJECTS.map((project) => (
          <article key={project.id} className="group">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 mb-6 group-hover:border-blue-600 transition-colors">
              <img 
                src={project.imageUrl} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-blue-600 mb-3 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h2>
              <p className="text-zinc-400 leading-relaxed font-normal">
                {project.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-blue-400 font-bold text-sm tracking-wide uppercase">
                View Experiment
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="mt-24 pt-8 border-t border-zinc-900 text-center">
        <p className="text-zinc-500 text-sm font-medium">© 2025 Sophia Wu</p>
      </footer>
    </div>
  );
};

export default Projects;