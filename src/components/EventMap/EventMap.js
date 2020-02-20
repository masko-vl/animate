import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

let events = [ 
    { 
       "codi":"20180423038",
       "data_fi":"2018-07-15T00:00:00.000",
       "data_inici":"2018-03-29T00:00:00.000",
       "denominaci":"Exposició \"Xamans i Esperits\"",
       "descripcio":"L'exposició \"Xamans i Esperits. Tresors del Museo del Jade de Costa Rica\" reuneix una mostra excepcional de les col·leccions arqueològiques del Museo del Jade i de la Cultura Precolombina de San José de Costa Rica. A través de precioses peces de jade, joies, ceràmiques i objectes de pedra, creats en un marc d'una cosmovisió animista, descobrim els processos històrics, la tecnologia i les creences vinculades tant al món quotidià com al cerimonial dels pobles antics.",
       "horari":"<p>· De dimarts a dissabtes: de 9.30 a 19 h</p>\n<p>· Diumenges i festius: de 10 a 14.30 h</p>\n<p>· Dilluns: tancat</p>\n",
       "subt_tol":"<p>Tresors del Museo del Jade de Costa Rica<br>\n</p>\n",
       "tags_mbits":"agenda:ambits/divulgacio",
       "tags_categor_es":"agenda:categories/exposicions",
       "enlla_os":"http://www.macbarcelona.cat/Exposicions/Exposicions-temporals-actuals/Xamans-i-Esperits.-Tresors-del-Museo-del-Jade-de-Costa-Rica,https://agenda.cultura.gencat.cat/content/agenda/ca/results.html?c=eyJrZXl3b3JkcyI6IiIsImRhdGFPcHRpb24iOiIiLCJkYXRhRGVzZGUiOiIiLCJkYXRhRmluc2EiOiIiLCJlc3BhaSI6IiIsInBvYmxhY2lvIjoiIiwiYW1iaXRzIjpbImFnZW5kYTphbWJpdHMvZGl2dWxnYWNpbyJdLCJjYXRlZ29yaWVzIjpbXX0_&page=0,https://agenda.cultura.gencat.cat/content/agenda/ca/results.html?c=eyJrZXl3b3JkcyI6IiIsImRhdGFPcHRpb24iOiIiLCJkYXRhRGVzZGUiOiIiLCJkYXRhRmluc2EiOiIiLCJlc3BhaSI6IiIsInBvYmxhY2lvIjoiYmFyY2Vsb25hIiwiYW1iaXRzIjpbXSwiY2F0ZWdvcmllcyI6WyJhZ2VuZGE6Y2F0ZWdvcmllcy9leHBvc2ljaW9ucyJdfQ__&page=0,http://agenda.cultura.gencat.cat",
       "imatges":"/content/dam/agenda/articles/2018/04/23/038/xamans.jpg,/content/dam/agenda/articles/2018/04/23/038/xamans_1.jpg",
       "adre_a":"Pg. de Santa Madrona, 39-41 (Parc de Montjuïc)",
       "comarca_i_municipi":"agenda:ubicacions/barcelona/barcelones/barcelona",
       "espai":"Museu d'Arqueologia de Catalunya (MAC Barcelona)",
       "latitud":"41.3697771",
       "longitud":"2.1576602000000094",
       "url":"http://www.mac.cat/"
    },
    { 
       "codi":"20180410041",
       "data_fi":"2018-07-15T00:00:00.000",
       "data_inici":"2018-07-15T00:00:00.000",
       "denominaci":"Romescada Popular i Aplec de la Sardana",
       "descripcio":"El romesco de Santa Coloma és un plat tradicional amb base de bacallà. La festa comença amb un aplec sardanista i segueix amb el concurs gastronòmic i una romescada popular on participen veïns i visitants. Després de dinar tornen les sardanes i a la nit hi ha un ball a la fresca.",
       "entrades":"<ul>\n<li>La Romescada té un preu de 15€/persona (anticipada fins a 500 tiquets); 18€ (dies previs o al mateix dia).</li>\n<li>Poden adquirir-se al Forn Pujó de Santa Coloma de Queralt.</li>\n<li>Per a més informació o reserva de tiquets a: Tel. 977 880478 - 620 803555 i al correu electrònic of.turisme@stacqueralt.altanet.org</li>\n</ul>\n",
       "horari":"<p>A partir de 17.30 h <br>\n</p>\n",
       "tags_mbits":"agenda:ambits/tradicional-i-popular,agenda:ambits/gastronomia",
       "tags_categor_es":"agenda:categories/festes",
       "enlla_os":"http://www.agendaens.cat/acte/40901/aplec-del-romesco,http://www.stacqueralt.altanet.org/romescada-popular-i-aplec-de-la-sardana",
       "imatges":"/content/dam/agenda/articles/2018/04/10/041/aplec.jpg,/content/dam/agenda/articles/2018/04/10/041/aplec1.jpg,/content/dam/agenda/articles/2018/04/10/041/aplec2.jpg,/content/dam/agenda/articles/2018/04/10/041/aplec3.jpg",
       "v_deos":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/JnuiehSIixY\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
       "comarca_i_municipi":"agenda:ubicacions/tarragona/conca-de-barbera/santa-coloma-de-queralt",
       "espai":"Plaça Major",
       "latitud":"41.53254769999999",
       "longitud":"1.3836272999999437",
       "url":"http://www.stacqueralt.altanet.org/agenda/romescada-popular-i-aplec-de-la-sardana"
    },
    { 
       "codi":"20180703003",
       "data_fi":"2018-07-08T00:00:00.000",
       "data_inici":"2018-07-08T00:00:00.000",
       "denominaci":"Mulla't per l'Esclerosi Múltiple 2018",
       "descripcio":"El Mulla't consisteix en fer una capbussada solidària i nedar uns metres per lluitar contra una malaltia tan greu com és l'esclerosi múltiple. També es pot participar a l'acte comprant algun dels articles que contribueixen a finançar els serveis de neurorehabilitació de la Fundació Esclerosi Múltiple. Més de 600 piscines de Catalunya reuneixen a més de 100.000 persones que a les 12 h del migdia fan un salt a l'aigua per solidaritzar-se amb les 7.500 persones que tenen esclerosi múltiple a Catalu",
       "horari":"<p>12 h</p>\n",
       "tags_mbits":"agenda:ambits/zz-altres-ambits",
       "tags_categor_es":"agenda:categories/festes",
       "enlla_os":"https://mullat.fem.es/activitats/?action=tribe_geosearch&tribe_paged=1&tribe_event_display=map&featured=false&tribe-bar-search=Mulla't&tribe-bar-date=2018-07-08&is_recurrence_list=false,https://agenda.cultura.gencat.cat/content/agenda/ca.html",
       "imatges":"/content/dam/agenda/articles/2018/07/03/003/mullat-per-lesclerosi-multiple2018-2.jpg",
       "v_deos":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4dTvoMdhha4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>,<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/wHUjt0CFulw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
       "espai":"Més de 600 piscines ",
       "latitud":"41.3850639",
       "localitat":"Municipis d'arreu de Catalunya ",
       "longitud":"2.1734034999999494"
    },
    { 
       "codi":"20180703006",
       "data_fi":"2018-08-25T00:00:00.000",
       "data_inici":"2018-08-25T00:00:00.000",
       "denominaci":"Manu Guix",
       "descripcio":"Activitat inclosa dins del Programa.cat, impulsat pel Departament de Cultura de la Generalitat de Catalunya i les Diputacions de Barcelona, Girona, Lleida i Tarragona.   Manu Guix presenta en directe el seu nou treball discogràfic titulat Després de tot. Un disc amb 14 noves cançons que s'interpretaran en concert al costat d'altres èxits de la seva discografia.   #ProgramaCAT",
       "entrades":"<p>Preu: 15 €</p>\n",
       "horari":"<p>20.30 h<br>\n</p>\n",
       "subt_tol":"<p>Concert</p>\n",
       "tags_mbits":"agenda:ambits/musica",
       "tags_categor_es":"agenda:categories/concerts",
       "tags_altres_categor_es":"agenda:altres-categories/programa-cat",
       "enlla_os":"https://programa.cat/,https://agenda.cultura.gencat.cat/content/agenda/ca/results.html?c=eyJhbHRyZXNDYXRlZ29yaWVzIjpbImFnZW5kYTphbHRyZXMtY2F0ZWdvcmllcy9wcm9ncmFtYS1jYXQiXX0_&page=0,https://agenda.cultura.gencat.cat",
       "imatges":"/content/dam/agenda/articles/2018/07/03/006/Manu-Guix-1.jpg,/content/dam/agenda/articles/2018/07/03/006/Manu-Guix-2.jpg,/content/dam/agenda/articles/2018/07/03/006/Manu-Guix-3.jpg",
       "adre_a":"Av. Palfuriana, 52",
       "comarca_i_municipi":"agenda:ubicacions/tarragona/baix-penedes/el-vendrell",
       "espai":"Auditori Pau Casals",
       "latitud":"41.18392679999999",
       "longitud":"1.5409826999999723"
    },
    { 
       "codi":"20180703003",
       "data_fi":"2018-07-08T00:00:00.000",
       "data_inici":"2018-07-08T00:00:00.000",
       "denominaci":"Mulla't per l'Esclerosi Múltiple 2018",
       "descripcio":"El Mulla't consisteix en fer una capbussada solidària i nedar uns metres per lluitar contra una malaltia tan greu com és l'esclerosi múltiple. També es pot participar a l'acte comprant algun dels articles que contribueixen a finançar els serveis de neurorehabilitació de la Fundació Esclerosi Múltiple. Més de 600 piscines de Catalunya reuneixen a més de 100.000 persones que a les 12 h del migdia fan un salt a l'aigua per solidaritzar-se amb les 7.500 persones que tenen esclerosi múltiple a Catalu",
       "horari":"<p>12 h</p>\n",
       "tags_mbits":"agenda:ambits/zz-altres-ambits",
       "tags_categor_es":"agenda:categories/festes",
       "enlla_os":"https://mullat.fem.es/activitats/?action=tribe_geosearch&tribe_paged=1&tribe_event_display=map&featured=false&tribe-bar-search=Mulla't&tribe-bar-date=2018-07-08&is_recurrence_list=false,https://agenda.cultura.gencat.cat/content/agenda/ca.html",
       "imatges":"/content/dam/agenda/articles/2018/07/03/003/mullat-per-lesclerosi-multiple2018-2.jpg",
       "v_deos":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4dTvoMdhha4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
       "espai":"Més de 600 piscines ",
       "latitud":"41.3850639",
       "localitat":"Municipis d'arreu de Catalunya ",
       "longitud":"2.1734034999999494"
    },
    { 
       "codi":"20180423034",
       "data_fi":"2018-03-25T00:00:00.000",
       "data_inici":"2018-03-04T00:00:00.000",
       "denominaci":"Sonaprop",
       "descripcio":"11a edició",
       "horari":"<p>Tardes de dimecres a les 19 h</p>\n",
       "subt_tol":"<p>Música en viu a curta distància</p>\n",
       "tags_mbits":"agenda:ambits/musica",
       "tags_categor_es":"agenda:categories/concerts",
       "enlla_os":"https://sonaprop.wordpress.com/2017/01/17/cartell-2017/",
       "imatges":"/content/dam/agenda/articles/2018/04/23/034/sonaprop.jpg,/content/dam/agenda/articles/2018/04/23/034/sonaprop1.jpg",
       "espai":"Heretat Sabatès"
    },
    { 
       "codi":"20180703003",
       "data_fi":"2018-07-08T00:00:00.000",
       "data_inici":"2018-07-08T00:00:00.000",
       "denominaci":"Mulla't per l'Esclerosi Múltiple 2018",
       "descripcio":"El Mulla't consisteix en fer una capbussada solidària i nedar uns metres per lluitar contra una malaltia tan greu com és l'esclerosi múltiple. També es pot participar a l'acte comprant algun dels articles que contribueixen a finançar els serveis de neurorehabilitació de la Fundació Esclerosi Múltiple. Més de 600 piscines de Catalunya reuneixen a més de 100.000 persones que a les 12 h del migdia fan un salt a l'aigua per solidaritzar-se amb les 7.500 persones que tenen esclerosi múltiple a Catalu",
       "horari":"<p>12 h</p>\n",
       "tags_mbits":"agenda:ambits/zz-altres-ambits",
       "tags_categor_es":"agenda:categories/festes",
       "enlla_os":"https://mullat.fem.es/activitats/?action=tribe_geosearch&tribe_paged=1&tribe_event_display=map&featured=false&tribe-bar-search=Mulla't&tribe-bar-date=2018-07-08&is_recurrence_list=false,https://agenda.cultura.gencat.cat/content/agenda/ca.html",
       "imatges":"/content/dam/agenda/articles/2018/07/03/003/mullat-per-lesclerosi-multiple2018-2.jpg",
       "v_deos":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4dTvoMdhha4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
       "espai":"Més de 600 piscines ",
       "latitud":"41.3850639",
       "localitat":"Municipis d'arreu de Catalunya ",
       "longitud":"2.1734034999999494"
    },
    { 
       "codi":"20180703003",
       "data_fi":"2018-07-08T00:00:00.000",
       "data_inici":"2018-07-08T00:00:00.000",
       "denominaci":"Mulla't per l'Esclerosi Múltiple 2018",
       "descripcio":"El Mulla't consisteix en fer una capbussada solidària i nedar uns metres per lluitar contra una malaltia tan greu com és l'esclerosi múltiple. També es pot participar a l'acte comprant algun dels articles que contribueixen a finançar els serveis de neurorehabilitació de la Fundació Esclerosi Múltiple. Més de 600 piscines de Catalunya reuneixen a més de 100.000 persones que a les 12 h del migdia fan un salt a l'aigua per solidaritzar-se amb les 7.500 persones que tenen esclerosi múltiple a Catalu",
       "horari":"<p>12 h</p>\n",
       "tags_mbits":"agenda:ambits/zz-altres-ambits",
       "tags_categor_es":"agenda:categories/festes",
       "enlla_os":"https://mullat.fem.es/activitats/?action=tribe_geosearch&tribe_paged=1&tribe_event_display=map&featured=false&tribe-bar-search=Mulla't&tribe-bar-date=2018-07-08&is_recurrence_list=false,https://agenda.cultura.gencat.cat/content/agenda/ca.html",
       "imatges":"/content/dam/agenda/articles/2018/07/03/003/mullat-per-lesclerosi-multiple2018-2.jpg",
       "v_deos":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4dTvoMdhha4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
       "espai":"Més de 600 piscines ",
       "latitud":"41.3850639",
       "localitat":"Municipis d'arreu de Catalunya ",
       "longitud":"2.1734034999999494"
    },
    { 
       "codi":"20180703003",
       "data_fi":"2018-07-08T00:00:00.000",
       "data_inici":"2018-07-08T00:00:00.000",
       "denominaci":"Mulla't per l'Esclerosi Múltiple 2018",
       "descripcio":"El Mulla't consisteix en fer una capbussada solidària i nedar uns metres per lluitar contra una malaltia tan greu com és l'esclerosi múltiple. També es pot participar a l'acte comprant algun dels articles que contribueixen a finançar els serveis de neurorehabilitació de la Fundació Esclerosi Múltiple. Més de 600 piscines de Catalunya reuneixen a més de 100.000 persones que a les 12 h del migdia fan un salt a l'aigua per solidaritzar-se amb les 7.500 persones que tenen esclerosi múltiple a Catalu",
       "horari":"<p>12 h</p>\n",
       "tags_mbits":"agenda:ambits/zz-altres-ambits",
       "tags_categor_es":"agenda:categories/festes",
       "enlla_os":"https://mullat.fem.es/activitats/?action=tribe_geosearch&tribe_paged=1&tribe_event_display=map&featured=false&tribe-bar-search=Mulla't&tribe-bar-date=2018-07-08&is_recurrence_list=false,https://agenda.cultura.gencat.cat/content/agenda/ca.html",
       "imatges":"/content/dam/agenda/articles/2018/07/03/003/mullat-per-lesclerosi-multiple2018-2.jpg",
       "v_deos":"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4dTvoMdhha4\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>",
       "espai":"Més de 600 piscines ",
       "latitud":"41.3850639",
       "localitat":"Municipis d'arreu de Catalunya ",
       "longitud":"2.1734034999999494"
    },
    { 
       "codi":"20180620015",
       "data_fi":"2018-07-07T00:00:00.000",
       "data_inici":"2018-07-04T00:00:00.000",
       "denominaci":"28è Concurs Internacional de Focs Artificials Ciutat de Tarragona",
       "descripcio":"En el marc del Pla Cultural dels Jocs Mediterranis.   Juntament amb els quatre dies de concurs, s’ha organitzat la segona jornada formativa \"Vora els focs de Tarragona” pensada per fomentar la cultura al voltant dels focs artificials i que consistirà en una taula rodona d’experiències organitzatives de festivals i concursos de focs.   El cartell de l’edició d’aquest any ha estat realitzat pels tarragonins Manel Tarrés i Ferran Roch.   Un any més, l’Associació de Restaurants de la Part Alta organ",
       "tags_mbits":"agenda:ambits/espectacles,agenda:ambits/arts-visuals",
       "tags_categor_es":"agenda:categories/festivals-i-mostres",
       "enlla_os":"https://www.tarragona.cat/cultura/festes-i-cultura-popular/concurs-internacional-de-focs-artificials-ciutat-de-tarragona,https://agenda.cultura.gencat.cat",
       "imatges":"/content/dam/agenda/articles/2018/06/20/015/20180704-1-concurs-focs-artificials-tgn.jpg,/content/dam/agenda/articles/2018/06/20/015/FOCS18.jpg",
       "comarca_i_municipi":"agenda:ubicacions/tarragona/tarragones/tarragona",
       "espai":"Platja del Miracle",
       "latitud":"41.1140157",
       "longitud":"1.260863900000004"
    }
]

export default class EventMap extends Component {
  state = {
    lat: 41.5912,
    lng: 1.5209,
    zoom: 8
  }
// in tha state are the coordinates of Catalunya
  render() {
    const position = [this.state.lat, this.state.lng]
    // in the const position I stored the lng and lat
    // let markers = [
    //   [ 41.3814343, 2.169289299999946],
    //   [41.3814343, 2.2],
    //   [41.3814343, 2.171]
    // ]
    // let a = parseFloat(events[1].longitud);
    // let b = parseFloat(events[1].latitud);
    // used the parseFloat method to convert from string to inter keeping the decimals
    let markers= [
      [parseFloat(events[1].latitud),parseFloat(events[1].longitud)],
      // [events[2].longitud, events[2].latitud],
      // [events[3].longitud, events[3].latitud]
    ]
    
    console.log(markers)
    return (
      <Map center={position} zoom={this.state.zoom}>
      <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.mapbox.com/styles/v1/ceec/ciyxop55w000h2qo9pqyfyy9w/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2VlYyIsImEiOiJjaXl1bWlwZ2QwMW1sMzNxbjMxN3JhdGJlIn0.Y_U5JsNv727e2TqKTJ7gTQ'
              />
              {/* creating a map over the markers, for each markers, that we have declared below, to display a marker on map */}
        {markers.map(marker => (
        <Marker position={marker}>
          <Popup>
          <img width='120px' src='https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg' />
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      ))}

      </Map>
    )
  }
}
