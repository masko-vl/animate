import {eventsCategories} from './components/images/images.js';
import { format } from 'date-fns';
import React from 'react';
//USING THE EVENTS IMAGES :
// import the images.js file
// call an image as src=eventsCategories["name_of_the_image_you_want_to_use"]
// GETTING THE SMALLEST NUMBER / PRICE from a string containing all kinds of characters. We'll use it to return the smallest price of an event, that sets in the api price sentence.
 export const minPrice = (sentence) => {
    const array = sentence.split(" ")
    const numbersArray = []
    let result = ""
    for (let i = 0; i < array.length; i++) {
      if (!isNaN(Number(array[i])) == true) {
        numbersArray.push(Number(array[i]));
      }  
      if (numbersArray.length > 0) {
        result = " from " + Math.min(...numbersArray) + "€"
      } else {
        result = "Click for more Info"
      };
    }
    return result 
  };
// GETTING THE IMAGE CORREPONDING TO THE API NAME OF CATHEGORY (in the render call the function that way : categoryAvatar(x.tags_categor_es))
export const categoryAvatar = (apiCategory) => {
  const array = apiCategory.split("/")
  // get the name of the category from the api
  const category = array[array.length - 1]
  // Choosing the corresponding image in the images.js file. (don't forget to import the images file!!) !! Each name of image should take the exact same name as the api cathegory name to make them match !!
  const categoryImage = eventsCategories[category]
  return categoryImage
};
// GETTING AN IMAGE IN CASE OF UNDEFINED CATHEGORY
export const undefinedCategoryAvatar = () => {
  return eventsCategories["undefined_event"]
}
// REPLACE THE ENCODINGS FROM THE text we recieve from API
  export const decodeHTMLEntities= (str)=> {
    if(str && typeof str === 'string') {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
    str = str.replace(/&nbsp;/g, ' ');
    str = str.replace(/&amp;/g, ' ');
    str =str.replace(/nbsp/g, ' ');
    str = str.replace(/amp;/g, ' ');
  }
  return str;
}
  //GET TODAY DATE BY DEFAULT IN API FORMAT
  export const todayDate=()=>{
    var date = new Date(),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  //GET DATES FOR CALENDAR ARRAY DISPLAY
    export const getDateArray = (start, end) => {
    var arr = [];
    var dt = start;
    while (dt <= end) {
        arr.push(format(dt, 'dd-MM-yyyy'));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
  }
  //CONVERT JAVASCRIPT DATE FORMAT TO API FORMAT
  export const convert=(e) =>{
    var date = new Date(e),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }
  
  //RELOAD THEY API DATA FILTEREF FOR THE ANIMATE BUTTON AND CALENDAR CLICK DAYS
   export const updateFilteredApi=(apiPased, city, category, dateEvent)=>{
    let dataFiltered=[];
    apiPased.map((event)=>{
      if(event.comarca_i_municipi === `${city}` &&  category === 'all' && event.dates.includes((dateEvent))){
       //insert in state al the data filtred
       dataFiltered.push(event)
       

       //if we pase all the filters city/category/date
     }else if(event.comarca_i_municipi === `${city}` && event.tags_categor_es === `agenda:categories/${category}`&& event.dates.includes((dateEvent))){
       
       //insert in state al the data filtred
        dataFiltered.push(event)
     }
   })
   //in dataFiltered is returned duplicated and triplicated events so with this we select only once the events
   const finalDataFiltered = [...new Map(dataFiltered.map(event => [event.codi, event])).values()]
  
   return finalDataFiltered
  } 



  //TO SHOW THE NUMBER OF EVENT RESULTS WHEN SELECT FILTERS
  export const showEventsCounter=(data)=>{
    return data.length
  } 
// upercase for the city name and replacing some letters
  export function makeItBeautiful(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' ').replace(" L ", " l'").replace("L ", "").replace(" A ", " a ").replace(" D ", " ")
  }
//array of categories
  export const eventsssCategories= [
      {value:"all", name:"All events"},
      {value:"festivals_i_mostres", name:"Festivals"},
      {value:"concerts", name:"Concerts"},
      {value:"expositions", name:"Expositions"},
      {value:"sardanes", name:"Sardanas"},
      {value:"festes", name:"Parties"},
      {value:"teatre", name:"Theater"},
      {value:"rutes-i-visites", name:"Routes and visits"},
      {value:"fires-i-mercats", name:"Feirs and mercats"},
      {value:"carnavals", name:"Carnavals"},
      {value:"setmana-santa", name:"Easter week"},
      {value:"cicles", name:"Cycles"} ,
      {value:"conferencies", name:"Conferences"}, 
      {value:"cursos", name:"Courses"} ,
      {value:"dansa", name:"Dance"} ,
      {value:"infantil", name:"Kids"} ,
   
]
// this function sort the cities alphabeticaly
export function citySort(property) {
  var sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }

  return function (a,b) {
      if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}
//GET DATES FOR CALENDAR ARRAY DISPLAY
export const getDateLongEvent = (data_inici, data_fi) => {
  const start= new Date(data_inici.slice(0,10))
  const end= new Date(data_fi.slice(0,10))
  //console.log(start, end)
   var EventDays = [];

  var dt = start;
  while (dt <= end) {
      EventDays.push(format(dt, 'yyyy-MM-dd'));
      dt.setDate(dt.getDate() + 1);
  }
  return EventDays ; 
}
