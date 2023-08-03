---
version: 0.0.39
---

# Whispers
When someone sends the broadcaster account a whisper.

For a detailed guide about Twitch see [this page](/Platforms/Twitch).

## Notes
The user sending the whisper must have a **verified phone number** (see the **Phone Number setting** in your **Security and Privacy settings**).

The API may silently drop whispers that it suspects of violating Twitch policies, it will still indicate success even if the message is dropped.

Rate Limits: You may whisper to a maximum of **40 unique recipients per day**. Within the per day limit, you may whisper a maximum of 3 whispers per second and a maximum of 100 whispers per minute.

The maximum message lengths are:
* 500 characters if the user you're sending the message to hasn't whispered you before.
* 10,000 characters if the user you're sending the message to has whispered you before.

Messages that exceed the maximum length are truncated.

## Event Data
:----|:------------:
Twitch Service: | `Chat Client`
Added in: | *v0.0.39*{.version-badge}

## Variables
This includes the [User](/Variables/User-Variables) variables and the [Chat](/Variables/Chat-Variables) variables.