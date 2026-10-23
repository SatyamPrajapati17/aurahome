import React, { useState } from 'react';
import { Activity } from '../types';
import { Clock } from 'lucide-react';

interface RecentActivityProps {
  activities: Activity[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  const [filter, setFilter] = useState<'all' | 'security' | 'entertainment' | 'household'>('all');

  const filteredActivities = activities.filter((act) => {
    if (filter === 'all') return true;
    return act.category === filter;
  });

  const getTypeStyles = (type: Activity['type']) => {
    switch (type) {
      case 'attention':
        return {
          bullet: 'bg-neon-rose border-neon-rose-bright ring-neon-rose/20',
          badge: 'bg-neon-rose/15 text-neon-rose-bright border-neon-rose/30',
          time: 'text-neon-rose-soft',
        };
      case 'completed':
        return {
          bullet: 'bg-success border-success ring-success/20',
          badge: 'bg-success/15 text-success border-success/30',
          time: 'text-success/90',
        };
      case 'normal':
      default:
        return {
          bullet: 'bg-cerulean-bright border-cerulean-blue ring-cerulean-blue/20',
          badge: 'bg-cerulean-blue/15 text-cerulean-soft border-cerulean-blue/30',
          time: 'text-cerulean-soft',
        };
    }
  };

  return (
    <section className="aura-panel p-5 sm:p-6 bg-surface-black border-border-dark flex flex-col justify-between shadow-panel-soft">
      <div>
        {/* Header */}
        <div className="pb-3 border-b border-border-dark/60">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-cerulean-bright" />
              <h3 className="text-base font-semibold text-white-soft font-sans tracking-tight">
                Recent activity
              </h3>
            </div>
            <span className="text-[10px] font-mono text-muted-blue-gray px-2 py-0.5 rounded bg-surface-elevated border border-border-dark/60">
              Live log
            </span>
          </div>

          <p className="text-xs text-muted-white mt-1">
            Simulated chronological household events
          </p>

          {/* Filter Pills in a dedicated row */}
          <div className="flex items-center space-x-1.5 mt-3 overflow-x-auto no-scrollbar pb-0.5">
            {(['all', 'security', 'entertainment', 'household'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-colors capitalize shrink-0 ${
                  filter === cat
                    ? 'bg-cerulean-blue text-white shadow-sm font-semibold'
                    : 'bg-surface-elevated text-muted-blue-gray hover:text-white-soft border border-border-dark/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Items */}
        <div className="mt-4 relative before:absolute before:left-2.5 before:top-2 before:bottom-3 before:w-0.5 before:bg-border-dark/80">
          <div className="space-y-4">
            {filteredActivities.map((act) => {
              const styles = getTypeStyles(act.type);

              return (
                <div key={act.id} className="relative pl-7 group">
                  {/* Timeline Node Bullet */}
                  <span
                    className={`absolute left-2.5 top-1 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 ring-4 ${styles.bullet} transition-transform group-hover:scale-125`}
                  />

                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h4 className="text-xs sm:text-sm font-semibold text-white-soft group-hover:text-cerulean-bright transition-colors">
                          {act.title}
                        </h4>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full border uppercase tracking-wider font-semibold ${styles.badge}`}>
                          {act.tag}
                        </span>
                      </div>
                    </div>

                    <span className={`text-[10px] sm:text-[11px] font-mono font-medium ${styles.time} shrink-0`}>
                      {act.time}
                    </span>
                  </div>

                  <p className="text-xs text-muted-white mt-1 leading-relaxed">
                    {act.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-5 pt-3 border-t border-border-dark/40 flex items-center justify-between text-[11px] text-muted-blue-gray font-mono">
        <span>Deterministic log</span>
        <span>Buffer (last 24h)</span>
      </div>
    </section>
  );
};
