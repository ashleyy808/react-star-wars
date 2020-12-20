import { useState, useEffect } from 'react';
import { getStarShips } from './services/sw-api';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import StarShipDetail from './Components/StarShipDetail/StarShipDetail';
import StarShipList from './Components/StarShipList/StarShipList';
import Card from './Components/StarShipCard/StarShipCard';
import Ships from './Components/Ships';
import SingleShip from './Components/SingleShip';
import './App.css';

function App() {
  const ShipsComponent = () => (<Ships />)
  const SingleShipComponent = () => (<SingleShip />)

  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={ShipsComponent} />
          <Route exact path="/to" component={SingleShip} />
        </div>
      </Router>
    </div>
  );
}

export default App;




