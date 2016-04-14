import React               from 'react';
import ShipInfo            from './ship-info';

const HelmControl = (p) => {
  return <div className="helm">
    <div id="helm-header">
      <h1>Helm Control</h1>
    </div>
    <ShipInfo {...p}/>
  </div>
}

export default HelmControl;
