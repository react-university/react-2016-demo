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
  const posX = star.getIn(['position', 0]);
  const posY = star.getIn(['position', 1]);
  const circleAttr = {
    cx: posX,
    cy: posY,
    r: 2,
    className: 'star-circle'
  };
  const textAttr = {
    x: posX + 5,
    y: posY + 5,
    className: `star-name ${star.get('jurisdiction')}`,
    onClick: handleClick.bind(null, star)// add the click handler to text props
  };
  return <g key={index}>
    <text {...textAttr}>{star.get('name')}</text>
    <circle {...circleAttr}/>
  </g>
}

export default Stars;
