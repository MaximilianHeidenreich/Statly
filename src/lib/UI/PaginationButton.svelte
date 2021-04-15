<script lang="ts">

    // IMPORTS
    import { Direction } from '$lib/Structs/Direction'
    
    // PROPS
    export let direction: Direction = Direction.FORWARDS
    export let label: string = ""

</script>

<button class="secondary">
    {label}
</button>

<style lang="postcss">

</style>