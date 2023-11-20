
// // const arrayTv = inventory.map((tv) => {
// //     return tv.type;
// //
// // })
// //
// // console.log(arrayTv)
// //
//
// // let soldOutTvs = inventory.filter((soldOutTv) => {
// //     if (soldOutTv.originalStock - soldOutTv.sold === 0) {
// //         return true;
// //     }
// // })
// // console.log(soldOutTvs)
//
// // const specificTVs = inventory.find((specificTv) => {
// //     return specificTv.type === 'NH3216SMART';
// // })
// //
// // console.log(specificTVs);
//
// // let sportTVs = inventory.map((sportTv) => {
// //     if (sportTv.refreshRate >= 100) {
// //         return sportTv.brand + " " + sportTv.name + " suitable: true"
// //     }
// //     return sportTv.brand + " " + sportTv.name + " suitable: false"
// // })
// //
// // console.log(sportTVs);
//
// let bigTVs = inventory.availableSizes.map((bigTV) => {
//     if (bigTV.availableSizes >= 65) {
//         return bigTV.brand + bigTV.name
//     }
//
//     // return bigTV.brand + bigTV.name >= 65;
// })
//
// console.log(bigTVs);

//Opdracht 2a

// const allTVs = inventory.map((allTv) => {
//     return allTv.brand
// })
//
// console.log(allTVs)

// opdracht 2b

// const allTVs = inventory.map((allTV) => {
//     return allTV.brand + " " + allTV.type + " " + allTV.name;
//
// })
//
// console.log(allTVs)

// opdracht 2c
// import {inventory} from "../constants/inventory.js";
//
// const options = inventory.map((option) => {
//     return option.options
// })
// console.log(options);

// opdracht 2d
// const options = inventory.map((option) => {
//     if (option.options === true) {
//
//     }
//     return option.options
//
// })
// console.log(options);