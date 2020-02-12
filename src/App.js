import React from 'react';
import './App.css';
import Header from './components/Header/Header.js'
import FiltersNavbar from './components/FiltersNavbar/FiltersNavbar.js'
import CalendarNav from './components/CalendarNav/CalendarNav.js'
import EventList from './components/EventList/EventList.js'
import EventMap from './components/EventMap/EventMap.js'
import EventDetails from './components/EventDetails/EventDetails.js'



function App() {
  return (
    <div className="">
      <Header/>
      <h1>HELLO</h1>
      <FiltersNavbar/>
      <CalendarNav/>
      <EventList/>
      <EventMap/>
      <EventDetails/>
     
      <section>DETAILS EVENT</section>

    </div>
  );
}

export default App;
