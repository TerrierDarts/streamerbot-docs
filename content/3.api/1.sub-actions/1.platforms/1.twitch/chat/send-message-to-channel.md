# Send Message to Channel
Send a formatted message to your Twitch chat
:image-preview{width=400}

## Parameters
### `Preferred Account`
Select the Twitch account to use when sending the message:
- `Bot`: Send the message from your [bot account](/config/platforms/twitch/accounts)
- `Broadcaster`: Send the message from your [broadcaster account](/config/platforms/twitch/accounts)

### `Message`
Enter the text you would like to send

## C# Usage
::code-group
  ```csharp [Method]
  void SendMessage(string message, bool bot = true);
  ```
  ```csharp [Example]
  CPH.SendMessage("Some chat message from my broadcaster account!", false);
  ```
::