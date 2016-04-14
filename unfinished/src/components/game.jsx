import React           from 'react';
import StarChart       from './star-chart';
import HelmControl     from './helm-control';
import {
  starData,
  initialShipData
} from 'lib';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ship: initialShipData};
    this.getShip           = this.getShip.bind(this);
    this.updateShip        = this.updateShip.bind(this);
    this.updateShipInfoKey = this.updateShipInfoKey.bind(this);
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

  render() {
    return <div>
      <StarChart starData={starData} ship={this.state.ship}/>
      <HelmControl ship={this.state.ship} updateShipInfoKey={this.updateShipInfoKey} />
    </div>
  }
}
