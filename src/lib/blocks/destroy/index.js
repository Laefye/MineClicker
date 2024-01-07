import stage_0 from './destroy_stage_0.png';
import stage_1 from './destroy_stage_1.png';
import stage_2 from './destroy_stage_2.png';
import stage_3 from './destroy_stage_3.png';
import stage_4 from './destroy_stage_4.png';
import stage_5 from './destroy_stage_5.png';
import stage_6 from './destroy_stage_6.png';
import stage_7 from './destroy_stage_7.png';
import stage_8 from './destroy_stage_8.png';
import stage_9 from './destroy_stage_9.png';

let stages = [
    stage_0,
    stage_1,
    stage_2,
    stage_3,
    stage_4,
    stage_5,
    stage_6,
    stage_7,
    stage_8,
    stage_9,
]

/**
 * 
 * @param {number} k 
 * @returns {string}
 */
export function getStage(k) {
    if (k < 0.001) {
        return null;
    }
    return stages[Math.round(k * (stages.length - 1))];
} 
