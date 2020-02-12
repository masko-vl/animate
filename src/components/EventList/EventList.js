import React, {Component} from 'react';
import './EventList.css';


class EventList extends Component {
    state = {
        title: "title1",
        description: "lorem ipsum event 1",
        startTime: "08:00",
        endTime: "21:00",
        placeName: "",
        address: "12 carrer d'en Roca, 08002 Barcelona",
        distance: "2km",
        eventType : "sport",
        cardPic:"https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg",
    }
    
    // async componentDidMount() {
    //     // exemple :
    //     // const [titleResponse, descriptionResponse, startTimeResponse, endTimeResponse, placeNameResponse, addressResponse, eventTypeResponse, cardPicResponse] = await Promise.all([
    //     //     axios.get(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json`),
    //     //     axios.get(`https://analisi.transparenciacatalunya.cat/resource/rhpv-yr4f.json`)
    //     //   ]);

    //     this.setState({
    //         title: titleResponse,
    //         description: descriptionResponse,
    //         startTime: startTimeResponse,
    //         endTime: endTimeResponse,
    //         placeName: placeNameResponse,
    //         address: addressResponse,
    //         distance: distanceResponse,
    //         eventType : eventTypeResponse,
    //         cardPic: cardPicResponse
    //     })
    // }

    render (){
        return(
            <figure className="EventCard">
                <img className="SmallCardPic"
                    src={this.state.cardPic}
                    alt={this.state.title} />
                <div className="FirstColumnDescription">
                    <p className="title">{this.state.title}</p>
                    <p className="description">{this.state.description}</p>
                    <p className="address">{this.state.address}</p>
                </div>
                <div className="SecondColumnDescription">
                    <p className="startTime">{this.state.startTime}</p>
                    <p className="endTime">{this.state.endTime}</p>
                    <p className="distance">{this.state.distance}</p>
                    <a className="eventIcon" src={this.state.eventType}></a>/
                </div>
            </figure>
        )
    }
}

//  Exemple EventList


//  const eventsList = [
//     {
//         title: "title1",
//         eventType: "sport",
//         description: "lorem ipsum event 1",
//         openingTimes: [
//             {
//             date1: "01.02",
//             startTime: "14:00",
//             endTime:"21:00"
//             },
//             {
//             date2: "01.02",
//             startTime: "08:00",
//             endTime: "21:00"
//             },
//             {
//             date3: "03.02",
//             startTime: "08:00",
//             endTime: "21:00"
//             }
//         ],
//         placeName: "",
//         address: "12 carrer d'en Roca, 08002 Barcelona",
//         distance: "2km",
//         smallPicture:"https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg"
//     },
//     {
//         title: "title2",
//         eventType: "music",
//         description: "blablablabla",
//         openingTimes: [
//             {
//                 date1: "23.03",
//                 startTime: "15h",
//                 endTime: "18h",
//             }
//         ],
//         placeName: "Palau Sant Jordi",
//         address: "Passeig Olímpic, s/n, 08004 Barcelona",
//         distance: "60m",
//         smallPicture:"https://cdn02.visitbarcelona.com/files/5445-7632-Imagen/palau-sant-jordi-anella-olimpica-barcelona-pf-c1.jpg"
//     }
//  ]



export default EventList;