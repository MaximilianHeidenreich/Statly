<script lang="ts">

    // COMPONENTS
    import Select from './Select.svelte'

    // PROPS
    export let values: { name: string, value: string }[] = [];
    export let selected: { name: string, value: string } = { name: "", value: ""};
    export let label: string = "";

</script>

<div class="form-element">
    {#if label !== ""}
        <label for="" class="font-bold text-sm px-1">
            {label}
        </label>
    {/if}
    <Select 
        values={values}
        selected={selected}
    />
</div>