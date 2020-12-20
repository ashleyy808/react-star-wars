import React, { useState, useEffect } from 'react';
import { getStarShips } from '../services/sw-api';
import Card from './StarShipCard/StarShipCard';
import './Ships.css';

function Ships() {
  const [starShipData, setStarShipData] = useState([]);

  async function getAppData() {
    const data = await getStarShips();
    setStarShipData(data.results)
  }

  useEffect(() => {
    getAppData();
  }, []);

  return (
    <div>
      <header className="App-header">
        <h1>React Star Wars</h1>
      </header>
      <div className="ships">
          {starShipData.length > 0 ?
            starShipData.map((ship, i) => {
              console.log(ship)
              return (
                <Card
                  ship={ship}
                  name={ship.name}
                />
              )
            })
            : null}
        </div>

    </div>
  )
}

export default Ships;