
import React, { Component } from "react";

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {todayDate,  getDateArray, convert, updateFilteredApi} from '../../sharedFunctions'
import DatePicker from './DatePicker/DatePicker.js';
import SelectEvent from "./SelectEvent/SelectEvent.js";
import SelectCity from "./SelectCity/SelectCity.js";
import ButtonForm from "./ButtonForm/ButtonForm.js";
import Slogan from './Slogan/Slogan'
import CalendarNav from './../CalendarNav/CalendarNav.js'

  

class FiltersNavbar extends Component {
  //save in this state al the categories the user decide to after save in data the event that displays with this parameters
  state={
    city:'',
    category:'',
    date: todayDate(), /*today by default */
    data: [],
    showFilters: true

  }
  saveCity=(e)=>{
    
    this.setState({
      //return value of the city
      city: e.target.value

      //IS NEEDED TO PASS ALL THE CITIES OF THE DATA API

    }) 
    
  }
  saveCategory=(e)=>{
    //console.log(e.target)
    this.setState({
      //return from form the value of selected category
      category: e.target.value
    }) 
  }

  
  saveDate=(e)=>{
    //convert string that we resive from calendar picker to yyyy/mm/dd format for api uses
    const validDateFormat= convert(e)
    //console.log(validDateFormat)

    //change state with the new date
    this.setState({
      date: validDateFormat
    }) 
    //console.log(this.state.date)
    
  }
  chooseFilters= (props) => {
    //create a array where whe are pushing the new data filtered
    const dataFiltered = [];

    //take all the filters for use it in data for the display of filtred events
    const city = this.state.city
    const dateEvent = this.state.date
    const category = this.state.category
    
    if(city=== ''){
      alert('It is obligatory to choose a city')
      
    }else if(category ===''){
      alert('Choose events category')
    }else{
    //create a loop in the events api array and pass if statement for select the events and display diferent errors
    this.setState({data:updateFilteredApi(this.props.dataApi, city, category, dateEvent)})
     
   }
   //save in state al the events filtered

     this.setState({
       showFilters: false
    })
     //console.log(this.state.data)

    
   /*THINGS TO BE DONE:
      -CHANGE IN A BETER WAY THE ALERTS CAUGHT
      -CHANGE THE WAY OF DISPLAYS THE ALERTS AND AD THE MOMENT WHEN THERE'S NO EVENTS IN THIS DAY
      -EXTRA:TO SHOW THE NUMBER OF EVENTS FILTERED BY THE FILTERS FOR MORE INFORMATION POR THE USER (IT'S NEEDED TO CHANGE THE LOGIC OF THE FILTES, SO IT SAVE THE INFO WHILE YOU ARE CHANGING THE FILTERS, NOT ONLY AT THE END ONCLICK BUTTON)
      */
  }
  update=(e)=>{
    //convert to api format
    let date = new Date(e.target.innerText.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    date = convert(date)
    console.log(date)
    this.setState({date:date}) 
    //change data api filtered
    const city = this.state.city
    const dateEvent = date
    const category = this.state.category
    

    this.setState({data:updateFilteredApi(this.props.dataApi, city, category, dateEvent)})

   
   
    
  }
  showFilters=()=>{
    this.setState({
      showFilters: true
   })
  }
  
  render(){
  return(
      <div >
      {this.state.showFilters 
      ? <Grid   
        container
        direction="column"
        justify="center"
        alignItems="center">  
        <Grid item ><Slogan/></Grid> 
        <Grid item ><Typography variant="h5" component="h3" color='inherit'>Choose your preferences!</Typography> </Grid>
        <Grid item ><SelectCity changeCity={this.saveCity} valueCities={this.props.valueCities}/></Grid>
        <Grid item ><SelectEvent  changeEvent={this.saveCategory}/></Grid>
        <Grid item > 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker date2={this.state.date} changeDate={this.saveDate} dateCut={this.props.dateCut}/>
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid item ><ButtonForm chooseFilters={this.chooseFilters}/></Grid> 
      </Grid>
    : <CalendarNav showFilters={this.showFilters} apiFiltered={this.state.data} update={this.update} getDateArray={getDateArray(new Date(), new Date(this.props.dateCut))}/>}
    
    
    </div>
    

  )
}}

export default FiltersNavbar;




