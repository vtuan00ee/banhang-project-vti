import { useState, useEffect } from 'react';
import { Clock as ClockIcon } from 'lucide-react';

export function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
            <ClockIcon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-slate-800">Live Time</h3>
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent tabular-nums">
            {formatTime(time)}
          </div>
          <div className="text-sm text-slate-600">
            {formatDate(time)}
          </div>
        </div>
      </div>
    </div>
  );
}
