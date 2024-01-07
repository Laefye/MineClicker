import wooden_pickaxe from './wooden_pickaxe.png';
import stone_pickaxe from './stone_pickaxe.png';
import iron_pickaxe from './iron_pickaxe.png';
import golden_pickaxe from './golden_pickaxe.png';
import diamond_pickaxe from './diamond_pickaxe.png';
import netherite_pickaxe from './netherite_pickaxe.png';
import enchated_book from './enchanted_book.png';

/**
 * @typedef {object} Tool
 * @property {number} cost
 * @property {number} multiply
 * @property {number} slowness
 * @property {image} image
 */

/** @type {Tool[]} */
export let tools = []

/**
 * @param {string} image
 * @param {number} multiply 
 * @param {number} slowness 
 * @param {number} cost 
 * @returns {Tool}
 */
function createTool(image, multiply, slowness, cost) {
    let tool = {
        image,
        multiply,
        slowness,
        cost,
    };
    tools.push(tool);
    return tool;
}

export let WOODEN_PICKAXE = createTool(wooden_pickaxe, 1, 1, 0);
export let STONE_PICKAXE = createTool(stone_pickaxe, 1.2, 1.2, 30);
export let IRON_PICKAXE = createTool(iron_pickaxe, 1.5, 1.4, 64);
export let GOLDEN_PICKAXE = createTool(golden_pickaxe, 1.5, 1.5, 128);
export let DIAMOND_PICKAXE = createTool(diamond_pickaxe, 1.6, 1.9, 196);
export let NETHERITE_PICKAXE = createTool(netherite_pickaxe, 2, 2.2, 256);
export let ENCHANTED_BOOK = createTool(enchated_book, 100, 100, 1024);
