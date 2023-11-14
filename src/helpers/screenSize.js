function screenSize(arrayScreenSizes) {
    // for (let i = 0; i < arrayScreenSizes.length; i++) {
    //     const inchSize = arrayScreenSizes[i];
    //     const inchToCm = arrayScreenSizes[i] * 2.54;
    //
    //     "[" + inchSize + "]" + " inches " + "(" + inchToCm + "cm)";

    let result = "";
    for (let i = 0; i < arrayScreenSizes.length; i++) {
        result = result + arrayScreenSizes[i].availableSizes + " inch " + (arrayScreenSizes[i].availableSizes * 2.54) + " cm "

    }
    return result;

}

export default screenSize;