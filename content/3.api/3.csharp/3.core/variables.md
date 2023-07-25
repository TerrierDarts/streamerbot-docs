# Variables
Reference of C# methods for Streamer.bot global & user variables

## Arguments
::list{type=info}
- Arguments are local variables only available to the currently running action and any subsequent sub-actions
::

### `SetArgument`
Set an argument to be used in subsequent sub-actions
::code-group
  ```csharp [Method]
  void SetArgument(string variableName, object value);
  ```
  ```csharp [Example]
  CPH.SetArgument("myVariable", "some value");
  ```
::

## Globals
### `GetGlobalVar`
Fetch the current value of a global variable
::code-group
  ```csharp [Method]
  T GetGlobalVar<T>(string varName, bool persisted = true);
  ```
  ```csharp [Example]
  string myVariable = CPH.GetGlobalVar<string>("myVariable");
  ```
::

### `SetGlobalVar`
Set a global variable value
::code-group
  ```csharp [Method]
  void SetGlobalVar(string varName, object value, bool persisted = true);
  ```
  ```csharp [Example]
  CPH.SetGlobalVar("myVariable", "some value");
  ```
::

### `UnsetGlobalVar`
Unset a global variable value
::code-group
  ```csharp [Method]
  void UnsetGlobalVar(string varName, bool persisted = true);
  ```
  ```csharp [Example]
  CPH.UnsetGlobalVar("myVariable");
  ```
::

## User Variables
### Twitch
```csharp
T GetTwitchUserVar<T>(string userName, string varName, bool persisted = true);
void SetTwitchUserVar(string userName, string varName, object value, bool persisted = true);
void UnsetTwitchUserVar(string userName, string varName, bool persisted = true);
void UnsetTwitchUser(string userName, bool persisted = true);
```

### YouTube
```csharp
T GetYouTubeUserVar<T>(string userName, string varName, bool persisted = true);
void SetYouTubeUserVar(string userName, string varName, object value, bool persisted = true);
void UnsetYouTubeUserVar(string userName, string varName, bool persisted = true);
void UnsetYouTubeUser(string userName, bool persisted = true);
```

### Deprecated Methods
::alert{type=warning icon=mdi:alert}
These methods will be removed in a future version of **Streamer.bot**.<br>
Use the `Twitch` or `YouTube` counterparts, documented above, instead.
::

```csharp
T GetUserVar<T>(string userName, string varName, bool persisted = true);
void SetUserVar(string userName, string varName, object value, bool persisted = true);
void UnsetUserVar(string userName, string varName, bool persisted = true);
void UnsetUser(string userName, bool persisted = true);
```
