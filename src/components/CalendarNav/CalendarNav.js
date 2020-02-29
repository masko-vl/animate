import React, {Component, Fragment} from 'react';
import 'dayjs/locale/ca';
import { format } from 'date-fns';
import './CalendarNav.css';
import EventList from './../EventList/EventList.js';
import EventMap from './../EventMap/EventMap.js'
import Header from '../Header/Header'
import { render } from '@testing-library/react';


const changeDateFormat = (date) => {
    let format= date.split("-").reverse().join("-")
    format = new Date(format).toString().slice(0, 10)
    return format

}

class CalendarNav extends Component {
    state = {
        // RECUPERER DATES DE L'API POUR CREER UN OBJET {format_date_a_afficher: date_api} ==> Onclick, récupérer la valeur pour faire le setstate du filter
        /* startDate: new Date(), // today by default
        endDate: new Date().setMonth(2), //date.today + 2 months */
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
    render(props) {
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