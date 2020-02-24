const categoryName = (apiCategory) => {
    array = apiCategory.split("/")
    return array[array.length - 1]
}

console.log(categoryName("agenda:categories/rutes-i-visites"))




// THAT WORKS ;
//example = "price from 12 to 10 but sometimes 22 €"

// const minPrice = (sentence) => {
//   const array = sentence.split(" ")
//   const numbersArray = []
//   let result = ""
//   for (let i = 0; i < array.length; i++) {
//     if (!isNaN(Number(array[i])) == true) {
//       numbersArray.push(Number(array[i]));
//     }  
//     result = Math.min(...numbersArray);

//   }
//   return result
// };

// console.log(minPrice(example))