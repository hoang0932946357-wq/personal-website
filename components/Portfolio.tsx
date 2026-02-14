import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">精選案例</h2>
            <p className="text-slate-400">跨足自動化系統與音樂製作的實戰成果</p>
          </div>
          <button className="hidden md:block text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
            查看更多作品 &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-dark-800 rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
              {/* Image Container */}
              <div className="aspect-video w-full overflow-hidden bg-slate-800">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-indigo-300 uppercase bg-indigo-500/20 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  {project.link && (
                    <a href={project.link} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
                <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500 bg-dark-900 px-2 py-1 rounded border border-slate-800">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="text-indigo-400 hover:text-indigo-300 font-medium">
            查看更多作品 &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
