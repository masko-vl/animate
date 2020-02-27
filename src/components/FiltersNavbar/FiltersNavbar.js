import React, { Component } from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
  }
  
  saveCity=(e)=>{
    const city = e.target.value
    const dateEvent = this.state.date
    const category = this.state.category
    this.setState({
      //return value of the city
      city: e.target.value,
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
    },()=>{showEventsCounter(this.state.data)}) 
    //console.log('hijodeputaaa!',this.state.data.length)
  }
  saveDate=(e)=>{
    const validDateFormat= convert(e)
    const city = this.state.city
    const category = this.state.category
    this.setState({
      date: validDateFormat,
      data:updateFilteredApi(this.props.dataApi, city, category, validDateFormat)
    },()=>{showEventsCounter(this.state.data)})  
  }

  chooseFilters= (e) => {
    const city = this.state.city
    const dateEvent = this.state.date
    const category = this.state.category
    
    this.setState({
      data:updateFilteredApi(this.props.dataApi, city, category, dateEvent),
      }, () => {
      if (this.state.data.length > 0) {
        this.setState({
          showFilters: false
        })
      } else {   // **************
        this.setState({
          displayAlert: true  // ****************
        })
      }
    })
  }

  resetAlert = () => {  // **********
    this.setState({
      displayAlert: false
    })  //************************* */
  }

  getOriginalFormatDateArray=(startDate, endDate)=>{

  }

  updateEventCalendar=(e)=>{
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
        <Grid item xs={12}><Typography variant="h5" component="h3" color='inherit'>Choose your preferences!</Typography> </Grid>
        <Grid item xs={12}><SelectCity resetAlert={this.resetAlert} changeCity={this.saveCity} valueCities={this.props.valueCities}/></Grid>
        <Grid item xs={12}><SelectEvent resetAlert={this.resetAlert} changeEvent={this.saveCategory}/></Grid>
        <Grid item xs={12}> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker resetAlert={this.resetAlert} date2={this.state.date} changeDate={this.saveDate} dateCut={this.props.dateCut}/>
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid  item xs={12}>{this.chooseFilters}</Grid>
        {/* ****** */}
        <Grid  item xs={12}>{showEventsCounter(this.state.data, this.state.displayAlert)} corresponding event(s)</Grid>
        {/* ******* */}
        <Grid item xs={12}><ButtonForm chooseFilters={this.chooseFilters}/></Grid> 
      </Grid>
    : <CalendarNav showFilters={this.showFilters} apiFiltered={this.state.data} updateEventCalendar={this.updateEventCalendar} getDateArray={getDateArray(new Date(), new Date(this.props.dateCut))}/>}
    </div>
  )
}}