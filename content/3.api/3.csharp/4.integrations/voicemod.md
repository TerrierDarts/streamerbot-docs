---
icon: IconVoicemod
---

# VoiceMod
Reference of all C# methods available for the [VoiceMod integration](/config/integrations/voicemod)

## Select Voice
```csharp
void VoiceModSelectVoice(string voiceId);
```

## Voice Changer On/Off
```csharp
bool VoiceModVoiceChangerOn();
bool VoiceModVoiceChangerOff();
```

## Hear My Voice On/Off
```csharp
bool VoiceModHearMyVoiceOn();
bool VoiceModHearMyVoiceOff();
```

## Censor On/Off
```csharp
void VoiceModCensorOn();
void VoiceModCensorOff();
```

## Get Current Voice
```csharp
string VoiceModGetCurrentVoice();
```

## Get Voice Changer Status
```csharp
bool VoiceModGetVoiceChangerStatus();
```

## Get Hear Myself Status
```csharp
bool VoiceModGetHearMyselfStatus();
```