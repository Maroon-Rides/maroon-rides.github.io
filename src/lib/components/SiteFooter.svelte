<script lang="ts">
  import {
    APP_STORE_URL,
    CONTACT_EMAIL,
    GITHUB_URL,
    INSTAGRAM_URL,
    LINKEDIN_URL,
    PLAY_STORE_URL,
    SITE_NAME,
    WEB_APP_URL,
  } from '#lib/site.ts';

  const COLUMNS = [
    {
      title: 'App',
      links: [
        { href: APP_STORE_URL, label: 'App Store' },
        { href: PLAY_STORE_URL, label: 'Google Play' },
        { href: WEB_APP_URL, label: 'Web app' },
        { href: '/changelog', label: "What's New" },
      ],
    },
    {
      title: 'Help',
      links: [
        { href: '/support', label: 'Support' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: `mailto:${CONTACT_EMAIL}`, label: 'Contact' },
      ],
    },
    {
      title: 'Follow',
      links: [
        { href: INSTAGRAM_URL, label: 'Instagram' },
        { href: LINKEDIN_URL, label: 'LinkedIn' },
        { href: GITHUB_URL, label: 'GitHub' },
      ],
    },
  ];

  const year = new Date().getFullYear();
</script>

<footer class="border-t">
  <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1fr_auto]">
    <div class="max-w-xs">
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
      <p class="mt-3 text-sm text-muted-foreground">Made by Aggies in College Station, TX.</p>
      <p class="mt-6 text-xs text-muted-foreground">&copy; {year} {SITE_NAME}</p>
    </div>

    <div class="grid grid-cols-3 gap-6 sm:gap-16">
      {#each COLUMNS as column (column.title)}
        <div>
          <h2 class="text-sm font-medium">{column.title}</h2>
          <ul class="mt-3 space-y-2">
            {#each column.links as link (link.href)}
              <li>
                <a
                  href={link.href}
                  class="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</footer>
