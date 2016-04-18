import React                from 'react';
import {connect}            from 'react-redux';
import {fromJS}             from 'immutable';
import * as actionCreators  from '../action-creators';
import StarChart            from './star-chart';
import HelmControl          from './helm-control';
import IntervalWrapper      from './interval-wrapper';
import {
  starData,
  destinationReached,
  nextPositionToDestination
} from 'lib';

class Game extends React.Component {

  constructor(props) {
    super(props);
    this.updateShipInfoKey   = this.updateShipInfoKey.bind(this);
    this.updateDestination   = this.updateDestination.bind(this);
    this.updateSpeed         = this.updateSpeed.bind(this);
    this.engageWarpDrive     = this.engageWarpDrive.bind(this);
    this.isShipAtDestination = this.isShipAtDestination.bind(this);
    this.updateShipPosition  = this.updateShipPosition.bind(this);
  }

  getShip() {
    return this.props.ship;
  }


  updateShipInfoKey(key, value) {
    const info = this.getShip().get('info');
    this.props.updateShip('info', info.set(key, value));
  }

  updateDestination(newDestination) {
    this.props.updateShip('destination', newDestination);
  }

  updateSpeed(newSpeed) {
    this.props.updateShip('speed', newSpeed);
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
    this.props.updateShip('position', nextPosition);
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

const mapStateToProps = (state) => {
  return {
    ship: state
  }
};

export default connect(mapStateToProps, actionCreators)(IntervalWrapper(Game));
