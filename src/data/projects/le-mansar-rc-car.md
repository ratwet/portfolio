---
title: "Le Mansar 2026 Winning RC Car"
category: "Robotics"
summary: "A custom-built dual-BLDC RC racer that won the 24-minute endurance championship at Le Mansar 2026, IIT Jammu, with 28 laps."
year: 2026
status: "shipped"
repoUrl: "https://github.com/ratwet/le-mansar-2026-winning-rc-car"
metrics:
  - label: "Result"
    value: "1st place"
  - label: "Laps"
    value: "28"
  - label: "Format"
    value: "24-min endurance"
featured: true
coverImage: "/media/le-mansar-car.png"
sortOrder: 15
---

## What it is

A lightweight, balanced, hand-built 1/10-scale electric RC car that won the 24-minute endurance championship at Le Mansar 2026, IIT Jammu, completing 28 laps and finishing first. Organised by Robo-Sapiens (Robotics Club, IIT Jammu).

## Technical notes

- Dual brushless DC motors, each driven by a SimonK 30A ESC, powered by a 5200 mAh battery
- Hand-cut PVC pipe chassis with 3D-printed structural parts, designed from scratch per competition rules (no off-the-shelf chassis allowed)
- FlySky 2.4 GHz radio control with servo steering and active failsafe
- Deliberately run at only 10-15% of theoretical top speed (~150 km/h) for reliability over the full 24-minute race
- Weight distributed evenly across the chassis for balanced, predictable handling

## The three-wheel moment

About 5 minutes into the race, the car hit a rock and lost a front wheel. Because the car is fully balanced, it kept running on three wheels for the rest of the race and still finished with the most laps. A simple, balanced car degrades gracefully instead of failing outright.

## Design philosophy

1. Light beats heavy: less weight means less stress on motors, tires and battery
2. Simple beats complex: fewer parts means fewer failure points over 24 minutes
3. Balance beats power: a balanced car stays controllable even after damage
4. Finish beats fast: endurance is won by lap count, not top speed

## Evidence

The public repository has the full README with system architecture, hardware BOM, chassis photos, competition rules summary, and build instructions.

