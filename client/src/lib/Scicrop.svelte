<script lang="ts">
  import Cropimg from "./Cropimg.svelte";
    import Logtitle from "./Logtitle.svelte";
</script>

<Logtitle job={"Scientist"} />
<div class="flex flex-row min-h-[70%] w-screen items-center justify-evenly left-5 gap-12">
    <Cropimg />
    <div class="flex items-center gap-10 h-[60svh] w-[30%] justify-right left-2">
        <div class="flex flex-col gap-6 h-full  justify-between w-full ">
            
            <input class="h-2/3 px-4 items-center bg-black rounded-[1rem] border-2 border-gray-300" type="text" name="Descrpition">
            <input class="h-2/3 px-4 items-center bg-black rounded-[1rem] border-2 border-gray-300" type="text" name="Descrpition">
            <input class="h-2/3 px-4 items-center bg-black rounded-[1rem] border-2 border-gray-300" type="text" name="Descrpition">
            <input class="h-2/3 px-4 items-center bg-black rounded-[1rem] border-2 border-gray-300" type="text" name="Descrpition">
            <input class="h-2/3 px-4 items-center bg-black rounded-[1rem] border-2 border-gray-300" type="text" name="Descrpition">
            
               
        </div>
    </div>
</div>