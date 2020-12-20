import React from 'react';
import {Link} from 'react-router-dom';
import './StarShipDetail.css';

function StarShipDetail({props}) {

    let pilotList = [];
    // for (var pilot of props.pilots) {
    //     pilotList.push(pilot.name)
    // };

    const pilotString = pilotList.join(', ');
    console.log("hello")
    console.log(props)

    return (
        <div 
            className='StarShipDetail'
            style={{  
                backgroundImage: `url("${props.shipBackground}")`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
        >
            <div className='StarShipDetail-info'>
                {/* <h1>{props.match.params.id}</h1> */}
                <p>Model: {props.model}</p>
                <p>Manufacturer: {props.manufacturer}</p>
                <p>Cost: {props.cost_in_credits} credits</p>
                <p>Max Atmosphering Speed: {props.max_atmosphering_speed}</p>
                {/* <p>Pilots: {props.pilots.length > 0 ? pilotString : 'No pilots'}</p> */}
                {/* <Link to="/">RETURN TO ALL STARSHIPS</Link> */}
            </div>
            </div>

    );
}

export default StarShipDetail;