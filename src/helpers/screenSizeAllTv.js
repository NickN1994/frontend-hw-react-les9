import {inventory} from "../constants/inventory.js";


function screenSizeAllTv (arrayScreenSizes) {
    let outcome = '';
    for (let i = 0; i < inventory.length; i++) {
        for (let j = 0; j < inventory.availableSizes.length; j++) {
            outcome = outcome + inventory.availableSizes[j] + " inch " + (inventory.availableSizes[j] * 2.54) + " cm | ";
        }
    }
    return outcome;

}

export default screenSizeAllTv;