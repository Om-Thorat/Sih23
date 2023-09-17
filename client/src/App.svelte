<script lang="ts">
  import Farmer from "./lib/Farmer.svelte";
  import Footer from "./lib/Footer.svelte";
  import Login from "./lib/Login.svelte";
  import Loginpage from "./lib/Loginpage.svelte";
    import Scicrop from "./lib/Scicrop.svelte";
  import Scientist from "./lib/Scientist.svelte";

  let currstate:string;
  import { state } from './store';

  state.subscribe((e)=>{
    currstate = e;
    console.log(currstate)
  })
</script>

<main
  class="bg-[#111212] text-white flex flex-col min-h-[100svh] justify-center items-center gap-5"
>
  
  {#if currstate=="loggedin"}
    <span>hi</span>
  {:else if currstate=="loggingin"}
    <Login />
  {:else if currstate=="farmer"}
    <Farmer/>
  {:else if currstate=="scientist"}
    <Scientist />
  {:else if currstate=="scricrop"}
    <Scicrop />
  {:else}
    <Loginpage />
    <!-- <Scicrop /> -->
  {/if}
  <Footer />
</main>

<style>
</style>
