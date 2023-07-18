# Set Channel Game
Update the current game category of your Twitch channel.

![Preview](/img/sub-actions/twitch/set-channel-game.png)

## Parameters
### `Source`
Select the source of the new game value

- `String`: Select this option to manually enter the game title
- `Specific Game`: Select this option to select a game from a dropdown

### `Title`
Enter the title of the new game category

- Type: `String`

::list{type=warning}
- Only available if you selected the `String` source option
::

## Variables
The following variables will be populated after executing this sub-action

Name | Description | Example
----:|:------------|---------|
`gameSuccess` | The status of the sub-action request | `True/False`
`gameName` | The name of the game | `Beat Saber`
`gameId` | The id of the game | `503116`
`gameBoxArt` | The url of the game boxart, can be used with browser sources in your broadcaster.

## C# Usage

::code-group
  ```csharp [Method]
  GameInfo SetChannelGame(string game);
  ```
  ```csharp [Example]
  CPH.SetChannelGame('Beat Saber');
  ```
::