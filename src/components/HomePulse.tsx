import React from 'react';
import { HomePulseData } from '../types';
import { Cpu, Users, CalendarCheck, ShieldCheck } from 'lucide-react';

interface HomePulseProps {
  data: HomePulseData;
}

export const HomePulse: React.FC<HomePulseProps> = ({ data }) => {
  const metrics = [
    {
      id: 'devices',
      value: `0${data.connectedDevices}`,
      label: 'Connected devices',
      icon: Cpu,
      subtext: '4 active simulated spaces',
      accentColor: 'text-cerulean-bright',
      borderColor: 'border-border-dark hover:border-cerulean-blue/50',
    },
    {
      id: 'people',
      value: `0${data.peopleHome}`,
      label: 'People home',
      icon: Users,
      subtext: 'Alex & Maya detected',
      accentColor: 'text-neon-rose-bright',
      borderColor: 'border-border-dark hover:border-neon-rose/50',
    },
    {
      id: 'routines',
      value: `0${data.routinesToday}`,
      label: 'Routines today',
      icon: CalendarCheck,
      subtext: '3 triggered smoothly',
      accentColor: 'text-cerulean-soft',
      borderColor: 'border-border-dark hover:border-cerulean-soft/50',
    },
    {
      id: 'readiness',
      value: `${data.homeReadiness}%`,
      label: 'Home readiness',
      icon: ShieldCheck,
      subtext: 'All simulated systems nominal',
      accentColor: 'text-success',
      borderColor: 'border-border-dark hover:border-success/50',
    },
  ];

  return (
    <section className="pt-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white-soft font-sans tracking-tight">
            Home pulse
          </h3>
          <p className="text-xs text-muted-white">
            Real-time telemetry aggregated from simulated nodes.
          </p>
        </div>
        <p className="text-[11px] font-mono text-muted-blue-gray mt-1 sm:mt-0">
          Based on simulated household signals.
        </p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              className={`p-4 rounded-card bg-surface-black border ${m.borderColor} transition-all duration-200 group flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-white">
                  {m.label}
                </span>
                <Icon className={`w-4 h-4 ${m.accentColor}`} />
              </div>

              <div className="my-2">
                <span className={`text-2xl sm:text-3xl font-bold font-mono tracking-tight ${m.accentColor}`}>
                  {m.value}
                </span>
              </div>

              <div className="text-[11px] text-muted-blue-gray font-mono">
                {m.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
