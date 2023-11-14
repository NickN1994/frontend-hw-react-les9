import {bestSellingTv} from "../constants/inventory.js";


function bestSoldTv() {
    return bestSellingTv.brand + " " + bestSellingTv.type + " - " + bestSellingTv.name;
}


export default bestSoldTv;

