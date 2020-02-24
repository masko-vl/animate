import React, {Component, Fragment} from 'react';

import 'dayjs/locale/ca';
import { format } from 'date-fns';
import './CalendarNav.css';
import EventList from './../EventList/EventList.js';
import EventMap from './../EventMap/EventMap.js'
import Header from '../Header/Header'

const getDateArray = (start, end) => {
    var arr = [];
    var dt = start;
    while (dt <= end) {
        arr.push(format(dt, 'dd.MM'));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}
class CalendarNav extends Component {
    state = {
        // RECUPERER DATES DE L'API POUR CREER UN OBJET {format_date_a_afficher: date_api} ==> Onclick, récupérer la valeur pour faire le setstate du filter
        date: this.props.apiFiltered,
        startDate: new Date(), // today by default
        endDate: new Date().setMonth(2), //date.today + 2 months
        eventListDisplay : true
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
      let dates = getDateArray(this.state.startDate, this.state.endDate)
        return(
            <Fragment>
                <div className="dates-container">
                    {dates.map((date, i) => (
                    <div className="date-card" key={i}>
                        <h3 className="date-text">{date}</h3>
                    </div>
                    ))}
                </div>
                <Header showList={this.showList} showMap={this.showMap}/>
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