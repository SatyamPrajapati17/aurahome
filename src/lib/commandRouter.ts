import { CommandResult, HomePulseData, Activity } from '../types';
import { initialHomePulse, initialActivities } from './mockData';

function getCurrentFormattedTime(): string {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  return `${hours}:${minutes} ${ampm}`;
}

export function startMovieNight(): CommandResult {
  const time = getCurrentFormattedTime();
  return {
    id: `cmd-${Date.now()}`,
    intent: 'start_movie_night',
    query: 'Start movie night',
    title: 'Cinema Ambiance & Streaming Simulation',
    response:
      'Movie night is ready. I dimmed the living room, prepared the Fire TV simulation, and added ‘The Last Horizon’ to your shortlist.',
    interpretation:
      'Coordinated Living Room lighting, Fire TV entertainment display, and household acoustics for an immersive media experience.',
    actions: [
      {
        id: 'act-dim',
        label: 'Living room lights',
        detail: 'Dimmed to 20% warm tungsten',
        status: 'completed',
        category: 'Lighting',
        accent: 'cerulean'
      },
      {
        id: 'act-tv',
        label: 'Fire TV simulation',
        detail: 'Ready to play · Input set to Cinema 4K',
        status: 'ready',
        category: 'Media Display',
        accent: 'cerulean'
      },
      {
        id: 'act-content',
        label: 'Content suggestion',
        detail: 'The Last Horizon (Sci-Fi, 2h 14m)',
        status: 'ready',
        category: 'Recommendation',
        accent: 'rose'
      },
      {
        id: 'act-mode',
        label: 'Household mode',
        detail: 'Quiet mode enabled across other rooms',
        status: 'completed',
        category: 'Automation',
        accent: 'default'
      }
    ],
    timeline: [
      {
        time: time,
        title: 'Request understood',
        description: 'Natural language intent matched: household cinema routine',
        type: 'primary'
      },
      {
        time: time,
        title: 'Living room scene prepared',
        description: 'Overhead luminescence adjusted to 20%',
        type: 'device'
      },
      {
        time: time,
        title: 'Entertainment device ready',
        description: 'Fire TV simulation initialized with shortlist loaded',
        type: 'success'
      }
    ],
    deviceStatus: [
      { name: 'Living room Fire TV', state: 'Streaming Ready' },
      { name: 'Living room Ambience', state: '20% Brightness' },
      { name: 'Whole Home Audio', state: 'Cinema Audio Boost' }
    ],
    tags: ['Living Room', 'Fire TV', 'Cinema Mode', 'Automated Scene'],
    privacyNote: 'Simulated locally. No media telemetry sent to external servers.',
    status: 'completed',
    timestamp: time
  };
}

export function summarizeHomeActivity(): CommandResult {
  const time = getCurrentFormattedTime();
  return {
    id: `cmd-${Date.now()}`,
    intent: 'summarize_home_activity',
    query: 'What happened at home today?',
    title: 'Daily Household Activity Summary',
    response:
      'Here is the short version: the front door opened twice, Maya arrived at 4:18 PM, and the living room remained quiet after 8:00 PM.',
    interpretation:
      'Aggregated simulated perimeter sensors, presence events, and room occupancy logs for privacy-first household overview.',
    actions: [
      {
        id: 'act-sum-entry',
        label: 'Perimeter Access Log',
        detail: 'Front door opened 2 times · All entries verified',
        status: 'completed',
        category: 'Security',
        accent: 'cerulean'
      },
      {
        id: 'act-sum-presence',
        label: 'Member Presence',
        detail: 'Maya arrived home at 4:18 PM · Alex active in workspace',
        status: 'completed',
        category: 'Household',
        accent: 'rose'
      },
      {
        id: 'act-sum-noise',
        label: 'Acoustic & Noise Level',
        detail: 'Living room remained calm and quiet after 8:00 PM',
        status: 'completed',
        category: 'Comfort',
        accent: 'default'
      }
    ],
    timeline: [
      {
        time: '4:18 PM',
        title: 'Front Door Entry Logged',
        description: 'Simulated RFID/presence token matched: Maya',
        type: 'attention'
      },
      {
        time: '7:05 PM',
        title: 'Household Announcement',
        description: 'Kitchen broadcast delivered to 2 speakers',
        type: 'device'
      },
      {
        time: '8:18 PM',
        title: 'Perimeter Re-Verified',
        description: 'Simulated smart lock engaged and secure',
        type: 'success'
      },
      {
        time: time,
        title: 'Activity Summary Generated',
        description: 'AURA parsed 14 discrete simulated home events',
        type: 'primary'
      }
    ],
    tags: ['Maya', 'Front Door', 'Living Room', 'Workspace'],
    privacyNote: 'Privacy notice: presence and access logs are simulated and never leave your browser.',
    status: 'completed',
    timestamp: time
  };
}

export function createQuietTimeRoutine(): CommandResult {
  const time = getCurrentFormattedTime();
  return {
    id: `cmd-${Date.now()}`,
    intent: 'create_quiet_time_routine',
    query: 'Create quiet-time routine',
    title: 'Quiet Time Automation Configured',
    response:
      'I created a simulated quiet-time routine for 9:00 PM. Notifications will be reduced, the living room will dim, and the household announcement mode will be quiet.',
    interpretation:
      'Generated an automated evening wind-down sequence targeting notification suppressors, ambient lighting, and broadcast mute.',
    routineDetails: {
      routineName: 'Evening Quiet Time',
      startTime: '9:00 PM nightly',
      actions: [
        'Suppress all non-urgent speaker announcements',
        'Dim living room and hallway lights to warm 10%',
        'Engage workspace Focus profile & ambient white noise',
        'Arm perimeter night-watch simulation'
      ],
      toggleState: true
    },
    actions: [
      {
        id: 'act-routine-time',
        label: 'Schedule Trigger',
        detail: 'Scheduled for 9:00 PM every evening',
        status: 'completed',
        category: 'Trigger',
        accent: 'cerulean'
      },
      {
        id: 'act-routine-notif',
        label: 'Notification Filter',
        detail: 'Urgent household alerts only · Speakers silenced',
        status: 'completed',
        category: 'Audio',
        accent: 'rose'
      },
      {
        id: 'act-routine-lights',
        label: 'Warm Ambiance Transition',
        detail: 'Soft fade down across 3 household zones',
        status: 'ready',
        category: 'Lighting',
        accent: 'default'
      }
    ],
    timeline: [
      {
        time: time,
        title: 'Routine Configured',
        description: 'Parameters defined: 9:00 PM daily schedule',
        type: 'primary'
      },
      {
        time: '9:00 PM (Scheduled)',
        title: 'Scheduled Execution',
        description: 'Household silence & light fade sequence armed',
        type: 'success'
      }
    ],
    tags: ['Routines', 'Quiet Mode', '9:00 PM', 'Do Not Disturb'],
    privacyNote: 'Automation rules are stored in memory only.',
    status: 'completed',
    timestamp: time
  };
}

export function announceDinner(customMessage?: string): CommandResult {
  const time = getCurrentFormattedTime();
  const announcementText = customMessage || 'Dinner is ready!';
  return {
    id: `cmd-${Date.now()}`,
    intent: 'announce_dinner',
    query: customMessage ? `Announce: "${customMessage}"` : 'Announce dinner is ready',
    title: 'Household Audio Broadcast',
    response: 'Dinner announcement prepared for the kitchen and living room.',
    interpretation:
      'Routing synthesized simulated chime and message across multi-room speaker zones.',
    announcementDetails: {
      text: announcementText,
      locations: ['Kitchen Smart speaker', 'Living room Fire TV audio group', "Alex's workspace"],
      simulatedStatus: 'Dispatched to 3 endpoints with pleasant audio chime',
      deliveryState: 'Delivered'
    },
    actions: [
      {
        id: 'act-ann-msg',
        label: 'Announcement Audio',
        detail: `Broadcast: "${announcementText}"`,
        status: 'completed',
        category: 'Audio Broadcast',
        accent: 'rose'
      },
      {
        id: 'act-ann-dest',
        label: 'Delivery Locations',
        detail: 'Kitchen speaker, Living room TV, Workspace',
        status: 'completed',
        category: 'Multi-Room',
        accent: 'cerulean'
      },
      {
        id: 'act-ann-stat',
        label: 'Simulated Delivery Status',
        detail: 'Delivered successfully without acoustic echo',
        status: 'completed',
        category: 'Network',
        accent: 'default'
      }
    ],
    timeline: [
      {
        time: time,
        title: 'Audio Chime Sounded',
        description: 'Gentle two-tone chime across all rooms',
        type: 'primary'
      },
      {
        time: time,
        title: 'Spoken Broadcast Completed',
        description: `"${announcementText}" heard in all 3 spaces`,
        type: 'success'
      }
    ],
    tags: ['Broadcast', 'Dinner', 'Kitchen', 'Multi-room Audio'],
    status: 'completed',
    timestamp: time
  };
}

export function leavingHome(): CommandResult {
  const time = getCurrentFormattedTime();
  return {
    id: `cmd-${Date.now()}`,
    intent: 'leaving_home',
    query: 'Leaving home',
    title: 'Departure Safeguard Protocol',
    response:
      'Departure protocol active. Front door simulation locked, all non-essential lights turned off, and entryway security simulation armed.',
    interpretation:
      'Executing comprehensive perimeter lockdown, power conservation, and surveillance readiness.',
    actions: [
      {
        id: 'act-leave-lock',
        label: 'Front Door Security',
        detail: 'Smart lock simulation engaged & deadbolt secured',
        status: 'completed',
        category: 'Security',
        accent: 'rose'
      },
      {
        id: 'act-leave-lights',
        label: 'Lighting Control',
        detail: 'Switched off in 4 rooms · 0W standby draw',
        status: 'completed',
        category: 'Energy',
        accent: 'cerulean'
      },
      {
        id: 'act-leave-temp',
        label: 'Climate Eco Mode',
        detail: 'Set to 68°F eco-guard to preserve energy',
        status: 'ready',
        category: 'Climate',
        accent: 'default'
      }
    ],
    timeline: [
      {
        time: time,
        title: 'Departure Initiated',
        description: 'Alex verified departing premises',
        type: 'primary'
      },
      {
        time: time,
        title: 'Perimeter Secured',
        description: 'Ring-style simulation armed in Guard mode',
        type: 'success'
      }
    ],
    tags: ['Departure', 'Perimeter Armed', 'Eco Mode'],
    status: 'completed',
    timestamp: time
  };
}

export function runRoutine(routineId: string): CommandResult {
  if (routineId === 'routine-movie-night') return startMovieNight();
  if (routineId === 'routine-quiet-time') return createQuietTimeRoutine();
  if (routineId === 'routine-leaving-home') return leavingHome();

  const time = getCurrentFormattedTime();
  return {
    id: `cmd-${Date.now()}`,
    intent: 'run_routine',
    query: `Run routine: ${routineId}`,
    title: 'Routine Executed',
    response: `Morning briefing routine has been simulated. Kitchen speaker provided news, thermostat calibrated to 71°F, and commute status is optimal.`,
    interpretation: 'Triggered sequential multi-device routine.',
    actions: [
      {
        id: 'act-rt-1',
        label: 'Audio Briefing',
        detail: 'Weather 68°F, clear · 2 calendar events today',
        status: 'completed',
        category: 'Kitchen Speaker',
        accent: 'cerulean'
      },
      {
        id: 'act-rt-2',
        label: 'Climate Calibration',
        detail: 'Thermostat adjusted to 71°F comfort profile',
        status: 'completed',
        category: 'HVAC',
        accent: 'rose'
      }
    ],
    timeline: [
      {
        time: time,
        title: 'Routine Triggered',
        description: 'Scheduled tasks dispatched simultaneously',
        type: 'primary'
      },
      {
        time: time,
        title: 'All Actions Verified',
        description: 'Household environment optimized',
        type: 'success'
      }
    ],
    status: 'completed',
    timestamp: time
  };
}

export function getHomePulse(): HomePulseData {
  return { ...initialHomePulse };
}

export function getRecentActivity(): Activity[] {
  return [...initialActivities];
}

export function interpretCommand(rawInput: string): CommandResult {
  const normalized = rawInput.trim().toLowerCase();

  // Movie night variations
  if (
    normalized.includes('movie') ||
    normalized.includes('film') ||
    normalized.includes('watch') ||
    normalized.includes('cinema') ||
    normalized.includes('tv')
  ) {
    return startMovieNight();
  }

  // Home activity variations
  if (
    normalized.includes('what happened') ||
    normalized.includes('activity') ||
    normalized.includes('summarize') ||
    normalized.includes('today') ||
    normalized.includes('status') ||
    normalized.includes('who is home') ||
    normalized.includes('door')
  ) {
    return summarizeHomeActivity();
  }

  // Quiet time variations
  if (
    normalized.includes('quiet') ||
    normalized.includes('silence') ||
    normalized.includes('sleep') ||
    normalized.includes('bedtime') ||
    normalized.includes('night routine')
  ) {
    return createQuietTimeRoutine();
  }

  // Dinner announcement variations
  if (
    normalized.includes('dinner') ||
    normalized.includes('announce') ||
    normalized.includes('food') ||
    normalized.includes('eat') ||
    normalized.includes('broadcast')
  ) {
    return announceDinner(rawInput.length > 15 ? rawInput : undefined);
  }

  // Leaving home variations
  if (
    normalized.includes('leaving') ||
    normalized.includes('leave') ||
    normalized.includes('away') ||
    normalized.includes('goodbye') ||
    normalized.includes('lock up')
  ) {
    return leavingHome();
  }

  // Fallback graceful response
  const time = getCurrentFormattedTime();
  return {
    id: `cmd-${Date.now()}`,
    intent: 'unknown',
    query: rawInput,
    title: 'Assistant Guidance',
    response:
      'I can help with entertainment, routines, announcements, and home activity. Try one of the suggested actions below.',
    interpretation:
      'Command recognized as conversational prompt. Recommended one of the 4 primary simulated household flows.',
    actions: [
      {
        id: 'fallback-movie',
        label: 'Try: Start movie night',
        detail: 'Dim lights & prepare Fire TV simulation',
        status: 'ready',
        category: 'Entertainment',
        accent: 'cerulean'
      },
      {
        id: 'fallback-activity',
        label: 'Try: Summarize home activity',
        detail: 'Review simulated door entries and arrivals',
        status: 'ready',
        category: 'Security',
        accent: 'rose'
      },
      {
        id: 'fallback-dinner',
        label: 'Try: Announce dinner is ready',
        detail: 'Simulate household broadcast to kitchen & living room',
        status: 'ready',
        category: 'Broadcast',
        accent: 'cerulean'
      },
      {
        id: 'fallback-quiet',
        label: 'Try: Create quiet-time routine',
        detail: 'Arm evening wind-down automation at 9:00 PM',
        status: 'ready',
        category: 'Routines',
        accent: 'default'
      }
    ],
    timeline: [
      {
        time: time,
        title: 'Input Received',
        description: `Parsed: "${rawInput}"`,
        type: 'primary'
      },
      {
        time: time,
        title: 'Simulated Household Capabilities Ready',
        description: 'Waiting for high-confidence household intent',
        type: 'attention'
      }
    ],
    tags: ['Guidance', 'Simulation Help'],
    status: 'completed',
    timestamp: time
  };
}
