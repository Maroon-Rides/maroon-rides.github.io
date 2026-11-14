<script lang="ts">
  import PhoneMockup from '#lib/components/PhoneMockup.svelte';
  import Seo from '#lib/components/Seo.svelte';
  import StoreBadges from '#lib/components/StoreBadges.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { FEATURES } from '#lib/features.ts';
  import { APP_STORE_URL, PLAY_STORE_URL, WEB_APP_URL } from '#lib/site.ts';
  import { ArrowUpRight, Globe, Smartphone, TabletSmartphone } from '@lucide/svelte';

  const PLATFORMS = [
    {
      name: 'iPhone and Apple Watch',
      description: 'iOS 15 and watchOS 9 or later.',
      icon: Smartphone,
      href: APP_STORE_URL,
      action: 'App Store',
    },
    {
      name: 'Android',
      description: 'Android 7.0 or later.',
      icon: TabletSmartphone,
      href: PLAY_STORE_URL,
      action: 'Google Play',
    },
    {
      name: 'Web',
      description: 'Any modern browser. Nothing to install.',
      icon: Globe,
      href: WEB_APP_URL,
      action: 'Open web app',
    },
  ];
</script>

<Seo />

<section class="overflow-hidden border-b">
  <div
    class="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
  >
    <div>
      <img
        src="/images/icon.png"
        alt=""
        class="size-14 rounded-[12px] border shadow-sm sm:size-16 sm:rounded-[14px]"
        width="64"
        height="64"
      />
      <h1
        class="mt-6 text-5xl leading-[1.05] font-semibold tracking-[-0.03em] text-balance sm:mt-8 sm:text-6xl"
      >
        Know when your bus is coming.
      </h1>
      <p class="mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted-foreground">
        Live maps, arrival times and service alerts for every Texas A&amp;M bus route.
      </p>
      <StoreBadges class="mt-10" />
      <p class="mt-5 text-sm text-muted-foreground">
        Free on iPhone, Apple Watch and Android.
        <a
          href={WEB_APP_URL}
          class="inline-flex items-center gap-0.5 font-medium text-foreground underline-offset-4 hover:underline"
        >
          Or use it in your browser
          <ArrowUpRight class="size-3.5" />
        </a>
      </p>
    </div>

    <div
      class="-mb-16 flex h-[400px] items-start justify-center overflow-hidden px-4 pt-1 sm:-mb-24 sm:h-[480px] lg:mb-0 lg:h-auto lg:justify-end lg:overflow-visible lg:p-0"
    >
      <PhoneMockup
        lightSrc="/images/app-light.webp"
        darkSrc="/images/app-dark.webp"
        alt="Maroon Rides showing campus bus routes on a map with a list of routes below"
        width={786}
        height={1704}
        class="w-[260px] sm:w-[300px]"
      />
    </div>
  </div>
</section>

<section id="features" class="scroll-mt-14 border-b">
  <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">
        Built for getting around campus
      </h2>
      <p class="mt-4 text-muted-foreground">
        Everything you need to catch the next bus, without digging through PDFs or route maps.
      </p>
    </div>

    <div
      class="mt-8 grid gap-px overflow-hidden rounded-xl border bg-border sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {#each FEATURES as feature (feature.title)}
        <div class="flex gap-4 bg-background p-5 sm:flex-col sm:gap-5 sm:p-8">
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
            <feature.icon class="size-5 text-brand-text" />
          </div>
          <div>
            <h3 class="font-semibold">{feature.title}</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section id="download" class="scroll-mt-14">
  <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Use it anywhere</h2>
      <p class="mt-4 text-muted-foreground">
        Maroon Rides is free on every platform, with no account required.
      </p>
    </div>

    <ul class="mt-8 divide-y rounded-xl border sm:mt-10">
      {#each PLATFORMS as platform (platform.name)}
        <li
          class="grid grid-cols-[2.5rem_1fr] items-center gap-x-4 gap-y-3 p-5 sm:grid-cols-[2.5rem_1fr_auto] sm:p-6"
        >
          <div class="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
            <platform.icon class="size-5 text-brand-text" />
          </div>
          <div class="min-w-0">
            <h3 class="font-semibold">{platform.name}</h3>
            <p class="mt-0.5 text-sm text-muted-foreground">{platform.description}</p>
          </div>
          <Button
            href={platform.href}
            variant="outline"
            size="sm"
            class="col-start-2 w-fit sm:col-start-3"
          >
            {platform.action}
            <ArrowUpRight />
          </Button>
        </li>
      {/each}
    </ul>
  </div>
</section>
