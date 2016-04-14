import React     from 'react';
import {heading} from 'lib';

const NavigationDashboard = (p) => {
  const ship = p.ship
  const destination = ship.destination;
  const posX = Math.round(ship.position[0]);
  const posY = Math.round(ship.position[1]);
  return <div className="navigation-dashboard">
    <h2>Navigation</h2>
    <p>Destination:</p>
    <p>{destination.name.toUpperCase()}</p>
    <p>Current Position:</p>
    <p>{posX}-MARK-{posY}</p>
    <p>Heading:</p>
    <p>{heading(ship)}-MARK-0</p>
  </div>
};

export default NavigationDashboard
