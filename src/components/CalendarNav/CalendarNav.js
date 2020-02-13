import React, {Component} from 'react';
// import './CalendarNav.css'


// class CalendarNav extends Component {
//     state = {
//         startDate: new Date("2017-10-01"), // today by default or date chosen by the user
//         endDate: new Date("2017-14-04"), //date.today + 6 months
//     }

//     DateArray = (startDate, endDate) => {
//         var arr = [];
//         var date = new Date(startDate);
//         while (date <= endDate) {
//             arr.push(new Date(startDate));
//             startDate.setDate(startDate.getDate() + 1);
//         }
//         return arr;
//     }

//     arrayCalendar = () => {for (var i = 0; i < this.DateArray.length; i++) {
//         console.log("<p>" + this.DateArray[i] + "</p>");
//     }}


 class CalendarNav extends Component {
    state = {
        startDate: new Date("2017-10-01"), // today by default or date chosen by the user
        endDate: new Date("2017-14-04"), //date.today + 6 months
    }

    getDateArray = () => {
        const arr = [];
        const dt = new Date(this.state.startDate);
        while (dt <= this.state.endDate) {
            arr.push(new Date(dt));
            dt.setDate(dt.getDate() + 1);
        }
        for (var i = 0; i < this.length; i++) {
         this[i]}
    }
    
    // array = () => {for (var i = 0; i < this.getDateArray().length; i++)
    //     "<p>" + this.getDateArray()[i] + "</p>"}

// Output
    render() {
        return(
            <p>
                {getDateArray()}
            </p>
        )
    }
};

export default CalendarNav;


{/* //         return(
//             <p>arrayCalendar</p>
//         )
//     }

// } */}


{/* <div className="calendarSwiftContainer">WEEK DAYS FILTERS BUTTON</div> */}

// export default CalendarNav  
