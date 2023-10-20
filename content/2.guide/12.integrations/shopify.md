---
navigation.title: Shopify
navigation.icon: null
icon: mdi:shopify
version: 0.1.14
---

# Shopify Integration
Integrate Streamer.bot with Shopify via webhooks

## Overview
With the Shopify integration you can listen to when orders are created and when orders are paid.

## Setup
First you need to go to this page https://streamer.bot/user/settings#shopify. On this page you will find a field that says `Shopify Webhook URL`. You need to copy that URL and use it later on. Now we can go to the Shopify notifications page, to get here you need to change `your-store-domain` to your store's domain https://your-store-domain.myshopify.com/admin/settings/notifications. On this page you need to completely scroll down to the bottom where it says `Create Webhook`. When you click on this it will open up a dialog where you need to put in some information. This information can be found [below](#add-webhook-dialog). After creating these 2 webhooks it will show a webhook secret yellow marked below the webhook list. You need to copy this and go back to https://streamer.bot/user/settings#shopify and paste it in the `Shopify Webhook Secret` field. After that you need to make sure the `Streamer.bot Website Integration` inside Streamer.bot is connected. And then you can use the Shopify triggers.

## Add Webhook Dialog
You need to create 2 of these webhooks one with the event of `Order creation` and the other event of  `Order payment`.

### Event
In the first webhook fill in `Order creation` and in the other webhook fill in `Order payment`.

### Format
The format needs to be in JSON

### URL
Paste the URL that you've copied from https://streamer.bot/user/settings#shopify

### Webhook API version
Use the Latest version