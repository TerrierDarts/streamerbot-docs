---
title: Heart Rate Pulse
description: Pulsoid Triggers Reference
published: true
date: 2023-03-15T19:28:58.999Z
tags:
editor: markdown
dateCreated: 2023-03-14T22:46:41.107Z
---

## Overview
This triggers every second that you're using your heart rate monitor.

::callout{icon=i-mdi-alert color=amber}
When Pulsoid is broadcasting your heart rate, this event can fire once every second, so be sure whatever action you use runs fast enough so it won't cause a backlog in an action queue.  It is also recommended that whatever action you are running be placed in a blocking queue.
::

## Configuration
### Ranges
You can select ranges if you want to filter between two values.

## Variables
Name | Description
----:|:------------
`measuredAt` | The epoch time from the measurement
`heartRate` | The heart rate BPM