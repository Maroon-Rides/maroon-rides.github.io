<script lang="ts">
  import SiteFooter from '#lib/components/SiteFooter.svelte';
  import SiteHeader from '#lib/components/SiteHeader.svelte';
  import { IOS_APP_ID } from '#lib/site.ts';
  import { ModeWatcher } from 'mode-watcher';
  import './layout.css';

  let { children } = $props();
</script>

<svelte:head>
  <meta name="apple-itunes-app" content="app-id={IOS_APP_ID}" />
</svelte:head>

<ModeWatcher />

<div class="flex min-h-svh flex-col">
  <SiteHeader />
  <main class="flex-1">
    {@render children()}
  </main>
  <SiteFooter />
</div>
