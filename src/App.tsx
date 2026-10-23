import React, { useState, useEffect, useRef } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/HeroSection';
import { AssistantPanel } from './components/AssistantPanel';
import { QuickActions } from './components/QuickActions';
import { HomePulse } from './components/HomePulse';
import { ConnectedSpaces } from './components/ConnectedSpaces';
import { RecentActivity } from './components/RecentActivity';
import { RoutinesView } from './components/RoutinesView';
import { TrustModal } from './components/TrustModal';
import { NotificationDrawer } from './components/NotificationDrawer';
import { DeviceModal } from './components/DeviceModal';
import { Toast } from './components/Toast';

import { CommandResult, Device, Routine, Activity, NotificationItem, HomePulseData } from './types';
import { 
  initialHomePulse, 
  initialDevices, 
  initialRoutines, 
  initialActivities, 
  initialNotifications 
} from './lib/mockData';
import { interpretCommand, runRoutine } from './lib/commandRouter';
import { ExternalLink } from 'lucide-react';

export const App: React.FC = () => {
  // Navigation & View State
  const [activeTab, setActiveTab] = useState<'home' | 'assistant' | 'routines' | 'activity'>('home');

  // Assistant State (starts in empty state as requested)
  const [currentResult, setCurrentResult] = useState<CommandResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Household Mock State
  const [pulseData, setPulseData] = useState<HomePulseData>(initialHomePulse);
  const [devices] = useState<Device[]>(initialDevices);
  const [routines, setRoutines] = useState<Routine[]>(initialRoutines);
  const [activities, setActivities] = useState<Activity[]>(initialActivities);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  // Modals & Drawers
  const [isTrustModalOpen, setIsTrustModalOpen] = useState<boolean>(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Ref to track timeout cleanup
  const loadingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (loadingTimerRef.current) {
        clearTimeout(loadingTimerRef.current);
      }
    };
  }, []);

  // Command Execution Handler (500ms intentional simulated latency)
  const handleExecuteCommand = (query: string) => {
    setIsLoading(true);

    if (loadingTimerRef.current) {
      clearTimeout(loadingTimerRef.current);
    }

    loadingTimerRef.current = setTimeout(() => {
      const result = interpretCommand(query);
      setCurrentResult(result);
      setIsLoading(false);

      // Add corresponding activity entry
      const newActivity: Activity = {
        id: `act-${Date.now()}`,
        time: result.timestamp,
        title: result.title,
        description: result.response,
        type: result.intent.includes('movie') || result.intent.includes('dinner') ? 'completed' : 'normal',
        tag: result.tags && result.tags[0] ? result.tags[0] : 'Simulated Scene',
        category: result.intent.includes('movie') 
          ? 'entertainment' 
          : result.intent.includes('dinner') 
          ? 'household' 
          : 'automation'
      };

      setActivities(prev => [newActivity, ...prev]);

      // Add notification entry
      const newNotif: NotificationItem = {
        id: `notif-${Date.now()}`,
        title: result.title,
        message: result.response,
        time: result.timestamp,
        read: false,
        type: 'success'
      };
      setNotifications(prev => [newNotif, ...prev]);

      // Trigger Toast
      setToastMessage(`${result.title} executed successfully`);

      // Update pulse count
      setPulseData(prev => ({
        ...prev,
        routinesToday: prev.routinesToday + 1
      }));
    }, 550);
  };

  const handleClearConversation = () => {
    setCurrentResult(null);
    setToastMessage('Conversation view reset to standby');
  };

  const handleToggleRoutine = (routineId: string) => {
    setRoutines(prev =>
      prev.map(r => {
        if (r.id === routineId) {
          const nextState = !r.enabled;
          setToastMessage(`${r.name} routine ${nextState ? 'enabled' : 'disabled'}`);
          return { ...r, enabled: nextState };
        }
        return r;
      })
    );
  };

  const handleRunRoutine = (routineId: string) => {
    const routine = routines.find(r => r.id === routineId);
    if (!routine) return;

    setIsLoading(true);
    if (loadingTimerRef.current) clearTimeout(loadingTimerRef.current);

    loadingTimerRef.current = setTimeout(() => {
      const result = runRoutine(routineId);
      setCurrentResult(result);
      setIsLoading(false);

      const newActivity: Activity = {
        id: `act-${Date.now()}`,
        time: result.timestamp,
        title: `${routine.name} routine executed`,
        description: result.response,
        type: 'completed',
        tag: 'Automated Scene',
        category: 'automation'
      };

      setActivities(prev => [newActivity, ...prev]);
      setToastMessage(`Executed routine: ${routine.name}`);

      // Switch to assistant view if in routines tab so user sees the actions
      if (activeTab === 'routines') {
        setActiveTab('assistant');
      }
    }, 550);
  };

  const handleSimulateDevicePing = (device: Device) => {
    setToastMessage(`Simulated ping to ${device.name}: 12ms latency, nominal state`);
  };

  const unreadNotificationsCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-jet-black text-white-soft flex flex-col font-sans selection:bg-cerulean-blue/40 selection:text-white">
      {/* Background ambient lighting */}
      <div className="ambient-bg" />

      {/* Top Navigation */}
      <TopNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        unreadCount={unreadNotificationsCount}
        onOpenNotifications={() => setIsNotificationOpen(true)}
        onOpenTrustModal={() => setIsTrustModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 z-10">
        {/* Render Tab Views */}
        {activeTab === 'home' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Hero Section */}
            <HeroSection
              pulseData={pulseData}
              onOpenAssistantTab={() => setActiveTab('assistant')}
            />

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
              
              {/* Left Main Column: Assistant Panel, Common Moments, Home Pulse */}
              <div className="lg:col-span-7 xl:col-span-8 space-y-6 sm:space-y-8">
                <AssistantPanel
                  currentResult={currentResult}
                  isLoading={isLoading}
                  onExecuteCommand={handleExecuteCommand}
                  onClearConversation={handleClearConversation}
                />

                <QuickActions
                  onSelectAction={handleExecuteCommand}
                  isLoading={isLoading}
                />

                <HomePulse data={pulseData} />
              </div>

              {/* Right Side Column: Connected Spaces & Recent Activity */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-6 sm:space-y-8">
                <ConnectedSpaces
                  devices={devices}
                  onSelectDevice={(device) => setSelectedDevice(device)}
                />

                <RecentActivity activities={activities} />
              </div>

            </div>
          </div>
        )}

        {activeTab === 'assistant' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-cerulean-bright">
                Household Intelligence Engine
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white-soft mt-1">
                Conversational Assistant
              </h2>
              <p className="text-sm text-muted-white mt-1">
                Natural-language coordination simulating multi-zone actions, content discovery, and status dispatch.
              </p>
            </div>

            <AssistantPanel
              currentResult={currentResult}
              isLoading={isLoading}
              onExecuteCommand={handleExecuteCommand}
              onClearConversation={handleClearConversation}
            />

            <QuickActions
              onSelectAction={handleExecuteCommand}
              isLoading={isLoading}
            />
          </div>
        )}

        {activeTab === 'routines' && (
          <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
            <RoutinesView
              routines={routines}
              onToggleRoutine={handleToggleRoutine}
              onRunRoutine={handleRunRoutine}
              isLoading={isLoading}
            />

            {currentResult && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-blue-gray mb-3">
                  Latest Routine Simulation Result
                </h3>
                <AssistantPanel
                  currentResult={currentResult}
                  isLoading={isLoading}
                  onExecuteCommand={handleExecuteCommand}
                  onClearConversation={handleClearConversation}
                />
              </div>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-neon-rose-bright">
                System Audit Log
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white-soft mt-1">
                Simulated Household Activity
              </h2>
              <p className="text-sm text-muted-white mt-1">
                Chronological log of perimeter access signals, member arrivals, and media playback states.
              </p>
            </div>

            <RecentActivity activities={activities} />
            <ConnectedSpaces
              devices={devices}
              onSelectDevice={(device) => setSelectedDevice(device)}
            />
          </div>
        )}
      </main>

      {/* Global Transparent Footer */}
      <footer className="w-full border-t border-border-dark bg-deep-black/90 py-6 mt-12 z-10 text-xs text-muted-blue-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-2 h-2 rounded-full bg-cerulean-bright" />
            <p>
              <strong className="text-muted-white font-medium">AURA HOME</strong> — Alexa+ simulated experience prototype for the Amazon Developer Hackathon.
            </p>
          </div>

          <div className="flex items-center space-x-6 text-[11px] font-mono">
            <button
              onClick={() => setIsTrustModalOpen(true)}
              className="text-cerulean-bright hover:underline flex items-center space-x-1"
            >
              <span>Designed for transparent assistance</span>
              <ExternalLink className="w-3 h-3" />
            </button>
            <span className="text-border-dark">|</span>
            <span>Local Deterministic Engine</span>
            <span className="text-border-dark">|</span>
            <span>MIT License</span>
          </div>

        </div>
      </footer>

      {/* Modals, Drawers & Toast */}
      <TrustModal
        isOpen={isTrustModalOpen}
        onClose={() => setIsTrustModalOpen(false)}
      />

      <NotificationDrawer
        isOpen={isNotificationOpen}
        onClose={() => setIsNotificationOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={() => setNotifications(prev => prev.map(n => ({ ...n, read: true })))}
        onClearNotifications={() => setNotifications([])}
      />

      <DeviceModal
        device={selectedDevice}
        onClose={() => setSelectedDevice(null)}
        onSimulatePing={handleSimulateDevicePing}
      />

      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />
    </div>
  );
};

export default App;
