import React, {Component, Fragment} from 'react';
import 'dayjs/locale/ca';
import './CalendarNav.css';
import EventList from './../EventList/EventList.js';
import EventMap from './../EventMap/EventMap.js'
import Header from '../Header/Header'
import {changeDateFormat} from '../../sharedFunctions'


class CalendarNav extends Component {
    state = {
        // RECUPERER DATES DE L'API POUR CREER UN OBJET {format_date_a_afficher: date_api} ==> Onclick, récupérer la valeur pour faire le setstate du filter
        /* startDate: new Date(), // today by default
        endDate: new Date().setMonth(2), //date.today + 2 months */
        eventMapDisplay: false,
        eventListDisplay : true,
        dates : this.props.getDateArray
    }
    showMap=()=>{
        if(this.props.apiFiltered.length!== 0){
        this.setState({
            eventListDisplay: false,
            eventMapDisplay: true
        })}
      }
      showList=()=>{
          
        this.setState({
            eventListDisplay: true,
            eventMapDisplay: false
        }) 
    }
    render() {
        return(
            <Fragment>
                <Header showFilters={this.props.showFilters} colorChangeMap={this.state.eventMapDisplay} colorChangeList={this.state.eventListDisplay} showList={this.showList} showMap={this.showMap}/>
                <div className="dates-container">
                    {this.state.dates.map((date, i) => (
                    <div className="date-card" key={i} onClick={this.props.updateEventCalendar}>
                        <h3 className="date-text" id={date}>{changeDateFormat(date)}</h3>
                    </div>
                    ))}
            </div>
            {
                this.state.eventListDisplay
                ? <EventList apiFiltered={this.props.apiFiltered} />
                : <EventMap apiFiltered={this.props.apiFiltered}/>
            }              
        </Fragment>
        )
    }
};
export default CalendarNav;