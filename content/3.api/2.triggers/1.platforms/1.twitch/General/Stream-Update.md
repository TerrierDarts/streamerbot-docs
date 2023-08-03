---
version: 0.0.30
---

## Stream Update
This triggers when the title or the description changes on your stream. 

For a detailed guide about Twitch see [this page](/Platforms/Twitch).

## Event Data
:----|:------------:
Twitch Service: | `PubSub`

## Variables
Name | Description
----:|:------------
`status` | The current stream title
`gameUpdate` | Boolean value denoting whether the game category has changed <br> `True / False`
`statusUpdate` | Boolean value denoting whether the stream title has changed <br> `True / False`
`gameId` | The current game id
`gameName` | The current game name
`oldStatus` | The old stream status
`oldGameId` | The old game id
`oldGameName` | The previous game name
`gameBoxArt` | The URL for current game boxart image
`oldGameBoxArt` | The URL for previous game boxart image