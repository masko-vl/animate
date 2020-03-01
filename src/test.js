

reorderedDate = (date) => {
    let newArr = arr.split("-")
    newArr = [arr[0], arr[1], arr[2]] = [arr[1], arr[2], arr[0]]
    newArr = newArr.join("-")
    return new Date(newArr)
}

console.log(reorderedDate("2020-02-28"))