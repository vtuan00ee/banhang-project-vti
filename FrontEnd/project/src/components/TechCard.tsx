import { Video as LucideIcon } from 'lucide-react';

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  delay: number;
}

export function TechCard({ icon: Icon, name, description, color, delay }: TechCardProps) {
  return (
    <div
      className="group relative animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur`}></div>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
        <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>

        <h3 className="text-xl font-bold text-slate-800 mb-2">{name}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
