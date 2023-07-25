---
icon: IconSpeakerbot
---

# Speaker.bot
Reference of C# methods for the [Speaker.bot integration](/config/integrations/speakerbot)

## `TtsSpeak`
Speak a message with a specified voice alias
::code-group
  ```csharp [Method]
  int TtsSpeak(string voiceAlias, string message, bool badWordFilter = false);
  ```
  ```csharp [Example]
  CPH.TtsSpeak("default", "Hello, world!", true);
  ```
::