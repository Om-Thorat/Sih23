<script lang="ts">
    import { state } from "../store";

    function reset(){
        state.set("dumb")
    }
</script>

<div class="flex flex-row h-1/6 border-b-2 border-white border-opacity-40 absolute top-0 w-full ibm text-xl">
<button on:click={reset} class="w-1/2 flex justify-center items-center">
Random app name
</button>
<div class="w-[2px] h-full bg-white/40"></div>
<button on:click={reset} class="w-1/2 flex justify-center items-center">
यादृच्छिक पाठ ऐप नाम
</button>
</div>