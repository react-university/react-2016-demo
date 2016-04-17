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
  return p.info.reduce((arr, v, k) => {
    arr.push(renderElement(v, k, p.updateShipInfoKey))
    return arr;
  }, []);
};

const renderElement = (value, key, updateShipInfoKey) => {
  const elementProps = {
    key: key,
    value: value || key,
    onEdit: updateShipInfoKey.bind(this, key)
  };
  return <EditableElement {...elementProps} />
};

export default ShipInfo;
