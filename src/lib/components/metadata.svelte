<script lang="ts">
  import { page } from "$app/state";
  import { siteConfig } from "$lib/site";

  const title = siteConfig.name;
  const description = siteConfig.description;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />
  <meta name="keywords" content={siteConfig.keywords.join(",")} />
  <meta name="author" content={siteConfig.author} />

  <meta name="theme-color" content={siteConfig.themeColor} />

  <meta name="robots" content="index, follow" />

  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={siteConfig.imageUrl} />

  <meta property="og:site_name" content={siteConfig.name} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={page.url.href} />
  <meta property="og:image" content={siteConfig.imageUrl} />
  <meta property="og:image:alt" content={title} />
  <meta property="og:locale" content="en" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={siteConfig.imageUrl} />
  <meta name="twitter:image:alt" content={title} />
  <meta name="twitter:creator" content={`@${siteConfig.author}`} />

  <meta name="Content-Type" content="text/html;charset=UTF-8" />
  <meta name="X-UA-Compatible" content="ie=edge" />

  <!-- <link rel="manifest" href="/site.webmanifest" /> -->

  <!-- <link rel="icon" type="image/x-icon" href="/favicon.ico" />
	<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" /> -->
  <!-- <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" /> -->
</svelte:head>
