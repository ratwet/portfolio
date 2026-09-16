---
title: "Robo Soccer · NSECT-2026"
category: "Robotics"
summary: "A wireless 4-wheel differential-drive robot with a browser-based multi-touch control interface."
year: 2026
status: "shipped"
repoUrl: "https://github.com/ratwet/esp32-soccer-robot"
metrics:
  - label: "Drive"
    value: "4-wheel differential"
  - label: "Control"
    value: "Browser over WiFi"
  - label: "CPU clock"
    value: "240 MHz"
featured: true
sortOrder: 30
---

## What it is

A competitive 4-wheel soccer robot built for robotics competition play. The ESP32 hosts its own WiFi network and serves a full-screen, touch-friendly controller straight to a phone or laptop browser. Nothing to install on either side.

## Technical notes

- True differential steering rather than a skid turn: the outer wheel holds full speed while the inner wheel slows proportionally, tuned by feel until the robot held a predictable arc instead of slipping
- Genuine multi-touch support, so forward+left or backward+right register as one diagonal move instead of two conflicting button presses. This matters for the fast direction changes a match demands
- Speed mode, turn sensitivity, and drift-balance correction are all adjustable live from the browser controller, with no firmware re-flash needed between rounds
- Dual L298N motor drivers across 4 BO gear motors, ESP32 running at 240MHz with WiFi power-saving disabled to cut input lag

## Evidence

The public repository has the full firmware, wiring diagram, and pinout table.

## Next iteration

The README's own future-improvements list is a good next-step map: onboard camera for FPV or autonomous ball tracking, PID-based motor control instead of open-loop PWM, and a telemetry dashboard for match review.
