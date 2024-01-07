<script>
    import { blocks } from "$lib/blocks";
    import { blockStat } from "./memory";

    /**
     * @type {import("$lib/blocks").BlockStat}
    */
   let store = blockStat.store;
</script>

<div>
    {#each blocks as block}
        <div class="mb-2">
            <img src={block.image} width="50" style="image-rendering: pixelated;" alt="block">
            <span>{($store)[blocks.indexOf(block)]} ({($store)[blocks.indexOf(block)] * blocks[blocks.indexOf(block)].cost} Coins)</span>
        </div>
    {/each}
</div>