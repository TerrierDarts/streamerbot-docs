<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue';

const links: Array<{
  title: string;
  href: string;
  icon: string;
  description: string;
}> = [
  {
    title: 'Streamer.bot',
    href: 'https://streamer.bot',
    description: 'Streamer.bot Home',
    icon: 'IconStreamerbot',
  },
  {
    title: 'Speaker.bot',
    href: 'https://speaker.bot',
    description: 'Supercharged TTS for your live stream!',
    icon: 'IconSpeakerbot',
  },
  {
    title: 'Extensions',
    href: 'https://extensions.streamer.bot',
    description: 'Community-made features, ready to import!',
    icon: 'IconStreamerbotExtensions',
  },
  {
    title: 'Discord',
    href: 'https://discord.streamer.bot',
    description: 'Official Discord server for Streamer.bot',
    icon: 'mdi:discord',
  },
  {
    title: 'Stream Deck Plugin',
    href: 'https://streamdeck.streamer.bot',
    description: 'Official plugin for Elgato Stream Deck',
    icon: 'simple-icons:elgato',
  },
  {
    title: 'WebSocket Client',
    href: 'https://github.io/streamerbot/client',
    description: 'Official WebSocket Client for Streamer.bot',
    icon: 'IconStreamerbot',
  }
];
</script>

<template>
  <Popover v-slot="{ open }" class="relative">
    <PopoverButton
      :class="open ? '' : 'text-opacity-90'"
      class="group inline-flex items-center rounded-md bg-gray-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-600 focus-visible:ring-opacity-75"
    >
      <div class="flex items-center">
        <img src="https://streamer.bot/logo-transparent.svg" width="26">
        <span class="font-light text-xl text-gray-300">
          Streamer.bot
          <span><small class="font-normal text-gray-100 ml-1 tracking-tight">Documentation</small></span>
        </span>
      </div>
      <Icon
        :class="open ? '' : 'text-opacity-70'"
        class="ml-2 h-5 w-5 text-gray-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
        name="mdi:chevron-down"
        aria-hidden="true"
      />
    </PopoverButton>
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel
        class="absolute z-20 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl"
      >
        <div
          class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
        >
          <div class="relative grid gap-8 bg-neutral-900 p-7 lg:grid-cols-2">
            <NuxtLink
              v-for="item in links"
              :key="item.title"
              :href="item.href"
              class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-neutral-800 focus:outline-none focus-visible:ring focus-visible:ring-cyan-600 focus-visible:ring-opacity-50"
            >
              <div
                class="flex h-10 w-10 shrink-0 items-center justify-center text-white bg-neutral-800 rounded-xl sm:h-12 sm:w-12"
              >
                <Icon :name="item.icon" class="h-8 w-8" />
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-neutral-200">
                  {{ item.title }}
                </p>
                <p class="text-sm text-neutral-400">
                  {{ item.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>