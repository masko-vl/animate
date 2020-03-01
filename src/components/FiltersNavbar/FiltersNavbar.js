import React, { Component } from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import "./FiltersNavbar.css"
import {todayDate,  getDateArray, convert, updateFilteredApi, showEventsCounter} from '../../sharedFunctions'
import DatePicker from './DatePicker/DatePicker.js';
import SelectEvent from "./SelectEvent/SelectEvent.js";
import SelectCity from "./SelectCity/SelectCity.js";
import ButtonForm from "./ButtonForm/ButtonForm.js";
import Slogan from './Slogan/Slogan'
import CalendarNav from './../CalendarNav/CalendarNav.js'


export default class FiltersNavbar extends Component {
  //save in this state al the categories the user decide to after save in data the event that displays with this parameters
  state={
    city:'',
    category:'all',//by default we are going to have al categoriesif you don't change it
    date: todayDate(), /*today by default */
    data: [],
    showFilters: true,
    alertEmptyEvents:false, /*state to show an display if the events for that day doesent exist, this one and the next are changed in chooseFilters botton function */
    alertEmptyCity: false /*state to show a alert when the city it isn't choose */
  }

  saveCity=(e)=>{
    const city = e.target.value
    const dateEvent = this.state.date
    const category = this.state.category
    this.setState({
      //return value of the city
      city: e.target.value,
      alertEmptyCity: false, /*if you change the city after having an alert of the oligatority, hide the alert fter change */
      data:updateFilteredApi(this.props.dataApi, city, category, dateEvent)
      //IS NEEDED TO PASS ALL THE CITIES OF THE DATA API
    },()=>{showEventsCounter(this.state.data)})  
  }

  saveCategory=(e)=>{
    const city = this.state.city
    const dateEvent = this.state.date
    const category = e.target.value
    //console.log(e.target)
    this.setState({
      //return from form the value of selected category
      category: e.target.value,
      data:updateFilteredApi(this.props.dataApi, city, category, dateEvent)
    },()=>{showEventsCounter(this.state.data)},()=>{if(this.state.data.lenght>0){this.setState({alertEmptyCity: false})}}) 
    //console.log('hijodeputaaa!',this.state.data.length)
    
  }
  saveDate=(e)=>{
    //convert string that we resive from calendar picker to yyyy/mm/dd format for api uses
    const validDateFormat= convert(e)
    const city = this.state.city
    const category = this.state.category
    console.log(validDateFormat)
    //change state with the new date
    this.setState({
      date: validDateFormat,
      data:updateFilteredApi(this.props.dataApi, city, category, validDateFormat)
    },()=>{showEventsCounter(this.state.data)},()=>{if(this.state.data.lenght>0){this.setState({alertEmptyCity: false})}})  
    //console.log(this.state.date)
  }

  chooseFilters= (e) => {
    //take all the filters for use it in data for the display of filtred events
    const city = this.state.city
    const dateEvent = this.state.date
    const category = this.state.category
    
    if(city=== ''){
      /*chenge to true to display in the render a message for the user to remind to put a city */
      this.setState({
        alertEmptyCity: true})
       
    }else{ 
    //create a loop in the events api array and pass if statement for select the events and display diferent errors
    console.log(dateEvent)
    
    this.setState({
      data:updateFilteredApi(this.props.dataApi, city, category, dateEvent),
    }, () => {
      if (this.state.data.length > 0) {
        this.setState({
      showFilters: false,
      
    })
    } else {
      /*if there arent event also show a display in the render and don't go to events list */
      this.setState({alertEmptyEvents: true})
    }})}
    // console.log(updateFilteredApi(this.props.dataApi, city, category, dateEvent))
  }

  updateEventCalendar=(e)=>{
    //convert to api format
    let date = new Date(e.target.id.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3"))
    date = convert(date)
    console.log(date)
    this.setState({date:date}) 
    //change data api filtered
    const city = this.state.city
    const dateEvent = date
    const category = this.state.category
    this.setState({data:updateFilteredApi(this.props.dataApi, city, category, dateEvent)})
  }

  componentDidUpdate(prevProps, prevState){
    //Here we create a condition if the event couter change from 0 to >0 then we want to quit this alert "there arent results, please change the filters". So we compare inside a update method this state with the previous.
    if(this.state.data.length>0 && prevState.data.length===0){
      this.setState({alertEmptyEvents: false})
    }
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
        <Grid item xs={12}><Slogan/></Grid> 
        <Grid item xs={12}><Typography variant="h6" component="h3" color='inherit'>Choose your preferences!</Typography> </Grid>
        <Grid item xs={12}><SelectCity changeCity={this.saveCity} valueCities={this.props.valueCities}/></Grid>
        <Grid item xs={12}><SelectEvent  changeEvent={this.saveCategory}/></Grid>
        <Grid item xs={12}> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker date2={this.state.date} changeDate={this.saveDate} dateCut={this.props.dateCut}/>
            </MuiPickersUtilsProvider>
        </Grid>
        {/*displayed alerts for the caught errors IT WILL BE GOOD TO PUT IT IN RED*/}
        <Grid  item xs={12}>{this.state.alertEmptyCity? <p className="alert">*Please select a city for displaying results</p>  : <p></p>}{this.state.alertEmptyEvents?<p className="alert">*There aren't results, please change the filters</p>: <p></p>}</Grid>
        {/*display counter of events while selecting filters*/}
        <Grid  item xs={12}><p>{showEventsCounter(this.state.data)} corresponding event(s)</p></Grid>
        <Grid item xs={12}><ButtonForm  className="button" chooseFilters={this.chooseFilters}/></Grid> 
      </Grid>
    : <CalendarNav showFilters={this.showFilters} apiFiltered={this.state.data} updateEventCalendar={this.updateEventCalendar} getDateArray={getDateArray(new Date(), new Date(this.props.dateCut))}/>}
    </div>
  )
}}