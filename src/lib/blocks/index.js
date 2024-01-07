import stone from './stone.png';
import coal_ore from './coal_ore.png';
import copper_ore from './copper_ore.png';
import diamond_ore from './diamond_ore.png';
import emerald_ore from './emerald_ore.png';
import gold_ore from './gold_ore.png';
import iron_ore from './iron_ore.png';
import lapis_ore from './lapis_ore.png';
import redstone_ore from './redstone_ore.png';
import deepslate from './deepslate.png';
import obsidian from './obsidian.png';
import { writable } from 'svelte/store';

/**
 * @typedef {object} BlockType
 * @property {string} image
 * @property {number} durablity
 * @property {number} cost
 */

/**
 * @type {BlockType[]}
 */
export let blocks = [];

/**
 * @param {number} durablity
 * @param {string} image  
 * @param {number} cost 
 * @returns {BlockType}
 */
export function createBlockType(image, durablity, cost) {
    let blockType = {
        image: image,
        durablity: durablity,
        cost: cost,
    }
    blocks.push(blockType);
    return blockType;
}

export let STONE = createBlockType(stone, 0.7, 1);
export let COAL_ORE = createBlockType(coal_ore, 2, 2);
export let COPPER_ORE = createBlockType(copper_ore, 2.2, 2);
export let DIAMOND_ORE = createBlockType(diamond_ore, 10, 9);
export let EMERALD_ORE = createBlockType(emerald_ore, 10, 8);
export let GOLD_ORE = createBlockType(gold_ore, 7, 4);
export let IRON_ORE = createBlockType(iron_ore, 4, 5);
export let LAPIS_ORE = createBlockType(lapis_ore, 6, 2);
export let REDSTONE_ORE = createBlockType(redstone_ore, 7, 5);
export let DEEPSLATE = createBlockType(deepslate, 7, 6);
export let OBSIDIAN = createBlockType(obsidian, 14, 20);

/**
 * @exports
 * @typedef {{[i: number]: number, store: import('svelte/store').Writable<[i: number]: number>, add: (arg0: BlockType) => void, sell: (arg0: boolean) => number}} BlockStat
 */

/**
 * 
 * @returns {BlockStat}
 */
export function createBlockStat() {
    /**
     * @type {[i: number]: number}
     */
    let stat = {};
    for (const blockType of blocks) {
        stat[blocks.indexOf(blockType)] = 0;
    }
    let store = writable(stat);
    return {
        stat,
        store,
        add: (blockType) => {
            stat[blocks.indexOf(blockType)]++;
            store.set(stat);
        },
        sell: (confirm) => {
            let amount = 0;
            for (const blockType of blocks) {
                amount += stat[blocks.indexOf(blockType)] * blockType.cost;
                if (confirm) {
                    stat[blocks.indexOf(blockType)] = 0;
                }
            }
            if (confirm) {
                store.set(stat);
            }
            return amount;
        }
    };
}