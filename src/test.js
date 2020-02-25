//CREATES DATES ARRAY WITH KEY(format we want to display): VALUE(format we want to catch on click)


const calendar = {}

const dateValue = (dates) => {
    dates.map ((x, i) => {
       calendar[x] = x +"-2020"
    })
    return calendar
} 

const datesExample = ["02-04", "06.07", "03-96"]
console.log(dateValue(datesExample))


