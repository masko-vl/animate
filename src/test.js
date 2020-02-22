sentence = "price from 12 to 10 but sometimes 22 €"
array = sentence.split(" ")
numbersArray = []

let minPrice = ""
for (let i = 0; i < array.length; i++) {
  if (!isNaN(Number(array[i])) == true) {
    numbersArray.push(Number(array[i]));
  }  
  minPrice = Math.min(...numbersArray);
     };

console.log(minPrice)


// numbersArray.min = ( array )=> {
//   console.log(Math.min.apply( Math, array ));
// };


// addDays = () => {
//     const { startDate } = this.props.pageData.parcelDetails.parcelDetails;
//     const date = new Date(startDate);
//     let datesCollection = []
  
//     for (var i = 1; i < 12; i++) {
//       const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
//       datesCollection.push(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`);
//     }
  
//    console.log(typeof(datesCollection))
//   }