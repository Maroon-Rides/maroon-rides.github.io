<script lang="ts">
  import { cn } from '#lib/utils.ts';

  type Props = {
    lightSrc: string;
    darkSrc: string;
    alt: string;
    width: number;
    height: number;
    class?: string;
  };

  let { lightSrc, darkSrc, alt, width, height, class: className }: Props = $props();

  const SIDE_BUTTONS = [
    { side: 'left', top: '17%', height: '4.5%' },
    { side: 'left', top: '25%', height: '8%' },
    { side: 'left', top: '35%', height: '8%' },
    { side: 'right', top: '28%', height: '12%' },
  ] as const;
</script>

<div class={cn('@container relative w-[300px]', className)}>
  {#each SIDE_BUTTONS as button, index (index)}
    <div
      class={cn(
        'absolute w-[1.1cqw] bg-neutral-400 dark:bg-neutral-700',
        button.side === 'left' ? '-left-[0.8cqw] rounded-l-sm' : '-right-[0.8cqw] rounded-r-sm',
      )}
      style:top={button.top}
      style:height={button.height}
    ></div>
  {/each}

  <div
    class="relative rounded-[17cqw] bg-neutral-950 p-[3.4cqw] shadow-[0_0_0_1.5px_var(--color-neutral-400),0_24px_48px_-24px_rgb(0_0_0/0.25)] dark:shadow-[0_0_0_1.5px_var(--color-neutral-700),0_24px_48px_-24px_rgb(0_0_0/0.6)]"
  >
    <div class="relative aspect-[393/852] overflow-hidden rounded-[13.6cqw] bg-black">
      <img
        src={lightSrc}
        {alt}
        {width}
        {height}
        class="absolute inset-0 size-full object-cover object-top dark:hidden"
      />
      <img
        src={darkSrc}
        {alt}
        {width}
        {height}
        class="absolute inset-0 hidden size-full object-cover object-top dark:block"
      />

      <div
        class="absolute inset-x-0 top-0 flex h-[14cqw] items-center justify-between px-[9cqw] text-black dark:text-white"
        aria-hidden="true"
      >
        <span class="w-[16cqw] text-center text-[4.3cqw] font-semibold tracking-tight">9:41</span>
        <div class="flex items-center gap-[1.4cqw]">
          <svg viewBox="0 0 18 12" class="h-[3.1cqw]" fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="0.8" />
            <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
            <rect x="10" y="3" width="3" height="9" rx="0.8" />
            <rect x="15" y="0" width="3" height="12" rx="0.8" />
          </svg>
          <svg viewBox="0 0 16 12" class="h-[3.1cqw]" fill="currentColor">
            <path
              d="M8 2.3c2.3 0 4.4.9 6 2.4l1.2-1.2C13.3 1.6 10.8.6 8 .6S2.7 1.6.8 3.5L2 4.7c1.6-1.5 3.7-2.4 6-2.4Z"
            />
            <path
              d="M8 5.7c1.4 0 2.6.5 3.6 1.4l1.2-1.2C11.5 4.7 9.8 4 8 4s-3.5.7-4.8 1.9l1.2 1.2c1-.9 2.2-1.4 3.6-1.4Z"
            />
            <path d="M8 9.1c.5 0 .9.2 1.2.5L8 11.4 6.8 9.6c.3-.3.7-.5 1.2-.5Z" />
          </svg>
          <svg viewBox="0 0 27 13" class="h-[3.3cqw]" fill="none">
            <rect
              x="0.5"
              y="0.5"
              width="22.5"
              height="12"
              rx="3.6"
              stroke="currentColor"
              opacity="0.4"
            />
            <rect x="2.2" y="2.2" width="19" height="8.6" rx="2.2" fill="currentColor" />
            <path
              d="M24.6 4.5v4c.8-.3 1.4-1.1 1.4-2s-.6-1.7-1.4-2Z"
              fill="currentColor"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      <div
        class="absolute top-[2.9cqw] left-1/2 h-[9.4cqw] w-[31cqw] -translate-x-1/2 rounded-full bg-black"
      ></div>
    </div>
  </div>
</div>
