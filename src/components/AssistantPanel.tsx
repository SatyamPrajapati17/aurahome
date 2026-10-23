import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  Info,
  Check,
  Moon,
  Loader2
} from 'lucide-react';
import { CommandResult } from '../types';

interface AssistantPanelProps {
  currentResult: CommandResult | null;
  isLoading: boolean;
  onExecuteCommand: (query: string) => void;
  onClearConversation: () => void;
}

export const AssistantPanel: React.FC<AssistantPanelProps> = ({
  currentResult,
  isLoading,
  onExecuteCommand,
  onClearConversation,
}) => {
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    { label: 'Start movie night', query: 'Start movie night' },
    { label: 'Summarize home activity', query: 'What happened at home today?' },
    { label: 'Create quiet-time routine', query: 'Create quiet-time routine' },
    { label: 'Announce dinner is ready', query: 'Announce dinner is ready' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      onExecuteCommand(inputValue.trim());
      setInputValue('');
    }
  };

  const handleSuggestionClick = (query: string) => {
    if (!isLoading) {
      onExecuteCommand(query);
    }
  };

  return (
    <section className="aura-panel p-5 sm:p-7 bg-surface-black border-border-dark relative overflow-hidden shadow-panel-soft">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cerulean-bright/30 to-transparent" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border-dark/60">
        <div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-cerulean-bright animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-semibold text-white-soft font-sans tracking-tight">
              What can I help coordinate?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-white mt-1">
            Simulate conversational intent dispatch across multi-room spaces and media.
          </p>
        </div>

        {currentResult && (
          <button
            onClick={onClearConversation}
            className="self-start sm:self-auto inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-surface-elevated text-muted-white hover:text-white-soft hover:bg-surface-elevated/80 border border-border-dark transition-colors"
            title="Reset assistant conversation view"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear conversation</span>
          </button>
        )}
      </div>

      {/* Interactive Input Form */}
      <form onSubmit={handleSubmit} className="mt-5 relative">
        <div className="relative flex items-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            placeholder="Try ‘start movie night’ or ‘what happened at home today?’"
            className="w-full pl-4 pr-14 py-3.5 sm:py-4 rounded-xl bg-surface-elevated border border-border-dark text-white-soft placeholder-muted-blue-gray text-sm sm:text-base focus:outline-none focus:border-cerulean-bright focus:ring-1 focus:ring-cerulean-bright transition-all disabled:opacity-50"
            aria-label="Assistant command input"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            aria-label="Send command"
            className="absolute right-2 p-2 sm:p-2.5 rounded-lg bg-cerulean-blue hover:bg-cerulean-bright text-white font-medium disabled:opacity-40 disabled:hover:bg-cerulean-blue transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cerulean-bright"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
            ) : (
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            )}
          </button>
        </div>

        {/* Suggestion Chips */}
        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-muted-blue-gray font-semibold shrink-0 mr-1">
            Suggestions:
          </span>
          {suggestions.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSuggestionClick(item.query)}
              disabled={isLoading}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface-elevated hover:bg-surface-elevated/90 text-muted-white hover:text-cerulean-bright border border-border-dark hover:border-cerulean-blue/50 transition-all cursor-pointer disabled:opacity-50 active:scale-95 shadow-sm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </form>

      {/* Main Content Area: Loading / Empty State / Conversation Result */}
      <div className="mt-6">
        {isLoading ? (
          /* Loading State */
          <div className="py-12 flex flex-col items-center justify-center space-y-4 rounded-2xl bg-surface-elevated/30 border border-border-dark/50">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-cerulean-blue/10 border border-cerulean-bright/40">
              <span className="absolute inset-0 rounded-full bg-cerulean-bright/20 animate-ping" />
              <Sparkles className="w-6 h-6 text-cerulean-bright animate-spin" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-white-soft">
                Synthesizing household actions...
              </p>
              <p className="text-xs text-muted-blue-gray mt-1">
                Routing simulated intent to connected spaces and devices
              </p>
            </div>
          </div>
        ) : !currentResult ? (
          /* Empty State */
          <div className="py-10 px-6 rounded-2xl bg-surface-elevated/20 border border-border-dark/40 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-surface-elevated border border-border-dark flex items-center justify-center text-cerulean-bright mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-white-soft">
              Ready for household requests
            </h3>
            <p className="text-xs sm:text-sm text-muted-white max-w-md mt-1">
              Select one of the suggestion chips above, click a common moment below, or type your own request to test the simulation.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-[11px] text-muted-blue-gray font-mono">
              <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-dark">Zero Cloud Latency</span>
              <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-dark">Local Router</span>
              <span className="px-2 py-0.5 rounded bg-surface-elevated border border-border-dark">Deterministic Actions</span>
            </div>
          </div>
        ) : (
          /* Conversational Result Display */
          <div className="space-y-6 animate-fadeIn">
            
            {/* 1. User Request Bubble */}
            <div className="flex justify-end">
              <div className="max-w-xl rounded-2xl rounded-tr-sm bg-surface-elevated border border-border-dark px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between space-x-4 mb-1">
                  <span className="text-[11px] font-semibold text-cerulean-soft uppercase tracking-wider">
                    Alex
                  </span>
                  <span className="text-[10px] text-muted-blue-gray font-mono">
                    {currentResult.timestamp}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-medium text-white-soft">
                  "{currentResult.query}"
                </p>
              </div>
            </div>

            {/* 2. AURA Response Bubble */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-surface-elevated border border-cerulean-bright/50 flex items-center justify-center text-cerulean-bright shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="flex-1 rounded-2xl rounded-tl-sm bg-surface-elevated/70 border border-border-dark p-4 sm:p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-cerulean-bright uppercase tracking-wider">
                    AURA Response
                  </span>
                  <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-success/15 text-success border border-success/30">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Completed</span>
                  </span>
                </div>

                <p className="text-sm sm:text-base text-white-soft leading-relaxed font-normal">
                  {currentResult.response}
                </p>

                {/* Clear Interpretation Label */}
                <div className="p-3 rounded-xl bg-surface-black/60 border border-border-dark/80 flex items-start space-x-2.5">
                  <Info className="w-4 h-4 text-cerulean-bright shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-white block">
                      Intent Interpretation
                    </span>
                    <p className="text-xs text-muted-white/90 mt-0.5">
                      {currentResult.interpretation}
                    </p>
                  </div>
                </div>

                {/* Specific Details: Quiet Time Routine if present */}
                {currentResult.routineDetails && (
                  <div className="p-3.5 rounded-xl bg-surface-black/80 border border-border-dark space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Moon className="w-4 h-4 text-cerulean-soft" />
                        <span className="text-xs font-semibold text-white-soft">
                          {currentResult.routineDetails.routineName}
                        </span>
                      </div>
                      <span className="text-[11px] text-muted-blue-gray font-mono">
                        Starts {currentResult.routineDetails.startTime}
                      </span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-muted-white pl-1">
                      {currentResult.routineDetails.actions.map((act, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <Check className="w-3 h-3 text-success shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Specific Details: Announcement details if present */}
                {currentResult.announcementDetails && (
                  <div className="p-3.5 rounded-xl bg-surface-black/80 border border-border-dark space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-neon-rose-soft uppercase tracking-wider">
                        Simulated Broadcast Payload
                      </span>
                      <span className="text-[11px] px-2 py-0.5 rounded bg-success/15 text-success font-medium">
                        {currentResult.announcementDetails.deliveryState}
                      </span>
                    </div>
                    <div className="text-xs text-white-soft italic">
                      "{currentResult.announcementDetails.text}"
                    </div>
                    <div className="text-[11px] text-muted-blue-gray">
                      Delivered to: {currentResult.announcementDetails.locations.join(', ')}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Action Cards Grid */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-blue-gray">
                  Simulated Home Actions ({currentResult.actions.length})
                </h4>
                <span className="text-[11px] text-muted-blue-gray font-mono">
                  State: Local Deterministic
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentResult.actions.map((action) => {
                  const isRose = action.accent === 'rose';
                  const isCerulean = action.accent === 'cerulean';

                  return (
                    <div
                      key={action.id}
                      className={`p-3.5 rounded-xl bg-surface-elevated border transition-all ${
                        isRose
                          ? 'border-neon-rose/40 hover:border-neon-rose/70 bg-gradient-to-br from-surface-elevated to-neon-rose/5'
                          : isCerulean
                          ? 'border-cerulean-blue/40 hover:border-cerulean-bright/60 bg-gradient-to-br from-surface-elevated to-cerulean-blue/5'
                          : 'border-border-dark hover:border-border-dark/90'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="text-xs font-semibold text-white-soft">
                          {action.label}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                            action.status === 'completed'
                              ? 'bg-success/15 text-success border border-success/30'
                              : 'bg-cerulean-blue/20 text-cerulean-bright border border-cerulean-blue/30'
                          }`}
                        >
                          {action.status}
                        </span>
                      </div>
                      <p className="text-xs text-muted-white mt-1">
                        {action.detail}
                      </p>
                      {action.category && (
                        <span className="inline-block mt-2 text-[10px] text-muted-blue-gray font-mono">
                          {action.category}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Device Status Section (if applicable) */}
            {currentResult.deviceStatus && currentResult.deviceStatus.length > 0 && (
              <div className="p-3.5 rounded-xl bg-surface-elevated/40 border border-border-dark">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-blue-gray block mb-2">
                  Targeted Device States
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentResult.deviceStatus.map((dev, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 px-2.5 py-1 rounded-lg bg-surface-black border border-border-dark text-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cerulean-bright"></span>
                      <span className="text-white-soft">{dev.name}:</span>
                      <span className="text-cerulean-soft font-medium">{dev.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Execution Timeline */}
            <div className="p-4 rounded-xl bg-surface-black/60 border border-border-dark">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-blue-gray mb-3 flex items-center space-x-1.5">
                <Clock className="w-3.5 h-3.5 text-cerulean-soft" />
                <span>Execution Timeline</span>
              </h4>

              <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-border-dark">
                {currentResult.timeline.map((step, idx) => (
                  <div key={idx} className="relative pl-6 flex items-start justify-between">
                    <span className="absolute left-1 top-1.5 w-2.5 h-2.5 rounded-full bg-surface-black border-2 border-cerulean-bright" />
                    <div>
                      <div className="text-xs font-semibold text-white-soft">
                        {step.title}
                      </div>
                      {step.description && (
                        <div className="text-[11px] text-muted-white/80 mt-0.5">
                          {step.description}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-muted-blue-gray font-mono shrink-0 ml-2">
                      {step.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Privacy & Safety Note */}
            {currentResult.privacyNote && (
              <p className="text-[11px] text-muted-blue-gray italic text-right font-mono">
                {currentResult.privacyNote}
              </p>
            )}

          </div>
        )}
      </div>
    </section>
  );
};
