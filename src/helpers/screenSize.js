import {bestSellingTv, inventory} from "../constants/inventory.js";

function screenSize(arrayScreenSizes) {

    let result = "";
    for (let i = 0; i < bestSellingTv.availableSizes.length; i++) {
        result = result + bestSellingTv.availableSizes[i] + " inch " + (bestSellingTv.availableSizes[i] * 2.54) + " cm | ";


    }
    return result;

}

export default screenSize;