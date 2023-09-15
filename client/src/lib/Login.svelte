<script lang="ts">
    let username:string;
    let password:string;
</script>


<div class="flex flex-col gap-3">
  <div class="flex flex-row w-full items-center bg-[#1d1f1f] p-3 rounded-2xl focus-within:outline outline-white">
    <svg
      class="h-10 translate-y-1 px-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 20"
      fill="none"
      x="0px"
      y="0px"
      ><path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8ZM10 5C10 6.10457 9.10457 7 8 7C6.89543 7 6 6.10457 6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
        fill="white"
      /><path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 14C3 14.5523 3.44772 15 4 15H12C12.5523 15 13 14.5523 13 14C13 11.2386 10.7614 9 8 9C5.23858 9 3 11.2386 3 14ZM4 14C4 13.6547 4.04375 13.3196 4.12602 13C4.57006 11.2748 6.13616 10 8 10C9.86384 10 11.4299 11.2748 11.874 13C11.9562 13.3196 12 13.6547 12 14H4Z"
        fill="white"
      /> 
    </svg>
    <input placeholder="Username" bind:value={username} class="bg-[#1d1f1f] h-full w-full text-lg focus:outline-none"/>
  </div>
  <div class="flex flex-row w-full items-center bg-[#1d1f1f] p-3 rounded-2xl focus-within:outline outline-white">
    <svg class="h-10 translate-y-1 stroke-white stroke-1 px-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" x="0px" y="0px" style="&#10;    fill: white;&#10;"><g data-name="Layer 2"><path d="M12,28a4,4,0,1,0,4,4A4,4,0,0,0,12,28Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,34Z"/><path d="M30.65,38H45a1,1,0,0,0,.83-.45L47,35.87l1,1.65a1,1,0,0,0,.86.48H55a1,1,0,0,0,.78-.38l4-5a1,1,0,0,0,.15-1l-2-5A1,1,0,0,0,57,26H30.65a14,14,0,1,0,0,12ZM6,32a12,12,0,0,1,23.08-4.62A1,1,0,0,0,30,28H56.32l1.53,3.83L54.52,36H49.37l-1.52-2.52A1,1,0,0,0,47,33a1,1,0,0,0-.85.44L44.46,36H30a1,1,0,0,0-.92.62A12,12,0,0,1,6,32Z"/><rect x="48" y="30" width="4" height="2"/><rect x="32" y="30" width="12" height="2"/></g></svg>
    <input placeholder="Password" bind:value={password} class="bg-[#1d1f1f] h-full w-full text-lg focus:outline-none"/>
  </div>
  <div>
    <button class="btn btn-outline w-full rounded-2xl h-10 hover:bg-green-300">Login ></button>
  </div>
</div>
