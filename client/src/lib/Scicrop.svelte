<script lang="ts">
    import Action from "./Action.svelte";
    import File2 from "./File2.svelte";
    import Logtitle from "./Logtitle.svelte";
</script>

<div class="flex flex-row min-h-[70%] w-screen items-center justify-evenly left-5">
    <Logtitle job={"Scientist"} />
    <div class="flex items-center gap-10 h-[60svh] w-full justify-right left-2">
        <File2 />
        
    </div>
</div>