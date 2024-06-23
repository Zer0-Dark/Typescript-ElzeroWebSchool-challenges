// // Write Function Code Here
// type Optional<T> = T | null | undefined;

// function showTypes<T = Optional<string>, B = Optional<number>, C = Optional<boolean>>(t?: T, b?: B, c?: C){
//     return `${t || 'Nothing'} - ${b || 'Nothing'} - ${c || 'Nothing'}`;
// }

// // Do Not Edit Here
// console.log(showTypes()); // Nothing - Nothing - Nothing
// console.log(showTypes<string>("String")); // String - Nothing - Nothing
// console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
// console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true








// // Write Class Code Here
// class Game <t>{
//     constructor (public title?:t, public price?:number){

//     }
//     getDiscount<t>(t:t){
//         console.log( `discount is ${t}`)
//     }
// }

// // Do Not Edit Here
// let gameOne = new Game<string>("Ys", 100);
// let gameTwo = new Game<number>(2064, 100); // There's A Game Called "2064"

// console.log(gameOne.title); // "Ys"
// console.log(gameOne.price); // 100
// gameOne.getDiscount("50"); // "The Discount Is 50"

// console.log(gameTwo.title); // 2064
// console.log(gameTwo.price); // 100
// gameTwo.getDiscount(80); // "The Discount Is 80"