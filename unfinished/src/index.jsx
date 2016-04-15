import './index.scss';
import React    from 'react';
import ReactDOM from 'react-dom';
import Game     from './components/game';
import Perf     from 'react-addons-perf';

if (process.env.NODE_ENV !== 'production') {
  window.Perf = Perf;
  window.Perf.start();
}

ReactDOM.render(<Game />, document.getElementById('app'));
