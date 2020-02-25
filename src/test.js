import { format } from 'date-fns';

const getDateArray = (start, end) => {
    var arr = [];
    var dt = start;
    while (dt <= end) {
        arr.push(format(dt, 'dd.MM'));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

console.log(getDateArray(new Date(), new Date().setMonth(2)))

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