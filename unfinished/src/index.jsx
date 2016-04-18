import './index.scss';
import React      from 'react';
import ReactDOM   from 'react-dom';
import {Provider} from 'react-redux';
import store      from './store';
import routes     from './routes';
import Perf       from 'react-addons-perf';

if (process.env.NODE_ENV !== 'production') {
  window.Perf = Perf;
  window.Perf.start();
}

const app = <Provider store={store}>
  {routes}
</Provider>

ReactDOM.render(app, document.getElementById('app'));
