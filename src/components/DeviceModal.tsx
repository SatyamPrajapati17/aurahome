import React from 'react';
import { X, Tv, ShieldCheck, Volume2, Laptop, CheckCircle2, Play } from 'lucide-react';
import { Device } from '../types';

interface DeviceModalProps {
  device: Device | null;
  onClose: () => void;
  onSimulatePing: (device: Device) => void;
}

export const DeviceModal: React.FC<DeviceModalProps> = ({ device, onClose, onSimulatePing }) => {
  if (!device) return null;

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

  const Icon = getDeviceIcon(device.icon);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-jet-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-lg bg-surface-black border border-border-dark rounded-panel p-6 shadow-2xl relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="device-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close device dialog"
          className="absolute top-5 right-5 p-2 rounded-xl bg-surface-elevated text-muted-white hover:text-white-soft border border-border-dark transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-3 rounded-2xl bg-surface-elevated border border-cerulean-bright/40 text-cerulean-bright">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-blue-gray">
              {device.location} · {device.category}
            </div>
            <h3 id="device-modal-title" className="text-xl font-bold text-white-soft">
              {device.name}
            </h3>
          </div>
        </div>

        {/* Telemetry Grid */}
        <div className="grid grid-cols-2 gap-3 my-4">
          <div className="p-3 rounded-xl bg-surface-elevated border border-border-dark">
            <span className="text-[10px] text-muted-blue-gray uppercase tracking-wider block font-medium">
              Simulation State
            </span>
            <span className="text-sm font-semibold text-cerulean-bright mt-0.5 block">
              {device.state}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-surface-elevated border border-border-dark">
            <span className="text-[10px] text-muted-blue-gray uppercase tracking-wider block font-medium">
              Power Source
            </span>
            <span className="text-sm font-semibold text-white-soft mt-0.5 block">
              {device.batteryOrPower || 'Simulated Power'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-surface-elevated border border-border-dark">
            <span className="text-[10px] text-muted-blue-gray uppercase tracking-wider block font-medium">
              Simulated Signal
            </span>
            <span className="text-sm font-semibold text-white-soft mt-0.5 block">
              {device.signalStrength || 'Local Loopback'}
            </span>
          </div>

          <div className="p-3 rounded-xl bg-surface-elevated border border-border-dark">
            <span className="text-[10px] text-muted-blue-gray uppercase tracking-wider block font-medium">
              Hardware Binding
            </span>
            <span className="text-sm font-semibold text-success mt-0.5 block">
              Simulated Offline
            </span>
          </div>
        </div>

        {/* Capabilities List */}
        <div className="mt-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-blue-gray block mb-2">
            Simulated Device Capabilities
          </span>
          <div className="flex flex-wrap gap-2">
            {device.capabilities.map((cap, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-surface-elevated text-xs text-muted-white border border-border-dark flex items-center space-x-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-cerulean-soft" />
                <span>{cap}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-border-dark flex items-center justify-between">
          <span className="text-[11px] text-muted-blue-gray font-mono">
            Last update: {device.lastUpdate}
          </span>

          <button
            onClick={() => {
              onSimulatePing(device);
              onClose();
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-cerulean-blue hover:bg-cerulean-bright text-white text-xs font-semibold shadow-sm transition-all"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Simulate device ping</span>
          </button>
        </div>
      </div>
    </div>
  );
};
