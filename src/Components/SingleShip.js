import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import StarShipDetail from './StarShipDetail/StarShipDetail';

function SingleShip() {
  const data = useLocation();

  return (
    <div>
      <header className="App-header">
        <h1>React Star Wars</h1>
      </header>
      {data != null ?
        <StarShipDetail
          props={data.state.ship}
        />
        : null
      }
    </div>
  )
}

export default SingleShip;