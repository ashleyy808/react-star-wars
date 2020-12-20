import React from 'react';
import { Link } from 'react-router-dom';
import './StarShipCard.css';

export default function Card({ ship, name }) {
  return (
    <div className="Card">
      <Link to={{ pathname: '/to', state: { ship: ship} }} > {name} </Link >
    </div>
  )
}
