import React, {Component, Fragment} from 'react';
import 'dayjs/locale/ca';
import './CalendarNav.css';
import EventList from './../EventList/EventList.js';
import EventMap from './../EventMap/EventMap.js'
import Header from '../Header/Header'
import {changeDateFormat} from '../../sharedFunctions'


class CalendarNav extends Component {
    state = {
        eventListDisplay : true,
        dates : this.props.getDateArray
    }
    showMap=()=>{
        this.setState({
            eventListDisplay: false
        })
      }
      showList=()=>{
        this.setState({
            eventListDisplay: true
        }) 
    }
    render() {
        return(
        <Fragment>
            <Header showFilters={this.props.showFilters} showList={this.showList} showMap={this.showMap}/>
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