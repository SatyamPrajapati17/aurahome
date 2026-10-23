import React from 'react';
import { Routine } from '../types';
import { Film, Moon, Sun, DoorClosed, Play, Clock, ListChecks } from 'lucide-react';

interface RoutinesViewProps {
  routines: Routine[];
  onToggleRoutine: (routineId: string) => void;
  onRunRoutine: (routineId: string) => void;
  isLoading: boolean;
}

export const RoutinesView: React.FC<RoutinesViewProps> = ({
  routines,
  onToggleRoutine,
  onRunRoutine,
  isLoading,
}) => {
  const getRoutineIcon = (icon: Routine['icon']) => {
    switch (icon) {
      case 'film':
        return Film;
      case 'moon':
        return Moon;
      case 'sun':
        return Sun;
      case 'door-closed':
        return DoorClosed;
      default:
        return Film;
    }
  };

  return (
    <section className="aura-panel p-5 sm:p-7 bg-surface-black border-border-dark shadow-panel-soft">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-border-dark/60 gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cerulean-bright animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white-soft font-sans tracking-tight">
              Household routines
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-white mt-1">
            Configure, toggle, or simulate multi-action sequences with transparent device execution.
          </p>
        </div>

        <span className="text-xs font-mono text-muted-blue-gray self-start sm:self-auto px-3 py-1 rounded-full bg-surface-elevated border border-border-dark">
          4 Simulated Automations
        </span>
      </div>

      {/* Routine Cards Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {routines.map((routine) => {
          const Icon = getRoutineIcon(routine.icon);

          return (
            <div
              key={routine.id}
              className={`p-5 rounded-2xl bg-surface-elevated border transition-all duration-200 flex flex-col justify-between ${
                routine.enabled
                  ? 'border-border-dark hover:border-cerulean-blue/60 bg-gradient-to-br from-surface-elevated to-surface-black'
                  : 'border-border-dark/40 opacity-70 bg-surface-black'
              }`}
            >
              <div>
                {/* Top Row: Icon, Name & Toggle */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-xl bg-surface-black border border-border-dark text-cerulean-bright">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white-soft">
                        {routine.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-muted-blue-gray mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>{routine.schedule}</span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Switch */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={routine.enabled}
                      onChange={() => onToggleRoutine(routine.id)}
                      className="sr-only peer"
                      aria-label={`Toggle ${routine.name}`}
                    />
                    <div className="w-11 h-6 bg-surface-black peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border-dark after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cerulean-blue border border-border-dark" />
                  </label>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-muted-white mt-3 leading-relaxed">
                  {routine.description}
                </p>

                {/* Action Items count & preview */}
                <div className="mt-4 pt-3 border-t border-border-dark/50 space-y-2">
                  <div className="flex items-center justify-between text-xs text-muted-blue-gray">
                    <span className="flex items-center space-x-1.5">
                      <ListChecks className="w-3.5 h-3.5 text-cerulean-soft" />
                      <span className="font-medium text-white-soft">{routine.actionCount} coordinated actions</span>
                    </span>
                    {routine.lastTriggered && (
                      <span className="font-mono text-[11px]">{routine.lastTriggered}</span>
                    )}
                  </div>

                  <ul className="space-y-1 text-xs text-muted-white/80">
                    {routine.actionsList.slice(0, 2).map((act, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cerulean-bright shrink-0" />
                        <span className="truncate">{act}</span>
                      </li>
                    ))}
                    {routine.actionsList.length > 2 && (
                      <li className="text-[11px] text-muted-blue-gray pl-3.5">
                        + {routine.actionsList.length - 2} more actions in sequence
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Bottom: Run Now button */}
              <div className="mt-5 pt-3 border-t border-border-dark/50 flex items-center justify-between">
                <span className="text-[11px] text-muted-blue-gray font-mono">
                  {routine.enabled ? 'Ready to trigger' : 'Disabled'}
                </span>

                <button
                  onClick={() => onRunRoutine(routine.id)}
                  disabled={isLoading}
                  className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-cerulean-blue hover:bg-cerulean-bright text-white text-xs font-semibold shadow-sm transition-all disabled:opacity-50"
                  aria-label={`Run ${routine.name} now`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Run now</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
