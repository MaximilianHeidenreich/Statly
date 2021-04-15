<script lang="ts">

    // PROPS
    export let value: string = "";
    export let label: string = "";
    export let placeholder: string = "";

</script>

<div class="form-element">
    <label for="" class="font-bold text-sm px-1">
        {label}
    </label>
    <input
        bind:value={value}
        type="text"
        {placeholder}
        class="mt-2 w-full border-gray-300 transition-all"
    />
</div>

<style>
    
</style>
