<script lang="ts">
import {state} from "../store";
import {mode} from "../store";

function Goin(e:string): null {
  state.set("loggingin");
  mode.set(e)
  return null;
}
</script>

<div class="flex flex-row min-h-[70%] w-screen items-center justify-evenly">
    <button class="w-1/5 aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0" on:click={()=>{Goin("farmer")}}>
        <img src="/Farmer.png" alt="Farmer" class="scale-90 transition-all cursor-pointer hover:scale-100" />
    </button>
    <button class="w-1/5 aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0" on:click={()=>{Goin("scientist")}}>
        <img src="/Scientist.png" alt="Scientist" class="scale-90 transition-all cursor-pointer hover:scale-100" />
    </button>
</div>