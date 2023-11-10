function inStockTv (inventory){

    let inStockCounter = 0;

    for (let i = 0; i < inventory.length; i++) {
        inStockCounter = inStockCounter + inventory[i].originalStock;
    }
    return inStockCounter;
}

export default inStockTv;