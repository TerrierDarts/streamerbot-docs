---
title: Heart Rate Pulse
description: HypeRate.io Triggers Reference
published: true
date: 2023-03-14T22:52:44.520Z
tags:
editor: markdown
dateCreated: 2023-03-14T22:52:42.454Z
---

## Overview
This triggers every second that you're using your heart rate monitor.

::callout{icon=i-mdi-alert color=amber}
When HypeRate.io is broadcasting your heart rate, this event can fire once every second, so be sure whatever action you use runs fast enough so it won't cause a backlog in an action queue.  It is also recommended that whatever action you are running be placed in a blocking queue.
::

## Configuration
### Ranges
You can select ranges if you want to filter between two values.

## Variables
Name | Description
----:|:------------
`heartRate` | The heart rate BPM