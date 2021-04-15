<script lang="ts">
    
    // PROPS
    export let active: boolean = false;

</script>

<div 
    on:click={() => active = !active}
    class="switch-container {active ? 'bg-purple-700': 'bg-gray-300'} w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1">
    <!-- Switch -->
    <div class="switch-knob {active ? 'translate-x-7': ''} bg-white w-5 h-5 rounded-full shadow-md transform"></div>
</div>

<style lang="postcss">
    .switch-container {
        @apply cursor-pointer;
        @apply transition-colors ease-in-out duration-200;
    }
     .switch-knob {
        @apply transition-transform ease-in-out duration-200;
    }
</style>