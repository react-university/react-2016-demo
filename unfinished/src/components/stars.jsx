import React from 'react';

class Stars extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const p = this.props;
    return <g>{p.starData.map((star, index) => renderStars(star, index, p.handleClick))}</g> // pass updateDestination
  }
}


const renderStars = (star, index, handleClick) => { //Update the arguments
  const circleAttr = {
    cx: star.position[0],
    cy: star.position[1],
    r: 2,
    className: 'star-circle'
  };
  const textAttr = {
    x: star.position[0] + 5,
    y: star.position[1] + 5,
    className: `star-name ${star.jurisdiction}`,
    onClick: handleClick.bind(null, star)// add the click handler to text props
  };
  return <g key={index}>
    <text {...textAttr}>{star.name}</text>
    <circle {...circleAttr}/>
  </g>
}

export default Stars;
