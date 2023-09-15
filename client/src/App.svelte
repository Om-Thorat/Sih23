<script lang="ts">
  import Farmer from "./lib/Farmer.svelte";
  import Footer from "./lib/Footer.svelte";
  import Login from "./lib/Login.svelte";
  import Loginpage from "./lib/Loginpage.svelte";
  import Title from "./lib/Title.svelte";
  import Grid from "./lib/Grid.svelte";

  let currstate:string;
  import { state } from './store';

  state.subscribe((e)=>{
    currstate = e;
    console.log(currstate)
  })
  let mode: string;
  mode = "farmer";
</script>

<main
  class="bg-[#111212] text-white flex flex-col min-h-[100svh] justify-center items-center gap-5"
>
<Title />
  {#if currstate=="loggedin"}
    <span>hi</span>
  {:else if currstate=="loggingin"}
    <Login />
  {:else}
    <Loginpage />
    <!-- <Login /> -->
  {/if}
  <Footer />
</main>

<style>
</style>
