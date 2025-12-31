
import React from 'react';
import { EXPERIENCES, EDUCATION } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="pt-32 pb-12 px-6 max-w-6xl mx-auto animate-in slide-in-from-bottom-8 duration-700">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-32">
        {/* Experience Section */}
        <section>
          <h2 className="text-sm font-black text-blue-600 mb-12 uppercase tracking-[0.4em] flex items-center gap-6">
            Work History <span className="h-[2px] bg-blue-600 flex-1"></span>
          </h2>
          
          <div className="space-y-20">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="group">
                <div className="text-3xl font-black text-blue-600 mb-3 tracking-tighter leading-tight">
                  {exp.role} 
                  <span className="text-zinc-600 mx-2">@</span>
                  <span className="text-blue-400">{exp.company}</span>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-black bg-zinc-900 px-3 py-1 rounded-full text-zinc-400 tracking-widest uppercase border border-zinc-800">
                    {exp.timeRange}
                  </span>
                  <div className="h-10 w-10 rounded-lg overflow-hidden border border-zinc-800 grayscale group-hover:grayscale-0 transition-all">
                    <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-xl text-zinc-400 font-medium leading-relaxed tracking-tight">
                  Leading initiatives in <span className="text-blue-600 font-bold">product strategy</span> and functional execution across global teams.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section>
          <h2 className="text-sm font-black text-blue-600 mb-12 uppercase tracking-[0.4em] flex items-center gap-6">
            Education <span className="h-[2px] bg-blue-600 flex-1"></span>
          </h2>
          
          <div className="space-y-20">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="group">
                <div className="text-3xl font-black text-blue-600 mb-3 tracking-tighter leading-tight">
                  {edu.degree}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-blue-400 font-black text-lg">{edu.school}</span>
                  <span className="text-xs font-black bg-zinc-900 px-3 py-1 rounded-full text-zinc-400 tracking-widest uppercase border border-zinc-800">
                    {edu.timeRange}
                  </span>
                </div>
                <p className="text-xl text-zinc-400 font-medium leading-relaxed tracking-tight">
                  Focusing on the intersection of <span className="text-blue-600 font-bold">management</span> and <span className="text-blue-600 font-bold">digital culture</span>.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-48 pb-12 text-center">
        <p className="text-zinc-500 text-xs font-black uppercase tracking-widest">
          Continuous Learning • 2025
        </p>
      </footer>
    </div>
  );
};

export default Experience;