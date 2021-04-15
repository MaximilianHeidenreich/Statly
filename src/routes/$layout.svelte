<script lang="ts">
    import '../global.postcss'
    import { theme } from './store'
    import { onMount } from 'svelte'
    import ToggleTheme from '$lib/ToggleTheme.svelte';
    import { getPeer } from '$lib/utils/network';
    import { myPeer } from '$lib/stores/peerStore';

    onMount(() => {
        if ($theme === 'dark') {
            document.querySelector('html').classList.add('dark')
        }

        getPeer();
    })
</script>

<ToggleTheme />

<div class="debug-overlay">
    <small>PeerID: {$myPeer === null ? "null" : $myPeer.id}</small>
</div>

<slot />

<style lang="postcss">
    .debug-overlay {
        position: absolute;
        top: 0;
        right: 0;
        @apply mt-28;
    }
</style>