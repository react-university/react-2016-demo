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
    this.engageWarpDrive     = this.engageWarpDrive.bind(this);
    this.isShipAtDestination = this.isShipAtDestination.bind(this);
    this.updateShipPosition  = this.updateShipPosition.bind(this);
  }

  engageWarpDrive() {
    this.props.clearIntervals();
    this.props.setInterval(this.updateShipPosition, 10);
  }

  updateShipPosition() {
    this.isShipAtDestination() ? this.haltShip() : this.moveShipToNextPosition();
  }

  isShipAtDestination() {
    return destinationReached(this.props.ship.toJS());
  }

  haltShip() {
    this.props.clearIntervals();
  }

  moveShipToNextPosition() {
    const ship = this.props.ship.toJS();
    const nextPosition = fromJS(nextPositionToDestination(ship));
    this.props.updatePosition(nextPosition);
  }

  render() {
    return <div>
      <StarChart
        starData={starData}
        ship={this.props.ship}
        updateDestination={this.props.updateDestination}
      />
      <HelmControl
        starData={starData}
        ship={this.props.ship}
        updateDestination={this.props.updateDestination}
        updateShipInfoKey={this.props.updateShipInfoKey}
        updateSpeed={this.props.updateSpeed}
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
