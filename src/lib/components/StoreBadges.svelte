<script lang="ts">
  import { APP_STORE_URL, PLAY_STORE_URL } from '#lib/site.ts';
  import { cn } from '#lib/utils.ts';

  let { class: className }: { class?: string } = $props();

  const badgeClass =
    'block h-11 overflow-hidden rounded-[9px] transition-opacity hover:opacity-85 dark:ring-1 dark:ring-white/20';
</script>

<div class={cn('flex flex-wrap items-center gap-3', className)}>
  <a href={APP_STORE_URL} class={badgeClass}>
    <img
      src="/images/app-store-badge.png"
      alt="Download on the App Store"
      class="h-full w-auto"
      width="440"
      height="150"
    />
  </a>
  <a href={PLAY_STORE_URL} class={badgeClass}>
    <img
      src="/images/google-play-badge.png"
      alt="Get it on Google Play"
      class="h-full w-auto"
      width="510"
      height="150"
    />
  </a>
</div>
