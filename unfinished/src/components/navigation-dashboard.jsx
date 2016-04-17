import React     from 'react';
import {heading} from 'lib';

const NavigationDashboard = (p) => {
  const ship = p.ship
  const destinationName = ship.getIn(['destination', 'name']).toUpperCase();
  debugger;
  const posX = Math.round(ship.getIn(['position', 0]));
  const posY = Math.round(ship.getIn(['position', 1]));
  return <div className="navigation-dashboard">
    <h2>Navigation</h2>
    <p>Destination:</p>
    <p>{destinationName}</p>
    <p>Current Position:</p>
    <p>{posX}-MARK-{posY}</p>
    <p>Heading:</p>
    <p>{heading(ship.toJS())}-MARK-0</p>
  </div>
};

export default NavigationDashboard
