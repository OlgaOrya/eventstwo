import { data } from './data';
import { useState } from 'react';

function Buytickets (){
const [occasions,setOccasion] = useState(data);

const removeOccasion =(id) =>{
    let newOccasions = occasions.filter(
        occasion =>occasion.id !==id);
        setOccasion(newOccasions);
}

    return(
    <div className='firstBuyContainer'>
        <div className='containerBuyTickets'>
            <h3 className='headerBuy'> EVENTS TO BUY.</h3>

        {occasions.map((element =>{
        const {id,title} = element;

    return(
    <div key={id}>
        <div className='nameEventsTIckets'>
            <p className='nameOccasions'>{id}. {title}
            <button className='remove' onClick={() => removeOccasion(id)}>REMOVE</button></p>
        </div>   
    </div>
    
        )
    }))}
    <button className='buyBtn'>BUY: {occasions.length}</button><button className='deleteAll' onClick={()=>setOccasion([])}>DELETE ALL</button>
    </div>
</div>
    )
}


export default Buytickets;