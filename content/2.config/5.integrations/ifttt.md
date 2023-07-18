---
navigation.title: IFTTT
icon: arcticons:ifttt
version: 0.1.8
---

## IFTTT Integration
The IFTTT integration allows you to execute an action in Streamer.bot from any [IFTTT](https://ifttt.com) applet.

You can also send outgoing triggers from Streamer.bot to IFTTT using the included [IFTTT sub-actions](/Sub-Actions/IFTTT)

The documentation below outlines the actions available to your applets in IFTTT.

## Execute Action
The `Execute Action` IFTTT action allows you to execute any action in your Streamer.bot instance along with a configurable text field.

### Variables

Name | Description
----:|:------------
`iftttText` | The contents of the `Text` field from your IFTTT applet. This can include any ingredients from other IFTTT supported services in your applet.

## Execute Action (JSON)
The `Execute Action (JSON)` IFTTT action allows you to execute any action in your Streamer.bot instance with a JSON payload that is automatically parsed into variables for usage in your Streamer.bot sub-actions.

This is extremely useful for connecting generic webhooks with Streamer.bot through the [IFTTT Webhooks Integration](https://ifttt.com/maker_webhooks).

### Variables
All top level keys in the JSON payload passed to this action will be available as variables in Streamer.bot

For example, the following JSON payload...
```json
{ "test": "some value", "test2": "some other value" }
```
...will be transformed into the variables `test` and `test2`, which will be populated with their respective values.

---

- [<i class="mdi mdi-chevron-left"></i> **All Integrations *Go Back***](/Integrations)
{.btn-grid .my-5}