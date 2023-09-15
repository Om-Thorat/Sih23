<script lang="ts">
    import Action from "./Action.svelte";
    import File from "./File.svelte";

</script>


<div class="flex items-center gap-10 h-[40svh] w-full justify-center">
<File />
<div class="flex flex-col gap-6 h-full justify-between w-1/4 ">
    
    <Action svg={"reviewed.svg"} text={"Reviewed crops"} />
    <Action svg={"yet.svg"} text={"Yet to be reviewed"} />
    <Action svg={""} text={"What's gonna go here?"}/>
       
</div>
</div>