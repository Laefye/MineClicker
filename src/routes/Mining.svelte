<script>
    import { blocks } from '$lib/blocks';
	import '../app.scss';
    import Block from './Block.svelte';
    import BlockStat from './BlockStat.svelte';
    import { blockStat, tool } from './memory';

	/**
	 * @param {import('$lib/blocks').BlockType} blockType 
	*/
	function breakBlock(blockType) {
		blockStat.add(blockType);
	}

	let changeBlock;
    let angle;

</script>
<div class="d-flex align-items-center flex-column mb-2">
	<div class="d-flex align-items-center">
        <img src="{$tool.image}" style="image-rendering: pixelated; transform: rotateZ({$angle}deg);" width="70" alt="tool">
        <Block bind:changeBlock={changeBlock} on:breakblock={(e) => {breakBlock(e.detail.blockType);}} bind:angle={angle}/>
    </div>
	<div>
		<button class="btn btn-primary" on:click={changeBlock}>Skip</button>
	</div>
</div>
<BlockStat/>