<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { WithElementRef } from "bits-ui";
  import { cn } from "$lib/utils";

  let { ref = $bindable(null), value = $bindable(), class: className, ...restProps }: WithElementRef<HTMLInputAttributes> = $props();
</script>

<input bind:this={ref} class={cn("autofill:bg-stone-50 border-stone-200 ring-offset-stone-400 placeholder:text-stone-300 focus-visible:ring-stone-200 flex h-10 w-full rounded-md border-2 px-3 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)} bind:value {...restProps} />
