<script lang="ts">
  import ThemeToggle from '#lib/components/ThemeToggle.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { SITE_NAME, WEB_APP_URL } from '#lib/site.ts';
  import { ArrowUpRight } from '@lucide/svelte';

  const NAV_LINKS = [
    { href: '/#features', label: 'Features' },
    { href: '/#download', label: 'Download' },
    { href: '/changelog', label: "What's New" },
    { href: '/support', label: 'Support' },
  ];
</script>

<header class="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
  <div class="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
    <a href="/" class="flex items-center gap-2.5 font-semibold tracking-tight">
      <img
        src="/images/icon.png"
        alt=""
        class="size-7 rounded-[7px] border"
        width="28"
        height="28"
      />
      {SITE_NAME}
    </a>

    <nav class="hidden items-center gap-1 md:flex">
      {#each NAV_LINKS as link (link.href)}
        <a
          href={link.href}
          class="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <div class="ml-auto flex items-center gap-1.5">
      <ThemeToggle />
      <Button href={WEB_APP_URL} variant="brand" size="sm">
        Open web app
        <ArrowUpRight />
      </Button>
    </div>
  </div>
</header>
