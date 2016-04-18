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

const Game = (p) => {
  return <div>
    <StarChart
      starData={starData}
      ship={p.ship}
      updateDestination={p.updateDestination}
    />
    <HelmControl
      starData={starData}
      ship={p.ship}
      updateDestination={p.updateDestination}
      updateShipInfoKey={p.updateShipInfoKey}
      updateSpeed={p.updateSpeed}
      engageWarpDrive={p.engageWarpDrive}
    />
  </div>
}

const mapStateToProps = (state) => {
  return {
    ship: state
  }
};

export default connect(mapStateToProps, actionCreators)(Game);
