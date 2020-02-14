import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header.js'
import FiltersNavbar from './components/FiltersNavbar/FiltersNavbar.js'
import CalendarNav from './components/CalendarNav/CalendarNav.js'
import EventList from './components/EventList/EventList.js'
import EventMap from './components/EventMap/EventMap.js'
import EventDetails from './components/EventDetails/EventDetails.js'
import { render } from 'react-dom';


class App extends Component {
  state = {
    data: {},
    isLoading: true
    
}
getDate = () => {
  //SELECT THE CURRENT DATE
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log(today);
  return today;
}
async componentDidMount(){
    //insert the current date in the url
  const {data} = await axios(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json?$where=data_inici%3E=%22${this.getDate()}%22`)
        console.log(data)
        this.setState({
          data, 
          isLoading: false
        })
        
  }

  render(){
    return (
    <div className="">
      {/* {this.state.isLoading
      ? <h1>LOADING...</h1>
      :<div><ul>
        {this.state.data.map(function(event, i){
          return(
            <li key={i}>{event.denominaci}</li>
          )
        })} </ul>
      </div>}  */}
     
        <Header/>
        <FiltersNavbar/>
        <CalendarNav/>
        <EventList/>
        <EventMap/>
        <EventDetails/>
    </div>
  );}
}

export default App;
