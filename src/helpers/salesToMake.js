import inStockTv from "./inStockTv.js";
import soldTV from "./soldTV.js";


function salesToMake(inventory) {
    const inStock = inStockTv(inventory);
    const numberSoldTv = soldTV(inventory);
    return inStock - numberSoldTv;

}

export default salesToMake;