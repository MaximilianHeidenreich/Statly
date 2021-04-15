<script lang="ts">

    // PROPS
    export let value: string = "";
    export let placeholder: string = "";
    export let clazz: string = "";

</script>

<div class="form-element">
    <input
        bind:value={value}
        type="text"
        placeholder={placeholder}
        class="mt-2 w-full border-gray-300 transition-all {clazz}"
    />
</div>

<style>
    input {
        @apply bg-transparent rounded-none shadow-none border-t-0 border-l-0 border-r-0;
        @apply border-b-2 border-dashed;
        @apply px-0 py-1;
        @apply focus:border-purple-400 focus:ring-0;
        @apply text-current;
    }    
</style>