<script lang="ts">

    // COMPONENTS
    import FloatingLabelInput from "$lib/UI/Form/Input/FloatingLabelInput.svelte"
    import FloatingLabelTextarea from "$lib/UI/Form/Input/FloatingLabelTextarea.svelte"
    import Sidebar from '$lib/Sidebar/Sidebar.svelte'
    import Builder from '$lib/UI/PageBuilder/Builder.svelte'
    import Centered from "$lib/UI/Utility/Centered.svelte"

    // BINDINGS
    let input_roomId = "";


</script>

<Sidebar>

    <section slot="content">
        <h4>Room details</h4>

        <FloatingLabelInput
            label="Room Name"
            placeholder="Dragons vs. Unicorns"
        />

        <FloatingLabelTextarea 
            label="Room Description"
            placeholder="Which one is better?"
        />
    </section>

</Sidebar>

<Centered>
    <Builder />
</Centered>

