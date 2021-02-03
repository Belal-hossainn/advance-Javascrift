// const numbers = [2, 4, 6, 8 ,10]
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//  const element = numbers [i]
//  const result = element * element;
//  output.push(result);
// }
// console.log(output)

// const num = [1, 2, 3, 5, 7, 9]
// num.map(function(element){
//     return element * element
// })
// const num = [1, 2, 3, 5, 7, 9]
// const result = num.map(x=> x*x)
// console.log(result)

const num = [1, 2, 3, 5, 7, 9]
const bigger = num.filter(x=> x > 5);
console.log(bigger)

const isThere = num.find(x=> x>5)
console.log(isThere)