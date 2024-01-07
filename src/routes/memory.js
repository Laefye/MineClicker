import { createBlockStat } from "$lib/blocks";
import { WOODEN_PICKAXE } from "$lib/tools";
import { writable } from "svelte/store";

export let blockStat = createBlockStat();
export let balance = writable(0);
export let tool = writable(WOODEN_PICKAXE);