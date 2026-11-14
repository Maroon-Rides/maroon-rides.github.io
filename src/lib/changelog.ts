export type Release = {
  version: string;
  date: string;
  notes: string[];
};

export const RELEASES: Release[] = [
  {
    version: '3.0.2',
    date: '2026-11-06',
    notes: ['Fixed a crash when closing a route with a map popup open.'],
  },
  {
    version: '3.0.1',
    date: '2026-10-24',
    notes: ['Data sync recovers from errors without starting over.'],
  },
  {
    version: '3.0.0',
    date: '2026-10-22',
    notes: [
      'Offline access: routes and timetables are stored on your device, so schedules load without a connection.',
    ],
  },
  {
    version: '2.0.3',
    date: '2026-09-22',
    notes: ['Fixed a connection issue on Android.'],
  },
  {
    version: '2.0.2',
    date: '2026-09-01',
    notes: ['Better support for larger text sizes.'],
  },
  {
    version: '2.0.1',
    date: '2026-08-29',
    notes: [
      'Timetables mark time points, the stops where early buses wait for their scheduled departure.',
    ],
  },
  {
    version: '2.0.0',
    date: '2026-08-22',
    notes: [
      'Maroon Rides has been rebuilt from the ground up. It is faster and shares one codebase across iPhone and Android.',
      'Tap a route line on the map to open that route.',
      'Zoom to a stop from its timetable.',
      'Refreshed map styling in light and dark mode.',
    ],
  },
  {
    version: '1.9.1',
    date: '2026-07-10',
    notes: [
      'Fixed stepping between days in timetables.',
      'Fixed the "No timetable for today" message showing when it should not.',
    ],
  },
  {
    version: '1.9.0',
    date: '2025-11-22',
    notes: ['The app handles location permission failures without breaking.'],
  },
  {
    version: '1.8.2',
    date: '2025-11-13',
    notes: ['Fixed routes failing to load their directions.'],
  },
  {
    version: '1.8.1',
    date: '2025-11-05',
    notes: ['Fixed crashes when viewing a route or stop timetable.'],
  },
  {
    version: '1.8.0',
    date: '2025-09-25',
    notes: ['A large internal rework makes the app faster and more responsive.'],
  },
  {
    version: '1.7.0',
    date: '2025-08-31',
    notes: ['Bug fixes and improvements.'],
  },
  {
    version: '1.6.5',
    date: '2025-07-01',
    notes: ['Updated for the latest Google Play requirements.'],
  },
  {
    version: '1.6.4',
    date: '2025-02-14',
    notes: ['Fixed map view and segmented control issues on Android.', 'Alerts dismiss correctly.'],
  },
  {
    version: '1.6.3',
    date: '2025-01-10',
    notes: ['Route planning works again.'],
  },
  {
    version: '1.6.1',
    date: '2024-10-02',
    notes: ['The Apple Watch app now supports watchOS 8.5, including Apple Watch Series 3.'],
  },
  {
    version: '1.6.0',
    date: '2024-09-24',
    notes: [
      'Maroon Rides is now on Android, with the same interface as iOS.',
      'New Apple Watch app with upcoming departures for your stops.',
    ],
  },
  {
    version: '1.5.6',
    date: '2024-09-20',
    notes: [
      'Route planning no longer searches arbitrary locations because of data source issues. Planning between stops still works.',
    ],
  },
  {
    version: '1.5.5',
    date: '2024-09-18',
    notes: ['Fixed map suggestions not loading.'],
  },
  {
    version: '1.5.4',
    date: '2024-08-28',
    notes: [
      'Gameday routes appear in their own "Gameday" group on the route list.',
      'Stops in the other direction show departure estimates on their callouts.',
      'Stop timetable titles truncate correctly.',
    ],
  },
  {
    version: '1.5.3',
    date: '2024-08-27',
    notes: ['Fixed issues with the Reduce Motion accessibility setting.'],
  },
  {
    version: '1.5.2',
    date: '2024-08-22',
    notes: ['Fixed crashes in data loading.'],
  },
  {
    version: '1.5.1',
    date: '2024-08-19',
    notes: [
      'Route planning works before bus routes finish loading. Stops become selectable as endpoints once they load.',
    ],
  },
  {
    version: '1.5.0',
    date: '2024-08-07',
    notes: ['Route planning: pick a destination and get walking and bus directions across campus.'],
  },
  {
    version: '1.4.0',
    date: '2024-03-30',
    notes: ['Reveille Rides is now Maroon Rides.'],
  },
  {
    version: '1.3.1',
    date: '2024-03-25',
    notes: [
      'Faster data loading and more frequent updates.',
      'Tapping another direction updates the selector.',
      'Favorites persist reliably between updates.',
      'Map elements layer correctly.',
      'Stop callouts show departure estimates.',
      'Alerts show affected routes on the map.',
    ],
  },
  {
    version: '1.3.0',
    date: '2024-02-21',
    notes: ['Dark mode.', 'Small UI fixes and improvements.'],
  },
  {
    version: '1.2.2',
    date: '2024-02-14',
    notes: ['Restored access to bus data.'],
  },
  {
    version: '1.2.1',
    date: '2024-02-09',
    notes: [
      'Timetables for future days.',
      '"Campus Circulator" label under single-direction routes.',
      'Tap an alert to see affected stops and detours.',
      'Removed the "to:" label in bus callouts for single-direction routes.',
      'Fixed visual glitches on stop callouts.',
      'Better timetable error handling.',
    ],
  },
  {
    version: '1.1.2',
    date: '2024-02-02',
    notes: ['Fixed visual glitches caused by a data source change.'],
  },
  {
    version: '1.1.0',
    date: '2024-01-31',
    notes: [
      'Bus ID numbers on callouts.',
      'Stops show on the deselected direction.',
      'Choose whether All Routes or Favorites shows when the app opens.',
      'Bug fixes and improvements.',
    ],
  },
  {
    version: '1.0.3',
    date: '2024-01-20',
    notes: ['First release as Reveille Rides.'],
  },
];
