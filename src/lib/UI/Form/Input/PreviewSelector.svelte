<script lang="ts">

    // COMPONENTS

    // PROPS
    export let label: string = ""
    export let options: { title: string, options: { id: string, name: string, img: string }[] }[] = []
    export let selected: string = ""

    // HANDLERS
    function changeActive(event) {
        let element = event.target
        for (;;) {

            // Something went wrong!
            if (!element.parentNode) {
                element = null;
                break;
            }
            
            if (!element.hasAttribute("data-id"))
                element = element.parentNode
            else
                break;
        }

        // RET: Element with data-id was not found!
        if (!element)
            return;
        
        selected = element.getAttribute("data-id");
        
    }

</script>

<div class="form-element">
    {#if label !== ""}
        <label for="" class="font-bold text-sm px-1">{label}</label>
    {/if}
    {#each options as category}
        {#if category.title !== ""}
            <label for="" class="font-bold text-sm px-1">{category.title}</label>
            <div class="border-b-2"></div>
        {/if}
        <div class="content {category.title !== '' ? 'mt-2' : ''}">
            {#each category.options as option}
                <div 
                    on:click={changeActive}
                    class="select-item {selected === option.id ? 'active' : ''}"
                    data-id="{option.id}">
                    <div class="header">
                        <p>{option.name}</p>
                    </div>
                    <div class="preview">
                        <img src="{option.img}" alt="{option.name}-preview"/>
                    </div>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style lang="postcss">
    .content {
        @apply w-full mb-2 mt-2;
        @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3;
        @apply gap-4;
    }
    .content .select-item {
        @apply bg-gray-50 border-2 rounded-lg;
        @apply hover:border-gray-300;
        @apply cursor-pointer;
    }
    .content .select-item.active {
        @apply border-purple-500;
    }
    .content .select-item .header {
        @apply bg-white rounded-t-lg;
        @apply p-2 px-3;
        @apply text-base font-bold;
    }
    .content .select-item .preview {
        @apply rounded-b-lg overflow-hidden;
    }
</style>