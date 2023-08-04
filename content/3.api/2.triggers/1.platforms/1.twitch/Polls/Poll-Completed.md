---
title: Poll Completed
description: Twitch Triggers Reference
published: true
date: 2023-04-28T18:55:00.869Z
tags: 
editor: markdown
dateCreated: 2023-04-28T18:54:58.864Z
---

## Overview
This triggers when a poll gets completed.

## Details
::list
- Twitch Service: `EventSub`
::
Added in: | *v0.0.50*{.version-badge}

## Variables
:variables-description
Name | Description
----:|:------------
`poll.Id` | Twitch's id for the poll
`poll.StartedAt` | The timestamp that the poll was created
`poll.Title` | The title of the poll
`poll.Duration` | How duration of the poll in seconds
`poll.DurationRemaining` | How many seconds the poll has remaining
`poll.choices.count` | The number of choices
`poll.choice#.title` | The title of the poll choice
`poll.choice#.votes` | Number of regular votes for the choice
`poll.choice#.rewardVotes` | Total number of reward based votes
`poll.choice#.totalVotes` | Total number of votes for the choice
`poll.votes` | Total number of regular votes
`poll.rewardVotes` | Total number of reward based votes
`poll.totalVotes` | Overall total number of votes
`poll.EndedAt` | The timestamp that the poll ended
`poll.winningIndex` | The index of the winning choice
`poll.winningChoice.id` | The id of the winning choice
`poll.winningChoice.title` | The title of the winning choice
`poll.winningChoice.votes` | Number of regular votes
`poll.winningChoice.rewardVotes` | Number of channel point based votes
`poll.winningChoice.totalVotes` | Total number of votes for the choice
`poll._json` | All the variables in a JSON Object
{.vars-table}

> Change the `#` incrementing from 0. So e.g. `variable0%` `variable1%` `variable2%`
{.is-info}