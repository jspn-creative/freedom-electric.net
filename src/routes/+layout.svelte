<script lang="ts">
  import type { Snippet } from "svelte";
  import Metadata from "$lib/components/metadata.svelte";
  import type { LayoutData } from "./$types";
  import "../app.css";

  let { data, children }: { data: LayoutData; children: Snippet } = $props();
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  injectSpeedInsights();
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  injectAnalytics({ mode: dev ? "development" : "production" });
</script>

<Metadata />

{@render children()}
