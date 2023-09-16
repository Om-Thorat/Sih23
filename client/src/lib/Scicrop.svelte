<script lang="ts">
    import Action from "./Action.svelte";
    import File from "./File.svelte";
    import Logtitle from "./Logtitle.svelte";
</script>

<div class="flex flex-row min-h-[70%] w-screen items-center justify-evenly left-5">
    <Logtitle job={"Scientist"} />
    <div class="flex items-center gap-10 h-[60svh] w-full justify-right left-2">
        <File />
        <div class="flex flex-col gap-6 h-full justify-between w-1/4 ">
            
            <Action svg={"reviewed.svg"} text={"Reviewed crops"} />
            <Action svg={"eye.svg"} text={"Birds eye view"} />
            <Action svg={""} text={"What's gonna go here?"}/>
               
        </div>
    </div>
</div>