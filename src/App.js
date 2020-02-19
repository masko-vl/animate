import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import EventList from './components/EventList/EventList'
import EventMap from './components/EventMap/EventMap'

import Header from './components/Header/Header.js';
import FiltersNavbar from './components/FiltersNavbar/FiltersNavbar.js';
import EventDetails from './components/EventDetails/EventDetails.js';


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
  console.log(today);
  return today;
}
async componentDidMount(){
    //insert the current date in the url
  const {data} = await axios(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json?$where=data_inici%3E=%22${this.getDate()}%22`)
  // for(let i =0; i<3; i++) {
   console.log(data)
  // }
        // this.setState({
        //   data, 
        //   isLoading: false,
        //dateCut: data[999].data_inici.substr(0,10).split('-').join(',')
        // })
  }

  

  render(){
    return (
        <div className=""> 
            <Header/>
            <FiltersNavbar dataApi={this.state.data}/>
        </div>
    );
  }
  }


export default App;
