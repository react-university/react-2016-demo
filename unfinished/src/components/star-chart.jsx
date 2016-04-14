import React            from 'react';
import Stars            from './stars';

const StarChart = (p) => {
  return <div>
    <div className="star-chart">
      <svg width="1000" height="600">
        <Stars starData={p.starData} />
      </svg>
    </div>
  </div>
};

export default StarChart;
