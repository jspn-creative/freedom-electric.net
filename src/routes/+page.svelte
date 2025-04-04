<script lang="ts">
  import type { PageProps } from "./$types";
  let { data, form }: PageProps = $props();
  import { Turnstile } from "svelte-turnstile";

  const currentYear = new Date().getFullYear();

  import logo from "$lib/images/logo/logo.png?enhanced";
  import bg from "$lib/images/bg.jpg?enhanced";
  import { Phone } from "lucide-svelte";
  import Input from "$components/ui/input/input.svelte";
  import Button from "$components/ui/button/button.svelte";
  import { Textarea } from "$components/ui/textarea";
</script>

<main class="relative h-screen w-screen flex items-center">
  <div class=" flex max-md:flex-col max-h-screen h-fit w-full">
    <!-- Left Side -->
    <div class="flex flex-col justify-between items-center md:items-end pt-12 pb-8 md:p-20 gap-4">
      <!-- Upper -->
      <div class="md:flex flex-col items-center md:items-end sm:max-w-[50vw] md:max-w-96 gap-6">
        <enhanced:img src={logo} alt="Freedom Electric Logo" class="max-md:mx-auto w-full -mt-10" />
        <h1 class="sr-only">Freedom Electric</h1>
      </div>

      <!-- Lower -->
      <div class="flex flex-col items-center md:items-end gap-4 text-stone-600 max-sm:tracking-wide text-xs md:text-sm font-medium">
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

    <!-- Right Side -->
    <div class="md:grow md:max-h-screen text-stone-500">
      <!-- bg -->
      <div class="md:absolute inset-y-0 w-full bg-stone-50 -z-10"></div>

      <div class="relative md:h-screen md:py-10">
        <!-- content -->
        <div class="static overflow-y-scroll max-h-full mx-4 sm:mx-6 md:mx-0 md:w-full max-md:py-12 py-20 lg:py-10 px-10 space-y-14 max-md:rounded-md max-md:mb-10 max-md:bg-stone-50">
          <section class="2xl:mr-[10vw] 2xl:ml-[5vw]">
            <h2 class="font-serif mb-4 text-3xl font-bold text-stone-600">About Us.</h2>
            <p class="max-w-2xl leading-relaxed">Freedom Electric specializes in industrial electrical contracting, providing professional electrical services with a commitment to excellence and safety. Our experienced team serves businesses like yours with dedication and expertise.</p>
          </section>

          <section class="2xl:mr-[10vw] 2xl:ml-[5vw]">
            <div class="border-t border-stone-200 pt-10">
              <div class="rounded-md">
                <h2 class="font-serif text-3xl font-bold text-stone-600 mb-8">Our Locations:</h2>

                <div class="flex md:max-lg:flex-col gap-6">
                  <div class="rounded-md outline-2 outline-stone-200 py-4 pl-6 pr-8">
                    <h3 class="font-serif font-semibold text-stone-500 text-sm/4">Oregon</h3>
                    <!-- <p class="text-stone-500 text-xs">Tillamook, Oregon</p> -->
                  </div>
                  <div class="rounded-md outline-2 outline-stone-200 py-4 pl-6 pr-8">
                    <h3 class="font-serif font-semibold text-stone-500 text-sm/4">Texas</h3>
                    <!-- <p class="text-stone-500 text-xs">Winona, Texas</p> -->
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="2xl:mr-[10vw] 2xl:ml-[5vw] mb-0">
            <div class="border-t border-stone-200 pt-10">
              <h2 class="font-serif text-3xl font-bold mb-4 text-stone-600">Contact Us:</h2>
              <p class="mb-6 leading-relaxed">Please fill out the form below to contact us.</p>

              {#if form?.success}
                <div id="message" class="text-emerald-500 font-medium text-base">Got it! We'll be in touch.</div>
              {:else}
                <form method="POST" action="#message" class="">
                  {#if form?.sendFailed}
                    <div id="message" class="text-red-400 font-medium text-base/5 pb-2">There was a problem sending your message. Please try again or give us a call to let us know something went wrong.</div>
                  {:else if form?.validationFailed}
                    <div id="message" class="text-red-400 font-medium text-base pb-2">There seems to be a problem. Please refresh the page and try again.</div>
                  {/if}
                  <div class="max-w-full mx-auto md:ml-0 lg:max-w-2xl **:has-[+:required]:after:content-['*'] **:has-[+:required]:after:text-red-900/40 **:has-[+:required]:after:text-sm **:has-[+:required]:after:font-medium **:has-[+:required]:after:pl-0.5">
                    <div class="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
                      <div>
                        <label for="first-name" class="block text-sm/8 font-medium">First name</label>

                        <Input id="first-name" type="text" name="first-name" required placeholder="Your first name" class="w-full" />
                      </div>
                      <div>
                        <label for="last-name" class="block text-sm/8 font-medium">Last name</label>

                        <Input id="last-name" type="text" name="last-name" required placeholder="Your last name" class="w-full" />
                      </div>
                      <div class="sm:col-span-2">
                        <label for="email" class="block text-sm/8 font-medium">Email</label>

                        <Input id="email" type="email" name="email" required placeholder="Your email" class="w-full" />
                      </div>
                      <div class="sm:col-span-2">
                        <label for="phone-number" class="block text-sm/8 font-medium">Phone number</label>

                        <Input id="phone-number" type="tel" name="phone-number" placeholder="Your phone number" class="w-full" />
                      </div>
                      <div class="sm:col-span-2">
                        <label for="message" class="block text-sm/8 font-medium">Message</label>

                        <Textarea id="message" name="message" required placeholder="Your message" class="w-full" />
                      </div>
                    </div>
                    <div class="mt-8 flex justify-end">
                      <Button type="submit" variant="outline">Send message</Button>
                    </div>
                  </div>
                  <Turnstile siteKey="0x4AAAAAAA70S_YngNzk0TJI" />
                </form>
              {/if}
            </div>
          </section>

          <!-- overlays -->
          <div aria-hidden="true" class="hidden md:block absolute z-20 top-10 inset-x-0 h-10 pointer-events-none bg-linear-to-b from-stone-50 to-transparent"></div>
          <div aria-hidden="true" class="hidden md:block absolute z-20 bottom-10 inset-x-0 h-10 pointer-events-none bg-linear-to-t from-stone-50 to-transparent"></div>
        </div>
      </div>
    </div>
  </div>
</main>

<div class="fixed md:absolute inset-0 -z-30" aria-hidden="true">
  <enhanced:img src={bg} alt="" sizes="min(1440px, 100vw)" class="w-full h-full object-cover" />
</div>

<div aria-hidden="true" class="fixed md:absolute inset-0 -z-20 bg-linear-to-tr from-stone-200 via-stone-200/90 to-stone-200/70"></div>
