import React           from 'react';

const WarpDriveControls = (p) => {
  // Everyone knows Warp 10 is impossible...
  const isValidSpeed  = (speed) => 0 <= speed  && speed < 10;

  // Not very DRY but this is clearer for learning purposes
  const currentSpeed  = p.ship.speed;
  const increaseSpeed = () => {if (isValidSpeed(currentSpeed + 1)) p.updateSpeed(currentSpeed + 1)};
  const decreaseSpeed = () => {if (isValidSpeed(currentSpeed - 1)) p.updateSpeed(currentSpeed - 1)};

  return <div className="navigational-controls">
    <h2>Warp Drive</h2>
    <span>WARP:</span>
    <p>{currentSpeed}</p>
    <div className="arrow-controls">
      <button onClick={increaseSpeed}>&#11014;</button>
      <button onClick={decreaseSpeed}>&#11015;</button>
    </div>
    <div className="engage">
      <button onClick={p.engageWarpDrive}>Engage</button>
    </div>
  </div>
};

export default WarpDriveControls;
