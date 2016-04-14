import React           from 'react';
import StarChart       from './star-chart';
import {
  starData
} from 'lib';

export default class Game extends React.Component {
  render() {
    return <StarChart starData={starData} />
  }
}
