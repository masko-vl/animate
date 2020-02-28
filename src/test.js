//CREATES DATES ARRAY WITH KEY(format we want to display): VALUE(format we want to catch on click)




//join(',').replace(" A ", " a ").replace(" De ", " de "))

function makeItBeautiful(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ').replace(" L ", " l'").replace("L ", "").replace(" A ", " a ").replace(" De ", " de ")
 }
 
console.log(makeItBeautiful("l hospitalet de l haleluia"));




