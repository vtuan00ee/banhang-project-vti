import { Sparkles, Zap, Palette, Code2 } from 'lucide-react';
import { Clock } from './components/Clock';
import { TechCard } from './components/TechCard';
import { FloatingParticles } from './components/FloatingParticles';

function App() {
  const technologies = [
    {
      icon: Code2,
      name: 'React 18',
      description: 'Modern UI library with hooks and concurrent features for building interactive interfaces',
      color: 'from-cyan-500 to-blue-500',
      delay: 0,
    },
    {
      icon: Zap,
      name: 'Vite 5',
      description: 'Lightning-fast build tool with instant hot module replacement and optimized production builds',
      color: 'from-blue-500 to-indigo-500',
      delay: 100,
    },
    {
      icon: Palette,
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development with beautiful, responsive designs',
      color: 'from-teal-500 to-cyan-500',
      delay: 200,
    },
    {
      icon: Sparkles,
      name: 'TypeScript',
      description: 'Strongly-typed JavaScript superset for safer code and better developer experience',
      color: 'from-blue-600 to-indigo-600',
      delay: 300,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <FloatingParticles />

      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
              <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl shadow-blue-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Sparkles className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-gradient">
                Hello World
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Experience the future of web development with cutting-edge technologies
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Production Ready
                </span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="text-sm font-semibold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Fully Responsive
                </span>
              </div>
              <div className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Modern Design
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Clock />
          </div>

          <div className="space-y-8">
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Technology Stack
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Built with the most powerful and modern web development tools
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>

          <div className="text-center space-y-6 pb-8">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 cursor-pointer group">
              <p className="text-white font-semibold text-lg group-hover:scale-105 transition-transform duration-300">
                Start Building Something Amazing
              </p>
            </div>
            <p className="text-sm text-slate-500">
              Made with React, Vite, Tailwind CSS & TypeScript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
