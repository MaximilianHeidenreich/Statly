<script lang="ts">
    // IMPORTS
    import { Direction } from "$lib/Structs/Direction"
    
    // COMPONENTS
    import PaginationButton from "$lib/UI/PaginationButton.svelte"
    import PreviewSelector from "$lib/UI/Form/Input/PreviewSelector.svelte"
    import TransparentInput from "$lib/UI/Form/Input/TransparentInput.svelte"
    import FloatingLabelSwitch from "$lib/UI/Form/Input/Switch/FloatingLabelSwitch.svelte"

    // IMMUTABLES
    const pageInputDataTypes: { title: string, options: { id: string, name: string, img: string }[] }[] = [
        { title: "Basic", options: [
                { id: "text", name: "Text", img: "https://via.placeholder.com/270x150" },
                { id: "large_text", name: "Large Text", img: "https://via.placeholder.com/270x150" },
                { id: "number", name: "Number", img: "https://via.placeholder.com/270x150" },
                { id: "select_single", name: "Select Single", img: "https://via.placeholder.com/270x150" },
                { id: "select_multiple", name: "Select Multiple", img: "https://via.placeholder.com/270x150" },
                { id: "vote", name: "Vote", img: "https://via.placeholder.com/270x150" }
        ]}
    ]

    const pageOutputDataTypes: { title: string, options: { id: string, name: string, img: string }[] }[] = [
        { title: "Charts", options: [
            { id: "chart_bar_vert", name: "Bar Chart (Vertical)", img: "https://via.placeholder.com/270x150" },
            { id: "chart_bar_hori", name: "Bar Chart (Horizontal)", img: "https://via.placeholder.com/270x150" },
            { id: "chart_point_plot", name: "Point Plot", img: "https://via.placeholder.com/270x150" },
        ]},
        { title: "Select", options: [
            { id: "categories", name: "Categories", img: "https://via.placeholder.com/270x150" },
        ]},
        { title: "Special", options: [
            { id: "vote", name: "Vote", img: "https://via.placeholder.com/270x150" },
            { id: "word_cloud", name: "Word Cloud", img: "https://via.placeholder.com/270x150" },
        ]},
    ]

</script>

<section>
    
    <!-- Page Details -->
    <TransparentInput 
        placeholder="Page Title"
        clazz="w-1/3 font-bold text-3xl"/>
    <TransparentInput 
        placeholder="Description"
        clazz="w-1/2 font-bold text-xl"/>

    <div class="mb-12"></div>
    <!-- Input Select -->
    <p>
        1. Please select the type of data you want to collect
    </p>
    <div class="mb-4"></div>
    <PreviewSelector 
        options={pageInputDataTypes}/>
    

    <div class="settings">
        <div class="header text-center">
            <h5>Settings</h5>
        </div>
        <div class="content">
            <div>
                <FloatingLabelSwitch label="akjdlaj" />
            </div>
            <div>

            </div>
        </div>
    </div>
    <br>

    <div class="mb-12"></div>
    <!-- Output Select -->
    <p>
        2. Please select how the collected data should be displayed
    </p>
    <div class="mb-4"></div>
    <PreviewSelector 
        options={pageOutputDataTypes}/>

    <!-- Pagination -->
    <div class="mt-12 mb-12 border-gray-200 border-2"></div>
    <div class="pagination previous">
        <PaginationButton 
            direction={Direction.BACKWARDS}
            label="Previous page"/>
    </div>
    <div class="pagination next">
        <PaginationButton 
            direction={Direction.FORWARDS}
            label="Next page"/>
    </div>

</section>

<style lang="postcss">
    .pagination  {
        /*@apply m-12;*/
    }
    .pagination.previous {
        display: inline-block;
        float: left;
    }
    .pagination.next {
        display: inline-block;
        float: right;
    }

    .settings {

    }
    .settings .content {
        @apply grid grid-cols-2;

    }
</style>