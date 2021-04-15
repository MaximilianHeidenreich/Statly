<script lang="ts">
    // IMPORTS
    import { token } from "$lib/utils/token";

    // COMPONENTS
    import FloatingLabelInput from "$lib/UI/Form/Input/FloatingLabelInput.svelte";

    // BINDINGS
    let displayName = `User#${token(4)}`;

</script>

<aside>
    <section class="header">
        <p>-</p>
        <small>Version: 1.0.0-alpha</small>
    </section>

    <!-- Content -->
    <div class="content">

        <slot name="content"></slot>
        
        <section>
            <h4>Settings</h4>
            <FloatingLabelInput
                bind:value={displayName}
                label="Display Name"
            />
        </section>
        <section>
            <h4>Saved rooms</h4>
            <div>
                <h6>Room title 3</h6>
                <small>A short description of the...</small>
            </div>
        </section>

    </div>
</aside>

<style lang="postcss">

    aside {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;

        @apply bg-gray-50 dark:bg-red-400;
        @apply shadow-md rounded-r-lg;
        @apply w-96;

        :global(section) {
            @apply p-6;
            @apply border-b-2;
        }

        .header {
            @apply flex justify-between;
        }
    }

</style>