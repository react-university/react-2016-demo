import React            from 'react';
import Stars            from './stars';
import StarshipRenderer from './starship-renderer';

const StarChart = (p) => {
  return <div>
    <div className="star-chart">
      <svg width="1000" height="600">
        <Stars starData={p.starData} />
        <StarshipRenderer ship={p.ship}/>
      </svg>
    </div>
  </div>
};

export default StarChart;
