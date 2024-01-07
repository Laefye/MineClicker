<script>
    import { writable } from "svelte/store";
    import './Block.scss';
    import { browser } from "$app/environment";
    import { blocks } from "$lib/blocks";
    import { createEventDispatcher, onMount } from "svelte";
    import { getStage } from "$lib/blocks/destroy";
    import { balance, tool } from "./memory";

    let dispatch = createEventDispatcher();

    let block = writable(blocks[Math.round(Math.random() * (blocks.length - 1))]);
    
    /**
     * @type {import('svelte/store').Writable<string | null>}
     */
    let stage = writable(null);
    
    export let angle = writable(0);

    let size = writable(1, () => {
        if (browser) {
            let handle = 0;
            let step = (d) => {
                if ($size > 1) {
                    $size -= 0.1/60 * ($size) * $block.durablity / $tool.slowness;
                }
                $angle = Math.sin(d / 30) * ($size - 1) * 10;
                $stage = getStage($size - 1);
                handle = requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
            return function() {
                cancelAnimationFrame(handle);
            }
        }
    });

    export let changeBlock = () => {
        size.set(1);
        block.set(blocks[Math.round(Math.random() * (blocks.length - 1))]);
    }

    function breakBlock() {
        size.set($size + 0.2 * $tool.multiply);
        if ($size >= 2) {
            dispatch('breakblock', {blockType: $block});
            changeBlock();
        }
    }

    onMount(() => {
        window.setBlockType = (i) => {
            $block = blocks[i];
        }
        window.setCoins = (i) => {
            $balance = i;
        }
    })


</script>

<div class="p-4">
    <button on:click={breakBlock} class="btn" style="position: relative;">
        {#if $stage}
        <img src="{$stage}" alt="stage" style="position: absolute; z-index: 10; transform: scale({$size}) rotateZ({$angle}deg);" class="mc-block" width="100">
        {/if}
        <img src="{$block.image}" alt="block" class="mc-block" style="transform: scale({$size}) rotateZ({$angle}deg);" width="100">
    </button>
</div>
