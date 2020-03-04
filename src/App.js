import React, {Component} from 'react';
import axios from 'axios';

import FiltersNavbar from './components/FiltersNavbar/FiltersNavbar.js';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'

import {getDateLongEvent} from './sharedFunctions.js'
import './App.css'

class App extends Component {
  state = {
    data: {},
    isLoading: true,
    dateCut: '', 
    dataApi:[]
}

getDate = () => {
  //SELECT THE CURRENT DATE
  var today = new Date()
  today.setMonth(1, 25);
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  return today;
}


async componentDidMount(){
    //insert the current date in the url so we only display 
  const {data} = await axios(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json?$where=data_inici%3E=%22${this.getDate()}%22`)
  
        this.setState({
          data, 
          isLoading: false,
          //the last date of the api array for save it as the last day of the calendar picker
          dateCut: data[data.length-1].data_inici.substr(0,10).split('-').join(',')
     
         })

    //Recover the dates start and end of the event and create an array of it. Then inser the array in a new array with the copy of the event object
    const eventsLong= data.map((event, i)=>{
    return ({...event,
      dates: getDateLongEvent(event.data_inici, event.data_fi)
    })
   
  })
  //save in state this new array for use it in filters
  this.setState({dataApi:eventsLong})

//CREATE AN ARRAY OF CITYS AFTER API IS LOADED
  var arrayMunicipi=[];
  //Recover the cities from the api and push in a array
  data.map((event)=>{
    //only if we have info about the municipi save in an array the data string
    if(event.comarca_i_municipi!== undefined){
      arrayMunicipi.push(event.comarca_i_municipi)
    }
    return arrayMunicipi
  })
  //select only the cities once (not repited)
  let valueCities = arrayMunicipi.reduce((total, city) => total.includes(city) ? total : [...total, city], [])
  //create a state for city value in filters select
  this.setState({valueCities:valueCities})
}
  render(){
    return (
      <div className="">
          {this.state.isLoading? <LoadingSpinner />:<FiltersNavbar dataApi={this.state.dataApi} dateCut={this.state.dateCut} valueCities={this.state.valueCities}/>}
      </div>
    );
  }
  }
export default App;