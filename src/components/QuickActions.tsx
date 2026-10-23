import React from 'react';
import { Film, LogOut, Moon, Megaphone, ArrowUpRight } from 'lucide-react';

interface QuickActionsProps {
  onSelectAction: (query: string) => void;
  isLoading: boolean;
}

export const QuickActions: React.FC<QuickActionsProps> = ({ onSelectAction, isLoading }) => {
  const actions = [
    {
      id: 'movie-night',
      title: 'Movie night',
      description: 'Set the room and find something to watch',
      query: 'Start movie night',
      icon: Film,
      badge: 'Cinema Ambiance',
      accent: 'cerulean',
      gradient: 'from-cerulean-blue/15 to-transparent',
      borderColor: 'border-cerulean-blue/40 hover:border-cerulean-bright',
      iconColor: 'text-cerulean-bright',
    },
    {
      id: 'leaving-home',
      title: 'Leaving home',
      description: 'Check doors, lights, and household status',
      query: 'Leaving home',
      icon: LogOut,
      badge: 'Perimeter Guard',
      accent: 'rose',
      gradient: 'from-neon-rose/15 to-transparent',
      borderColor: 'border-neon-rose/40 hover:border-neon-rose',
      iconColor: 'text-neon-rose-bright',
    },
    {
      id: 'quiet-time',
      title: 'Quiet time',
      description: 'Reduce interruptions after 9:00 PM',
      query: 'Create quiet-time routine',
      icon: Moon,
      badge: 'Evening Automation',
      accent: 'cerulean',
      gradient: 'from-cerulean-blue/10 to-transparent',
      borderColor: 'border-border-dark hover:border-cerulean-soft',
      iconColor: 'text-cerulean-soft',
    },
    {
      id: 'dinner-announcement',
      title: 'Dinner announcement',
      description: 'Let everyone know when it is ready',
      query: 'Announce dinner is ready',
      icon: Megaphone,
      badge: 'Multi-Room Audio',
      accent: 'rose',
      gradient: 'from-neon-rose/10 to-transparent',
      borderColor: 'border-border-dark hover:border-neon-rose-soft',
      iconColor: 'text-neon-rose-soft',
    },
  ];

  return (
    <section className="pt-2">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white-soft font-sans tracking-tight">
            Common moments
          </h3>
          <p className="text-xs text-muted-white">
            Pre-orchestrated household scenes with single-click execution.
          </p>
        </div>
        <span className="text-[11px] font-mono text-muted-blue-gray hidden sm:inline">
          Simulated Triggers
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSelectAction(item.query)}
              disabled={isLoading}
              className={`text-left p-4 rounded-card bg-surface-black border ${item.borderColor} bg-gradient-to-b ${item.gradient} hover:shadow-panel-soft transition-all duration-200 group relative flex flex-col justify-between disabled:opacity-50`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl bg-surface-elevated border border-border-dark ${item.iconColor} group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-surface-elevated text-muted-blue-gray border border-border-dark uppercase tracking-wider">
                      {item.badge}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-blue-gray group-hover:text-white-soft transition-colors" />
                  </div>
                </div>

                <h4 className="text-sm font-semibold text-white-soft group-hover:text-cerulean-bright transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-white mt-1 leading-snug">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-border-dark/40 flex items-center justify-between text-[11px]">
                <span className="text-muted-blue-gray">Click to coordinate</span>
                <span className="font-semibold text-cerulean-bright opacity-0 group-hover:opacity-100 transition-opacity">
                  Run simulated →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
