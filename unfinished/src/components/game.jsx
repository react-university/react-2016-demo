import React           from 'react';
import StarChart       from './star-chart';
import {
  starData,
  initialShipData
} from 'lib';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ship: initialShipData};
  }

  render() {
    return <StarChart starData={starData} ship={this.state.ship}/>
  }
}

