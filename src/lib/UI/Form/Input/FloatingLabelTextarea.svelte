<script lang="ts">

// PROPS
export let value: string = "";
export let label: string = "";
export let placeholder: string = "";

</script>

<!-- This is the input component -->
<div class="form-element">
    <label for="" class="font-bold text-sm px-1">
        {label}
    </label>
    <textarea
        bind:value={value}
        type="text"
        placeholder={placeholder}
        class="mt-2 w-full border-gray-300 transition-all border-blue"
    />
</div>

<style lang="postcss">
    textarea {
        @apply appearance-none;
        @apply flex-1 w-full py-2 px-4;
        @apply bg-white shadow-md rounded-lg;
        @apply text-gray-700 placeholder-gray-400 text-base;
        @apply border border-transparent border-gray-300;
        @apply focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent;
    }
</style>
