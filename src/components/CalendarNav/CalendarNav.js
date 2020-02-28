import React, {Component, Fragment} from 'react';
import EventDetails from './../EventDetails/EventDetails.js'

import 'dayjs/locale/ca';
import { format } from 'date-fns';
import './CalendarNav.css';

import Header from '../Header/Header'

class CalendarNav extends Component {
    state = {
        // RECUPERER DATES DE L'API POUR CREER UN OBJET {format_date_a_afficher: date_api} ==> Onclick, récupérer la valeur pour faire le setstate du filter
        /* startDate: new Date(), // today by default
        endDate: new Date().setMonth(2), //date.today + 2 months */
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
                        <h3 className="date-text">{date}</h3>
                    </div>
                    ))}
                </div>
                <EventDetails apiFiltered={this.props.apiFiltered}/>
            </Fragment>
        )
    }
};
export default CalendarNav;