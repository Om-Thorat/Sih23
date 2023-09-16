<script lang="ts">
import Title from "./Title.svelte";
import {state} from "../store";
import {mode} from "../store";

function Goin(e:string): null {
  state.set("loggingin");
  mode.set(e)
  return null;
}
</script>
<Title />
<div class="flex flex-row min-h-[70%] w-screen items-center justify-evenly">
    <button on:click={()=>{Goin("farmer")}} class="flex w-1/5 items-center justify-center flex-col">
    <div class="aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0">
        <img src="/Farmer.png" alt="Farmer" class="scale-90 transition-all cursor-pointer hover:scale-100" />
    </div>
    <span class="text-3xl pt-5 ibm">log in as Farmer</span>
    </button>
    <button on:click={()=>{Goin("scientist")}} class="flex w-1/5 items-center justify-center flex-col">
        <div class="aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0">
            <img src="/Scientist.png" alt="Farmer" class="scale-90 transition-all cursor-pointer hover:scale-100" />
        </div>
        <span class="text-3xl pt-5 ibm">log in as Scientist</span>
    </button>
</div>