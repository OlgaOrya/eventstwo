
import { useState } from 'react';
import { data } from './data';
import './App.css';
import Carousel from './Carousel';
import Buytickets from './Buytickets';


function App() {
const [poster,setPoster] = useState(0);
const {id, title,style,description,image} = data[poster];

const previousPoster = () =>{
  setPoster((poster =>{
    poster --;
    if(poster < 0){
      return data.length - 1;
    }
    return poster;
  }))
}

const nextPoster = () =>{
  setPoster ((poster =>{
    poster ++;
    if(poster > data.length -1){
      poster = 0;
    }
    return poster;
  }))
}

return(
  <div>

    <div className='container'>
    <h1>The playbill of 5 events in 2023 years.</h1>
    </div>

    <div className='container' key={id}>
      <h2>{title}</h2>
    </div>

    <div className='container'>
      <Carousel imageProps={image} />
    </div>

    <div className='container'>
        <h3>Style: {style}</h3>
    </div>

    <div className='container'>
      <p>{description}</p>
    </div>

    <div className='container'>
      <button className="btn previous" onClick={previousPoster}>Previous event</button>
      <button className="btn" onClick={nextPoster}>Next event</button>
    </div>
    

    <div>
      <Buytickets />
    </div>
    </div>
)
}

export default App;
