import React           from 'react';
import {fromJS}        from 'immutable';
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
    super(props);
    this.state               = {ship: initialShipData};
    this.getShip             = this.getShip.bind(this);
    this.updateShip          = this.updateShip.bind(this);
    this.updateShipInfoKey   = this.updateShipInfoKey.bind(this);
    this.updateDestination   = this.updateDestination.bind(this);
    this.updateSpeed         = this.updateSpeed.bind(this);
    this.engageWarpDrive     = this.engageWarpDrive.bind(this);
    this.isShipAtDestination = this.isShipAtDestination.bind(this);
    this.updateShipPosition  = this.updateShipPosition.bind(this);
  }

  getShip() {
    return this.state.ship;
  }

  updateShip(key, value) {
    this.setState({ship: this.getShip().set(key, value)});
  }

  updateShipInfoKey(key, value) {
    const info = this.getShip().get('info');
    this.updateShip('info', info.set(key, value));
  }

  updateDestination(newDestination) {
    this.updateShip('destination', newDestination);
  }

  updateSpeed(newSpeed) {
    this.updateShip('speed', newSpeed);
  }

  engageWarpDrive() {
    this.props.clearIntervals();
    this.props.setInterval(this.updateShipPosition, 10);
  }

  updateShipPosition() {
    this.isShipAtDestination() ? this.haltShip() : this.moveShipToNextPosition();
  }

  isShipAtDestination() {
    return destinationReached(this.getShip().toJS());
  }

  haltShip() {
    this.props.clearIntervals();
  }

  moveShipToNextPosition() {
    const ship = this.getShip().toJS();
    const nextPosition = fromJS(nextPositionToDestination(ship));
    this.updateShip('position', nextPosition);
  }

  render() {
    return <div>
      <StarChart
        starData={starData}
        ship={this.getShip()}
        updateDestination={this.updateDestination}
      />
      <HelmControl
        starData={starData}
        ship={this.getShip()}
        updateDestination={this.updateDestination}
        updateShipInfoKey={this.updateShipInfoKey}
        updateSpeed={this.updateSpeed}
        engageWarpDrive={this.engageWarpDrive}
      />
    </div>
  }
}

export default IntervalWrapper(Game);
