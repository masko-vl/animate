import React, {Component} from 'react';

const getDateArray = (start, end) => {
    var arr = [];
    var dt = new Date(start);
    while (dt <= end) {
        arr.push(new Date(dt));
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

const DisplayedDates = (startDate, endDate) => {
    var dateArr = getDateArray(startDate, endDate);
    for (var i = 0; i < dateArr.length; i++) {
    document.write("<p>" + dateArr[i] + "</p>");
}}

class CalendarNav extends Component {
    state = {
        startDate: new Date("2017-10-01"), // today by default
        endDate: new Date("2017-12-04"), //date.today + 6 months
    }

    render() {
        return(
            <div>
                {DisplayedDates(this.state.startDate,this.state.endDate)}
            </div>
        )
    }
};

export default CalendarNav;