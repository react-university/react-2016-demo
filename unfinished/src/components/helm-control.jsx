import React               from 'react';
import ShipInfo            from './ship-info';
import NavigationDashboard from './navigation-dashboard';
import WarpDriveControls   from './warp-drive-controls';

const HelmControl = (p) => {
  return <div className="helm">
    <div id="helm-header">
      <h1>Helm Control</h1>
    </div>
    <ShipInfo {...p}/>
    <NavigationDashboard ship={p.ship}/>
    <WarpDriveControls {...p} />
  </div>
}

export default HelmControl
