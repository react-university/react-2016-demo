import React from 'react';

const IntervalWrapper = (Component) => {
  return class IntervalComponent extends React.Component {
    constructor(props) {
      super(props);
      this.setInterval = this.setInterval.bind(this);
      this.clearIntervals = this.clearIntervals.bind(this);
    }

    componentWillMount() {
      this.intervals = [];
    }

    componentWillUnmount() {
      this.clearIntervals();
    }

    setInterval() {
      this.intervals.push(setInterval.apply(null, arguments));
    }

    clearIntervals() {
      this.intervals.forEach(clearInterval);
      this.intervals = [];
    }

    render() {
      return <Component
        {...this.props}
        setInterval={this.setInterval}
        clearIntervals={this.clearIntervals}
      />
    }
  };
}

export default IntervalWrapper;
