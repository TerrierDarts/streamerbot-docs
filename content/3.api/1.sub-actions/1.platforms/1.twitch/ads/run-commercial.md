# Run Commercial
Start an ad break on your Twitch channel.

![Preview](/img/sub-actions/twitch/run-commercial.png)

## Parameters

### `Duration`
Duration of ad break, in seconds.

- Type: `Integer`
- Values: `30`, `60`, `90`, `120`, `150`, `180`

::list{type=warning}
- Only the specified values are allowed
::

## C# Usage

::code-group
  ```csharp [Method]
  void TwitchRunCommercial(int duration);
  ```
  ```csharp [Example]
  // Start a 30 second ad break
  CPH.TwitchRunCommercial(30);
  ```
::