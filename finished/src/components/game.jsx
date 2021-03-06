import React           from 'react';
import StarChart       from './star-chart';
import HelmControl     from './helm-control';
import IntervalWrapper from './interval-wrapper';
import {
  starData,
  initialShipData,
  destinationReached,
  nextPositionToDestination
} from 'lib';

class Game extends React.Component {

  constructor(props) {
    super(props)
    this.state               = {ship: initialShipData};
    this.updateShip          = this.updateShip.bind(this);
    this.updateShipInfoKey   = this.updateShipInfoKey.bind(this);
    this.updateDestination   = this.updateDestination.bind(this);
    this.updateSpeed         = this.updateSpeed.bind(this);
    this.engageWarpDrive     = this.engageWarpDrive.bind(this);
    this.isShipAtDestination = this.isShipAtDestination.bind(this);
    this.updateShipPosition  = this.updateShipPosition.bind(this);
  }

  getShip() {
    return Object.assign({}, this.state.ship);
  }

  updateShip(key, value) {
    const ship = this.getShip();
    ship[key] = value;
    this.setState({ship: ship});
  }

  updateShipInfoKey(key, value) {
    const info = this.getShip().info;
    info[key] = value;
    this.updateShip('info', info);
  }

  updateDestination(newDestination) {
    this.updateShip('destination', newDestination);
  }

  updateSpeed(newSpeed) {
    this.updateShip('speed', newSpeed);
  }

  isShipAtDestination() {
    return destinationReached(this.getShip());
  }

  haltShip() {
    this.props.clearIntervals();
  }

  moveShipToNextPosition() {
    this.updateShip('position', nextPositionToDestination(this.getShip()));
  }

  updateShipPosition() {
    this.isShipAtDestination() ? this.haltShip() : this.moveShipToNextPosition();
  }

  engageWarpDrive() {
    this.props.clearIntervals();
    this.props.setInterval(this.updateShipPosition, 10);
  }

  render() {
    const ship = this.getShip();
    return <div>
      <StarChart
        starData={starData}
        ship={ship}
        updateDestination={this.updateDestination}/>
      <HelmControl
        starData={starData}
        ship={ship}
        updateDestination={this.updateDestination}
        updateShipInfoKey={this.updateShipInfoKey}
        updateSpeed={this.updateSpeed}
        engageWarpDrive={this.engageWarpDrive}/>
    </div>
  }
}

export default IntervalWrapper(Game);
