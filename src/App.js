import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header.js';
import FiltersNavbar from './components/FiltersNavbar/FiltersNavbar.js';


class App extends Component {
  state = {
    data: {},
    isLoading: true,
    dateCut: '',
    
    
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
    //insert the current date in the url so we only display 
  const {data} = await axios(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json?$where=data_inici%3E=%22${this.getDate()}%22`)
 
        this.setState({
          data, 
          isLoading: false,
          //the last date of the api array for save it as the last day of the calendar picker
          dateCut: data[999].data_inici.substr(0,10).split('-').join(',')
         })
       

//CREATE AN ARRAY OF CITYS AFTER API IS LOADED
  var arrayMunicipi=[];
  //Recover the cities from the api and push in a array
  data.map((event)=>{
    //only if we have info about the municipi save in an array the data string
    if(event.comarca_i_municipi!== undefined){
      arrayMunicipi.push(event.comarca_i_municipi)
    }
  })
  //select only the cities once (not repited)
  let valueCities = arrayMunicipi.reduce((total, city) => total.includes(city) ? total : [...total, city], [])
  //create a state for city value in filters select
  this.setState({valueCities:valueCities})

}

  render(){
    return (
      <div className="">
          {this.state.isLoading?<h1>IS LOADING FILTER...</h1>:<FiltersNavbar dataApi={this.state.data} dateCut={this.state.dateCut} valueCities={this.state.valueCities}/>}
      </div>
    );
  }
  }


export default App;
