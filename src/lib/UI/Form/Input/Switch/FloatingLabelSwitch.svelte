<script lang="ts">
    // COMPONENTS
    import Switch from "./Switch.svelte";

    // PROPS
    export let label: string = "";
    export let active: boolean = false;

</script>

<div class="form-element flex items-center">
    {#if label !== ""}
        <label for="" class="font-bold text-sm px-1">{label}</label>
    {/if}
    <Switch 
        bind:active={active}/>
</div>