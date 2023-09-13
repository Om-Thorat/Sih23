<script lang="ts">
    import { onMount } from "svelte";
    function sleep(ms:number) {return new Promise(resolve => setTimeout(resolve, ms));}
    let time:string;
    async function utime(){
        while (true){
            let t = await fetch("./time");
            time = await t.text();
            await sleep(1000);
        }
    }
    onMount(utime)
</script>

<span class="text-xl font-mono font-bold">{time}</span>