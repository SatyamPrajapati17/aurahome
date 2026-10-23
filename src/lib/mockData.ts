import { Device, Routine, Activity, NotificationItem, HomePulseData } from '../types';

export const initialHomePulse: HomePulseData = {
  connectedDevices: 4,
  peopleHome: 2,
  routinesToday: 3,
  homeReadiness: 98,
};

export const initialDevices: Device[] = [
  {
    id: 'dev-living-room-tv',
    name: 'Fire TV simulation',
    location: 'Living room',
    category: 'Entertainment',
    state: 'Ready',
    statusType: 'ready',
    lastUpdate: 'Synced just now',
    icon: 'tv',
    isSimulated: true,
    capabilities: ['4K Stream Ready', 'Dolby Atmos Sim', 'Scene Integration'],
    batteryOrPower: 'Mains Powered',
    signalStrength: 'Excellent (-42 dBm)'
  },
  {
    id: 'dev-front-door',
    name: 'Ring-style door activity simulation',
    location: 'Front door',
    category: 'Household Security',
    state: 'Secure',
    statusType: 'secure',
    lastUpdate: 'Active monitoring',
    icon: 'shield',
    isSimulated: true,
    capabilities: ['Motion Chime', 'Simulated Live Peek', 'Access Log'],
    batteryOrPower: '88% Battery',
    signalStrength: 'Strong (-55 dBm)'
  },
  {
    id: 'dev-kitchen-speaker',
    name: 'Smart speaker simulation',
    location: 'Kitchen',
    category: 'Audio & Broadcast',
    state: 'Available',
    statusType: 'available',
    lastUpdate: 'Standby mode',
    icon: 'speaker',
    isSimulated: true,
    capabilities: ['Household Announcements', 'Timer Sync', 'Audio Group'],
    batteryOrPower: 'Mains Powered',
    signalStrength: 'Excellent (-48 dBm)'
  },
  {
    id: 'dev-workspace-focus',
    name: 'Focus mode hub',
    location: "Alex's workspace",
    category: 'Productivity & Environment',
    state: 'Quiet',
    statusType: 'quiet',
    lastUpdate: 'Focus schedule armed',
    icon: 'laptop',
    isSimulated: true,
    capabilities: ['Do Not Disturb', 'Ambient Sound', 'Screen Dimming'],
    batteryOrPower: 'Dock Connected',
    signalStrength: 'Excellent (-39 dBm)'
  }
];

export const initialRoutines: Routine[] = [
  {
    id: 'routine-movie-night',
    name: 'Movie night',
    description: 'Set the room and find something to watch',
    schedule: 'On demand · Triggered by Alex',
    actionCount: 4,
    enabled: true,
    icon: 'film',
    lastTriggered: 'Today at 8:42 PM',
    actionsList: [
      'Dim living room lights to 20%',
      'Prepare Fire TV simulation to home screen',
      'Add "The Last Horizon" to shortlist queue',
      'Enable household Quiet Mode'
    ]
  },
  {
    id: 'routine-quiet-time',
    name: 'Quiet time',
    description: 'Reduce interruptions after 9:00 PM',
    schedule: 'Every day at 9:00 PM',
    actionCount: 3,
    enabled: true,
    icon: 'moon',
    lastTriggered: 'Yesterday at 9:00 PM',
    actionsList: [
      'Reduce household announcement volume to 0%',
      'Dim main living spaces to warm glow',
      'Enable Focus profile in workspace'
    ]
  },
  {
    id: 'routine-morning-briefing',
    name: 'Morning briefing',
    description: 'Simulated weather, calendar, and home climate snapshot',
    schedule: 'Weekdays at 7:15 AM',
    actionCount: 3,
    enabled: true,
    icon: 'sun',
    lastTriggered: 'Today at 7:15 AM',
    actionsList: [
      'Play simulated audio briefing on Kitchen speaker',
      'Set thermostat to comfortable 71°F',
      'Show departure traffic estimates'
    ]
  },
  {
    id: 'routine-leaving-home',
    name: 'Leaving home',
    description: 'Check doors, lights, and household status',
    schedule: 'On departure or command',
    actionCount: 4,
    enabled: false,
    icon: 'door-closed',
    lastTriggered: 'Yesterday at 8:45 AM',
    actionsList: [
      'Verify front door sensor is locked & secure',
      'Turn off all living room & kitchen lighting',
      'Arm motion triggers on simulated entryway',
      'Send departure status notification'
    ]
  }
];

export const initialActivities: Activity[] = [
  {
    id: 'act-1',
    time: '8:42 PM',
    title: 'Movie night requested',
    description: 'AURA interpreted a household entertainment request and primed living room ambiance.',
    type: 'normal',
    tag: 'Living room',
    category: 'entertainment'
  },
  {
    id: 'act-2',
    time: '8:18 PM',
    title: 'Maya arrived home',
    description: 'Simulated arrival signal recorded via front entryway sensor.',
    type: 'attention',
    tag: 'Front door · Maya',
    category: 'security'
  },
  {
    id: 'act-3',
    time: '7:05 PM',
    title: 'Kitchen announcement delivered',
    description: '“Dinner is ready” broadcasted clearly across kitchen and living room speakers.',
    type: 'completed',
    tag: 'Kitchen & Living',
    category: 'household'
  },
  {
    id: 'act-4',
    time: '4:18 PM',
    title: 'Front door opened',
    description: 'Simulated access event verified. Safe entry protocol cleared.',
    type: 'normal',
    tag: 'Front door',
    category: 'security'
  }
];

export const initialNotifications: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Simulation Mode Active',
    message: 'AURA Home is operating entirely offline with local mock commands.',
    time: 'Just now',
    read: false,
    type: 'info'
  },
  {
    id: 'notif-2',
    title: 'Arrival Detected',
    message: 'Simulated entry logged for Maya at Front Door.',
    time: '8:18 PM',
    read: false,
    type: 'alert'
  },
  {
    id: 'notif-3',
    title: 'Quiet Schedule Ready',
    message: 'Quiet-time routine is armed and scheduled for 9:00 PM.',
    time: '8:00 PM',
    read: true,
    type: 'success'
  }
];
