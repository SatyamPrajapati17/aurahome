export interface ActionItem {
  id: string;
  label: string;
  detail: string;
  status: 'completed' | 'active' | 'ready' | 'pending';
  icon?: string;
  category?: string;
  accent?: 'cerulean' | 'rose' | 'default';
}

export interface TimelineStep {
  time: string;
  title: string;
  description?: string;
  type?: 'primary' | 'attention' | 'success' | 'device';
}

export interface CommandResult {
  id: string;
  intent: string;
  query: string;
  title: string;
  response: string;
  interpretation: string;
  actions: ActionItem[];
  timeline: TimelineStep[];
  deviceStatus?: { name: string; state: string }[];
  status: 'completed' | 'processing';
  timestamp: string;
  privacyNote?: string;
  tags?: string[];
  routineDetails?: {
    routineName: string;
    startTime: string;
    actions: string[];
    toggleState: boolean;
  };
  announcementDetails?: {
    text: string;
    locations: string[];
    simulatedStatus: string;
    deliveryState: string;
  };
}

export interface Device {
  id: string;
  name: string;
  location: string;
  category: string;
  state: string;
  statusType: 'ready' | 'secure' | 'available' | 'quiet' | 'active';
  lastUpdate: string;
  icon: 'tv' | 'shield' | 'speaker' | 'laptop' | 'light' | 'thermostat';
  isSimulated: boolean;
  capabilities: string[];
  batteryOrPower?: string;
  signalStrength?: string;
}

export interface Routine {
  id: string;
  name: string;
  description: string;
  schedule: string;
  actionCount: number;
  enabled: boolean;
  icon: 'film' | 'moon' | 'sun' | 'door-closed' | 'coffee';
  lastTriggered?: string;
  actionsList: string[];
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  type: 'normal' | 'attention' | 'completed';
  tag: string;
  category: 'security' | 'entertainment' | 'automation' | 'household';
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'alert' | 'success';
}

export interface HomePulseData {
  connectedDevices: number;
  peopleHome: number;
  routinesToday: number;
  homeReadiness: number;
}
