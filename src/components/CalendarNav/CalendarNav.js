import React, {Component, Fragment} from 'react';

import 'dayjs/locale/ca';
import { format } from 'date-fns';
import './CalendarNav.css';
import EventList from './../EventList/EventList.js';
import EventMap from './../EventMap/EventMap.js'

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
        data: this.props.data,
        startDate: new Date(), // today by default
        endDate: new Date().setMonth(2), //date.today + 2 months
    }
    render() {
        console.log(this.props.data)
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
                <EventList data={this.state.data}/>
                <EventMap apiFiltered={this.props.apiFiltered}/>
            </Fragment>
        )
    }
};
export default CalendarNav;