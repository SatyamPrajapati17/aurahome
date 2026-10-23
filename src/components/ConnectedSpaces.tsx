import React from 'react';
import { Device } from '../types';
import { Tv, ShieldCheck, Volume2, Laptop, ExternalLink, ChevronRight } from 'lucide-react';

interface ConnectedSpacesProps {
  devices: Device[];
  onSelectDevice: (device: Device) => void;
}

export const ConnectedSpaces: React.FC<ConnectedSpacesProps> = ({ devices, onSelectDevice }) => {
  const getDeviceIcon = (icon: Device['icon']) => {
    switch (icon) {
      case 'tv':
        return Tv;
      case 'shield':
        return ShieldCheck;
      case 'speaker':
        return Volume2;
      case 'laptop':
        return Laptop;
      default:
        return Tv;
    }
  };

  const getStatusStyles = (type: Device['statusType']) => {
    switch (type) {
      case 'ready':
        return {
          dot: 'bg-cerulean-bright',
          badge: 'bg-cerulean-blue/15 text-cerulean-bright border-cerulean-blue/30',
        };
      case 'secure':
        return {
          dot: 'bg-success',
          badge: 'bg-success/15 text-success border-success/30',
        };
      case 'available':
        return {
          dot: 'bg-cerulean-soft',
          badge: 'bg-cerulean-blue/10 text-cerulean-soft border-cerulean-blue/20',
        };
      case 'quiet':
        return {
          dot: 'bg-neon-rose-bright',
          badge: 'bg-neon-rose/15 text-neon-rose-bright border-neon-rose/30',
        };
      default:
        return {
          dot: 'bg-cerulean-bright',
          badge: 'bg-cerulean-blue/15 text-cerulean-bright border-cerulean-blue/30',
        };
    }
  };

  return (
    <section className="aura-panel p-5 sm:p-6 bg-surface-black border-border-dark shadow-panel-soft">
      {/* Header */}
      <div className="pb-3 border-b border-border-dark/60 flex items-center justify-between gap-2">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cerulean-bright animate-pulse" />
            <h3 className="text-base font-semibold text-white-soft font-sans tracking-tight">
              Connected spaces
            </h3>
          </div>
          <p className="text-xs text-muted-white mt-0.5">
            Simulated household endpoints
          </p>
        </div>
        <span className="text-[10px] font-mono text-muted-blue-gray px-2 py-0.5 rounded bg-surface-elevated border border-border-dark/60 shrink-0">
          Offline mock
        </span>
      </div>

      {/* Device List (Fluid 1-col in sidebar, 2-col on wider viewports) */}
      <div className="mt-3.5 space-y-2.5">
        {devices.map((device) => {
          const Icon = getDeviceIcon(device.icon);
          const styles = getStatusStyles(device.statusType);

          return (
            <div
              key={device.id}
              onClick={() => onSelectDevice(device)}
              className="p-3 sm:p-3.5 rounded-xl bg-surface-elevated/70 hover:bg-surface-elevated border border-border-dark hover:border-cerulean-blue/50 transition-all duration-200 group flex items-center justify-between cursor-pointer"
            >
              {/* Left: Icon & Info */}
              <div className="flex items-center space-x-3 min-w-0 pr-2">
                <div className="p-2 rounded-xl bg-surface-black border border-border-dark text-cerulean-soft group-hover:text-cerulean-bright group-hover:border-cerulean-blue/40 transition-colors shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-semibold text-white-soft group-hover:text-cerulean-bright transition-colors truncate">
                      {device.location}
                    </span>
                    <span className="text-[10px] text-muted-blue-gray hidden sm:inline truncate">
                      · {device.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-white truncate mt-0.5">
                    {device.name}
                  </p>
                </div>
              </div>

              {/* Right: State Badge & Inspect Icon */}
              <div className="flex items-center space-x-2 shrink-0">
                <span
                  className={`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold border ${styles.badge}`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${styles.dot} animate-pulse`} />
                  <span>{device.state}</span>
                </span>
                
                <ChevronRight className="w-3.5 h-3.5 text-muted-blue-gray group-hover:text-cerulean-bright group-hover:translate-x-0.5 transition-all" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="mt-3.5 pt-2.5 border-t border-border-dark/40 flex items-center justify-between text-[11px] text-muted-blue-gray font-mono">
        <span>Click space to inspect</span>
        <span>4 Active Nodes</span>
      </div>
    </section>
  );
};
