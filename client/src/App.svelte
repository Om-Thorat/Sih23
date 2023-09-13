<script lang="ts">
  import Footer from "./lib/Footer.svelte";
import Loginpage from "./lib/Loginpage.svelte";
  import Title from "./lib/Title.svelte";
  let IsLoggedin: boolean;
</script>

<main
  class="bg-[#111212] text-white flex flex-col min-h-[100svh] justify-center items-center gap-5"
>
<Title />
  {#if IsLoggedin}
    <span>hi</span>
  {:else}
    <Loginpage />
  {/if}
<Footer />
</main>

<style>
</style>
