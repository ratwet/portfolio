---
title: "RoboTraverse"
category: "Robotics"
summary: "A rope-traversing racer built for a robotics club time trial. First place, 10 metres in 2.16 seconds."
year: 2026
status: "shipped"
repoUrl: "https://github.com/ratwet/RoboTraverse"
metrics:
  - label: "Result"
    value: "1st place"
  - label: "Time"
    value: "2.16s / 10m"
  - label: "Speed"
    value: "4.63 m/s"
featured: true
sortOrder: 10
---

## What it is

A custom-built rope-traversing robot for the CSE Robotics Club's RoboTraverse challenge — a manual time-trial competition where robots race along a suspended rope. It took first place, covering the 10 metre course in 2.16 seconds.

## Technical notes

- ESP32 driving a brushless DC (BLDC) motor through an electronic speed controller, commanded over Bluetooth Serial
- Traction from a custom 3D-printed U-grooved wheel gripping a nylon-jute rope
- Hard weight limit of 500g shaped nearly every decision — motor choice, battery size, how much frame could be trimmed without losing rigidity
- Single-character command protocol (`F` launch, `S` stop, `0`–`9` throttle map, `q` full throttle) at 115200 baud, with a failsafe that auto-stops the motor if the Bluetooth link drops

## Evidence

The public repository has the full source, pinout table, and a build photo. It's a small codebase — the interesting part of this project is mechanical and electrical, not the firmware.

## Next iteration

The current run is entirely manual (throttle mapped directly to hand input). A logical next step would be closed-loop speed control against an encoder, to see whether a tuned acceleration curve beats hand-tuned throttle.
