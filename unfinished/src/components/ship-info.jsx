import React           from 'react';
import shallowCompare  from 'react-addons-shallow-compare';
import EditableElement from './editable-element';

class ShipInfo extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState)
  }

  render() {
    return <div className="ship-info">
      <h2>Ship Info</h2>
      {renderElements(this.props)}
    </div>
  }
}

const renderElements = (p) => {
  const keys = Object.keys(p.info);
  return keys.map((infoKey, index) => renderElement(infoKey, index, p));
};

const renderElement = (infoKey, index, p) => {
  const elementProps = {
    key: index,
    value: p.info[infoKey] || infoKey,
    onEdit: p.updateShipInfoKey.bind(this, infoKey)
  };
  return <EditableElement {...elementProps} />
};

export default ShipInfo;
