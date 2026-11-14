<script lang="ts">
  import PageHeading from '#lib/components/PageHeading.svelte';
  import Seo from '#lib/components/Seo.svelte';
  import { TRIPSPARK_PRIVACY_URL } from '#lib/site.ts';
</script>

<Seo title="Privacy Policy" description="How Maroon Rides handles your data." />

<PageHeading title="Privacy Policy" description="Last updated February 2, 2024" />

<div class="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
  <div class="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
    <p>Maroon Rides does not collect, share or store any user data.</p>
    <p>
      Bus data in the app comes from TripSpark. See the
      <a
        href={TRIPSPARK_PRIVACY_URL}
        class="font-medium text-foreground underline underline-offset-4">TripSpark Privacy Policy</a
      >
      for how they handle data.
    </p>
  </div>
</div>
