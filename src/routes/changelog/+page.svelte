<script lang="ts">
  import PageHeading from '#lib/components/PageHeading.svelte';
  import Seo from '#lib/components/Seo.svelte';
  import { RELEASES } from '#lib/changelog.ts';

  const dateFormat = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
</script>

<Seo title="What's New" description="Release notes for every version of Maroon Rides." />

<PageHeading title="What's New" description="Release notes for every version of Maroon Rides." />

<div class="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
  <ol class="max-w-3xl divide-y">
    {#each RELEASES as release (release.version)}
      <li class="grid gap-3 py-6 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:py-8">
        <div>
          <h2 class="font-medium">Version {release.version}</h2>
          <time datetime={release.date} class="text-sm text-muted-foreground">
            {dateFormat.format(new Date(release.date))}
          </time>
        </div>
        <ul
          class="list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-muted-foreground/60"
        >
          {#each release.notes as note (note)}
            <li>{note}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ol>
</div>
