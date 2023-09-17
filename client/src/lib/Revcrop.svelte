<script lang="ts">
    import { state } from "../store";

    function rev(){
        state.set("scricrop");
    }
</script>

<button on:click={rev} class=" h-full bg-[#1d1f1f] flex flex-col justify-evenly items-center rounded-[2rem] w-[18%] cursor-pointer ml-5">
    <img class="pt-5 scale-90" src="/image.svg" alt="Upload"/>
    <span class="ibm text-xl">Yet to be reviewed</span>
</button>