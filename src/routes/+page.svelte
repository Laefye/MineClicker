<script>
    import { writable } from "svelte/store";
    import Mining from "./Mining.svelte";
    import Store from "./Store.svelte";
	let page = writable('mining');
</script>

<div class="btn-group mb-3">
	<button class="btn btn-primary" disabled={$page === 'mining'} on:click={() => {page.set('mining')}}>Mining</button>
	<button class="btn btn-primary" disabled={$page === 'store'} on:click={() => {page.set('store')}}>Store</button>
</div>

{#if $page == 'mining'}
	<Mining/>
{:else if $page == 'store'}
	<Store/>
{/if}