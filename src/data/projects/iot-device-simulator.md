---
title: "ESP32 IoT Device Simulator"
category: "Edge & IoT"
summary: "A virtual edge-device environment for testing MQTT telemetry, sensor data, and dashboard flows."
year: 2026
status: "shipped"
repoUrl: "https://github.com/ratwet/IoT-Device-Simulator"
metrics:
  - label: "Publish interval"
    value: "10s"
  - label: "Protocol"
    value: "MQTT / JSON"
featured: true
sortOrder: 40
---

## What it is

A simulated supply-chain tracking device on an ESP32, modelling what a real logistics sensor node does end to end: read temperature and humidity from a DHT22, simulate GPS movement around New Delhi with a bounded random walk, track simulated battery drain, and publish it all as JSON to a public MQTT broker every 10 seconds.

## Technical notes

- Local status display on an SSD1306 OLED, plus an RGB LED that signals connection state at a glance — yellow while joining WiFi, blue while connecting to MQTT, green once publishing, red on error
- If a sensor read fails, the system reuses the last valid reading rather than dropping the telemetry stream — a small decision, but it matters: a real field device doesn't get to just skip a report
- PubSubClient for MQTT, ArduinoJson for payload serialization, Adafruit SSD1306/GFX for the display stack
- Built and tested in Wokwi's ESP32 simulator against a public HiveMQ broker

## Evidence

The public repository includes the full sketch, the Wokwi circuit diagram, and a simulation screenshot.

## Next iteration

The README's own roadmap is the honest next step: TLS on the MQTT connection, a real dashboard instead of manually watching the broker, and simulating more than one device at once.
