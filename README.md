# AURA HOME

## One-line description

A simulated Alexa+ household experience that turns natural-language requests into transparent home actions.

---

## What it does

**AURA HOME** is a next-generation household intelligence and automation command center. Designed for the Amazon Developer Hackathon, it visualizes how an Alexa+-class conversational agent could coordinate multi-zone rooms, entertainment systems, routines, announcements, and perimeter sensors with complete human-readable transparency.

Key user flows include:
1. **Natural Household Intent Routing**: Alex types or selects natural-language requests (such as *"Start movie night"* or *"What happened at home today?"*). The system normalizes the input, infers intent, and provides structured explanations before triggering actions.
2. **Multi-Space Scene Coordination**: Demonstrates orchestrated execution across lighting, Fire TV display simulation, acoustic group silencing, and ambiance configuration in a single cohesive flow.
3. **Simulated Sensory Auditing**: Summarizes door events, member presence (e.g. Maya arriving home), and acoustic quiet levels in a privacy-preserving summary.
4. **Routine Management**: Enables users to inspect, schedule, toggle, and trigger complex household routines with real-time feedback and execution timelines.
5. **Multi-Room Spoken Announcements**: Routes customized messages (e.g., *"Dinner is ready"*) with simulated audio chimes and delivery confirmations.

---

## Hackathon track

- **Primary track**: Alexa+
- **Path**: Alexa+ simulated experience
- **Disclaimer**: *This prototype is a conceptual simulation and does not claim to be a production Alexa+ integration, certified Amazon software, or connected to real Amazon, Ring, Bee, or Fire TV accounts.*

---

## Features

- **Natural-Language-Style Command Input**: Flexible keyword and phrase matching with graceful fallback responses for any input.
- **Movie-Night Coordination**: Dims living room luminescence to 20%, primes Fire TV display simulation, queues *The Last Horizon*, and enables quiet mode.
- **Home Activity Summary**: Synthesizes perimeter sensor entries, member arrivals, and room noise levels into a clear timeline.
- **Quiet-Time Routine Creation**: Generates automated 9:00 PM wind-down schedules with speaker muting and warm lighting transitions.
- **Household Announcements**: Dispatches multi-room audio broadcast payloads to kitchen speakers and living room TV displays.
- **Connected Spaces & Device Status**: Inspectable telemetry for Fire TV, Ring-style front door sensor, Kitchen speaker, and Workspace focus mode.
- **Activity Timeline**: Color-coded audit trail tracking events by severity (ordinary activity, attention items, completed actions).
- **Deterministic Offline Demo**: 100% local, self-contained architecture with zero external cloud dependencies.

---

## Technology

- **Frontend Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design tokens (`--jet-black`, `--cerulean-blue`, `--neon-rose`, etc.)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Poppins (`Poppins, Inter, system-ui, sans-serif`)
- **State Management**: React state hooks with local command engine

---

## API and credentials

> **No external API keys, credentials, database, or paid services are required. The demo uses local deterministic mock data so judges can run it reliably.**

---

## Running locally

Follow these simple steps to run the application locally:

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open your browser to `http://localhost:5173` (or the URL displayed in your terminal).

### 3. Build for production
```bash
npm run build
```
This compiles TypeScript and outputs an optimized static build in `dist/`.

---

## Architecture

The project is structured around a modular, decoupled architecture:

```
aura-home/
├── src/
│   ├── components/
│   │   ├── TopNav.tsx             # Brand header, tabs, simulation badge, notification trigger
│   │   ├── HeroSection.tsx        # Greeting, system status, AURA intelligence pulse card
│   │   ├── AssistantPanel.tsx     # Primary input, suggestions, bubbles, action cards & timeline
│   │   ├── QuickActions.tsx       # "Common moments" one-click triggers
│   │   ├── HomePulse.tsx          # Real-time simulated telemetry metrics
│   │   ├── ConnectedSpaces.tsx    # Device status cards for simulated rooms
│   │   ├── RecentActivity.tsx     # Chronological audit log with category filters
│   │   ├── RoutinesView.tsx       # Dedicated routines manager with toggle & Run Now
│   │   ├── TrustModal.tsx         # "Designed for transparent assistance" principles
│   │   ├── NotificationDrawer.tsx # Slide-out notification center
│   │   ├── DeviceModal.tsx        # Deep inspector for simulated device telemetry
│   │   └── Toast.tsx              # Transient feedback toast for completed actions
│   ├── lib/
│   │   ├── commandRouter.ts       # Intent parser, command dispatcher & mock generators
│   │   └── mockData.ts            # Baseline household devices, routines, & activity entries
│   ├── types.ts                   # Strongly-typed TypeScript definitions
│   ├── App.tsx                    # Root dashboard controller & state synchronization
│   ├── main.tsx                   # React root mount
│   └── index.css                  # Tailwind styles & theme variables
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── LICENSE
└── README.md
```

### Architectural Highlights:
- **Local Command Router (`commandRouter.ts`)**: Normalizes conversational queries, matches user intent against known household routines, and outputs deterministic, structured action responses.
- **Local Mock Household State**: Maintains simulated device statuses, people home, and live activity logs entirely in memory.
- **Structured Action Results**: Instead of opaque text, every command produces granular action items, affected devices, execution timelines, and privacy annotations.
- **Reactive Activity Feed**: Assistant executions automatically append chronological entries to the activity timeline and trigger unobtrusive toasts.

---

## Demo script (60–90 seconds)

For judges and reviewers evaluating the simulation:

1. **Overview & First Impression (0:00 - 0:15)**:
   - Notice the jet-black visual hierarchy, cerulean blue accents, and the prominent **“Alexa+ simulated experience”** badge in the top navigation.
   - Point out the hero status card: *4 active devices, 2 members home, systems simulated*.
2. **Start Movie Night (0:15 - 0:35)**:
   - Click the **“Start movie night”** suggestion chip under the assistant panel.
   - Observe the 500ms simulated processing state.
   - Review the generated response: the request bubble, the interpretation (*Coordinated Living Room lighting, Fire TV entertainment display...*), the 4 action cards (*Living room lights dimmed to 20%, Fire TV ready, The Last Horizon suggested, Quiet mode enabled*), and the step-by-step timeline.
3. **Simulate Household Audit (0:35 - 0:50)**:
   - Click **“Summarize home activity”** (or type *"what happened today"*).
   - Review the summary of perimeter logs, Maya's arrival at 4:18 PM, and acoustic noise levels.
4. **Inspect Connected Spaces & Routines (0:50 - 1:10)**:
   - Click on the **Living room (Fire TV)** card under *Connected spaces* to open the device telemetry modal. Click *"Simulate device ping"*.
   - Switch to the **Routines** tab in the top navigation. Click *"Run now"* on the **Quiet time** routine and observe instant execution feedback.
5. **Transparency & Trust Panel (1:10 - 1:30)**:
   - Click the **“Alexa+ simulated experience”** badge or the footer link **“Designed for transparent assistance”**.
   - Emphasize the three core principles: **Understand**, **Explain**, and **Act**.
   - Note the hackathon guarantee: **Zero API keys required, zero private data collected, 100% deterministic local simulation.**

---

## Product feedback

As a developer exploring the Alexa+ vision during this hackathon:

- **What worked well**:
  - The concept of combining structured action cards with conversational responses makes AI-assisted home automation significantly more trustworthy. Showing *what the assistant plans to do* and *what it adjusted* removes the ambiguity often felt in voice-only interfaces.
  - Designing a local simulated environment with zero latency and zero external dependencies proved extremely developer-friendly, allowing rapid prototyping without billing or cloud provisioning hurdles.
- **What was difficult**:
  - Bridging the gap between free-form conversational natural language and strict device actuation schemas requires careful intent modeling. Without standardized simulation SDKs, developers have to invent their own intermediate representation.
- **What could improve in Amazon’s developer experience**:
  - **First-Party Alexa+ Simulation Testbed**: Providing an official local CLI or simulator package (similar to Android SDK emulators or LocalStack) where developers can test Alexa+ tool calling and agent skills without needing live hardware or deployed AWS lambdas.
  - **Standardized UI Component Kits**: Providing official Figma/React component guidelines for companion screens (Echo Show, Fire TV, mobile companion) would accelerate building high-quality visual experiences.
- **Desire for more local testing and validation tools**:
  - Offline-first mock SDKs that emulate the Alexa Skills Kit / Alexa+ agent tool-use protocol would dramatically lower the barrier of entry for hackathon developers and indie builders.
- **Would we build with these tools again?**:
  - Yes. As conversational AI transitions from chatbots to proactive household operating systems, the Alexa ecosystem has unmatched reach across living rooms, screens, and audio hardware.

---

## Limitations

- **Simulation Only**: All actions, devices, sensor signals, and routines are local mocks.
- **No Real Device Commands**: No network packets or RF commands are sent to actual smart home hubs or IoT devices.
- **No Cloud Account**: No real Alexa, Ring, Bee, Fire TV, or AWS credentials are utilized.
- **Browser-Scoped Storage**: State resets upon page reload to ensure predictable demonstration runs.

---

## Future improvements

1. **Alexa+ Agent Skill / MCP Integration**: Connect the local command router to an official Model Context Protocol (MCP) server or Alexa+ Agent tool API.
2. **Web Speech API**: Integrate browser-native speech-to-text and text-to-speech for seamless voice commanding.
3. **Multi-User Permission Profiles**: Add role-based controls (e.g. Guest vs. Parent vs. Child permissions for door locks and media).
4. **Real-time Event Streaming**: WebSockets or SSE for continuous perimeter sensor simulations.
5. **Interactive Floorplan View**: Visual SVG 2D/3D representation of rooms showing light warmth and speaker audio dispersion.

---

## License

This project is licensed under the terms of the [MIT License](LICENSE).
