<script lang="ts">
  import type { Snippet } from "svelte";
  import Metadata from "$lib/components/metadata.svelte";
  import type { LayoutData } from "./$types";
  import "../app.css";

  const currentYear = new Date().getFullYear();
  let { data, children }: { data: LayoutData; children: Snippet } = $props();
  import logo from "$lib/images/logo/logo.png";
  import bg from "$lib/images/bg.jpg";
  import { Phone } from "lucide-svelte";
</script>

<Metadata />

<!-- Main -->
<div id="main">
  <div class="flex max-md:flex-col md:min-h-screen bg-stone-50 text-stone-800">
    <!-- Left side with fixed background -->
    <div class="md:w-1/2 xl:w-1/3 relative z-10 md:fixed top-0 left-0 md:h-screen">
      <img src={bg} alt="" class="w-full h-full object-cover absolute -z-10" />
      <div class="h-full flex flex-col justify-center items-end py-8 md:px-20 bg-linear-to-tr from-stone-200 via-stone-200/90 to-stone-200/70">
        <div class="flex flex-col justify-between h-full max-h-[50vh] md:-mt-20 gap-4">
          <!-- Upper -->
          <div class="flex flex-col items-center md:items-end gap-6">
            <img src={logo} alt="Freedom Electric Logo" class="max-w-[80%] md:max-w-full lg:max-w-96 h-auto object-contain -mt-10" />
            <h1 class="sr-only">Freedom Electric</h1>
            <!-- <p class="text-xs font-bold uppercase tracking-wider">Industrial Electrical Contractors</p> -->
          </div>

          <!-- Lower -->
          <div class="flex flex-col items-center md:items-end gap-4 text-stone-500 max-sm:tracking-wide text-xs md:text-sm font-medium">
            <ul class="text-center flex md:flex-col items-center md:items-end md:gap-y-4">
              <li class="inline-block relative pe-8 md:pe-0 last:pe-0 last-of-type:before:hidden md:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-stone-400">
                <a class="flex items-center gap-x-2 hover:text-stone-700 focus:outline-none focus:text-stone-700" href="tel:503-953-5399">
                  <Phone class="size-4 md:size-5" />503-953-5399
                </a>
              </li>
              <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden md:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-stone-400">
                &copy; {currentYear} Freedom Electric
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Right side with scrollable content -->
    {@render children()}
  </div>
</div>
