
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




const sectionStyle = {
    /* height: '100vh', 
    backgroundColor: 'lightgrey',
     backgroundSize: 'cover4169E1',
    backgroundRepeat: 'no-repeat', 
    color:'white',
    */
  };

class FiltersNavbar extends Component {
  state={
    city:'',
    category:'',
    date: new Date(),
    data: ''

  }
  saveCity=(e)=>{
    
    this.setState({
      city: e.target.value
    }) 
    
  }
  saveCategory=(e)=>{
    //console.log(e.target)
    this.setState({
      category: e.target.value
    }) 
  }


  saveDate=(e)=>{
    //convert string to yyyy/mm/dd format
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
    console.log(this.props.dataApi)
    let dataM=this.props.dataApi
    
    //console.log(dateEvent)
    const city = this.state.city
    const dateEvent = this.state.date
    const category = this.state.category
     dataM.map(function(event, index){
      if(dataM[index].comarca_i_municipi === `agenda:ubicacions/barcelona/barcelones/${city}` && dataM[index].tags_categor_es === `agenda:categories/${category}` && dataM[index].data_inici === `${dateEvent}T00:00:00.000`){
         console.log(event)

        //insert setstate of the data

        //put all the posible errors and posibilities of dsplay

        //try to put from data all the cities and provinces

        //put in the date picker errors catch for dates where there aren't events


      }
     
    })  
     
    


   /*  {this.state.data.map(function(event, i){z
      return(
        <li key={i}>{event.denominaci}</li>
      )
    })} */


  }
  
  render(){
    //const classes = useStyles();
  return(
      <div  style={ sectionStyle }>
      
    <Grid   
        container
        direction="column"
        justify="center"
        alignItems="center">  
        <Grid item xs={12}><Slogan/></Grid> 
        <Grid item xs={12}><Typography variant="h5" component="h3" color='inherit'>Choose your preferences!</Typography> </Grid>
        <Grid item xs={12}><SelectCity changeCity={this.saveCity}/></Grid>
        <Grid item xs={12}><SelectEvent event2={this.state.event} changeEvent={this.saveCategory}/></Grid>
        <Grid item xs={12}> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker date2={this.state.date} changeDate={this.saveDate}/>
            </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={12}><ButtonForm chooseFilters={this.chooseFilters}/></Grid> 
    </Grid>
    <CalendarNav/>
    </div>
    

  )
}}

export default FiltersNavbar;




