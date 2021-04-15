<script lang="ts">

    // PROPS
    export let bottom: Boolean;

</script>

<footer class="text-center {bottom ? 'bottom' : ''}">
    <small class="opacity-100 text-gray-400 font-bold">Made with ❤️ by <a href="https://github.com/MaximilianHeidenreich" target="_blank">Maximilian Heidenreich</a> - <a href="https://github.com/MaximilianHeidenreich/Statly" target="_blank">GitHub</a></small>
</footer>

<style lang="postcss">
    footer {
        @apply mt-8 mb-6;
    }
    .bottom {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        @apply mb-8;
    }
</style>