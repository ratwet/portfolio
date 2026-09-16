---
title: "Finger Gesture Cursor Control"
category: "Computer Vision"
summary: "Real-time hand tracking mapped to cursor control, designed to run locally without GPU dependency."
year: 2026
status: "shipped"
repoUrl: "https://github.com/ratwet/gesture-cursor-control"
metrics:
  - label: "Throughput"
    value: "~40 FPS"
  - label: "Latency"
    value: "<25 ms"
  - label: "Jitter reduction"
    value: "~60%"
featured: true
sortOrder: 20
---

## What it is

A real-time human-computer interaction system that replaces the mouse with a webcam. Pointing moves the cursor, pinching clicks, a peace sign scrolls, a fist freezes tracking. Everything runs locally on a laptop CPU, with no GPU and no training step.

## Technical notes

- MediaPipe HandLandmarker tracks 21 3D points per hand; index-finger position drives the cursor
- Thumb-index pinch is left click, thumb-middle pinch is right click, a peace sign scrolls, a fist freezes input
- Raw landmark positions are jittery frame to frame, so movement goes through a weighted moving average over the last 6 frames plus a velocity cap that blocks sudden jumps. This gives roughly 60% less jitter than using raw landmarks directly
- Target platform is Wayland on Ubuntu, where the usual approach (PyAutoGUI via X11's XTEST) doesn't work. Cursor and click events are instead injected at the kernel level through Linux's `uinput` module via `evdev`, which operates below the display server and works across any Wayland compositor
- Python, MediaPipe, OpenCV, evdev, NumPy - six single-responsibility modules

## Evidence

Tested end to end on a Dell Latitude 5420 (Intel Core i5-1145G7, 8GB RAM, Ubuntu 24.04): ~40 FPS, under 25ms end-to-end latency, under 50% load on one CPU core. The public repository has the full implementation and a demo image.

## Next iteration

Document the measured tradeoffs between smoothing window size, cursor responsiveness, and CPU load. Right now those are hand-tuned in `config.py` rather than benchmarked.
