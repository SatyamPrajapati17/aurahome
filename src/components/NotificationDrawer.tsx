import React from 'react';
import { X, Bell, CheckCircle2, AlertCircle, Info, Trash2 } from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onClearNotifications: () => void;
}

export const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onClearNotifications,
}) => {
  if (!isOpen) return null;

  const getIcon = (type: NotificationItem['type']) => {
    switch (type) {
      case 'alert':
        return <AlertCircle className="w-4 h-4 text-neon-rose-bright" />;
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case 'info':
      default:
        return <Info className="w-4 h-4 text-cerulean-bright" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-jet-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface-black border-l border-border-dark p-6 flex flex-col justify-between shadow-2xl">
          
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border-dark">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-surface-elevated text-cerulean-bright border border-border-dark">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white-soft">
                    Simulated Alerts
                  </h3>
                  <p className="text-[11px] text-muted-blue-gray">
                    Live system dispatch and sensor telemetry
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close notification panel"
                className="p-1.5 rounded-lg text-muted-blue-gray hover:text-white-soft bg-surface-elevated border border-border-dark transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="py-3 flex items-center justify-between text-xs border-b border-border-dark/60">
              <button
                onClick={onMarkAllAsRead}
                className="text-cerulean-bright hover:underline font-medium"
              >
                Mark all as read
              </button>
              <button
                onClick={onClearNotifications}
                className="text-muted-blue-gray hover:text-neon-rose transition-colors flex items-center space-x-1"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear all</span>
              </button>
            </div>

            {/* List */}
            <div className="mt-4 space-y-3 max-h-[70vh] overflow-y-auto pr-1">
              {notifications.length === 0 ? (
                <div className="py-12 text-center text-xs text-muted-blue-gray">
                  No simulated notifications at this time.
                </div>
              ) : (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      notif.read
                        ? 'bg-surface-elevated/40 border-border-dark/60 opacity-80'
                        : 'bg-surface-elevated border-border-dark shadow-sm'
                    }`}
                  >
                    <div className="flex items-start space-x-2.5">
                      <div className="mt-0.5 shrink-0">{getIcon(notif.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-semibold text-white-soft">
                            {notif.title}
                          </h4>
                          <span className="text-[10px] text-muted-blue-gray font-mono">
                            {notif.time}
                          </span>
                        </div>
                        <p className="text-xs text-muted-white mt-1 leading-snug">
                          {notif.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-border-dark text-[11px] text-muted-blue-gray font-mono text-center">
            Alexa+ simulated experience · Safe offline test mode
          </div>
        </div>
      </div>
    </div>
  );
};
