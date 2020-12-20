import { useState, useEffect } from 'react';
import { getStarShips } from './services/sw-api';
import './App.css';

import StarShipDetail from './components/StarShipDetail/StarShipDetail';
import StarShipList from './components/StarShipList/StarShipList';




function App() {

  const[starShipData, setStarShipData] = useState({
    count: 0,
    next:null,
    previous: null,
    results:[]
  });

  async function getAppData() {
    const data = await getStarShips();
    setStarShipData(data)
  }

useEffect(() => {
  getAppData(); 
  console.log('effect'); 
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Star Wars</h1>
        <Switch location={location}>
                <Route exact path="/" render={ props =>
                  <StarShipList 
                    starships={this.state.starships} 
                    handleStarshipSelection={this.handleStarshipSelection} 
                    {...props}
                    />
                  }/>
        </Switch>
       
      </header>
    </div>
  );
}

export default App;



/*
let starShipsData, starshipsDetail;
const $cardsEl = $('#cards');
const $modal = $('#modal');
const $name = $('#name');

$cardsEl.on('click', 'article', handleClick);
init();
function init() {
  getData();
}

function getData(detailURL) {
  const url = detailURL ? detailURL : BASE_URL;
  $.ajax(url)
  .then(function(data) {
      if(detailURL) {
          starShipsDetail = data;
          render(true);
      } else {
          starShipsData = data;
          render();
      }
  }, function(error) {
      console.log('Error: ', error);
  });
}
function handleClick() {
  const url = this.dataset.url;
  getData(url);
}
function generateUI() {
  return starShipsData.results.map(function(starships) {
      return `
          <article data-url="${starships.url}" class="card flex-ctr outline">
              <h3>${starships.name}</h3>
          </article>`;
  });
}
function render(isDetail) {
  if(isDetail) {
      $sprite.attr({
          src: starShipsDetail.sprites.front_default,
          alt: starShipsData.name
      });
      $name.text(starShipsDetail.name);
      $modal.modal();
  } else {
      $cardsEl.html(generateUI())
  }






*/
