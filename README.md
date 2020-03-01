# ANÍMATE!
## Second WCS project

This idea is based on what is missing in others event apps. We want to use the generalitat api for develop a program where you can filter al the events of Catalunya by the city, the category and the day. After that the user will have the posibility to change the view of the events from list to map view and also to change with a calendar displayed the date to see other events 

For this React project we organize the components like this:
* App.js
    * Filters
        * Calendar
            * Header
                * Event List
                    * Event Details
                * Event Map
                    * Event Details
                    
For the styling and form control we use a material-ui packages and for the date date-fns package.

The general logic is orginized between App and Filters, and the most especific things in each component. Also we use an external sheredFunction.js to use the same function by diferent components.

In App we recive the data api from the day that you are looking to the page, Also here is integred the spinner logo for the moment when the api is loading. Is needed to change all the time the format for the date of the events to transform to js Date for filters date and calendar date, and also for creating an array of the start dat to the end date od events and display them in all this days.

Inside the filters navbar we manage with diferent functions the selects of city, type of event and date, and the control of all the possible errors before sending the api filtered to the child components. Also we display a little counter of events before going to the event list so the user is going to know how many events are going to be and if there aren't.

In the Calendar we recive the data api filtered to pass it to the event list and also to manage the dates with a onclick in each day the change the state of filters so the events are changing also. The calendar is an array that displays from today to the end of the data api events date.








    





