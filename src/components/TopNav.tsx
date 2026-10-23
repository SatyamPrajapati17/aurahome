import React from 'react';
import { Bell, ExternalLink } from 'lucide-react';

interface TopNavProps {
  activeTab: 'home' | 'assistant' | 'routines' | 'activity';
  setActiveTab: (tab: 'home' | 'assistant' | 'routines' | 'activity') => void;
  unreadCount: number;
  onOpenNotifications: () => void;
  onOpenTrustModal: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  setActiveTab,
  unreadCount,
  onOpenNotifications,
  onOpenTrustModal,
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'assistant', label: 'Assistant' },
    { id: 'routines', label: 'Routines' },
    { id: 'activity', label: 'Activity' },
  ] as const;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-jet-black/85 border-b border-border-dark transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Logo & Assistant Orb */}
        <div className="flex items-center space-x-2.5 sm:space-x-4 shrink-0">
          <button 
            onClick={() => setActiveTab('home')}
            className="group flex items-center space-x-2.5 sm:space-x-3 text-left focus:outline-none"
            aria-label="AURA HOME Home Dashboard"
          >
            {/* Abstract Assistant Orb */}
            <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-surface-elevated border border-cerulean-bright/40 shadow-cerulean-glow shrink-0">
              <span className="absolute inset-0 rounded-full bg-cerulean-blue/20 animate-ping opacity-60 pointer-events-none"></span>
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-cerulean-blue via-cerulean-bright to-neon-rose shadow-inner" />
            </div>

            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-base sm:text-lg tracking-wider text-white-soft font-sans">
                  AURA
                </span>
                <span className="text-[10px] sm:text-xs font-semibold px-1.5 py-0.5 rounded bg-surface-elevated text-cerulean-bright border border-border-dark tracking-widest uppercase">
                  HOME
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-muted-blue-gray hidden md:block tracking-wide">
                Household Intelligence OS
              </p>
            </div>
          </button>
        </div>

        {/* Center: Navigation Tabs */}
        <nav className="flex items-center space-x-0.5 sm:space-x-1 md:space-x-3 lg:space-x-6 shrink-0" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-1 focus:ring-cerulean-bright ${
                  isActive
                    ? 'text-cerulean-bright font-semibold'
                    : 'text-muted-white hover:text-white-soft hover:bg-surface-elevated/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cerulean-blue to-cerulean-bright rounded-full shadow-cerulean-glow" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Simulation Badge, Notifications, Trust & Profile */}
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          
          {/* Alexa+ Simulated Experience Badge */}
          <button
            onClick={onOpenTrustModal}
            title="Click to view simulation transparency & architecture notes"
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-elevated border border-cerulean-blue/40 text-cerulean-bright hover:border-cerulean-bright transition-all cursor-pointer shadow-sm group"
          >
            <span className="w-2 h-2 rounded-full bg-cerulean-bright animate-pulse" />
            <span className="hidden sm:inline font-sans">Alexa+ simulated experience</span>
            <span className="sm:hidden font-sans">Simulated</span>
            <ExternalLink className="w-3 h-3 text-cerulean-soft group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Notification Icon */}
          <button
            onClick={onOpenNotifications}
            aria-label="View notifications"
            className="relative p-1.5 sm:p-2 rounded-xl bg-surface-black border border-border-dark text-muted-white hover:text-white-soft hover:border-cerulean-blue/50 transition-colors focus:outline-none focus:ring-1 focus:ring-cerulean-bright"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-neon-rose rounded-full ring-2 ring-jet-black" />
            )}
          </button>

          {/* User Avatar */}
          <div 
            className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-surface-elevated to-surface-black border border-border-dark text-white-soft font-semibold text-xs tracking-wider cursor-default shadow-sm select-none"
            title="Alex Sanchez · Household Admin (Simulated)"
          >
            AS
          </div>
        </div>

      </div>
    </header>
  );
};
