import {bestSellingTv} from "../constants/inventory.js";


function bestSoldTv(bestSellingTv) {
    return bestSellingTv.brand + " " + bestSellingTv.type + " - " + bestSellingTv.name;
}

function priceTv(inventory) {
    let priceBestSellingTv = bestSellingTv.price.toString();
    return "€" + priceBestSellingTv + ",-";
}

function screenSize(arrayScreenSizes) {
    for (let i = 0; i < arrayScreenSizes.length; i++) {
        const inchSize = arrayScreenSizes[i];
        const inchToCm = arrayScreenSizes[i] * 2.54;

        "[" + inchSize + "]" + " inches " + "(" + inchToCm + "cm)";


    }

}
