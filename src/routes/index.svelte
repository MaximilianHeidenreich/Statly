<script lang="ts">
    import { goto } from '$app/navigation'

    // COMPONENTS
    import Centered from '$lib/UI/Utility/Centered.svelte'
    import Footer from '$lib/UI/Utility/Footer.svelte'
    import Sidebar from '$lib/Sidebar/Sidebar.svelte'

    // BINDINGS
    let input_roomID = "";


</script>

<svelte:head>
    <!-- Primary Meta Tags -->
    <title>Statly</title>
    <meta name="title" content="Statly" />
    <meta name="description" content="A synchonized peer to peer board with checkable items." />
    <meta name="keywords" content="SyncBoard, Tools, Utility, Svelte, SvelteKit, Svelte-kit, Tailwind, HTML, CSS, JavaScript" />
    <meta name="author" content="maximilianheidenreich" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://syncboard.maximilian-heidenreich.de/" />
    <meta property="og:title" content="SyncBoard" />
    <meta property="og:description" content="A synchonized peer to peer board with checkable items." />
    <meta
        property="og:image"
        content="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2/raw/master/screenshot.png"
    />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://syncboard.maximilian-heidenreich.de/" />
    <meta property="twitter:title" content="SyncBoard" />
    <meta
        property="twitter:description"
        content="A synchonized peer to peer board with checkable items."
    />
    <meta
        property="twitter:image"
        content="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2/raw/master/screenshot.png"
    />
</svelte:head>


<Centered>
    <h1 class="text-center mb-12">Statly.io</h1>
    <section class="max-w-sm mx-auto">
        <div>
            <input 
                bind:value={input_roomID}
                placeholder="Room ID"/>
            <button 
                on:click={() => goto(`/view/${input_roomID}`)}
                class="primary mt-3 w-full">
                Join
            </button>
        </div>
        <div class="text-center mt-6 mb-6">
            <h2>OR</h2>
        </div>
        <div>
            <button
                on:click={() => goto("/builder")}
                class="primary w-full">
                Start new
            </button>
        </div>
        
        <div class="mt-12 mb-12 border-gray-200 border-2"></div>

        <div class="text-center mt-6">
            <small>
                Catchphrase
                <br>
                <ul>
                    <li>Free :)</li>
                    <li>Privacy focussed</li>
                </ul>
                Collect statistics & answers. Privacy focussed due to using Peer-2-Peer technology. Data is sent directly between clients and no server ....
            </small>
        </div>

        <div class="mt-12 mb-12 border-gray-200 border-2"></div>
    </section>

    <Footer />
</Centered>

<Sidebar />



<!--
<blockquote class="text-xl p-2 bg-gray-200 dark:bg-gray-800 mb-2 transition-colors duration-500">
    <a href="https://github.com/dansvel/sveltekit-typescript-postcss-tailwind2"><b>Github repo</b></a>
</blockquote>
<p>
  Visit the <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte apps.
</p>
<p>The title is using utility class, but all other elements is using style component.</p>
<p>Just check <code>src/routes/index.svelte</code> to see the code.</p>
-->

<style lang="postcss">

    p {
        @apply text-lg;
        @apply mt-0 mb-1;

    }
    code {
        @apply transition-colors duration-500;
        @apply px-1;
        @apply bg-gray-200;
        :global(.dark) & {
            @apply bg-gray-800;
        }
    }
    pre {
        @apply transition-colors duration-500;
        @apply text-left p-2 bg-gray-200;
        :global(.dark) & {
            @apply bg-gray-800;
        }
    }
</style>
