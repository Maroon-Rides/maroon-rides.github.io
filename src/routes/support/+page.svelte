<script lang="ts">
  import PageHeading from '#lib/components/PageHeading.svelte';
  import Seo from '#lib/components/Seo.svelte';
  import { Button } from '#lib/components/ui/button/index.ts';
  import { CONTACT_EMAIL } from '#lib/site.ts';
  import { Mail } from '@lucide/svelte';
</script>

<Seo title="Support" description="Get help with Maroon Rides." />

<PageHeading
  title="Support"
  description="Questions, bug reports or feedback? We read every email."
/>

<div class="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
  <div
    class="flex max-w-3xl flex-col gap-4 rounded-xl border bg-card p-6 sm:flex-row sm:items-center"
  >
    <div class="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
      <Mail class="size-5 text-brand-text" />
    </div>
    <div class="flex-1">
      <h2 class="font-medium">Email us</h2>
      <p class="text-sm text-muted-foreground">{CONTACT_EMAIL}</p>
    </div>
    <Button href="mailto:{CONTACT_EMAIL}" variant="outline" class="w-fit">Send an email</Button>
  </div>
</div>
