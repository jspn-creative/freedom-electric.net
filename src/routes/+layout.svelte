<script lang="ts">
  import type { Snippet } from "svelte";
  import Metadata from "$lib/components/metadata.svelte";
  import type { LayoutData } from "./$types";
  import "../app.css";

  let { data, children }: { data: LayoutData; children: Snippet } = $props();
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  injectSpeedInsights();
</script>

<Metadata />

{@render children()}
