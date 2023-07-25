---
navigation.title: Actions
---

# Action C# Methods
C# methods for manipulating Streamer.bot actions

## Actions
```csharp
bool RunAction(string actionName, bool runImmediately = true);
```

```csharp
bool RunActionById(string actionId, bool runImmediately = true);
```

```csharp
void DisableAction(string actionName);
void EnableAction(string actionName);
```

```csharp
bool ActionExists(string actionName);
```

## Action Queues
```csharp
void PauseActionQueue(string name);
void PauseAllActionQueues();
```

```csharp
void ResumeActionQueue(string name, bool clear = false);
void ResumeAllActionQueues(bool clear = false);
```