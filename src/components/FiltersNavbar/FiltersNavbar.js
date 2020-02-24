
import React, { Component } from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DatePicker from './DatePicker/DatePicker.js';
import SelectEvent from "./SelectEvent/SelectEvent.js";
import SelectCity from "./SelectCity/SelectCity.js";
import ButtonForm from "./ButtonForm/ButtonForm.js"
import Slogan from './Slogan/Slogan'
import CalendarNav from './../CalendarNav/CalendarNav.js'

const todayDate=()=>{
  
    var date = new Date(),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }




const sectionStyle = {
    /* height: '100vh', 
    backgroundColor: 'lightgrey',
     backgroundSize: 'cover4169E1',
    backgroundRepeat: 'no-repeat', 
    color:'white',
    */
  };

class FiltersNavbar extends Component {
  //save in this state al the categories the user decide to after save in data the event that displays with this parameters
  state={
    city:'',
    category:'',
    date: todayDate(), /*today by default */
    data: []

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
    console.log()
    //convert string that we resive from calendar picker to yyyy/mm/dd format for api uses
    function convert(e) {
      var date = new Date(e),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
      return [date.getFullYear(), mnth, day].join("-");
    }
    const validDateFormat= convert(e)
    //console.log(validDateFormat)

    //change state with the new date
    this.setState({
      date: validDateFormat
    }) 
    //console.log(this.state.date)
    
  }
  chooseFilters= (props) => {
    //return api data from App.js
    let dataPased=this.props.dataApi
   
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
     dataPased.map((event)=>{
       if(event.comarca_i_municipi === `${city}` &&  category === 'all' && event.data_inici === `${dateEvent}T00:00:00.000` ){
        //insert in state al the data filtred
        dataFiltered.push(event)
       
       
        //if we pase all the filters city/category/date
      }else if(event.comarca_i_municipi === `${city}` && event.tags_categor_es === `agenda:categories/${category}` && event.data_inici === `${dateEvent}T00:00:00.000`){
        //insert in state al the data filtred
         dataFiltered.push(event)
      }
    }) 
   }
   //save in state al the events filtered
     this.setState({data:dataFiltered})
     console.log(dataFiltered)
    
   /*THINGS TO BE DONE:
      -PUT FROM API ALL THE CITIES FOR CATEGORIES 
      -CHANGE IN A BETER WAY THE ALERTS CAUGHT
      -CREATE A BUTTON IN CALENDAR THAT TAKES A METHOD HERE FOR CHANGE THE DATE FILTERED FOR THE EVENT
      -CHANGE THE WAY OF DISPLAYS THE ALERTS AND AD THE MOMENT WHEN THERE'S NO EVENTS IN THIS DAY
      -EXTRA:TO SHOW THE NUMBER OF EVENTS FILTERED BY THE FILTERS FOR MORE INFORMATION POR THE USER (IT'S NEEDED TO CHANGE THE LOGIC OF THE FILTES, SO IT SAVE THE INFO WHILE YOU ARE CHANGING THE FILTERS, NOT ONLY AT THE END ONCLICK BUTTON)
      */
  }
  
  render(){
  return(
      <div  style={ sectionStyle }>
    <Grid   
        container
        direction="column"
        justify="center"
        alignItems="center">  
        <Grid item xs={12}><Slogan/></Grid> 
        <Grid item xs={12}><Typography variant="h5" component="h3" color='inherit'>Choose your preferences!</Typography> </Grid>
        <Grid item xs={12}><SelectCity changeCity={this.saveCity} valueCities={this.props.valueCities}/></Grid>
        <Grid item xs={12}><SelectEvent  changeEvent={this.saveCategory}/></Grid>
        <Grid item xs={12}> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker date2={this.state.date} changeDate={this.saveDate} dateCut={this.props.dateCut}/>
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}><ButtonForm chooseFilters={this.chooseFilters}/></Grid> 
    </Grid>
    <CalendarNav apiFiltered={this.state.data}/>
    </div>
    

  )
}}

export default FiltersNavbar;




