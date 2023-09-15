<script lang="ts">
  import Farmer from "./lib/Farmer.svelte";
  import Footer from "./lib/Footer.svelte";
  import Loginpage from "./lib/Loginpage.svelte";
  import Title from "./lib/Title.svelte";
  import Grid from "./lib/Grid.svelte";
  let IsLoggedin: boolean;
  let mode: string;
  mode = "farmer";
</script>

<main class="bg-[#111212] text-white flex flex-col h-[100svh] min-h-[100svh] justify-center items-center gap-5">
  <Title />
  {#if IsLoggedin}
    {#if mode == "farmer"}
      <span>hi farmer</span>
    {:else}
      <span>Hi scientist</span>
    {/if}
  {:else}
    <Grid />
    <!-- <Loginpage /> -->
    <!-- <Farmer /> -->
  {/if}
  <Footer />
</main>

<style>
</style>
