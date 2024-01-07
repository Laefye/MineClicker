<script>

    import { tools } from "$lib/tools";
import { balance, blockStat, tool } from "./memory";
    let store = blockStat.store;

    /**
     * 
     * @param {import("$lib/tools").Tool} iTool
     */
    function buy(iTool) {
        if ($balance >= iTool.cost) {
            tool.set(iTool);
            balance.set($balance - iTool.cost);
        }
    }
</script>
<div class="mb-2">Balance: {$balance}</div>
<div class="mb-2">
    <button class="btn btn-danger" on:click={() => {$balance += blockStat.sell(true);}}>Sell all blocks</button>
    <span>{#key $store}
        You will give { blockStat.sell(false) }
    {/key}</span>
</div>
<div class="mb-2">
    {#each tools as iTool}
        <div>
            <img src="{iTool.image}" alt="pickaxe" height="70" style="image-rendering: pixelated;">
            <button disabled={tools.indexOf(iTool) <= tools.indexOf($tool)} class="btn btn-primary" on:click={() => {buy(iTool)}}>{tools.indexOf(iTool) <= tools.indexOf($tool) ? 'Bought' : 'Buy for ' + iTool.cost}</button>
        </div>
    {/each}
</div>