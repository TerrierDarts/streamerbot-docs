---
version: 0.0.50
---

# Prediction Canceled
This triggers when a prediction gets canceled.

## Details
::list
- Twitch Service: `EventSub`
::

## Variables
:variables-description
Name | Description
----:|:------------
`prediction.Id` | Twitch's id of the prediction
`prediction.CreatedAt` | The timestamp that the prediction was created
`prediction.Title` | The title of the prediction
`prediction.PredictionWindow` | How many seconds the prediction last
`prediction.outcome#.id` | The id for this outcome
`prediction.outcome#.title` | The title for this outcome
`prediction.outcome#.users` | How many users voted for this outcome
`prediction.outcome#.points` | The total channel points used for this outcome
`prediction.outcome#.color` | In caps the color name for this outcome e.g. `BLUE` or `PINK`
`prediction.LockedAt` | The timestamp that the prediction was locked
`prediction.EndedAt` | The timestamp that the prediction ended
`prediction._json` | All the variables in a JSON Object

::alert{type="info"}
Change the `#` incrementing from 0. So e.g. `variable0%` `variable1%` `variable2%`
::