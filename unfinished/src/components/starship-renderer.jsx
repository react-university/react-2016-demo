import React                     from 'react';
import {renderShipImageAsString} from 'lib';

const StarshipRenderer = (p) => {
  // React does not support SVG Image elements. We need to do this ourselves
  return <g dangerouslySetInnerHTML={renderImage(p.ship)}/>
};

const renderImage = (ship) => {
  const imageInText = renderShipImageAsString(ship);
  return {__html: imageInText};
};

export default StarshipRenderer;
