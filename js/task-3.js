// function filterArray(numbers, value) {
//   const filterNumbers = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > value) {
//       filterNumbers.push(numbers[i]);
//     }
//   }

//   return filterNumbers;
// }


function filterArray(numbers, value) {
  const filterNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filterNumbers.push(number);
    }
  }

  return filterNumbers;
}



console.log("------------task-3------------");
console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));
