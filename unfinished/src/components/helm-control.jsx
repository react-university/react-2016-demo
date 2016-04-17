import React               from 'react';
import shallowCompare      from 'react-addons-shallow-compare';
import ShipInfo            from './ship-info';
import NavigationDashboard from './navigation-dashboard';
import WarpDriveControls   from './warp-drive-controls';
import CourseControl       from './course-control';

class HelmControl extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    const p = this.props;
    return <div className="helm">
      <div id="helm-header">
        <h1>Helm Control</h1>
      </div>
      <ShipInfo info={p.ship.get('info')} updateShipInfoKey={p.updateShipInfoKey}/>
      <NavigationDashboard ship={p.ship}/>
      <CourseControl {...p} />
      <WarpDriveControls
        speed={p.ship.get('speed')}
        updateSpeed={p.updateSpeed}
        engageWarpDrive={p.engageWarpDrive}
      />
    </div>
  }
}

export default HelmControl;
