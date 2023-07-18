---
title: PolyPop
description: Set up Streamer.bot to remotely control your OBS instance
---

## Prerequisites
To enable remote control of your **OBS Studio** instance from **Streamer.bot** you must first install the OBS WebSocket Plugin

- [<img src="/logos/obs-websocket.png"/>**Download OBS WebSocket *<i class="mdi mdi-github"></i> obs-websocket v5+***](https://github.com/obsproject/obs-websocket/releases/latest)
{.btn-grid .my-5}

After installing the plugin and restarting OBS, you should be able to configure your WebSocket Server settings as you wish:

![obs-studio-obs-websocket-settings.png](/broadcasters/obs/obs-studio-obs-websocket-settings.png =700x)

Later, you will need to match these settings in Streamer.bot


## Configuration

Once configured, connected OBS sessions will report their status on the OBS tab in Streamer.bot

![overview.png](/broadcasters/obs/overview.png =700x)

To add a new connection, <kbd>Right-Click</kbd> <kbd>-></kbd> <kbd>Add</kbd> to open the new connection dialogue

![obs-connection.png](/broadcasters/obs/obs-connection.png)

Configuration options are outlined below:

### Name
Enter any name or description for this OBS Studio connection

### Version
Please select which `WebSocket` Version you are wanting to use.
The default value is `4.9.x`.
### Host
Enter the local IP address of your OBS Studio instance
The default value of `127.0.0.1` will find instances on the same PC

### Port
Enter the **port** set in OBS WebSocket Server settings earlier
The default value is `4455`

### Password
**Optional** - Enter the password if you enabled authentication in OBS WebSocket Server settings earlier

### Auto Connect on Startup
Enable this option to automatically connect to OBS Studio when you start Streamer.bot

### Reconnect on Disconnect
Enable this option to automatically reconnect to OBS Studio if the connection is lost

### Retry Interval
Amount of time, in seconds, to wait between each reconnection attempt

> If OBS isn't connecting, please double check the **PORT, PASSWORD and VERSION** to ensure that data is correct. {.is-warning}
---

- [<i class="mdi mdi-chevron-left"></i> **Quick Start Guide *Go Back***](/Quick-Start)
- [<i class="mdi mdi-chat"></i> **Up Next *Configure basic chat commands***](/Quick-Start/Commands)
{.btn-grid .my-5}