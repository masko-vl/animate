// const Calendar = function(start, end) {
//     const
//       arr = new Array(),
//       dt = new Date(start);
  
//     while (dt <= end) {
//     Array.prototype.push(new Date(dt));
//       dt.setDate(dt.getDate() + 1);
//     }
//     return arr;
//   }

//   const sixMonthsCalendar = Calendar(new Date(),new Date().setMonth(6))

//   console.log(Object.values(sixMonthsCalendar))

addDays = () => {
    const { startDate } = this.props.pageData.parcelDetails.parcelDetails;
    const date = new Date(startDate);
    let datesCollection = []
  
    for (var i = 1; i < 12; i++) {
      const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
      datesCollection.push(`${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`);
    }
  
   console.log(typeof(datesCollection))
  }