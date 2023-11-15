import {bestSellingTv} from "../constants/inventory.js";


function screensizeTvs (arrayScreenSize) {
    let result = "";
    for (let i = 0; i < arrayScreenSize.length; i++) {
        result = result + arrayScreenSize[i] + " inch " + (arrayScreenSize[i] * 2.54) + " cm | ";


    }
    return result;

}

export default screensizeTvs;