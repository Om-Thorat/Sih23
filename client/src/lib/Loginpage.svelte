<script lang="ts">
import Title from "./Title.svelte";
import {state} from "../store";

function Goin(): null {
  state.set("loggingin");
  return null;
}
</script>
<Title />
<div class="flex flex-row min-h-[70%] w-screen items-center justify-evenly">
    <button class="w-1/5 aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0" on:click={Goin}>
        <img src="/Farmer.png" alt="Farmer" class="scale-90 transition-all cursor-pointer hover:scale-100" />
    </button>
    <button class="w-1/5 aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0" on:click={Goin}>
        <img src="/Scientist.png" alt="Scientist" class="scale-90 transition-all cursor-pointer hover:scale-100" />
    </button>
</div>