# Set Channel Title
Update the current title of your Twitch channel.

![Preview](/img/sub-actions/twitch/set-channel-title.png)

## Parameters
### `Title`
Enter the new title for your stream

- Type: `String`

## C# Usage

::code-group
  ```csharp [Method]
  bool SetChannelTitle(string title);
  ```
  ```csharp [Example]
  CPH.SetChannelTitle('Playing some games!');
  ```
::