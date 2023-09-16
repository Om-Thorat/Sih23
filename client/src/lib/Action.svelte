<script lang="ts">
    export let svg:string;
    export let text:string;
</script>


<div class="flex flex-row h-full items-center bg-[#1d1f1f] p-3 rounded-[2rem] w-full">
    <img class="h-2/3 px-4" src="{svg}" alt=""/>
    <span class="text-xl">{text}</span>
</div>