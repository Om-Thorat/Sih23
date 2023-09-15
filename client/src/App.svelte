<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import Login from "./lib/Login.svelte";
  import Loginpage from "./lib/Loginpage.svelte";
  import Title from "./lib/Title.svelte";

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
