import React           from 'react';
import EditableElement from './editable-element';

const ShipInfo = (p) => {
  return <div className="ship-info">
    <h2>Ship Info</h2>
    {renderElements(p)}
  </div>
};

const renderElements = (p) => {
  const keys = Object.keys(p.ship.info);
  return keys.map((infoKey, index) => renderElement(infoKey, index, p));
};

const renderElement = (infoKey, index, p) => {
  const elementProps = {
    key: index,
    value: p.ship.info[infoKey] || infoKey,
    onEdit: p.updateShipInfoKey.bind(this, infoKey)
  };
  return <EditableElement {...elementProps} />
};

export default ShipInfo;
