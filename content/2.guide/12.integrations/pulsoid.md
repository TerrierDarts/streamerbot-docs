---
navigation.title: Pulsoid
navigation.icon: null
icon: mdi:heart
version: 0.1.8
---

![streamerbot.png](https://streamer.bot/img/integrations/pulsoid.png){.align-abstopright}

# Pulsoid Integration
Integrate Streamer.bot with Pulsoid heart rate events

![pulsoid-integration.png](/pulsoid-integration.png =x400)

After connecting your account, by clicking **Connect to Pulsoid** and following the prompts in your browser. You can assign an action to the `Heart Rate` Event, and when Pulsoid broadcasts a heart beat, this action will run.

> When Pulsoid is broadcasting your heart rate, this event can fire once every second, so be sure whatever action you use runs fast enough so it won't cause a backlog in an action queue.  It is also recommended that whatever action you are running be placed in a blocking queue.
{.is-warning}

## Variables

| Name | Description |
|---:|:------------|
| `measuredAt` | Time the measurement was taken |
| `heartRate` | Heart rate value (BPM) |