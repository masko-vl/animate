import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header.js'
import FiltersNavbar from './components/FiltersNavbar/FiltersNavbar.js'
import { lightGreen } from '@material-ui/core/colors';


class App extends Component {
  state = {
    data: {},
    isLoading: true,
    dateCut: ''
    
}

getDate = () => {
  //SELECT THE CURRENT DATE
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  //console.log(today);
  return today;
}
async componentDidMount(){
    //insert the current date in the url
  const {data} = await axios(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json?$where=data_inici%3E=%22${this.getDate()}%22`)
  //console.log(data)
        this.setState({
          data, 
          isLoading: false,
          dateCut: data[999].data_inici.substr(0,10).split('-').join(',')
         })
         //console.log( this.state.dateCut)

//CREATE AN ARRAY OF CITYS AFTER API IS LOADED
  var arrayMunicipi=[];
  let arrayCities=[];

  //Recover the cities from the api and push in a array
  data.map((event)=>{
    //only if we have info about the municipi save in an array the data string
    if(event.comarca_i_municipi!== undefined){
      arrayMunicipi.push(event.comarca_i_municipi)

    }
  })
  
  //loop the array for select only the last element(the city)
  arrayMunicipi.map(municipi=>{
    //each string is devided in array element by '/' separations, so we want the last one

    let city= municipi.split('/')
    //replace the elements of the array in the position 0 to 4(it's always only 3 slashes so it's going to be 4 elements in an array) by the last element
    city.splice(0, 4, city.pop())
    
    //change to string
    city = city.toString()
    //create an array of cities
    arrayCities.push(city)
  })
  //select only the cities once (not repited)
    let cities = arrayCities.reduce((total, city) => total.includes(city) ? total : [...total, city], [])

   
    //orginise them in a alphabetic order
    const citiesValue = cities.sort()
    /*  IMPORTANT: THIS ARRAY IS READY TO USE AS A VALUE FOR THE SELECT COMPONENT */
    //console.log(citiesValue);
    
    //change cities like this cornella-de-llobregat by space between the letters for put it in the select rendered
    let citiesSelect = citiesValue.map((cityy)=>{
      return cityy.replace(/([-])/g," ")
    })
     console.log(citiesSelect)

//insert them in the select using map
  


}

  render(){
    return (
      <div className="">      
          <Header/>
          <FiltersNavbar dataApi={this.state.data} dateCut={this.state.dateCut}/>

      </div>
    );
  }
}

export default App;
