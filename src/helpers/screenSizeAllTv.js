
function screenSizeAllTv(arrayScreenSizes) {
    let outcome = '';

    for (let i = 0; i < arrayScreenSizes.length; i++) {
        outcome = outcome + arrayScreenSizes[i] + " inch " + (arrayScreenSizes[i] * 2.54) + " cm | ";
    }

    return outcome;

}

export default screenSizeAllTv