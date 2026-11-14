<script lang="ts">
  let { title, description }: { title: string; description?: string } = $props();
</script>

<div class="mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 sm:pt-16 sm:pb-10">
  <h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
  {#if description}
    <p class="mt-3 max-w-2xl text-muted-foreground">{description}</p>
  {/if}
</div>
