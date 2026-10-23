import React from 'react';
import { Sparkles, Users, Clock, Cpu } from 'lucide-react';
import { HomePulseData } from '../types';

interface HeroSectionProps {
  pulseData: HomePulseData;
  onOpenAssistantTab: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ pulseData, onOpenAssistantTab }) => {
  return (
    <section className="relative pt-3 pb-2 sm:pt-5 sm:pb-3">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left: Main Greeting & System Overview */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-black border border-border-dark text-[10px] sm:text-[11px] font-semibold tracking-wider text-muted-blue-gray uppercase mb-2 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-cerulean-bright"></span>
            <span>YOUR HOME, UNDERSTOOD</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white-soft font-sans leading-tight">
            Good evening, Alex.
          </h1>

          <p className="mt-1.5 text-sm sm:text-base text-muted-white max-w-xl font-normal leading-relaxed">
            Your home is calm, connected, and ready for what comes next.
          </p>

          <div className="mt-3 flex items-center space-x-3 text-xs text-muted-blue-gray font-mono">
            <span className="inline-flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span className="text-muted-white">All systems simulated</span>
            </span>
            <span className="text-border-dark">·</span>
            <span>Last synced just now</span>
          </div>
        </div>

        {/* Right: AURA Intelligence Card */}
        <div className="lg:col-span-5 flex">
          <div 
            onClick={onOpenAssistantTab}
            className="w-full aura-panel p-4 sm:p-5 bg-gradient-to-br from-surface-black via-surface-elevated/80 to-surface-black border border-border-dark hover:border-cerulean-blue/50 transition-all cursor-pointer group shadow-panel-soft flex flex-col justify-between"
          >
            <div>
              {/* Header inside card */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cerulean-bright animate-pulse" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-cerulean-bright">
                    AURA intelligence
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-cerulean-blue/15 text-cerulean-soft border border-cerulean-blue/30 font-medium">
                  Simulation Active
                </span>
              </div>

              {/* Status & Pulse Indicator */}
              <div className="mt-3 flex items-center space-x-3.5">
                <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-surface-elevated border border-cerulean-blue/30 group-hover:border-cerulean-bright transition-colors shadow-cerulean-glow">
                  <span className="absolute inset-0 rounded-2xl bg-cerulean-bright/15 animate-ping opacity-75"></span>
                  <Sparkles className="w-5 h-5 text-cerulean-bright group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white-soft">
                    Ready to help
                  </h3>
                  <p className="text-xs text-muted-blue-gray">
                    Listening for the next useful thing.
                  </p>
                </div>
              </div>
            </div>

            {/* Small status indicators row */}
            <div className="mt-4 pt-3 border-t border-border-dark/60 grid grid-cols-3 gap-2 text-center">
              <div className="p-1.5 sm:p-2 rounded-xl bg-surface-black/60 border border-border-dark/40">
                <div className="flex items-center justify-center space-x-1 text-xs font-semibold text-white-soft">
                  <Cpu className="w-3.5 h-3.5 text-cerulean-soft" />
                  <span>{pulseData.connectedDevices}</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-blue-gray mt-0.5">devices</div>
              </div>

              <div className="p-1.5 sm:p-2 rounded-xl bg-surface-black/60 border border-border-dark/40">
                <div className="flex items-center justify-center space-x-1 text-xs font-semibold text-white-soft">
                  <Users className="w-3.5 h-3.5 text-neon-rose-soft" />
                  <span>{pulseData.peopleHome}</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-blue-gray mt-0.5">people home</div>
              </div>

              <div className="p-1.5 sm:p-2 rounded-xl bg-surface-black/60 border border-border-dark/40">
                <div className="flex items-center justify-center space-x-1 text-xs font-semibold text-white-soft">
                  <Clock className="w-3.5 h-3.5 text-cerulean-bright" />
                  <span>1</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-muted-blue-gray mt-0.5">scheduled</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
