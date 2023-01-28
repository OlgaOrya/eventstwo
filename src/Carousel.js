import { useState } from "react";


function Carousel({imageProps}){

const [events,setEvents] = useState(0);

const previousEvent = () =>{
    setEvents ((events =>{
        events --;
        if(events <0){
            return imageProps.length -1 ;
        }
        return events;
    }))
}

const nextEvent = () =>{
    setEvents ((events =>{
        events ++;
        if (events > imageProps.length -1){
            events = 0;
        }
        return events;
    }))
}

return(
    <div>
    <div className="container">
    <img src={imageProps[events]} alt ="events" width="400px" />
    </div>

    <div className="container">
    <button className="btnCarousel" onClick ={previousEvent}>Previous</button>
    <button className="btnCarousel btnNext" onClick={nextEvent}>Next</button>
    </div>
    </div>
)
}

export default Carousel;