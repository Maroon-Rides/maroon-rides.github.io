<script lang="ts">
  import { Button } from '#lib/components/ui/button/index.ts';
  import { Moon, Sun } from '@lucide/svelte';
  import { toggleMode } from 'mode-watcher';
</script>

<Button variant="ghost" size="icon" onclick={toggleMode} aria-label="Toggle dark mode">
  <Sun class="size-4 dark:hidden" />
  <Moon class="hidden size-4 dark:block" />
</Button>
