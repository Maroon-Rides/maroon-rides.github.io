import { Bell, Bus, Clock, Route, Star, WifiOff } from '@lucide/svelte';
import type { Component } from 'svelte';

export type Feature = {
  title: string;
  description: string;
  icon: Component;
};

export const FEATURES: Feature[] = [
  {
    title: 'Live bus tracking',
    description: 'See where every bus is on the map as it moves, updated in real time.',
    icon: Bus,
  },
  {
    title: 'Departure times',
    description: 'Full timetables for every stop, with live estimates for the next buses.',
    icon: Clock,
  },
  {
    title: 'Route planning',
    description: 'Pick a destination and get walking and bus directions across campus.',
    icon: Route,
  },
  {
    title: 'Service alerts',
    description: 'Detours and disruptions show up on the routes and stops they affect.',
    icon: Bell,
  },
  {
    title: 'Favorites',
    description: 'Pin the routes you ride most so they are the first thing you see.',
    icon: Star,
  },
  {
    title: 'Works offline',
    description:
      'Routes and timetables are stored on your device, so schedules load without signal.',
    icon: WifiOff,
  },
];
