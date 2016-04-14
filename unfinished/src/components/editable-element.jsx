import React from 'react';

export default class EditableElement extends React.Component {

  constructor(props) {
    super(props);
    this.state          = {editing: false};
    this.finishEdit     = this.finishEdit.bind(this);
    this.checkEnter     = this.checkEnter.bind(this);
    this.enterEditState = this.enterEditState.bind(this);
  }

  renderInputField() {
    const inputProps = {
      type: 'text',
      autoFocus: true,
      onBlur: this.finishEdit,
      onKeyPress: this.checkEnter
    };
    return <input {...inputProps} />
  }

  renderValue() {
    return <p onClick={this.enterEditState}>{this.props.value}</p>
  }

  enterEditState() {
    this.setState({editing: true});
  }

  checkEnter(e) {
    if (e.key === 'Enter') this.finishEdit(e);
  }

  finishEdit(e) {
    e.preventDefault();
    this.props.onEdit(e.target.value);
    this.setState({editing: false});
  }

  render() {
    return this.state.editing ? this.renderInputField() : this.renderValue();
  }
}
