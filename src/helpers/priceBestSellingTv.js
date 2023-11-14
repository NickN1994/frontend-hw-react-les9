import {bestSellingTv} from "../constants/inventory.js";

function priceTv(inventory) {
    let priceBestSellingTv = bestSellingTv.price;
    return "€" + priceBestSellingTv + ",-";
}

export default priceTv;
