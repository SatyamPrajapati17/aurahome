import React, { useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock } from 'lucide-react';

interface TrustModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrustModal: React.FC<TrustModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-jet-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-surface-black border border-border-dark rounded-panel p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trust-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close transparency modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-surface-elevated text-muted-white hover:text-white-soft hover:bg-surface-elevated/80 border border-border-dark transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2.5 rounded-xl bg-cerulean-blue/15 border border-cerulean-bright/40 text-cerulean-bright">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-cerulean-bright">
              Alexa+ Simulated Experience
            </div>
            <h2 id="trust-modal-title" className="text-xl sm:text-2xl font-bold text-white-soft font-sans">
              Designed for transparent assistance
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-white mt-2 leading-relaxed">
          AURA Home demonstrates how a next-generation household assistant can parse open-ended natural requests, construct multi-step plans across rooms, and execute simulated actions with complete transparency.
        </p>

        {/* Core Principles */}
        <div className="mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-blue-gray mb-3">
            Core Assistant Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Principle 1 */}
            <div className="p-4 rounded-xl bg-surface-elevated border border-border-dark">
              <div className="w-7 h-7 rounded-lg bg-cerulean-blue/20 flex items-center justify-center text-cerulean-bright mb-2 font-mono text-xs font-bold">
                01
              </div>
              <h4 className="text-sm font-semibold text-white-soft">Understand</h4>
              <p className="text-xs text-muted-white mt-1">
                Convert natural language into a structured, high-confidence household intent.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="p-4 rounded-xl bg-surface-elevated border border-border-dark">
              <div className="w-7 h-7 rounded-lg bg-neon-rose/20 flex items-center justify-center text-neon-rose-bright mb-2 font-mono text-xs font-bold">
                02
              </div>
              <h4 className="text-sm font-semibold text-white-soft">Explain</h4>
              <p className="text-xs text-muted-white mt-1">
                Show what the system interpreted and why before or while taking action.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="p-4 rounded-xl bg-surface-elevated border border-border-dark">
              <div className="w-7 h-7 rounded-lg bg-success/20 flex items-center justify-center text-success mb-2 font-mono text-xs font-bold">
                03
              </div>
              <h4 className="text-sm font-semibold text-white-soft">Act</h4>
              <p className="text-xs text-muted-white mt-1">
                Present simulated household actions, device states, and completion timelines.
              </p>
            </div>
          </div>
        </div>

        {/* Hackathon Transparency & Safety Guarantees */}
        <div className="mt-6 p-4 rounded-xl bg-surface-elevated/40 border border-border-dark space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-blue-gray flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5 text-cerulean-soft" />
            <span>Hackathon Safety & Simulation Guarantees</span>
          </h3>

          <ul className="space-y-2 text-xs text-muted-white">
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean-bright shrink-0 mt-0.5" />
              <span>
                <strong>Pure Local Simulation:</strong> The prototype uses local deterministic command routing. No network access or cloud latency is required.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean-bright shrink-0 mt-0.5" />
              <span>
                <strong>Zero Credentials or API Keys:</strong> No AWS keys, Alexa account, Ring credentials, or paid API subscriptions are needed.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean-bright shrink-0 mt-0.5" />
              <span>
                <strong>No Real Hardware Actuation:</strong> No real smart locks, speakers, or TVs are commanded. All interactions run safely in-browser.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-cerulean-bright shrink-0 mt-0.5" />
              <span>
                <strong>Privacy by Design:</strong> No private household data is stored or exfiltrated.
              </span>
            </li>
          </ul>
        </div>

        {/* Dismiss Button */}
        <div className="mt-6 pt-4 border-t border-border-dark flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-cerulean-blue hover:bg-cerulean-bright text-white text-xs font-semibold shadow-sm transition-all"
          >
            Got it, continue demo
          </button>
        </div>
      </div>
    </div>
  );
};
