# Send Announcement to Channel
Send an announcement to your Twitch channel
:image-preview{width=400}

## Parameters
### `Preferred Account`
Select the Twitch account to use when sending the announcement:
- `Bot`: Send the message from your [bot account](/config/platforms/twitch/accounts)
- `Broadcaster`: Send the announcement from your [broadcaster account](/config/platforms/twitch/accounts)

### `Color`
Select the color for the announcement:
- Values: `Default`, `Blue`, `Green`, `Orange`, `Purple`

### `Message`
Enter the text you would like to announce

## C# Usage
::code-group
  ```csharp [Method]
  void TwitchAnnounce(string message, bool bot = false, string color = null);
  ```
  ```csharp [Example]
  CPH.TwitchAnnounce("Something super important!", true, "blue");
  ```
::