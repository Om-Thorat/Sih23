<script lang="ts">
    export let job:string;
    import { state } from "../store";

    function reset(){
        state.set("dumb")
    }
</script>

<div class="flex flex-row items-center h-1/6 border-b-2 border-white border-opacity-40 absolute top-0 w-full ibm text-xl position-realtive ">
    <button on:click={reset} class="w-1/2 flex justify-center items-center">
    Random app name
    </button>
    <div class="flex justify-center items-center h-20 aspect-square rounded-full border-white border-2 transition-all hover:border-opacity-0 position absolute right-3">
        <img src="/{job}.png" alt="Farmer" class=" h-20 scale-90 transition-all cursor-pointer hover:scale-100" />
    </div>
</div>