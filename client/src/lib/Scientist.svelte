<script lang="ts">
    import Action from "./Action.svelte";
    import Logtitle from "./Logtitle.svelte";
  import Revcrop from "./Revcrop.svelte";
</script>

<div class="flex flex-row min-h-[70%] w-screen items-center justify-evenly">
    <Logtitle job={"Scientist"} />
    <div class="flex items-center gap-10 h-[40svh] w-full justify-center">
        <Revcrop />
        <div class="flex flex-col gap-6 h-full justify-between w-1/4 ">
            
            <Action svg={"reviewed.svg"} text={"Reviewed crops"} />
            <Action svg={"eye.svg"} text={"Birds eye view"} />
            <Action svg={""} text={"What's gonna go here?"}/>
               
        </div>
    </div>
</div>